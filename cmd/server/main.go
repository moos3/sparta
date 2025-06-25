// cmd/server/main.go
package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/moos3/sparta/internal/auth"
	"github.com/moos3/sparta/internal/config"
	"github.com/moos3/sparta/internal/db"
	"github.com/moos3/sparta/internal/email"
	"github.com/moos3/sparta/internal/interfaces"
	"github.com/moos3/sparta/internal/server"
	"github.com/moos3/sparta/plugins"
	pb "github.com/moos3/sparta/proto"
	"google.golang.org/grpc"
	"log"
	"net"
	"net/http"
)

// corsMiddleware is a simple CORS middleware that adds necessary headers for cross-origin requests.
func corsMiddleware(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Allow all origins for development. In production, restrict this to specific domains.
		w.Header().Set("Access-Control-Allow-Origin", "*")
		// Allowed HTTP methods for CORS requests.
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		// Allowed request headers, including gRPC-Web specific and custom headers like X-Api-Key.
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, X-Grpc-Web, X-User-Agent, Grpc-Metadata-X-Goog-Api-Key, x-grpc-web, Grpc-Metadata-X-Api-Key")
		// Expose custom headers to the client.
		w.Header().Set("Access-Control-Expose-Headers", "Grpc-Metadata-X-Api-Key")

		// Handle preflight OPTIONS requests immediately.
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		// Pass the request to the next handler in the chain.
		h.ServeHTTP(w, r)
	})
}

func main() {
	cfg, err := config.Load("config.yaml")
	if err != nil {
		log.Fatalf("Failed to load config: %v", err)
	}

	db, err := db.New(cfg)
	if err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
	}
	defer db.Close()

	emailService := email.New(cfg.Email.APIKey, cfg.Email.FromEmail)
	authService, err := auth.New(db, cfg, emailService)
	if err != nil {
		log.Fatalf("Failed to initialize auth service: %v", err)
	}

	// Instantiate plugins directly
	dnsSp := &plugins.ScanDNSPlugin{}
	dnsSp.SetDatabase(db)
	if err := dnsSp.Initialize(); err != nil {
		log.Fatalf("Failed to initialize DNS scan plugin: %v", err)
	}

	tlsSp := &plugins.ScanTLSPlugin{}
	tlsSp.SetDatabase(db)
	if err := tlsSp.Initialize(); err != nil {
		log.Fatalf("Failed to initialize TLS scan plugin: %v", err)
	}

	crtSp := &plugins.ScanCrtShPlugin{}
	crtSp.SetDatabase(db)
	if err := crtSp.Initialize(); err != nil {
		log.Fatalf("Failed to initialize CrtSh scan plugin: %v", err)
	}

	chaosSp := &plugins.ScanChaosPlugin{}
	chaosSp.SetDatabase(db)
	chaosSp.SetConfig(cfg)
	if err := chaosSp.Initialize(); err != nil {
		log.Fatalf("Failed to initialize Chaos scan plugin: %v", err)
	}

	shodanSp := &plugins.ScanShodanPlugin{}
	shodanSp.SetDatabase(db)
	shodanSp.SetConfig(cfg)
	if err := shodanSp.Initialize(); err != nil {
		log.Fatalf("Failed to initialize Shodan scan plugin: %v", err)
	}

	otxSp := &plugins.ScanOTXPlugin{}
	otxSp.SetDatabase(db)
	otxSp.SetConfig(cfg)
	if err := otxSp.Initialize(); err != nil {
		log.Fatalf("Failed to initialize OTX scan plugin: %v", err)
	}

	whoisSp := &plugins.ScanWhoisPlugin{}
	whoisSp.SetDatabase(db)
	if err := whoisSp.Initialize(); err != nil {
		log.Fatalf("Failed to initialize Whois scan plugin: %v", err)
	}

	abuseChSp := &plugins.ScanAbuseChPlugin{}
	abuseChSp.SetDatabase(db)
	abuseChSp.SetConfig(cfg)
	if err := abuseChSp.Initialize(); err != nil {
		log.Fatalf("Failed to initialize AbuseCh scan plugin: %v", err)
	}

	iscSp := &plugins.ScanISCPlugin{}
	iscSp.SetDatabase(db)
	iscSp.SetConfig(cfg) // Pass config for API key
	if err := iscSp.Initialize(); err != nil {
		log.Fatalf("Failed to initialize ISC scan plugin: %v", err)
	}

	// Create plugins map
	pluginMap := map[string]interfaces.GenericPlugin{
		"ScanDNS":     dnsSp,
		"ScanTLS":     tlsSp,
		"ScanCrtSh":   crtSp,
		"ScanChaos":   chaosSp,
		"ScanShodan":  shodanSp,
		"ScanOTX":     otxSp,
		"ScanWhois":   whoisSp,
		"ScanAbuseCh": abuseChSp,
		"ScanISC":     iscSp,
	}

	grpcServer := grpc.NewServer(
		grpc.UnaryInterceptor(authService.AuthInterceptor),
	)

	s := server.New(db, authService, emailService, pluginMap)
	reportService := server.NewReportService(db, pluginMap) // New ReportService

	pb.RegisterAuthServiceServer(grpcServer, authService)
	pb.RegisterUserServiceServer(grpcServer, s)
	pb.RegisterReportServiceServer(grpcServer, reportService) // Register ReportService

	authService.ScheduleAPIKeyRotation()

	// Create a TCP listener for the gRPC server.
	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", cfg.Server.GRPCPort))
	if err != nil {
		log.Fatalf("Failed to listen on port %d: %v", cfg.Server.GRPCPort, err)
	}

	// Wrap the gRPC server with grpc-web compatibility.
	wrappedGrpc := grpcweb.WrapServer(grpcServer, grpcweb.WithOriginFunc(func(origin string) bool {
		return true // Allow all origins for development
	}))

	// Create a new HTTP router using gorilla/mux.
	httpRouter := mux.NewRouter()

	// Handle gRPC-Web requests by prefixing them.
	// All requests starting with "/service." will be handled by the wrapped gRPC-Web server.
	httpRouter.PathPrefix("/service.").Handler(wrappedGrpc)

	// Create the HTTP server.
	httpServer := &http.Server{
		Addr: fmt.Sprintf(":%d", cfg.Server.HTTPPort),
		// Apply the CORS middleware to the entire HTTP router.
		Handler: corsMiddleware(httpRouter),
	}

	// Start the HTTP server in a goroutine.
	log.Printf("Starting gRPC server on port %d and HTTP server on port %d", cfg.Server.GRPCPort, cfg.Server.HTTPPort)
	go func() {
		if err := httpServer.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("Failed to serve HTTP: %v", err)
		}
	}()

	// Start the gRPC server (blocking call).
	if err := grpcServer.Serve(listener); err != nil {
		log.Fatalf("Failed to serve gRPC: %v", err)
	}
}
