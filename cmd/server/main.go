package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
	"strings"
	"syscall"
	"time"

	"github.com/google/uuid"
	"github.com/gorilla/mux"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/moos3/sparta/internal/auth"
	"github.com/moos3/sparta/internal/config"
	"github.com/moos3/sparta/internal/db"
	"github.com/moos3/sparta/internal/email"
	"github.com/moos3/sparta/internal/plugin"
	pb "github.com/moos3/sparta/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/reflection"
	"google.golang.org/grpc/status"
)

type server struct {
	pb.UnimplementedUserServiceServer
	db           *db.Database
	auth         *auth.Auth
	email        *email.Service
	plugins      []plugin.Plugin
	dnsPlugin    DNSScanPlugin
	tlsPlugin    TLSScanPlugin
	crtShPlugin  CrtShScanPlugin
	chaosPlugin  ChaosScanPlugin
	shodanPlugin ShodanScanPlugin
}

type DNSScanPlugin interface {
	Initialize() error
	Name() string
	SetDatabase(*db.Database)
	ScanDomain(domain string) (db.DNSSecurityResult, error)
	InsertDNSScanResult(domain string, result db.DNSSecurityResult) (string, error)
	GetDNSScanResultsByDomain(domain string) ([]struct {
		ID        string
		Domain    string
		Result    db.DNSSecurityResult
		CreatedAt time.Time
	}, error)
}

type TLSScanPlugin interface {
	Initialize() error
	Name() string
	SetDatabase(*db.Database)
	ScanTLS(domain string, dnsScanID string) (db.TLSSecurityResult, error)
	InsertTLSScanResult(domain string, dnsScanID string, result db.TLSSecurityResult) (string, error)
	GetTLSScanResultsByDomain(domain string) ([]struct {
		ID        string
		Domain    string
		DNSScanID string
		Result    db.TLSSecurityResult
		CreatedAt time.Time
	}, error)
}

type CrtShScanPlugin interface {
	Initialize() error
	Name() string
	SetDatabase(*db.Database)
	ScanCrtSh(domain string, dnsScanID string) (db.CrtShSecurityResult, error)
	InsertCrtShScanResult(domain string, dnsScanID string, result db.CrtShSecurityResult) (string, error)
	GetCrtShScanResultsByDomain(domain string) ([]struct {
		ID        string
		Domain    string
		DNSScanID string
		Result    db.CrtShSecurityResult
		CreatedAt time.Time
	}, error)
}

type ChaosScanPlugin interface {
	Initialize() error
	Name() string
	SetDatabase(*db.Database)
	SetConfig(*config.Config)
	ScanChaos(domain string, dnsScanID string) (db.ChaosSecurityResult, error)
	InsertChaosScanResult(domain string, dnsScanID string, result db.ChaosSecurityResult) (string, error)
	GetChaosScanResultsByDomain(domain string) ([]struct {
		ID        string
		Domain    string
		DNSScanID string
		Result    db.ChaosSecurityResult
		CreatedAt time.Time
	}, error)
}

type ShodanScanPlugin interface {
	Initialize() error
	Name() string
	SetDatabase(*db.Database)
	SetConfig(*config.Config)
	ScanShodan(domain string, dnsScanID string) (db.ShodanSecurityResult, error)
	InsertShodanScanResult(domain string, dnsScanID string, result db.ShodanSecurityResult) (string, error)
	GetShodanScanResultsByDomain(domain string) ([]struct {
		ID        string
		Domain    string
		DNSScanID string
		Result    db.ShodanSecurityResult
		CreatedAt time.Time
	}, error)
}

