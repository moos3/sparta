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
	"strings"
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

// GenerateAPIKey generates a new API key.
// This function is now a helper, called by UserService.CreateAPIKey.
func (s *AuthService) GenerateAPIKey() (string, error) {
	b := make([]byte, 32)
	_, err := rand.Read(b)
	if err != nil {
		return "", err
	}
	hash := sha256.Sum256(b)
	return hex.EncodeToString(hash[:]), nil
}

// GetAPIKey retrieves API key details.
// This function is now a helper, called by UserService's API key methods.
func (s *AuthService) GetAPIKey(key string) (string, string, bool, bool, string, bool, time.Time, time.Time, error) {
	var userID, keyVal, role, deactivationMessage string
	var isAdmin, isServiceKey, isActive bool
	var createdAt, expiresAt time.Time
	query := `
		SELECT api_keys.user_id, api_keys.api_key, api_keys.role, api_keys.is_service_key, api_keys.is_active,
		       api_keys.deactivation_message, api_keys.created_at, api_keys.expires_at, users.is_admin
		FROM api_keys
		JOIN users ON api_keys.user_id = users.id
		WHERE api_keys.api_key = $1
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

// VerifyUser checks user credentials.
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

// AuthInterceptor intercepts gRPC calls for authentication and authorization.
func (s *AuthService) AuthInterceptor(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
	// Allow Login and ValidateInvite methods without authentication
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

	// Use helper GetAPIKey
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

	// Casbin authorization check
	if !s.casbin.Authorize(role, info.FullMethod, "*") {
		return nil, status.Error(codes.PermissionDenied, "insufficient permissions")
	}

	// Store user info in context for downstream handlers
	newCtx := context.WithValue(ctx, "user_id", userID)
	newCtx = context.WithValue(newCtx, "role", role)
	newCtx = context.WithValue(newCtx, "is_admin", isAdmin)
	newCtx = context.WithValue(newCtx, "is_service_key", isServiceKey)
	return handler(newCtx, req)
}

// Login handles user login.
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

// CreateUser handles creating new users (admin-only).
func (s *AuthService) CreateUser(ctx context.Context, req *pb.CreateUserRequest) (*pb.CreateUserResponse, error) {
	// Only admin can create users
	if !s.isAdmin(ctx) {
		return nil, status.Error(codes.PermissionDenied, "admin role required")
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to hash password: %v", err)
	}
	userID := uuid.New().String()
	query := `
		INSERT INTO users (id, first_name, last_name, email, password_hash, is_admin, created_at)
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

// GetUser retrieves user details.
func (s *AuthService) GetUser(ctx context.Context, req *pb.GetUserRequest) (*pb.GetUserResponse, error) {
	// Admin can get any user. Regular user can only get their own profile.
	authUserID, ok := ctx.Value("user_id").(string)
	if !ok {
		return nil, status.Error(codes.Unauthenticated, "missing user ID in context")
	}
	if !s.isAdmin(ctx) && authUserID != req.UserId {
		return nil, status.Error(codes.PermissionDenied, "admin role or self-access required")
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

// UpdateUser updates user details. Email can only be changed by admin.
func (s *AuthService) UpdateUser(ctx context.Context, req *pb.UpdateUserRequest) (*pb.UpdateUserResponse, error) {
	authUserID, ok := ctx.Value("user_id").(string)
	if !ok {
		return nil, status.Error(codes.Unauthenticated, "missing user ID in context")
	}
	isAdmin := s.isAdmin(ctx)

	// Admin can update any user. Non-admin can only update their own profile.
	if !isAdmin && authUserID != req.UserId {
		return nil, status.Error(codes.PermissionDenied, "admin role or self-access required")
	}

	// --- Email change restriction (NEW) ---
	var currentEmail string
	err := s.db.QueryRow("SELECT email FROM users WHERE id = $1", req.UserId).Scan(&currentEmail)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to get current user email: %v", err)
	}

	if req.Email != currentEmail && !isAdmin {
		return nil, status.Error(codes.PermissionDenied, "only administrators can change email address")
	}
	// --- End email change restriction ---

	// Prepare fields for update - password is handled separately or by an admin only
	setClauses := []string{}
	args := []interface{}{}
	argCounter := 1

	if req.FirstName != "" {
		setClauses = append(setClauses, fmt.Sprintf("first_name = $%d", argCounter))
		args = append(args, req.FirstName)
		argCounter++
	}
	if req.LastName != "" {
		setClauses = append(setClauses, fmt.Sprintf("last_name = $%d", argCounter))
		args = append(args, req.LastName)
		argCounter++
	}
	if req.Email != "" { // Email can be updated if allowed by the check above
		setClauses = append(setClauses, fmt.Sprintf("email = $%d", argCounter))
		args = append(args, req.Email)
		argCounter++
	}
	// Password is NOT updated here. It's handled by ChangePassword or by Admin only Create/Update.
	// if req.Password != "" { ... }

	if len(setClauses) == 0 {
		return &pb.UpdateUserResponse{}, nil // Nothing to update
	}

	query := fmt.Sprintf("UPDATE users SET %s WHERE id = $%d", strings.Join(setClauses, ", "), argCounter)
	args = append(args, req.UserId)

	_, err = s.db.Exec(query, args...)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to update user: %v", err)
	}
	return &pb.UpdateUserResponse{}, nil
}

// DeleteUser handles deleting users (admin-only).
func (s *AuthService) DeleteUser(ctx context.Context, req *pb.DeleteUserRequest) (*pb.DeleteUserResponse, error) {
	// Only admin can delete users
	if !s.isAdmin(ctx) {
		return nil, status.Error(codes.PermissionDenied, "admin role required")
	}
	query := `DELETE FROM users WHERE id = $1`
	_, err := s.db.Exec(query, req.UserId)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to delete user: %v", err)
	}
	return &pb.DeleteUserResponse{}, nil
}

