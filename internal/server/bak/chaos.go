// internal/server/chaos.go
package bak

import (
	"context"
	"fmt"
	"github.com/moos3/sparta/internal/server"

	pb "github.com/moos3/sparta/proto"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/timestamppb"
)

// ScanChaos scans a domain using the Chaos plugin
func (s *server.Server) ScanChaos(ctx context.Context, req *pb.ScanChaosRequest) (*pb.ScanChaosResponse, error) {
	if s.ChaosPlugin == nil {
		return nil, status.Error(codes.Unavailable, "Chaos plugin not loaded")
	}
	if req.Domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}
	if req.DnsScanId == "" {
		return nil, status.Error(codes.InvalidArgument, "DNS scan ID is required")
	}
	exists, err := s.checkDNSScanID(req.DnsScanId)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to validate DNS scan ID: %v", err))
	}
	if !exists {
		return nil, status.Error(codes.InvalidArgument, "Invalid DNS scan ID")
	}
	result, err := s.ChaosPlugin.ScanChaos(ctx, req.Domain, req.DnsScanId)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Chaos scan failed: %v", err))
	}
	scanID, err := s.ChaosPlugin.InsertChaosScanResult(req.Domain, req.DnsScanId, result)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to store Chaos scan result: %v", err))
	}
	return &pb.ScanChaosResponse{
		ScanId: scanID,
		Result: &pb.ChaosSecurityResult{
			Subdomains: result.Subdomains,
			Errors:     result.Errors,
		},
	}, nil
}

// GetChaosScanResultsByDomain retrieves historical Chaos scan results for a domain
func (s *server.Server) GetChaosScanResultsByDomain(ctx context.Context, req *pb.GetChaosScanResultsByDomainRequest) (*pb.GetChaosScanResultsByDomainResponse, error) {
	if s.ChaosPlugin == nil {
		return nil, status.Error(codes.Unavailable, "Chaos plugin not loaded")
	}
	if req.Domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}
	results, err := s.ChaosPlugin.GetChaosScanResultsByDomain(req.Domain)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to retrieve Chaos scan results: %v", err))
	}
	pbResults := make([]*pb.ChaosScanResult, len(results))
	for i, r := range results {
		pbResults[i] = &pb.ChaosScanResult{
			Id:        r.ID,
			Domain:    r.Domain,
			DnsScanId: r.DNSScanID,
			Result: &pb.ChaosSecurityResult{
				Subdomains: r.Result.Subdomains,
				Errors:     r.Result.Errors,
			},
			CreatedAt: timestamppb.New(r.CreatedAt),
		}
	}
	return &pb.GetChaosScanResultsByDomainResponse{Results: pbResults}, nil
}