func main() {
	cfg, err := config.Load("config.yaml")
	if err != nil {
		log.Fatalf("Failed to load config: %v", err)
	}

	db, err := db.New(cfg)
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}

	emailService := email.New(cfg)
	authService := auth.New(db, emailService, cfg)

	pluginManager := plugin.NewManager()
	plugins, err := pluginManager.LoadPlugins("./plugins")
	if err != nil {
		log.Printf("Failed to load plugins: %v", err)
	}

	var dnsPlugin DNSScanPlugin
	var tlsPlugin TLSScanPlugin
	var crtShPlugin CrtShScanPlugin
	var chaosPlugin ChaosScanPlugin
	var shodanPlugin ShodanScanPlugin
	var initializedPlugins []plugin.Plugin
	for i, p := range plugins {
		pluginName := p.Name()
		log.Printf("Processing plugin %d with name: %s", i, pluginName)

		// Try casting to DNSScanPlugin
		if dnsSp, ok := p.(DNSScanPlugin); ok && pluginName == "ScanDNS" {
			log.Printf("Setting database for plugin %s", pluginName)
			dnsSp.SetDatabase(db)
			log.Printf("Initializing plugin %s", pluginName)
			if err := dnsSp.Initialize(); err != nil {
				log.Printf("Failed to initialize plugin %s: %v", pluginName, err)
				continue
			}
			dnsPlugin = dnsSp
			initializedPlugins = append(initializedPlugins, p)
			log.Printf("Successfully initialized plugin %s", pluginName)
			continue
		}

		// Try casting to TLSScanPlugin
		if tlsSp, ok := p.(TLSScanPlugin); ok && pluginName == "ScanTLS" {
			log.Printf("Setting database for plugin %s", pluginName)
			tlsSp.SetDatabase(db)
			log.Printf("Initializing plugin %s", pluginName)
			if err := tlsSp.Initialize(); err != nil {
				log.Printf("Failed to initialize plugin %s: %v", pluginName, err)
				continue
			}
			tlsPlugin = tlsSp
			initializedPlugins = append(initializedPlugins, p)
			log.Printf("Successfully initialized plugin %s", pluginName)
			continue
		}

		// Try casting to CrtShScanPlugin
		if crtSp, ok := p.(CrtShScanPlugin); ok && pluginName == "ScanCrtSh" {
			log.Printf("Setting database for plugin %s", pluginName)
			crtSp.SetDatabase(db)
			log.Printf("Initializing plugin %s", pluginName)
			if err := crtSp.Initialize(); err != nil {
				log.Printf("Failed to initialize plugin %s: %v", pluginName, err)
				continue
			}
			crtShPlugin = crtSp
			initializedPlugins = append(initializedPlugins, p)
			log.Printf("Successfully initialized plugin %s", pluginName)
			continue
		}

		// Try casting to ChaosScanPlugin
		if chaosSp, ok := p.(ChaosScanPlugin); ok && pluginName == "ScanChaos" {
			log.Printf("Setting database and config for plugin %s", pluginName)
			chaosSp.SetDatabase(db)
			chaosSp.SetConfig(cfg)
			log.Printf("Initializing plugin %s", pluginName)
			if err := chaosSp.Initialize(); err != nil {
				log.Printf("Failed to initialize plugin %s: %v", pluginName, err)
				continue
			}
			chaosPlugin = chaosSp
			initializedPlugins = append(initializedPlugins, p)
			log.Printf("Successfully initialized plugin %s", pluginName)
			continue
		}

		// Try casting to ShodanScanPlugin
		if shodanSp, ok := p.(ShodanScanPlugin); ok && pluginName == "ScanShodan" {
			log.Printf("Setting database and config for plugin %s", pluginName)
			shodanSp.SetDatabase(db)
			shodanSp.SetConfig(cfg)
			log.Printf("Initializing plugin %s", pluginName)
			if err := shodanSp.Initialize(); err != nil {
				log.Printf("Failed to initialize plugin %s: %v", pluginName, err)
				continue
			}
			shodanPlugin = shodanSp
			initializedPlugins = append(initializedPlugins, p)
			log.Printf("Successfully initialized plugin %s", pluginName)
			continue
		}

		// Initialize as generic plugin
		log.Printf("Initializing non-specific plugin %s", pluginName)
		if err := p.Initialize(); err != nil {
			log.Printf("Failed to initialize plugin %s: %v", pluginName, err)
			continue
		}
		initializedPlugins = append(initializedPlugins, p)
	}

	if dnsPlugin == nil {
		log.Printf("Warning: ScanDNS plugin not loaded")
	} else {
		log.Printf("ScanDNS plugin loaded successfully")
	}
	if tlsPlugin == nil {
		log.Printf("Warning: ScanTLS plugin not loaded")
	} else {
		log.Printf("ScanTLS plugin loaded successfully")
	}
	if crtShPlugin == nil {
		log.Printf("Warning: ScanCrtSh plugin not loaded")
	} else {
		log.Printf("ScanCrtSh plugin loaded successfully")
	}
	if chaosPlugin == nil {
		log.Printf("Warning: ScanChaos plugin not loaded")
	} else {
		log.Printf("ScanChaos plugin loaded successfully")
	}
	if shodanPlugin == nil {
		log.Printf("Warning: ScanShodan plugin not loaded")
	} else {
		log.Printf("ScanShodan plugin loaded successfully")
	}

	s := &server{
		db:           db,
		auth:         authService,
		email:        emailService,
		plugins:      initializedPlugins,
		dnsPlugin:    dnsPlugin,
		tlsPlugin:    tlsPlugin,
		crtShPlugin:  crtShPlugin,
		chaosPlugin:  chaosPlugin,
		shodanPlugin: shodanPlugin,
	}

	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", cfg.Server.GRPCPort))
	if err != nil {
		log.Fatalf("Failed to listen on port %d: %v", cfg.Server.GRPCPort, err)
	}

	grpcServer := grpc.NewServer(
		grpc.UnaryInterceptor(s.authInterceptor),
	)
	pb.RegisterUserServiceServer(grpcServer, s)
	reflection.Register(grpcServer)

	grpcWebServer := grpcweb.WrapServer(
		grpcServer,
		grpcweb.WithOriginFunc(func(origin string) bool { return true }),
	)

	router := mux.NewRouter()
	router.HandleFunc("/{service:service\\..+}/{method}", func(w http.ResponseWriter, r *http.Request) {
		if grpcWebServer.IsGrpcWebRequest(r) {
			grpcWebServer.ServeHTTP(w, r)
			return
		}
		http.NotFound(w, r)
	})
	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./web/build")))

	httpServer := &http.Server{
		Addr:    fmt.Sprintf(":%d", cfg.Server.HTTPPort),
		Handler: router,
	}

	go func() {
		log.Printf("Starting HTTP server on :%d", cfg.Server.HTTPPort)
		if err := httpServer.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("HTTP server failed: %v", err)
		}
	}()

	go s.scheduleAPIKeyRotation()

	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		log.Printf("Starting gRPC server on :%d", cfg.Server.GRPCPort)
		if err := grpcServer.Serve(lis); err != nil {
			log.Fatalf("Failed to serve gRPC: %v", err)
		}
	}()

	<-sigChan
	log.Println("Shutting down server...")
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := httpServer.Shutdown(ctx); err != nil {
		log.Printf("HTTP server shutdown error: %v", err)
	}
	grpcServer.GracefulStop()
	log.Println("Server shut down successfully")
}