// ListUsers lists all users (admin-only).
func (s *AuthService) ListUsers(ctx context.Context, req *pb.ListUsersRequest) (*pb.ListUsersResponse, error) {
	// Only admin can list all users
	if !s.isAdmin(ctx) {
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
		// Corrected column name from 'password' to 'password_hash'
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

// API Key management methods (MOVED from AuthService)
// These methods are now handled by UserService

// isAdmin checks if the current context user has admin role.
func (s *AuthService) isAdmin(ctx context.Context) bool {
	role, ok := ctx.Value("role").(string)
	return ok && role == "admin"
}

// getAuthUserID retrieves authenticated user ID from context.
func (s *AuthService) getAuthUserID(ctx context.Context) (string, error) {
	userID, ok := ctx.Value("user_id").(string)
	if !ok {
		return "", status.Error(codes.Unauthenticated, "missing user ID in context")
	}
	return userID, nil
}

// ScheduleAPIKeyRotation handles background API key rotation.
// It will continue to use AuthService.GenerateAPIKey and related helpers.
func (s *AuthService) ScheduleAPIKeyRotation() {
	go func() {
		ticker := time.NewTicker(24 * time.Hour)
		for range ticker.C {
			log.Println("Running API key rotation check")
			rows, err := s.db.Query("SELECT api_key FROM api_keys WHERE expires_at < $1 AND is_active = true", time.Now())
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
				// Use helper functions within AuthService for key rotation logic
				_, expiresAt, err := s.RotateAPIKeyHelper(apiKey) // Call internal helper
				if err != nil {
					log.Printf("Failed to rotate API key %s: %v", apiKey, err)
					continue
				}
				log.Printf("Rotated API key %s, new expiration: %v", apiKey, expiresAt)
			}
		}
	}()
}

// rotateAPIKeyHelper is an internal helper for API key rotation.
func (s *AuthService) RotateAPIKeyHelper(oldKey string) (string, time.Time, error) {
	newKey, err := s.GenerateAPIKey()
	if err != nil {
		return "", time.Time{}, fmt.Errorf("failed to generate new API key: %v", err)
	}
	newExpiresAt := time.Now().AddDate(0, 0, 30)
	query := `
		UPDATE api_keys
		SET api_key = $1, created_at = $2, expires_at = $3
		WHERE api_key = $4
	`
	_, err = s.db.Exec(query, newKey, time.Now(), newExpiresAt, oldKey)
	if err != nil {
		return "", time.Time{}, fmt.Errorf("failed to rotate API key: %v", err)
	}
	return newKey, newExpiresAt, nil
}

// activateAPIKeyHelper is an internal helper for API key activation.
func (s *AuthService) ActivateAPIKeyHelper(apiKey string) error {
	query := `UPDATE api_keys SET is_active = true, deactivation_message = '' WHERE api_key = $1`
	_, err := s.db.Exec(query, apiKey)
	if err != nil {
		return fmt.Errorf("failed to activate API key: %v", err)
	}
	return nil
}

// deactivateAPIKeyHelper is an internal helper for API key deactivation.
func (s *AuthService) DeactivateAPIKeyHelper(apiKey, deactivationMessage string) error {
	query := `UPDATE api_keys SET is_active = false, deactivation_message = $1 WHERE api_key = $2`
	_, err := s.db.Exec(query, deactivationMessage, apiKey)
	if err != nil {
		return fmt.Errorf("failed to deactivate API key: %v", err)
	}
	return nil
}

// ListAPIKeysHelper is an internal helper for listing API keys.
func (s *AuthService) ListAPIKeysHelper(userID string) ([]APIKey, error) {
	query := `
		SELECT api_key, user_id, role, is_service_key, is_active, deactivation_message, created_at, expires_at
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
		var expiresAt sql.NullTime             // Use sql.NullTime for nullable timestamps
		var deactivationMessage sql.NullString // Use sql.NullString for nullable string
		if err := rows.Scan(&k.APIKey, &k.UserID, &k.Role, &k.IsServiceKey, &k.IsActive, &deactivationMessage, &k.CreatedAt, &expiresAt); err != nil {
			return nil, fmt.Errorf("failed to scan API key: %v", err)
		}
		if expiresAt.Valid {
			k.ExpiresAt = expiresAt.Time
		}
		if deactivationMessage.Valid {
			k.DeactivationMessage = deactivationMessage.String
		}
		apiKeys = append(apiKeys, k)
	}
	return apiKeys, nil
}

// createAPIKeyHelper is an internal helper for creating API keys.
func (s *AuthService) CreateAPIKeyHelper(userID, role string, isServiceKey bool) (string, time.Time, error) {
	apiKey, err := s.GenerateAPIKey()
	if err != nil {
		return "", time.Time{}, fmt.Errorf("failed to generate API key: %v", err)
	}
	expiresAt := time.Now().AddDate(0, 0, 30) // 30-day expiration
	query := `
		INSERT INTO api_keys (api_key, user_id, role, is_service_key, is_active, created_at, expires_at)
		VALUES ($1, $2, $3, $4, $5, $6, $7)
	`
	_, err = s.db.Exec(query, apiKey, userID, role, isServiceKey, true, time.Now(), expiresAt)
	if err != nil {
		return "", time.Time{}, fmt.Errorf("failed to create API key: %v", err)
	}
	return apiKey, expiresAt, nil
}

// isAdmin method checks if the user has admin role from context.
// No changes here, it's a helper used internally.
