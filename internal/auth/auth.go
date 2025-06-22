// internal/auth/auth.go
package auth

import (
	"context"
	"crypto/rand"
	"crypto/sha256"
	"database/sql"
	"encoding/hex"
	"fmt"
	"google.golang.org/grpc/status"
	"log"
	"time"

	"github.com/golang-jwt/jwt/v4"
	"github.com/google/uuid"
	"github.com/moos3/sparta/internal/config"
	"github.com/moos3/sparta/internal/db"
	"github.com/moos3/sparta/internal/email"
	pb "github.com/moos3/sparta/proto"
	"golang.org/x/crypto/bcrypt"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type JWTManager struct {
	secret string
}

func NewJWTManager(secret string) *JWTManager {
	return &JWTManager{secret: secret}
}

func (j *JWTManager) Generate(id, email, role string, isService bool) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"id":         id,
		"email":      email,
		"role":       role,
		"is_service": isService,
		"exp":        time.Now().Add(time.Hour * 24).Unix(),
	})
	return token.SignedString([]byte(j.secret))
}

type User struct {
	ID        string
	FirstName string
	LastName  string
	Email     string
	IsAdmin   bool
	CreatedAt time.Time
}

type APIKey struct {
	APIKey              string
	UserID              string
	Role                string
	IsServiceKey        bool
	IsActive            bool
	DeactivationMessage string
	CreatedAt           time.Time
	ExpiresAt           time.Time
}

type Invitation struct {
	ID        string
	Email     string
	InviterID string
	IsAdmin   bool
	Token     string
	ExpiresAt time.Time
	CreatedAt time.Time
}

type AuthService struct {
	db     db.Database
	jwt    *JWTManager
	casbin *CasbinEnforcer
	email  *email.Service
	config *config.Config
	pb.UnimplementedAuthServiceServer
}

func New(db db.Database, cfg *config.Config, emailService *email.Service) (*AuthService, error) {
	jwtManager := NewJWTManager(cfg.Auth.Secret)
	casbinEnforcer, err := NewCasbinEnforcer()
	if err != nil {
		return nil, fmt.Errorf("failed to initialize casbin: %v", err)
	}
	return &AuthService{
		db:     db,
		jwt:    jwtManager,
		casbin: casbinEnforcer,
		email:  emailService,
		config: cfg,
	}, nil
}

func (s *AuthService) GenerateAPIKey() (string, error) {
	b := make([]byte, 32)
	_, err := rand.Read(b)
	if err != nil {
		return "", err
	}
	hash := sha256.Sum256(b)
	return hex.EncodeToString(hash[:]), nil
}

func (s *AuthService) GetAPIKey(key string) (string, string, bool, bool, string, bool, time.Time, time.Time, error) {
	var userID, keyVal, role, deactivationMessage string
	var isAdmin, isServiceKey, isActive bool
	var createdAt, expiresAt time.Time
	query := `
		SELECT api_keys.user_id, api_keys.key, api_keys.role, api_keys.is_service_key, api_keys.is_active,
		       api_keys.deactivation_message, api_keys.created_at, api_keys.expires_at, users.is_admin
		FROM api_keys
		JOIN users ON api_keys.user_id = users.id
		WHERE api_keys.key = $1
	`
	err := s.db.QueryRow(query, key).Scan(&userID, &keyVal, &role, &isServiceKey, &isActive, &deactivationMessage, &createdAt, &expiresAt, &isAdmin)
	if err == sql.ErrNoRows {
		return "", "", false, false, "", false, time.Time{}, time.Time{}, nil
	}
	if err != nil {
		return "", "", false, false, "", false, time.Time{}, time.Time{}, fmt.Errorf("failed to get API key: %v", err)
	}
	return userID, keyVal, isAdmin, isServiceKey, role, isActive, createdAt, expiresAt, nil
}

func (s *AuthService) VerifyUser(email, password string) (string, string, string, bool, time.Time, error) {
	var id, firstName, lastName, storedPassword string
	var isAdmin bool
	var createdAt time.Time
	query := `
		SELECT id, first_name, last_name, password, is_admin, created_at
		FROM users
		WHERE email = $1
	`
	err := s.db.QueryRow(query, email).Scan(&id, &firstName, &lastName, &storedPassword, &isAdmin, &createdAt)
	if err == sql.ErrNoRows {
		return "", "", "", false, time.Time{}, fmt.Errorf("invalid email or password")
	}
	if err != nil {
		return "", "", "", false, time.Time{}, fmt.Errorf("failed to verify user: %v", err)
	}
	if err := bcrypt.CompareHashAndPassword([]byte(storedPassword), []byte(password)); err != nil {
		return "", "", "", false, time.Time{}, fmt.Errorf("invalid email or password")
	}
	return id, firstName, lastName, isAdmin, createdAt, nil
}

