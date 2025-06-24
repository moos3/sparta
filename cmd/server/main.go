// cmd/server/main.go
package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net"
	"net/http"
	"os"
	"path/filepath"
	"strings"

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
)

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

	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", cfg.Server.GRPCPort))
	if err != nil {
		log.Fatalf("Failed to listen on port %d: %v", cfg.Server.GRPCPort, err)
	}

	wrappedGrpc := grpcweb.WrapServer(grpcServer, grpcweb.WithOriginFunc(func(origin string) bool {
		return true // Allow all origins for development
	}))
	router := mux.NewRouter()
	router.HandleFunc("/{service:service\\..+}/{method}", func(w http.ResponseWriter, r *http.Request) {
		log.Printf("gRPC-Web request: %s", r.URL.Path)
		if wrappedGrpc.IsGrpcWebRequest(r) {
			wrappedGrpc.ServeHTTP(w, r)
			return
		}
		log.Printf("Non-gRPC-Web request to service path: %s", r.URL.Path)
		http.NotFound(w, r)
	})

	// Custom file server with correct MIME types and SPA fallback
	fileServer := http.FileServer(http.Dir("./web/dist"))
	router.PathPrefix("/").Handler(http.StripPrefix("/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Static request: %s", r.URL.Path)
		if strings.Contains(r.URL.Path, "/src/") {
			log.Printf("Blocked request to /src/: %s", r.URL.Path)
			http.Error(w, "Not found", http.StatusNotFound)
			return
		}
		path := filepath.Join("./web/dist", r.URL.Path)
		_, err := os.Stat(path)
		if os.IsNotExist(err) || !strings.Contains(r.URL.Path, ".") {
			log.Printf("Serving index.html for SPA route: %s", r.URL.Path)
			http.ServeFile(w, r, "./web/dist/index.html")
			return
		}
		ext := filepath.Ext(r.URL.Path)
		if ext == ".js" || ext == ".jsx" {
			w.Header().Set("Content-Type", "application/javascript")
		}
		fileServer.ServeHTTP(w, r)
	})))

	httpServer := &http.Server{
		Addr:    fmt.Sprintf(":%d", cfg.Server.HTTPPort),
		Handler: router,
	}

	log.Printf("Starting gRPC server on port %d and HTTP server on port %d", cfg.Server.GRPCPort, cfg.Server.HTTPPort)
	go func() {
		if err := httpServer.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("Failed to serve HTTP: %v", err)
		}
	}()

	if err := grpcServer.Serve(listener); err != nil {
		log.Fatalf("Failed to serve gRPC: %v", err)
	}
}
