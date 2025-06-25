package server

import (
	"context"
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