func (s *server) authInterceptor(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return nil, status.Error(codes.Unauthenticated, "Missing metadata")
	}

	apiKeys := md.Get("x-api-key")
	if len(apiKeys) == 0 {
		return nil, status.Error(codes.Unauthenticated, "API key missing")
	}

	ctx = context.WithValue(ctx, "api_key", apiKeys[0])
	return handler(ctx, req)
}

func (s *server) scheduleAPIKeyRotation() {
	ticker := time.NewTicker(24 * time.Hour)
	for range ticker.C {
		if err := s.auth.RotateExpiredKeys(); err != nil {
			log.Printf("Failed to rotate API keys: %v", err)
		}
	}
}

func (s *server) CreateUser(ctx context.Context, req *pb.CreateUserRequest) (*pb.CreateUserResponse, error) {
	apiKey, err := s.auth.GenerateAPIKey()
	if err != nil {
		return nil, status.Error(codes.Internal, "Failed to generate API key")
	}
	expiresAt := time.Now().Add(90 * 24 * time.Hour)
	userID, err := s.db.CreateUser(req.GetEmail(), req.GetName(), apiKey, expiresAt)
	if err != nil {
		return nil, status.Error(codes.Internal, "Failed to create user")
	}
	s.email.SendAPIKeyEmail(req.GetEmail(), apiKey)
	return &pb.CreateUserResponse{UserId: userID, ApiKey: apiKey}, nil
}

