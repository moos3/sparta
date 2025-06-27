package server

import (
	"context"
	"database/sql"
	"fmt"
	"golang.org/x/crypto/bcrypt"
	"google.golang.org/protobuf/types/known/timestamppb"
	"log"
	"strings"
	"time"

	"github.com/google/uuid"
	"github.com/moos3/sparta/internal/auth"
	"github.com/moos3/sparta/internal/db"
	"github.com/moos3/sparta/internal/email"
	"github.com/moos3/sparta/internal/interfaces"
	"github.com/moos3/sparta/internal/scoring"
	pb "github.com/moos3/sparta/proto"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/encoding/protojson"
)

type Server struct {
	pb.UnimplementedUserServiceServer
	pb.UnimplementedScanServiceServer
	db      db.Database
	auth    *auth.AuthService
	email   *email.Service
	plugins map[string]interfaces.GenericPlugin
}

// New creates a new Server instance with the provided dependencies
func New(db db.Database, auth *auth.AuthService, email *email.Service, plugins map[string]interfaces.GenericPlugin) *Server {
	return &Server{
		db:      db,
		auth:    auth,
		email:   email,
		plugins: plugins,
	}
}

// --- API Key Management Methods (MOVED FROM AUTH SERVICE) ---
func (s *Server) CreateAPIKey(ctx context.Context, req *pb.CreateAPIKeyRequest) (*pb.CreateAPIKeyResponse, error) {
	// Only admin can create API keys for other users.
	// Users can create API keys for themselves.
	authUserID, err := s.getAuthUserID(ctx)
	if err != nil {
		return nil, status.Error(codes.Unauthenticated, "missing user ID in context")
	}
	isAdmin := s.isAdmin(ctx)

	if !isAdmin && authUserID != req.UserId {
		return nil, status.Error(codes.PermissionDenied, "cannot create API key for another user")
	}
	// Only admin can create API keys with 'admin' role
	if req.Role == "admin" && !isAdmin {
		return nil, status.Error(codes.PermissionDenied, "only administrators can create admin API keys")
	}
	// Call helper from AuthService
	apiKey, expiresAt, err := s.auth.CreateAPIKeyHelper(req.UserId, req.Role, req.IsServiceKey)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to create API key: %v", err)
	}
	return &pb.CreateAPIKeyResponse{
		ApiKey:       apiKey,
		Role:         req.Role,
		IsServiceKey: req.IsServiceKey,
		ExpiresAt:    timestamppb.New(expiresAt),
	}, nil
}

func (s *Server) RotateAPIKey(ctx context.Context, req *pb.RotateAPIKeyRequest) (*pb.RotateAPIKeyResponse, error) {
	authUserID, err := s.getAuthUserID(ctx)
	if err != nil {
		return nil, status.Error(codes.Internal, "missing user ID in context")
	}

	// Verify API key ownership or admin status
	userKeyID, _, _, _, _, _, _, _, err := s.auth.GetAPIKey(req.ApiKey)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "invalid API key: %v", err)
	}
	if !s.isAdmin(ctx) && authUserID != userKeyID {
		return nil, status.Error(codes.PermissionDenied, "admin or key owner required")
	}

	// Call helper from AuthService
	newAPIKey, newExpiresAt, err := s.auth.RotateAPIKeyHelper(req.ApiKey)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to rotate API key: %v", err)
	}
	return &pb.RotateAPIKeyResponse{
		NewApiKey: newAPIKey,
		ExpiresAt: timestamppb.New(newExpiresAt),
	}, nil
}

func (s *Server) ActivateAPIKey(ctx context.Context, req *pb.ActivateAPIKeyRequest) (*pb.ActivateAPIKeyResponse, error) {
	authUserID, err := s.getAuthUserID(ctx)
	if err != nil {
		return nil, status.Error(codes.Internal, "missing user ID in context")
	}

	// Verify API key ownership or admin status
	userKeyID, _, _, _, _, _, _, _, err := s.auth.GetAPIKey(req.ApiKey)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "invalid API key: %v", err)
	}
	if !s.isAdmin(ctx) && authUserID != userKeyID {
		return nil, status.Error(codes.PermissionDenied, "admin or key owner required")
	}

	// Call helper from AuthService
	err = s.auth.ActivateAPIKeyHelper(req.ApiKey)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to activate API key: %v", err)
	}
	return &pb.ActivateAPIKeyResponse{}, nil
}