func (s *AuthService) AuthInterceptor(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
	if info.FullMethod == "/service.AuthService/Login" || info.FullMethod == "/service.AuthService/ValidateInvite" {
		return handler(ctx, req)
	}
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return nil, status.Error(codes.Unauthenticated, "missing metadata")
	}
	apiKeys := md.Get("x-api-key")
	if len(apiKeys) == 0 {
		return nil, status.Error(codes.Unauthenticated, "missing API key")
	}
	userID, _, isAdmin, isServiceKey, role, isActive, _, expiresAt, err := s.GetAPIKey(apiKeys[0])
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to verify API key: %v", err)
	}
	if userID == "" {
		return nil, status.Error(codes.Unauthenticated, "invalid API key")
	}
	if !isActive {
		return nil, status.Error(codes.Unauthenticated, "API key is deactivated")
	}
	if !expiresAt.IsZero() && time.Now().After(expiresAt) {
		return nil, status.Error(codes.Unauthenticated, "API key has expired")
	}
	if !s.casbin.Authorize(role, info.FullMethod, "*") {
		return nil, status.Error(codes.PermissionDenied, "insufficient permissions")
	}
	newCtx := context.WithValue(ctx, "user_id", userID)
	newCtx = context.WithValue(newCtx, "role", role)
	newCtx = context.WithValue(newCtx, "is_admin", isAdmin)
	newCtx = context.WithValue(newCtx, "is_service_key", isServiceKey)
	return handler(newCtx, req)
}

func (s *AuthService) Login(ctx context.Context, req *pb.LoginRequest) (*pb.LoginResponse, error) {
	id, firstName, lastName, isAdmin, _, err := s.VerifyUser(req.Email, req.Password)
	if err != nil {
		return nil, status.Errorf(codes.Unauthenticated, "authentication failed: %v", err)
	}
	role := "user"
	if isAdmin {
		role = "admin"
	}
	token, err := s.jwt.Generate(id, req.Email, role, false)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to generate token: %v", err)
	}
	return &pb.LoginResponse{
		UserId:    id,
		FirstName: firstName,
		LastName:  lastName,
		IsAdmin:   isAdmin,
		Token:     token,
	}, nil
}

func (s *AuthService) CreateUser(ctx context.Context, req *pb.CreateUserRequest) (*pb.CreateUserResponse, error) {
	role, ok := ctx.Value("role").(string)
	if !ok || role != "admin" {
		return nil, status.Error(codes.PermissionDenied, "admin role required")
	}
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to hash password: %v", err)
	}
	userID := uuid.New().String()
	query := `
		INSERT INTO users (id, first_name, last_name, email, password, is_admin, created_at)
		VALUES ($1, $2, $3, $4, $5, $6, $7)
	`
	_, err = s.db.Exec(query, userID, req.FirstName, req.LastName, req.Email, hashedPassword, req.IsAdmin, time.Now())
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to create user: %v", err)
	}
	if err := s.email.SendWelcomeEmail(req.Email, req.FirstName); err != nil {
		return nil, status.Errorf(codes.Internal, "failed to send welcome email: %v", err)
	}
	return &pb.CreateUserResponse{UserId: userID}, nil
}

func (s *AuthService) GetUser(ctx context.Context, req *pb.GetUserRequest) (*pb.GetUserResponse, error) {
	role, ok := ctx.Value("role").(string)
	userID, ok2 := ctx.Value("user_id").(string)
	if !ok || !ok2 || (role != "admin" && userID != req.UserId) {
		return nil, status.Error(codes.PermissionDenied, "admin or self required")
	}
	var id, firstName, lastName, email string
	var isAdmin bool
	var createdAt time.Time
	query := `
		SELECT id, first_name, last_name, email, is_admin, created_at
		FROM users
		WHERE id = $1
	`
	err := s.db.QueryRow(query, req.UserId).Scan(&id, &firstName, &lastName, &email, &isAdmin, &createdAt)
	if err == sql.ErrNoRows {
		return nil, status.Error(codes.NotFound, "user not found")
	}
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to get user: %v", err)
	}
	return &pb.GetUserResponse{
		UserId:    id,
		FirstName: firstName,
		LastName:  lastName,
		Email:     email,
		IsAdmin:   isAdmin,
		CreatedAt: timestamppb.New(createdAt),
	}, nil
}