func (s *server) GetUser(ctx context.Context, req *pb.GetUserRequest) (*pb.GetUserResponse, error) {
	id, email, name, createdAt, err := s.db.GetUser(req.GetUserId())
	if err != nil {
		return nil, status.Error(codes.NotFound, "User not found")
	}
	return &pb.GetUserResponse{
		UserId:    id,
		Email:     email,
		Name:      name,
		CreatedAt: createdAt.Format(time.RFC3339),
	}, nil
}

func (s *server) UpdateUser(ctx context.Context, req *pb.UpdateUserRequest) (*pb.UpdateUserResponse, error) {
	if err := s.db.UpdateUser(req.GetUserId(), req.GetEmail(), req.GetName()); err != nil {
		return nil, status.Error(codes.Internal, "Failed to update user")
	}
	return &pb.UpdateUserResponse{UserId: req.GetUserId()}, nil
}

func (s *server) DeleteUser(ctx context.Context, req *pb.DeleteUserRequest) (*pb.DeleteUserResponse, error) {
	if err := s.db.DeleteUser(req.GetUserId()); err != nil {
		return nil, status.Error(codes.Internal, "Failed to delete user")
	}
	return &pb.DeleteUserResponse{Success: true}, nil
}

func (s *server) ListUsers(ctx context.Context, req *pb.ListUsersRequest) (*pb.ListUsersResponse, error) {
	users, err := s.db.ListUsers()
	if err != nil {
		return nil, status.Error(codes.Internal, "Failed to list users")
	}

	response := &pb.ListUsersResponse{}
	for _, u := range users {
		response.Users = append(response.Users, &pb.User{
			UserId:    u.ID,
			Email:     u.Email,
			Name:      u.Name,
			CreatedAt: u.CreatedAt.Format(time.RFC3339),
		})
	}
	return response, nil
}

func (s *server) InviteUser(ctx context.Context, req *pb.InviteUserRequest) (*pb.InviteUserResponse, error) {
	token := uuid.New().String()
	expiresAt := time.Now().Add(24 * time.Hour)
	_, err := s.db.Exec(
		"INSERT INTO invite_tokens (token, email, expires_at) VALUES ($1, $2, $3)",
		token, req.GetEmail(), expiresAt)
	if err != nil {
		return nil, status.Error(codes.Internal, "Failed to create invite")
	}
	s.email.SendAPIKeyEmail(req.GetEmail(), token)
	return &pb.InviteUserResponse{InviteToken: token}, nil
}

func (s *server) ValidateInvite(ctx context.Context, req *pb.ValidateInviteRequest) (*pb.ValidateInviteResponse, error) {
	var expiresAt time.Time
	err := s.db.QueryRow(
		"SELECT expires_at FROM invite_tokens WHERE token = $1", req.GetToken()).
		Scan(&expiresAt)
	if err != nil || time.Now().After(expiresAt) {
		return &pb.ValidateInviteResponse{Valid: false}, nil
	}
	return &pb.ValidateInviteResponse{Valid: true}, nil
}

func (s *server) ScanDomain(ctx context.Context, req *pb.ScanDomainRequest) (*pb.ScanDomainResponse, error) {
	if s.dnsPlugin == nil {
		return nil, status.Error(codes.Unavailable, "ScanDNS plugin not loaded")
	}

	domain := strings.TrimSpace(strings.ToLower(req.GetDomain()))
	if domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}

	result, err := s.dnsPlugin.ScanDomain(domain)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to scan domain: %v", err))
	}

	id, err := s.dnsPlugin.InsertDNSScanResult(domain, result)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to store scan result: %v", err))
	}

	return &pb.ScanDomainResponse{
		Result: &pb.DNSSecurityResult{
			SpfRecord:             result.SPFRecord,
			SpfValid:              result.SPFValid,
			SpfPolicy:             result.SPFPolicy,
			DkimRecord:            result.DKIMRecord,
			DkimValid:             result.DKIMValid,
			DkimValidationError:   result.DKIMValidationError,
			DmarcRecord:           result.DMARCRecord,
			DmarcPolicy:           result.DMARCPolicy,
			DmarcValid:            result.DMARCValid,
			DmarcValidationError:  result.DMARCValidationError,
			DnssecEnabled:         result.DNSSECEnabled,
			DnssecValid:           result.DNSSECValid,
			DnssecValidationError: result.DNSSECValidationError,
			IpAddresses:           result.IPAddresses,
			MxRecords:             result.MXRecords,
			NsRecords:             result.NSRecords,
			Errors:                result.Errors,
		},
		ScanId: id,
	}, nil
}