func (s *Server) DeactivateAPIKey(ctx context.Context, req *pb.DeactivateAPIKeyRequest) (*pb.DeactivateAPIKeyResponse, error) {
	authUserID, err := s.getAuthUserID(ctx)
	if err != nil {
		return nil, status.Error(codes.Internal, "missing user ID in context")
	}

	// Verify API key ownership or admin status
	userKeyID, _, _, _, _, _, _, _, err := s.auth.GetAPIKey(req.ApiKey)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "invalid API key: %v", err)
	}
	if !s.isAdmin(ctx) && authUserID != userKeyID {
		return nil, status.Error(codes.PermissionDenied, "admin or key owner required")
	}

	// Only admin can set deactivation message or deactivate keys they don't own.
	if !s.isAdmin(ctx) && req.DeactivationMessage != "" {
		return nil, status.Error(codes.PermissionDenied, "only admin can set deactivation message or deactivate keys they don't own")
	}

	// Call helper from AuthService
	err = s.auth.DeactivateAPIKeyHelper(req.ApiKey, req.DeactivationMessage)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to deactivate API key: %v", err)
	}
	return &pb.DeactivateAPIKeyResponse{}, nil
}

func (s *Server) ListAPIKeys(ctx context.Context, req *pb.ListAPIKeysRequest) (*pb.ListAPIKeysResponse, error) {
	authUserID, err := s.getAuthUserID(ctx)
	if err != nil {
		return nil, status.Error(codes.Internal, "missing user ID in context")
	}

	// Admin can list any user's API keys. Regular user can only list their own.
	if !s.isAdmin(ctx) && authUserID != req.UserId {
		return nil, status.Error(codes.PermissionDenied, "admin or self-access required")
	}

	// Call helper from AuthService
	apiKeys, err := s.auth.ListAPIKeysHelper(req.UserId)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to list API keys: %v", err)
	}
	pbAPIKeys := make([]*pb.APIKey, len(apiKeys))
	for i, k := range apiKeys {
		var expiresAt *timestamppb.Timestamp
		if !k.ExpiresAt.IsZero() {
			expiresAt = timestamppb.New(k.ExpiresAt)
		}
		pbAPIKeys[i] = &pb.APIKey{
			ApiKey:              k.APIKey,
			UserId:              k.UserID,
			Role:                k.Role,
			IsServiceKey:        k.IsServiceKey,
			IsActive:            k.IsActive,
			DeactivationMessage: k.DeactivationMessage,
			CreatedAt:           timestamppb.New(k.CreatedAt),
			ExpiresAt:           expiresAt,
		}
	}
	return &pb.ListAPIKeysResponse{ApiKeys: pbAPIKeys}, nil
}

// --- End API Key Management Methods ---

// --- Password Management (NEW) ---

func (s *Server) ChangePassword(ctx context.Context, req *pb.ChangePasswordRequest) (*pb.ChangePasswordResponse, error) {
	authUserID, err := s.getAuthUserID(ctx)
	if err != nil {
		return nil, status.Error(codes.Unauthenticated, "missing user ID in context")
	}

	// A user can only change their own password. Admin can use UpdateUser for other users.
	if authUserID != req.UserId {
		return nil, status.Error(codes.PermissionDenied, "cannot change password for another user")
	}

	// Verify old password
	var storedPasswordHash string
	query := `SELECT password FROM users WHERE id = $1`
	err = s.db.QueryRow(query, req.UserId).Scan(&storedPasswordHash)
	if err == sql.ErrNoRows {
		return nil, status.Error(codes.NotFound, "user not found")
	}
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to retrieve password hash: %v", err)
	}

	if err := bcrypt.CompareHashAndPassword([]byte(storedPasswordHash), []byte(req.OldPassword)); err != nil {
		return nil, status.Error(codes.Unauthenticated, "incorrect old password")
	}

	// Hash new password
	newPasswordHash, err := bcrypt.GenerateFromPassword([]byte(req.NewPassword), bcrypt.DefaultCost)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to hash new password: %v", err)
	}

	// Update password in database
	updateQuery := `UPDATE users SET password = $1 WHERE id = $2`
	_, err = s.db.Exec(updateQuery, newPasswordHash, req.UserId)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to update password: %v", err)
	}

	return &pb.ChangePasswordResponse{}, nil
}

// --- End Password Management ---

// --- Helper Functions (used by AuthService and this Server) ---
func (s *Server) isAdmin(ctx context.Context) bool {
	role, ok := ctx.Value("role").(string)
	return ok && role == "admin"
}

func (s *Server) getAuthUserID(ctx context.Context) (string, error) {
	userID, ok := ctx.Value("user_id").(string)
	if !ok {
		return "", status.Error(codes.Unauthenticated, "missing user ID in context")
	}
	return userID, nil
}