func (s *AuthService) UpdateUser(ctx context.Context, req *pb.UpdateUserRequest) (*pb.UpdateUserResponse, error) {
	role, ok := ctx.Value("role").(string)
	userID, ok2 := ctx.Value("user_id").(string)
	if !ok || !ok2 || (role != "admin" && userID != req.UserId) {
		return nil, status.Error(codes.PermissionDenied, "admin or self required")
	}
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to hash password: %v", err)
	}
	query := `
		UPDATE users
		SET first_name = $1, last_name = $2, email = $3, password = $4
		WHERE id = $5
	`
	_, err = s.db.Exec(query, req.FirstName, req.LastName, req.Email, hashedPassword, req.UserId)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to update user: %v", err)
	}
	return &pb.UpdateUserResponse{}, nil
}

func (s *AuthService) DeleteUser(ctx context.Context, req *pb.DeleteUserRequest) (*pb.DeleteUserResponse, error) {
	role, ok := ctx.Value("role").(string)
	if !ok || role != "admin" {
		return nil, status.Error(codes.PermissionDenied, "admin role required")
	}
	query := `DELETE FROM users WHERE id = $1`
	_, err := s.db.Exec(query, req.UserId)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to delete user: %v", err)
	}
	return &pb.DeleteUserResponse{}, nil
}

func (s *AuthService) ListUsers(ctx context.Context, req *pb.ListUsersRequest) (*pb.ListUsersResponse, error) {
	role, ok := ctx.Value("role").(string)
	if !ok || role != "admin" {
		return nil, status.Error(codes.PermissionDenied, "admin role required")
	}
	query := `SELECT id, first_name, last_name, email, is_admin, created_at FROM users`
	rows, err := s.db.Query(query)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to list users: %v", err)
	}
	defer rows.Close()

	var users []User
	for rows.Next() {
		var u User
		if err := rows.Scan(&u.ID, &u.FirstName, &u.LastName, &u.Email, &u.IsAdmin, &u.CreatedAt); err != nil {
			return nil, status.Errorf(codes.Internal, "failed to scan user: %v", err)
		}
		users = append(users, u)
	}
	pbUsers := make([]*pb.User, len(users))
	for i, u := range users {
		pbUsers[i] = &pb.User{
			Id:        u.ID,
			FirstName: u.FirstName,
			LastName:  u.LastName,
			Email:     u.Email,
			IsAdmin:   u.IsAdmin,
			CreatedAt: timestamppb.New(u.CreatedAt),
		}
	}
	return &pb.ListUsersResponse{Users: pbUsers}, nil
}

func (s *AuthService) CreateAPIKey(ctx context.Context, req *pb.CreateAPIKeyRequest) (*pb.CreateAPIKeyResponse, error) {
	role, ok := ctx.Value("role").(string)
	userID, ok2 := ctx.Value("user_id").(string)
	if !ok || !ok2 || (role != "admin" && userID != req.UserId) {
		return nil, status.Error(codes.PermissionDenied, "admin or self required")
	}
	if role != "admin" && req.Role == "admin" {
		return nil, status.Error(codes.PermissionDenied, "only admin can create admin API keys")
	}
	apiKey, expiresAt, err := s.createAPIKey(req.UserId, req.Role, req.IsServiceKey)
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

func (s *AuthService) createAPIKey(userID, role string, isServiceKey bool) (string, time.Time, error) {
	apiKey, err := s.GenerateAPIKey()
	if err != nil {
		return "", time.Time{}, fmt.Errorf("failed to generate API key: %v", err)
	}
	expiresAt := time.Now().AddDate(0, 0, 30) // 30-day expiration
	query := `
		INSERT INTO api_keys (key, user_id, role, is_service_key, is_active, created_at, expires_at)
		VALUES ($1, $2, $3, $4, $5, $6, $7)
	`
	_, err = s.db.Exec(query, apiKey, userID, role, isServiceKey, true, time.Now(), expiresAt)
	if err != nil {
		return "", time.Time{}, fmt.Errorf("failed to create API key: %v", err)
	}
	return apiKey, expiresAt, nil
}

func (s *AuthService) RotateAPIKey(ctx context.Context, req *pb.RotateAPIKeyRequest) (*pb.RotateAPIKeyResponse, error) {
	role, ok := ctx.Value("role").(string)
	userID, ok2 := ctx.Value("user_id").(string)
	if !ok || !ok2 {
		return nil, status.Error(codes.Internal, "missing context values")
	}
	userKeyID, _, _, _, _, _, _, _, err := s.GetAPIKey(req.ApiKey)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "invalid API key: %v", err)
	}
	if role != "admin" && userID != userKeyID {
		return nil, status.Error(codes.PermissionDenied, "admin or key owner required")
	}
	newAPIKey, newExpiresAt, err := s.rotateAPIKey(req.ApiKey)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to rotate API key: %v", err)
	}
	return &pb.RotateAPIKeyResponse{
		NewApiKey: newAPIKey,
		ExpiresAt: timestamppb.New(newExpiresAt),
	}, nil
}