func (s *server) GetDNSScanResultsByDomain(ctx context.Context, req *pb.GetDNSScanResultsByDomainRequest) (*pb.GetDNSScanResultsByDomainResponse, error) {
	if s.dnsPlugin == nil {
		return nil, status.Error(codes.Unavailable, "ScanDNS plugin not loaded")
	}

	domain := strings.TrimSpace(strings.ToLower(req.GetDomain()))
	if domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}

	results, err := s.dnsPlugin.GetDNSScanResultsByDomain(domain)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to retrieve scan results: %v", err))
	}

	response := &pb.GetDNSScanResultsByDomainResponse{}
	for _, r := range results {
		response.Results = append(response.Results, &pb.DNSScanResult{
			Id:     r.ID,
			Domain: r.Domain,
			Result: &pb.DNSSecurityResult{
				SpfRecord:             r.Result.SPFRecord,
				SpfValid:              r.Result.SPFValid,
				SpfPolicy:             r.Result.SPFPolicy,
				DkimRecord:            r.Result.DKIMRecord,
				DkimValid:             r.Result.DKIMValid,
				DkimValidationError:   r.Result.DKIMValidationError,
				DmarcRecord:           r.Result.DMARCRecord,
				DmarcPolicy:           r.Result.DMARCPolicy,
				DmarcValid:            r.Result.DMARCValid,
				DmarcValidationError:  r.Result.DMARCValidationError,
				DnssecEnabled:         r.Result.DNSSECEnabled,
				DnssecValid:           r.Result.DNSSECValid,
				DnssecValidationError: r.Result.DNSSECValidationError,
				IpAddresses:           r.Result.IPAddresses,
				MxRecords:             r.Result.MXRecords,
				NsRecords:             r.Result.NSRecords,
				Errors:                r.Result.Errors,
			},
			CreatedAt: r.CreatedAt.Format(time.RFC3339),
		})
	}
	return response, nil
}

func (s *server) ScanTLS(ctx context.Context, req *pb.ScanTLSRequest) (*pb.ScanTLSResponse, error) {
	if s.tlsPlugin == nil {
		return nil, status.Error(codes.Unavailable, "ScanTLS plugin not loaded")
	}

	domain := strings.TrimSpace(strings.ToLower(req.GetDomain()))
	dnsScanID := req.GetDnsScanId()
	if domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}
	if dnsScanID == "" {
		return nil, status.Error(codes.InvalidArgument, "DNS scan ID is required")
	}

	var exists bool
	err := s.db.QueryRow("SELECT EXISTS (SELECT 1 FROM dns_scan_results WHERE id = $1)", dnsScanID).Scan(&exists)
	if err != nil || !exists {
		return nil, status.Error(codes.InvalidArgument, "Invalid DNS scan ID")
	}

	result, err := s.tlsPlugin.ScanTLS(domain, dnsScanID)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to scan TLS: %v", err))
	}

	id, err := s.tlsPlugin.InsertTLSScanResult(domain, dnsScanID, result)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to store TLS scan result: %v", err))
	}

	return &pb.ScanTLSResponse{
		Result: &pb.TLSSecurityResult{
			TlsVersion:             result.TLSVersion,
			CipherSuite:            result.CipherSuite,
			HstsHeader:             result.HSTSHeader,
			CertificateValid:       result.CertificateValid,
			CertIssuer:             result.CertIssuer,
			CertSubject:            result.CertSubject,
			CertNotBefore:          result.CertNotBefore.Format(time.RFC3339),
			CertNotAfter:           result.CertNotAfter.Format(time.RFC3339),
			CertDnsNames:           result.CertDNSNames,
			CertKeyStrength:        int32(result.CertKeyStrength),
			CertSignatureAlgorithm: result.CertSignatureAlgorithm,
			Errors:                 result.Errors,
		},
		ScanId: id,
	}, nil
}

