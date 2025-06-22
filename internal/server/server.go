package server

import (
	"context"
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

// GenerateReport triggers all plugins for a domain and generates a report.
func (s *Server) GenerateReport(ctx context.Context, req *pb.GenerateReportRequest) (*pb.GenerateReportResponse, error) {
	domain := strings.TrimSpace(strings.ToLower(req.GetDomain()))
	if domain == "" {
		return nil, status.Error(codes.InvalidArgument, "domain is required")
	}

	// Generate a shared dns_scan_id
	dnsScanID := uuid.New().String()

	// Run DNS scan first
	dnsPlugin, ok := s.plugins["ScanDNS"].(interfaces.DNSScanPlugin)
	if !ok {
		return nil, status.Error(codes.Internal, "DNS plugin not initialized")
	}
	dnsResult, err := dnsPlugin.ScanDomain(domain)
	if err != nil {
		log.Printf("DNS scan failed for %s: %v", domain, err)
	}
	_, err = dnsPlugin.InsertDNSScanResult(domain, dnsResult)
	if err != nil {
		log.Printf("Failed to store DNS scan result for %s: %v", domain, err)
	}

	// Run other plugins
	results := &scoring.DomainScanResults{
		DNS: &dnsResult,
	}
	pluginScans := []struct {
		name  string
		setFn func(interface{})
	}{
		{
			name:  "ScanTLS",
			setFn: func(r interface{}) { results.TLS = r.(*pb.TLSSecurityResult) },
		},
		{
			name:  "ScanCrtSh",
			setFn: func(r interface{}) { results.CrtSh = r.(*pb.CrtShSecurityResult) },
		},
		{
			name:  "ScanChaos",
			setFn: func(r interface{}) { results.Chaos = r.(*pb.ChaosSecurityResult) },
		},
		{
			name:  "ScanShodan",
			setFn: func(r interface{}) { results.Shodan = r.(*pb.ShodanSecurityResult) },
		},
		{
			name:  "ScanOTX",
			setFn: func(r interface{}) { results.OTX = r.(*pb.OTXSecurityResult) },
		},
		{
			name:  "ScanWhois",
			setFn: func(r interface{}) { results.Whois = r.(*pb.WhoisSecurityResult) },
		},
		{
			name:  "ScanAbuseCh",
			setFn: func(r interface{}) { results.AbuseCh = r.(*pb.AbuseChSecurityResult) },
		},
	}

	for _, scan := range pluginScans {
		plugin, ok := s.plugins[scan.name]
		if !ok {
			log.Printf("%s plugin not initialized", scan.name)
			continue
		}
		result, err := plugin.Scan(ctx, domain, dnsScanID)
		if err != nil {
			log.Printf("%s scan failed for %s: %v", scan.name, domain, err)
			continue
		}
		scan.setFn(result)
		_, err = plugin.InsertResult(domain, dnsScanID, result)
		if err != nil {
			log.Printf("Failed to store %s scan result for %s: %v", scan.name, domain, err)
		}
	}

	// Calculate risk score
	risk := scoring.CalculateRiskScore(results)

	// Store report
	reportID := uuid.New().String()
	query := `INSERT INTO reports (id, domain, dns_scan_id, score, risk_tier, created_at) 
	          VALUES ($1, $2, $3, $4, $5, $6)`
	_, err = s.db.Exec(query, reportID, domain, dnsScanID, risk.Score, risk.RiskTier, time.Now())
	if err != nil {
		log.Printf("Failed to store report for %s: %v", domain, err)
		return nil, status.Error(codes.Internal, "failed to store report")
	}

	return &pb.GenerateReportResponse{
		ReportId:  reportID,
		DnsScanId: dnsScanID,
		Score:     int32(risk.Score),
		RiskTier:  risk.RiskTier,
		CreatedAt: timestamppb.New(time.Now()),
	}, nil
}

// ListReports retrieves all reports, optionally filtered by domain.
func (s *Server) ListReports(ctx context.Context, req *pb.ListReportsRequest) (*pb.ListReportsResponse, error) {
	query := `SELECT id, domain, dns_scan_id, score, risk_tier, created_at FROM reports`
	args := []interface{}{}
	if domain := strings.TrimSpace(strings.ToLower(req.GetDomain())); domain != "" {
		query += ` WHERE domain = $1`
		args = append(args, domain)
	}
	rows, err := s.db.Query(query, args...)
	if err != nil {
		log.Printf("Failed to list reports: %v", err)
		return nil, status.Error(codes.Internal, "failed to list reports")
	}
	defer rows.Close()

	var reports []*pb.Report
	for rows.Next() {
		var id, domain, dnsScanID, riskTier string
		var score int32
		var createdAt time.Time
		if err := rows.Scan(&id, &domain, &dnsScanID, &score, &riskTier, &createdAt); err != nil {
			log.Printf("Failed to scan report: %v", err)
			continue
		}
		reports = append(reports, &pb.Report{
			ReportId:  id,
			Domain:    domain,
			DnsScanId: dnsScanID,
			Score:     score,
			RiskTier:  riskTier,
			CreatedAt: timestamppb.New(createdAt),
		})
	}

	return &pb.ListReportsResponse{
		Reports: reports,
	}, nil
}