func (s *AuthService) rotateAPIKey(oldKey string) (string, time.Time, error) {
	newKey, err := s.GenerateAPIKey()
	if err != nil {
		return "", time.Time{}, fmt.Errorf("failed to generate new API key: %v", err)
	}
	newExpiresAt := time.Now().AddDate(0, 0, 30)
	query := `
		UPDATE api_keys
		SET key = $1, created_at = $2, expires_at = $3
		WHERE key = $4
	`
	_, err = s.db.Exec(query, newKey, time.Now(), newExpiresAt, oldKey)
	if err != nil {
		return "", time.Time{}, fmt.Errorf("failed to rotate API key: %v", err)
	}
	return newKey, newExpiresAt, nil
}

func (s *AuthService) ActivateAPIKey(ctx context.Context, req *pb.ActivateAPIKeyRequest) (*pb.ActivateAPIKeyResponse, error) {
	role, ok := ctx.Value("role").(string)
	userID, ok2 := ctx.Value("user_id").(string)
	if !ok || !ok2 {
		return nil, status.Error(codes.Internal, "missing context values")
	}
	userKeyID, _, _, _, _, _, _, _, err := s.GetAPIKey(req.ApiKey)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "invalid API key: %v", err)
	}
	if role != "admin" && userID != userKeyID {
		return nil, status.Error(codes.PermissionDenied, "admin or key owner required")
	}
	err = s.activateAPIKey(req.ApiKey)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to activate API key: %v", err)
	}
	return &pb.ActivateAPIKeyResponse{}, nil
}

func (s *AuthService) activateAPIKey(apiKey string) error {
	query := `UPDATE api_keys SET is_active = true, deactivation_message = '' WHERE key = $1`
	_, err := s.db.Exec(query, apiKey)
	if err != nil {
		return fmt.Errorf("failed to activate API key: %v", err)
	}
	return nil
}

func (s *AuthService) DeactivateAPIKey(ctx context.Context, req *pb.DeactivateAPIKeyRequest) (*pb.DeactivateAPIKeyResponse, error) {
	role, ok := ctx.Value("role").(string)
	userID, ok2 := ctx.Value("user_id").(string)
	if !ok || !ok2 {
		return nil, status.Error(codes.Internal, "missing context values")
	}
	userKeyID, _, _, _, _, _, _, _, err := s.GetAPIKey(req.ApiKey)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "invalid API key: %v", err)
	}
	if role != "admin" && userID != userKeyID {
		return nil, status.Error(codes.PermissionDenied, "admin or key owner required")
	}
	if role != "admin" && req.DeactivationMessage != "" {
		return nil, status.Error(codes.PermissionDenied, "only admin can set deactivation message")
	}
	err = s.deactivateAPIKey(req.ApiKey, req.DeactivationMessage)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to deactivate API key: %v", err)
	}
	return &pb.DeactivateAPIKeyResponse{}, nil
}

func (s *AuthService) deactivateAPIKey(apiKey, deactivationMessage string) error {
	query := `UPDATE api_keys SET is_active = false, deactivation_message = $1 WHERE key = $2`
	_, err := s.db.Exec(query, deactivationMessage, apiKey)
	if err != nil {
		return fmt.Errorf("failed to deactivate API key: %v", err)
	}
	return nil
}