func (s *server) GetTLSScanResultsByDomain(ctx context.Context, req *pb.GetTLSScanResultsByDomainRequest) (*pb.GetTLSScanResultsByDomainResponse, error) {
	if s.tlsPlugin == nil {
		return nil, status.Error(codes.Unavailable, "ScanTLS plugin not loaded")
	}

	domain := strings.TrimSpace(strings.ToLower(req.GetDomain()))
	if domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}

	results, err := s.tlsPlugin.GetTLSScanResultsByDomain(domain)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to retrieve TLS scan results: %v", err))
	}

	response := &pb.GetTLSScanResultsByDomainResponse{}
	for _, r := range results {
		response.Results = append(response.Results, &pb.TLSScanResult{
			Id:        r.ID,
			Domain:    r.Domain,
			DnsScanId: r.DNSScanID,
			Result: &pb.TLSSecurityResult{
				TlsVersion:             r.Result.TLSVersion,
				CipherSuite:            r.Result.CipherSuite,
				HstsHeader:             r.Result.HSTSHeader,
				CertificateValid:       r.Result.CertificateValid,
				CertIssuer:             r.Result.CertIssuer,
				CertSubject:            r.Result.CertSubject,
				CertNotBefore:          r.Result.CertNotBefore.Format(time.RFC3339),
				CertNotAfter:           r.Result.CertNotAfter.Format(time.RFC3339),
				CertDnsNames:           r.Result.CertDNSNames,
				CertKeyStrength:        int32(r.Result.CertKeyStrength),
				CertSignatureAlgorithm: r.Result.CertSignatureAlgorithm,
				Errors:                 r.Result.Errors,
			},
			CreatedAt: r.CreatedAt.Format(time.RFC3339),
		})
	}
	return response, nil
}

func (s *server) ScanCrtSh(ctx context.Context, req *pb.ScanCrtShRequest) (*pb.ScanCrtShResponse, error) {
	if s.crtShPlugin == nil {
		return nil, status.Error(codes.Unavailable, "ScanCrtSh plugin not loaded")
	}

	domain := strings.TrimSpace(strings.ToLower(req.GetDomain()))
	dnsScanID := req.GetDnsScanId()
	if domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}
	if dnsScanID == "" {
		return nil, status.Error(codes.InvalidArgument, "DNS scan ID is required")
	}

	var exists bool
	err := s.db.QueryRow("SELECT EXISTS (SELECT 1 FROM dns_scan_results WHERE id = $1)", dnsScanID).Scan(&exists)
	if err != nil || !exists {
		return nil, status.Error(codes.InvalidArgument, "Invalid DNS scan ID")
	}

	result, err := s.crtShPlugin.ScanCrtSh(domain, dnsScanID)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to scan crt.sh: %v", err))
	}

	id, err := s.crtShPlugin.InsertCrtShScanResult(domain, dnsScanID, result)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to store crt.sh scan result: %v", err))
	}

	response := &pb.ScanCrtShResponse{
		Result: &pb.CrtShSecurityResult{
			Certificates: make([]*pb.CrtShCertificate, len(result.Certificates)),
			Subdomains:   result.Subdomains,
			Errors:       result.Errors,
		},
		ScanId: id,
	}
	for i, cert := range result.Certificates {
		response.Result.Certificates[i] = &pb.CrtShCertificate{
			Id:                 cert.ID,
			CommonName:         cert.CommonName,
			Issuer:             cert.Issuer,
			NotBefore:          cert.NotBefore.Format(time.RFC3339),
			NotAfter:           cert.NotAfter.Format(time.RFC3339),
			SerialNumber:       cert.SerialNumber,
			DnsNames:           cert.DNSNames,
			SignatureAlgorithm: cert.SignatureAlgorithm,
		}
	}

	return response, nil
}