// checkDNSScanID remains the same, but it's now private (lowercase) as it's a helper for other methods not exposed in UserService.
// This function was originally in internal/server/bak/dns.go which is no longer the active Server implementation.
// So, I need to assume it's moved to server.go if needed.
// It's not directly part of the UserService interface, but used by scan plugins.
func (s *Server) checkDNSScanID(dnsScanID string) (bool, error) {
	if dnsScanID == "" {
		return false, fmt.Errorf("DNS scan ID is empty")
	}
	var exists bool
	query := "SELECT EXISTS (SELECT 1 FROM dns_scan_results WHERE id = $1)"
	err := s.db.QueryRow(query, dnsScanID).Scan(&exists)
	if err != nil {
		return false, fmt.Errorf("failed to check DNS scan ID: %w", err)
	}
	return exists, nil
}

// CalculateRiskScore implements the gRPC method
func (s *Server) CalculateRiskScore(ctx context.Context, req *pb.CalculateRiskScoreRequest) (*pb.CalculateRiskScoreResponse, error) {
	domain := strings.TrimSpace(strings.ToLower(req.GetDomain()))
	if domain == "" {
		return nil, status.Error(codes.InvalidArgument, "domain is required")
	}

	// Fetch latest scan results
	results := &scoring.DomainScanResults{}
	plugins := []struct {
		table string
		setFn func([]byte, *scoring.DomainScanResults) error
	}{
		{
			"dns_scan_results",
			func(data []byte, results *scoring.DomainScanResults) error {
				var r pb.DNSSecurityResult
				if err := protojson.Unmarshal(data, &r); err != nil {
					return err
				}
				results.DNS = &r
				return nil
			},
		},
		{
			"tls_scan_results",
			func(data []byte, results *scoring.DomainScanResults) error {
				var r pb.TLSSecurityResult
				if err := protojson.Unmarshal(data, &r); err != nil {
					return err
				}
				results.TLS = &r
				return nil
			},
		},
		{
			"crtsh_scan_results",
			func(data []byte, results *scoring.DomainScanResults) error {
				var r pb.CrtShSecurityResult
				if err := protojson.Unmarshal(data, &r); err != nil {
					return err
				}
				results.CrtSh = &r
				return nil
			},
		},
		{
			"chaos_scan_results",
			func(data []byte, results *scoring.DomainScanResults) error {
				var r pb.ChaosSecurityResult
				if err := protojson.Unmarshal(data, &r); err != nil {
					return err
				}
				results.Chaos = &r
				return nil
			},
		},
		{
			"shodan_scan_results",
			func(data []byte, results *scoring.DomainScanResults) error {
				var r pb.ShodanSecurityResult
				if err := protojson.Unmarshal(data, &r); err != nil {
					return err
				}
				results.Shodan = &r
				return nil
			},
		},
		{
			"otx_scan_results",
			func(data []byte, results *scoring.DomainScanResults) error {
				var r pb.OTXSecurityResult
				if err := protojson.Unmarshal(data, &r); err != nil {
					return err
				}
				results.OTX = &r
				return nil
			},
		},
		{
			"whois_scan_results",
			func(data []byte, results *scoring.DomainScanResults) error {
				var r pb.WhoisSecurityResult
				if err := protojson.Unmarshal(data, &r); err != nil {
					return err
				}
				results.Whois = &r
				return nil
			},
		},
		{
			"abusech_scan_results",
			func(data []byte, results *scoring.DomainScanResults) error {
				var r pb.AbuseChSecurityResult
				if err := protojson.Unmarshal(data, &r); err != nil {
					return err
				}
				results.AbuseCh = &r
				return nil
			},
		},
		{
			"isc_scan_results",
			func(data []byte, results *scoring.DomainScanResults) error {
				var r pb.ISCSecurityResult
				if err := protojson.Unmarshal(data, &r); err != nil {
					return err
				}
				results.ISC = &r
				return nil
			},
		},
	}

	for _, p := range plugins {
		query := `SELECT result FROM ` + p.table + ` WHERE domain = $1 ORDER BY created_at DESC LIMIT 1`
		var resultJSON []byte
		err := s.db.QueryRow(query, domain).Scan(&resultJSON)
		if err != nil {
			log.Printf("Failed to fetch %s result for %s: %v", p.table, domain, err)
			continue
		}
		if err := p.setFn(resultJSON, results); err != nil {
			log.Printf("Failed to deserialize %s for %s: %v", p.table, domain, err)
		}
	}

	risk := scoring.CalculateRiskScore(results)

	// Store in risk_scores table
	id := uuid.New().String()
	query := `INSERT INTO risk_scores (id, domain, score, risk_tier, created_at) 
	          VALUES ($1, $2, $3, $4, $5)`
	_, err := s.db.Exec(query, id, domain, risk.Score, risk.RiskTier, time.Now())
	if err != nil {
		log.Printf("Failed to store risk score for %s: %v", domain, err)
	}

	return &pb.CalculateRiskScoreResponse{
		Score:    int32(risk.Score),
		RiskTier: risk.RiskTier,
	}, nil
}
