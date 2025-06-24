package server

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"time"

	"github.com/google/uuid"
	"github.com/moos3/sparta/internal/db"
	"github.com/moos3/sparta/internal/interfaces"
	pb "github.com/moos3/sparta/proto"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type ReportService struct {
	db      db.Database
	plugins map[string]interfaces.GenericPlugin
	pb.UnimplementedReportServiceServer
}

func NewReportService(db db.Database, plugins map[string]interfaces.GenericPlugin) *ReportService {
	return &ReportService{
		db:      db,
		plugins: plugins,
	}
}

func (s *ReportService) GenerateReport(ctx context.Context, req *pb.GenerateReportRequest) (*pb.GenerateReportResponse, error) {
	userID, ok := ctx.Value("user_id").(string)
	if !ok {
		return nil, status.Error(codes.Unauthenticated, "missing user ID")
	}

	domain := req.GetDomain()
	if domain == "" {
		return nil, status.Error(codes.InvalidArgument, "domain is required")
	}

	// Generate DNS scan
	dnsScanID := uuid.New().String()
	var dnsResult pb.DNSSecurityResult
	if plugin, exists := s.plugins["ScanDNS"]; exists {
		result, err := plugin.Scan(ctx, domain, "")
		if err != nil {
			log.Printf("DNS scan failed for %s: %v", domain, err)
		} else if dnsRes, ok := result.(*pb.DNSSecurityResult); ok {
			dnsResult = *dnsRes
		}
	}

	// Store DNS scan result
	query := `
		INSERT INTO dns_scans (id, user_id, domain, spf_record, spf_valid, dkim_record, dkim_valid, dmarc_record, dmarc_policy, dmarc_valid, dnssec_enabled, created_at)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
	`
	_, err := s.db.Exec(query, dnsScanID, userID, domain, dnsResult.GetSpfRecord(), dnsResult.GetSpfValid(),
		dnsResult.GetDkimRecord(), dnsResult.GetDkimValid(), dnsResult.GetDmarcRecord(),
		dnsResult.GetDmarcPolicy(), dnsResult.GetDmarcValid(), dnsResult.GetDnssecEnabled(), time.Now())
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to store DNS scan: %v", err)
	}

	// Run other scans
	for name, plugin := range s.plugins {
		if name != "ScanDNS" {
			// Pass dns_scan_id as a string
			_, err := plugin.Scan(ctx, domain, fmt.Sprintf("dns_scan_id=%s", dnsScanID))
			if err != nil {
				log.Printf("%s scan failed for %s: %v", name, domain, err)
			}
		}
	}

	// Calculate risk score
	riskScore := 100 // Simplified; integrate scoring logic
	riskTier := "Low"
	if riskScore < 50 {
		riskTier = "High"
	} else if riskScore < 75 {
		riskTier = "Medium"
	}

	// Store report
	reportID := uuid.New().String()
	query = `
		INSERT INTO reports (id, user_id, domain, dns_scan_id, score, risk_tier, created_at)
		VALUES ($1, $2, $3, $4, $5, $6, $7)
	`
	_, err = s.db.Exec(query, reportID, userID, domain, dnsScanID, riskScore, riskTier, time.Now())
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to store report: %v", err)
	}

	return &pb.GenerateReportResponse{
		ReportId:  reportID,
		DnsScanId: dnsScanID,
		Score:     int32(riskScore),
		RiskTier:  riskTier,
		CreatedAt: timestamppb.Now(),
	}, nil
}

func (s *ReportService) ListReports(ctx context.Context, req *pb.ListReportsRequest) (*pb.ListReportsResponse, error) {
	userID, ok := ctx.Value("user_id").(string)
	if !ok {
		return nil, status.Error(codes.Unauthenticated, "missing user ID")
	}

	query := `
		SELECT id, domain, dns_scan_id, score, risk_tier, created_at
		FROM reports
		WHERE user_id = $1
	`
	args := []interface{}{userID}
	if domain := req.GetDomain(); domain != "" {
		query += " AND domain = $2"
		args = append(args, domain)
	}

	rows, err := s.db.Query(query, args...)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to list reports: %v", err)
	}
	defer rows.Close()

	var reports []*pb.Report
	for rows.Next() {
		var r pb.Report
		var createdAt time.Time
		if err := rows.Scan(&r.ReportId, &r.Domain, &r.DnsScanId, &r.Score, &r.RiskTier, &createdAt); err != nil {
			return nil, status.Errorf(codes.Internal, "failed to scan report: %v", err)
		}
		r.CreatedAt = timestamppb.New(createdAt)
		reports = append(reports, &r)
	}

	return &pb.ListReportsResponse{Reports: reports}, nil
}

func (s *ReportService) GetReportById(ctx context.Context, req *pb.GetReportByIdRequest) (*pb.GetReportByIdResponse, error) {
	userID, ok := ctx.Value("user_id").(string)
	if !ok {
		return nil, status.Error(codes.Unauthenticated, "missing user ID")
	}

	reportID := req.GetReportId()
	if reportID == "" {
		return nil, status.Error(codes.InvalidArgument, "report ID is required")
	}

	query := `
		SELECT id, domain, dns_scan_id, score, risk_tier, created_at
		FROM reports
		WHERE id = $1 AND user_id = $2
	`
	var r pb.Report
	var createdAt time.Time
	err := s.db.QueryRow(query, reportID, userID).Scan(&r.ReportId, &r.Domain, &r.DnsScanId, &r.Score, &r.RiskTier, &createdAt)
	if err == sql.ErrNoRows {
		return nil, status.Error(codes.NotFound, "report not found")
	}
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to get report: %v", err)
	}
	r.CreatedAt = timestamppb.New(createdAt)

	return &pb.GetReportByIdResponse{Report: &r}, nil
}