func (s *server) GetCrtShScanResultsByDomain(ctx context.Context, req *pb.GetCrtShScanResultsByDomainRequest) (*pb.GetCrtShScanResultsByDomainResponse, error) {
	if s.crtShPlugin == nil {
		return nil, status.Error(codes.Unavailable, "ScanCrtSh plugin not loaded")
	}

	domain := strings.TrimSpace(strings.ToLower(req.GetDomain()))
	if domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}

	results, err := s.crtShPlugin.GetCrtShScanResultsByDomain(domain)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to retrieve crt.sh scan results: %v", err))
	}

	response := &pb.GetCrtShScanResultsByDomainResponse{}
	for _, r := range results {
		certs := make([]*pb.CrtShCertificate, len(r.Result.Certificates))
		for i, cert := range r.Result.Certificates {
			certs[i] = &pb.CrtShCertificate{
				Id:                 cert.ID,
				CommonName:         cert.CommonName,
				Issuer:             cert.Issuer,
				NotBefore:          cert.NotBefore.Format(time.RFC3339),
				NotAfter:           cert.NotAfter.Format(time.RFC3339),
				SerialNumber:       cert.SerialNumber,
				DnsNames:           cert.DNSNames,
				SignatureAlgorithm: cert.SignatureAlgorithm,
			}
		}
		response.Results = append(response.Results, &pb.CrtShScanResult{
			Id:        r.ID,
			Domain:    r.Domain,
			DnsScanId: r.DNSScanID,
			Result: &pb.CrtShSecurityResult{
				Certificates: certs,
				Subdomains:   r.Result.Subdomains,
				Errors:       r.Result.Errors,
			},
			CreatedAt: r.CreatedAt.Format(time.RFC3339),
		})
	}
	return response, nil
}

func (s *server) ScanChaos(ctx context.Context, req *pb.ScanChaosRequest) (*pb.ScanChaosResponse, error) {
	if s.chaosPlugin == nil {
		return nil, status.Error(codes.Unavailable, "ScanChaos plugin not loaded")
	}

	domain := strings.TrimSpace(strings.ToLower(req.GetDomain()))
	dnsScanID := req.GetDnsScanId()
	if domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}
	if dnsScanID == "" {
		return nil, status.Error(codes.InvalidArgument, "DNS scan ID is required")
	}

	var exists bool
	err := s.db.QueryRow("SELECT EXISTS (SELECT 1 FROM dns_scan_results WHERE id = $1)", dnsScanID).Scan(&exists)
	if err != nil || !exists {
		return nil, status.Error(codes.InvalidArgument, "Invalid DNS scan ID")
	}

	result, err := s.chaosPlugin.ScanChaos(domain, dnsScanID)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to scan Chaos: %v", err))
	}

	id, err := s.chaosPlugin.InsertChaosScanResult(domain, dnsScanID, result)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to store Chaos scan result: %v", err))
	}

	return &pb.ScanChaosResponse{
		Result: &pb.ChaosSecurityResult{
			Subdomains: result.Subdomains,
			Errors:     result.Errors,
		},
		ScanId: id,
	}, nil
}

func (s *server) GetChaosScanResultsByDomain(ctx context.Context, req *pb.GetChaosScanResultsByDomainRequest) (*pb.GetChaosScanResultsByDomainResponse, error) {
	if s.chaosPlugin == nil {
		return nil, status.Error(codes.Unavailable, "ScanChaos plugin not loaded")
	}

	domain := strings.TrimSpace(strings.ToLower(req.GetDomain()))
	if domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}

	results, err := s.chaosPlugin.GetChaosScanResultsByDomain(domain)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to retrieve Chaos scan results: %v", err))
	}

	response := &pb.GetChaosScanResultsByDomainResponse{}
	for _, r := range results {
		response.Results = append(response.Results, &pb.ChaosScanResult{
			Id:        r.ID,
			Domain:    r.Domain,
			DnsScanId: r.DNSScanID,
			Result: &pb.ChaosSecurityResult{
				Subdomains: r.Result.Subdomains,
				Errors:     r.Result.Errors,
			},
			CreatedAt: r.CreatedAt.Format(time.RFC3339),
		})
	}
	return response, nil
}

