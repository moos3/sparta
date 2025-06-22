// internal/server/whois.go
package bak

import (
	"context"
	"fmt"
	"github.com/moos3/sparta/internal/server"
	"strings"

	pb "github.com/moos3/sparta/proto"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func (s *server.Server) ScanWhois(ctx context.Context, req *pb.ScanWhoisRequest) (*pb.ScanWhoisResponse, error) {
	if s.WhoisPlugin == nil {
		return nil, status.Error(codes.Unavailable, "ScanWhois plugin not loaded")
	}

	domain := strings.TrimSpace(strings.ToLower(req.GetDomain()))
	dnsScanID := req.GetDnsScanId()
	if domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}
	if dnsScanID == "" {
		return nil, status.Error(codes.InvalidArgument, "DNS scan ID is required")
	}

	// Validate dns_scan_id
	exists, err := s.checkDNSScanID(req.DnsScanId)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to validate DNS scan ID: %v", err))
	}
	if !exists {
		return nil, status.Error(codes.InvalidArgument, "Invalid DNS scan ID")
	}

	result, err := s.WhoisPlugin.ScanWhois(domain, dnsScanID)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to scan WHOIS: %v", err))
	}

	id, err := s.WhoisPlugin.InsertWhoisScanResult(domain, dnsScanID, result)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to store WHOIS scan result: %v", err))
	}

	return &pb.ScanWhoisResponse{
		Result: &pb.WhoisSecurityResult{
			Registrar:      result.Registrar,
			CreationDate:   timestamppb.New(result.CreationDate),
			ExpiryDate:     timestamppb.New(result.ExpiryDate),
			RegistrantName: result.RegistrantName,
			Errors:         result.Errors,
		},
		ScanId: id,
	}, nil
}

func (s *server.Server) GetWhoisScanResultsByDomain(ctx context.Context, req *pb.GetWhoisScanResultsByDomainRequest) (*pb.GetWhoisScanResultsByDomainResponse, error) {
	if s.WhoisPlugin == nil {
		return nil, status.Error(codes.Unavailable, "ScanWhois plugin not loaded")
	}

	domain := strings.TrimSpace(strings.ToLower(req.GetDomain()))
	if domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}

	results, err := s.WhoisPlugin.GetWhoisScanResultsByDomain(domain)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to retrieve WHOIS scan results: %v", err))
	}

	response := &pb.GetWhoisScanResultsByDomainResponse{}
	for _, r := range results {
		response.Results = append(response.Results, &pb.WhoisScanResult{
			Id:        r.ID,
			Domain:    r.Domain,
			DnsScanId: r.DNSScanID,
			Result: &pb.WhoisSecurityResult{
				Registrar:      r.Result.Registrar,
				CreationDate:   timestamppb.New(r.Result.CreationDate),
				ExpiryDate:     timestamppb.New(r.Result.ExpiryDate),
				RegistrantName: r.Result.RegistrantName,
				Errors:         r.Result.Errors,
			},
			CreatedAt: timestamppb.New(r.CreatedAt),
		})
	}
	return response, nil
}
