// internal/server/abusech.go
package bak

import (
	"context"
	"fmt"
	"github.com/moos3/sparta/internal/db"
	"github.com/moos3/sparta/internal/server"
	"google.golang.org/protobuf/types/known/timestamppb"

	pb "github.com/moos3/sparta/proto"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (s *server.Server) ScanAbuseCh(ctx context.Context, req *pb.ScanAbuseChRequest) (*pb.ScanAbuseChResponse, error) {
	if s.AbuseChPlugin == nil {
		return nil, status.Error(codes.Unavailable, "AbuseCh plugin not loaded")
	}
	if req.Domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}
	// Validate dns_scan_id
	exists, err := s.checkDNSScanID(req.DnsScanId)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to validate DNS scan ID: %v", err))
	}
	if !exists {
		return nil, status.Error(codes.InvalidArgument, "Invalid DNS scan ID")
	}
	result, err := s.AbuseChPlugin.ScanAbuseCh(req.Domain, req.DnsScanId)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("AbuseCh scan failed: %v", err))
	}
	scanID, err := s.AbuseChPlugin.InsertAbuseChScanResult(req.Domain, req.DnsScanId, result)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to store AbuseCh scan result: %v", err))
	}
	return &pb.ScanAbuseChResponse{
		ScanId: scanID,
		Result: &pb.AbuseChSecurityResult{
			Iocs:   convertAbuseChIOCs(result.IOCs),
			Errors: result.Errors,
		},
	}, nil
}

func (s *server.Server) GetAbuseChScanResultsByDomain(ctx context.Context, req *pb.GetAbuseChScanResultsByDomainRequest) (*pb.GetAbuseChScanResultsByDomainResponse, error) {
	if s.AbuseChPlugin == nil {
		return nil, status.Error(codes.Unavailable, "AbuseCh plugin not loaded")
	}
	if req.Domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}
	results, err := s.AbuseChPlugin.GetAbuseChScanResultsByDomain(req.Domain)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to retrieve AbuseCh scan results: %v", err))
	}
	pbResults := make([]*pb.AbuseChScanResult, len(results))
	for i, r := range results {
		pbResults[i] = &pb.AbuseChScanResult{
			Id:        r.ID,
			Domain:    r.Domain,
			DnsScanId: r.DNSScanID,
			Result: &pb.AbuseChSecurityResult{
				Iocs:   convertAbuseChIOCs(r.Result.IOCs),
				Errors: r.Result.Errors,
			},
			CreatedAt: timestamppb.New(r.CreatedAt),
		}
	}
	return &pb.GetAbuseChScanResultsByDomainResponse{Results: pbResults}, nil
}

func convertAbuseChIOCs(iocs []db.AbuseChIOC) []*pb.AbuseChIOC {
	pbIOCs := make([]*pb.AbuseChIOC, len(iocs))
	for i, ioc := range iocs {
		pbIOCs[i] = &pb.AbuseChIOC{
			IocType:      ioc.IOCType,
			IocValue:     ioc.IOCValue,
			ThreatType:   ioc.ThreatType,
			Confidence:   ioc.Confidence,
			FirstSeen:    timestamppb.New(ioc.FirstSeen),
			LastSeen:     timestamppb.New(ioc.LastSeen),
			MalwareAlias: ioc.MalwareAlias,
			Tags:         ioc.Tags,
		}
	}
	return pbIOCs
}
