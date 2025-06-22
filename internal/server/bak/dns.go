// internal/server/dns.go
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

func (s *server.Server) ScanDomain(ctx context.Context, req *pb.ScanDomainRequest) (*pb.ScanDomainResponse, error) {
	if s.DnsPlugin == nil {
		return nil, status.Error(codes.Unavailable, "DNS plugin not loaded")
	}
	if req.Domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}

	result, err := s.DnsPlugin.ScanDomain(req.Domain)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to scan domain: %v", err))
	}

	scanID, err := s.DnsPlugin.InsertDNSScanResult(req.Domain, result)
	if err != nil {
		return nil, status.Error(codes.Internal, "Failed to store DNS scan result")
	}

	return &pb.ScanDomainResponse{
		ScanId: scanID,
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
	}, nil
}

// GetDNSScanResultsByDomain retrieves historical DNS scan results for a domain
func (s *server.Server) GetDNSScanResultsByDomain(ctx context.Context, req *pb.GetDNSScanResultsByDomainRequest) (*pb.GetDNSScanResultsByDomainResponse, error) {
	if s.DnsPlugin == nil {
		return nil, status.Error(codes.Unavailable, "DNS plugin not loaded")
	}
	if req.Domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}
	results, err := s.DnsPlugin.GetDNSScanResultsByDomain(req.Domain)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to retrieve DNS scan results: %v", err))
	}
	pbResults := make([]*pb.DNSScanResult, len(results))
	for i, r := range results {
		pbResults[i] = &pb.DNSScanResult{
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
			CreatedAt: timestamppb.New(r.CreatedAt),
		}
	}
	return &pb.GetDNSScanResultsByDomainResponse{Results: pbResults}, nil
}

// GetDNSScanResultByID retrieves a single DNS scan result by ID
func (s *server.Server) GetDNSScanResultByID(ctx context.Context, req *pb.GetDNSScanResultByIDRequest) (*pb.GetDNSScanResultByIDResponse, error) {
	if s.DnsPlugin == nil {
		return nil, status.Error(codes.Unavailable, "DNS plugin not loaded")
	}
	if req.DnsScanId == "" {
		return nil, status.Error(codes.InvalidArgument, "DNS scan ID is required")
	}
	result, err := s.DnsPlugin.GetDNSScanResultByID(req.DnsScanId)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to retrieve DNS scan result: %v", err))
	}
	return &pb.GetDNSScanResultByIDResponse{
		Result: &pb.DNSScanResult{
			Id:        result.ID,
			Domain:    result.Domain,
			DnsScanId: result.DNSScanID,
			Result: &pb.DNSSecurityResult{
				SpfRecord:             result.Result.SPFRecord,
				SpfValid:              result.Result.SPFValid,
				SpfPolicy:             result.Result.SPFPolicy,
				DkimRecord:            result.Result.DKIMRecord,
				DkimValid:             result.Result.DKIMValid,
				DkimValidationError:   result.Result.DKIMValidationError,
				DmarcRecord:           result.Result.DMARCRecord,
				DmarcPolicy:           result.Result.DMARCPolicy,
				DmarcValid:            result.Result.DMARCValid,
				DmarcValidationError:  result.Result.DMARCValidationError,
				DnssecEnabled:         result.Result.DNSSECEnabled,
				DnssecValid:           result.Result.DNSSECValid,
				DnssecValidationError: result.Result.DNSSECValidationError,
				IpAddresses:           result.Result.IPAddresses,
				MxRecords:             result.Result.MXRecords,
				NsRecords:             result.Result.NSRecords,
				Errors:                result.Result.Errors,
			},
			CreatedAt: timestamppb.New(result.CreatedAt),
		},
	}, nil
}

func (s *server.Server) checkDNSScanID(dnsScanID string) (bool, error) {
	if dnsScanID == "" {
		return false, fmt.Errorf("DNS scan ID is empty")
	}
	var exists bool
	query := "SELECT EXISTS (SELECT 1 FROM dns_scan_results WHERE id = $1)"
	err := s.Db.QueryRow(query, dnsScanID).Scan(&exists)
	if err != nil {
		return false, fmt.Errorf("failed to check DNS scan ID: %w", err)
	}
	return exists, nil
}