func (s *server) ScanShodan(ctx context.Context, req *pb.ScanShodanRequest) (*pb.ScanShodanResponse, error) {
	if s.shodanPlugin == nil {
		return nil, status.Error(codes.Unavailable, "ScanShodan plugin not loaded")
	}

	domain := strings.TrimSpace(strings.ToLower(req.GetDomain()))
	dnsScanID := req.GetDnsScanId()
	if domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}
	if dnsScanID == "" {
		return nil, status.Error(codes.InvalidArgument, "DNS scan ID is required")
	}

	var exists bool
	err := s.db.QueryRow("SELECT EXISTS (SELECT 1 FROM dns_scan_results WHERE id = $1)", dnsScanID).Scan(&exists)
	if err != nil || !exists {
		return nil, status.Error(codes.InvalidArgument, "Invalid DNS scan ID")
	}

	result, err := s.shodanPlugin.ScanShodan(domain, dnsScanID)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to scan Shodan: %v", err))
	}

	id, err := s.shodanPlugin.InsertShodanScanResult(domain, dnsScanID, result)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to store Shodan scan result: %v", err))
	}

	response := &pb.ScanShodanResponse{
		Result: &pb.ShodanSecurityResult{
			Hosts:  make([]*pb.ShodanHost, len(result.Hosts)),
			Errors: result.Errors,
		},
		ScanId: id,
	}
	for i, host := range result.Hosts {
		var ssl *pb.ShodanSSL
		if host.SSL != nil {
			ssl = &pb.ShodanSSL{
				Issuer:  host.SSL.Issuer,
				Subject: host.SSL.Subject,
				Expires: host.SSL.Expires,
			}
		}
		response.Result.Hosts[i] = &pb.ShodanHost{
			Ip:        host.IP,
			Port:      int32(host.Port),
			Hostnames: host.Hostnames,
			Os:        host.OS,
			Banner:    host.Banner,
			Tags:      host.Tags,
			Location: &pb.ShodanLocation{
				City:        host.Location.City,
				CountryName: host.Location.CountryName,
				Latitude:    host.Location.Latitude,
				Longitude:   host.Location.Longitude,
			},
			Ssl:       ssl,
			Domains:   host.Domains,
			Asn:       host.ASN,
			Org:       host.Org,
			Isp:       host.ISP,
			Timestamp: host.Timestamp,
			ShodanMeta: &pb.ShodanMetadata{
				Module: host.ShodanMeta.Module,
			},
		}
	}

	return response, nil
}

func (s *server) GetShodanScanResultsByDomain(ctx context.Context, req *pb.GetShodanScanResultsByDomainRequest) (*pb.GetShodanScanResultsByDomainResponse, error) {
	if s.shodanPlugin == nil {
		return nil, status.Error(codes.Unavailable, "ScanShodan plugin not loaded")
	}

	domain := strings.TrimSpace(strings.ToLower(req.GetDomain()))
	if domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}

	results, err := s.shodanPlugin.GetShodanScanResultsByDomain(domain)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to retrieve Shodan scan results: %v", err))
	}

	response := &pb.GetShodanScanResultsByDomainResponse{}
	for _, r := range results {
		hosts := make([]*pb.ShodanHost, len(r.Result.Hosts))
		for i, host := range r.Result.Hosts {
			var ssl *pb.ShodanSSL
			if host.SSL != nil {
				ssl = &pb.ShodanSSL{
					Issuer:  host.SSL.Issuer,
					Subject: host.SSL.Subject,
					Expires: host.SSL.Expires,
				}
			}
			hosts[i] = &pb.ShodanHost{
				Ip:        host.IP,
				Port:      int32(host.Port),
				Hostnames: host.Hostnames,
				Os:        host.OS,
				Banner:    host.Banner,
				Tags:      host.Tags,
				Location: &pb.ShodanLocation{
					City:        host.Location.City,
					CountryName: host.Location.CountryName,
					Latitude:    host.Location.Latitude,
					Longitude:   host.Location.Longitude,
				},
				Ssl:       ssl,
				Domains:   host.Domains,
				Asn:       host.ASN,
				Org:       host.Org,
				Isp:       host.ISP,
				Timestamp: host.Timestamp,
				ShodanMeta: &pb.ShodanMetadata{
					Module: host.ShodanMeta.Module,
				},
			}
		}
		response.Results = append(response.Results, &pb.ShodanScanResult{
			Id:        r.ID,
			Domain:    r.Domain,
			DnsScanId: r.DNSScanID,
			Result: &pb.ShodanSecurityResult{
				Hosts:  hosts,
				Errors: r.Result.Errors,
			},
			CreatedAt: r.CreatedAt.Format(time.RFC3339),
		})
	}
	return response, nil
}