func (s *AuthService) ListAPIKeysHelper(userID string) ([]APIKey, error) {
	query := `
		SELECT key, user_id, role, is_service_key, is_active, deactivation_message, created_at, expires_at
		FROM api_keys
		WHERE user_id = $1
	`
	rows, err := s.db.Query(query, userID)
	if err != nil {
		return nil, fmt.Errorf("failed to list API keys: %v", err)
	}
	defer rows.Close()

	var apiKeys []APIKey
	for rows.Next() {
		var k APIKey
		var expiresAt sql.NullTime
		if err := rows.Scan(&k.APIKey, &k.UserID, &k.Role, &k.IsServiceKey, &k.IsActive, &k.DeactivationMessage, &k.CreatedAt, &expiresAt); err != nil {
			return nil, fmt.Errorf("failed to scan API key: %v", err)
		}
		if expiresAt.Valid {
			k.ExpiresAt = expiresAt.Time
		}
		apiKeys = append(apiKeys, k)
	}
	return apiKeys, nil
}

func (s *AuthService) ListAPIKeys(ctx context.Context, req *pb.ListAPIKeysRequest) (*pb.ListAPIKeysResponse, error) {
	role, ok := ctx.Value("role").(string)
	userID, ok2 := ctx.Value("user_id").(string)
	if !ok || !ok2 || (role != "admin" && userID != req.UserId) {
		return nil, status.Error(codes.PermissionDenied, "admin or self required")
	}
	apiKeys, err := s.ListAPIKeysHelper(req.UserId)
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

func (s *AuthService) InviteUser(ctx context.Context, req *pb.InviteUserRequest) (*pb.InviteUserResponse, error) {
	role, ok := ctx.Value("role").(string)
	userID, ok2 := ctx.Value("user_id").(string)
	if !ok || !ok2 || role != "admin" {
		return nil, status.Error(codes.PermissionDenied, "admin role required")
	}
	invitationID := uuid.New().String()
	token, err := s.GenerateAPIKey()
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to generate invitation token: %v", err)
	}
	expiresAt := time.Now().AddDate(0, 0, 7) // 7-day expiration
	query := `
		INSERT INTO invitations (id, email, inviter_id, is_admin, token, expires_at, created_at)
		VALUES ($1, $2, $3, $4, $5, $6, $7)
	`
	_, err = s.db.Exec(query, invitationID, req.Email, userID, req.IsAdmin, token, expiresAt, time.Now())
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to create invitation: %v", err)
	}
	inviteURL := fmt.Sprintf("https://sparta.example.com/invite?token=%s", token)
	err = s.email.Send(req.Email, "Sparta Invitation", fmt.Sprintf("You have been invited to join Sparta. Click here to register: %s\nThis invitation expires at %s.", inviteURL, expiresAt))
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to send invitation email: %v", err)
	}
	return &pb.InviteUserResponse{
		InvitationId: invitationID,
		Token:        token,
		ExpiresAt:    timestamppb.New(expiresAt),
	}, nil
}

func (s *AuthService) ValidateInvite(ctx context.Context, req *pb.ValidateInviteRequest) (*pb.ValidateInviteResponse, error) {
	var email, inviterID string
	var isAdmin bool
	var expiresAt time.Time
	query := `
		SELECT email, inviter_id, is_admin, expires_at
		FROM invitations
		WHERE token = $1
	`
	err := s.db.QueryRow(query, req.Token).Scan(&email, &inviterID, &isAdmin, &expiresAt)
	if err == sql.ErrNoRows {
		return nil, status.Error(codes.InvalidArgument, "invalid invitation token")
	}
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to validate invitation: %v", err)
	}
	if time.Now().After(expiresAt) {
		return nil, status.Error(codes.InvalidArgument, "invitation expired")
	}
	return &pb.ValidateInviteResponse{
		Email:   email,
		IsAdmin: isAdmin,
	}, nil
}

func (s *AuthService) ScheduleAPIKeyRotation() {
	go func() {
		ticker := time.NewTicker(24 * time.Hour)
		for range ticker.C {
			log.Println("Running API key rotation check")
			rows, err := s.db.Query("SELECT key FROM api_keys WHERE expires_at < $1 AND is_active = true", time.Now())
			if err != nil {
				log.Printf("Failed to query expired API keys: %v", err)
				continue
			}
			var apiKeys []string
			for rows.Next() {
				var apiKey string
				if err := rows.Scan(&apiKey); err != nil {
					log.Printf("Failed to scan API key: %v", err)
					continue
				}
				apiKeys = append(apiKeys, apiKey)
			}
			rows.Close()
			for _, apiKey := range apiKeys {
				_, expiresAt, err := s.rotateAPIKey(apiKey)
				if err != nil {
					log.Printf("Failed to rotate API key %s: %v", apiKey, err)
					continue
				}
				log.Printf("Rotated API key %s, new expiration: %v", apiKey, expiresAt)
			}
		}
	}()
}
