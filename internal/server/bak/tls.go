// internal/server/tls.go
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

func (s *server.Server) ScanTLS(ctx context.Context, req *pb.ScanTLSRequest) (*pb.ScanTLSResponse, error) {
	if s.TlsPlugin == nil {
		return nil, status.Error(codes.Unavailable, "TLS plugin not loaded")
	}
	if req.Domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}
	if req.DnsScanId == "" {
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

	result, err := s.TlsPlugin.ScanTLS(req.Domain, req.DnsScanId)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to scan TLS: %v", err))
	}

	scanID, err := s.TlsPlugin.InsertTLSScanResult(req.Domain, req.DnsScanId, result)
	if err != nil {
		return nil, status.Error(codes.Internal, "Failed to store TLS scan result")
	}

	return &pb.ScanTLSResponse{
		ScanId: scanID,
		Result: &pb.TLSSecurityResult{
			TlsVersion:             result.TLSVersion,
			CipherSuite:            result.CipherSuite,
			HstsHeader:             result.HSTSHeader,
			CertificateValid:       result.CertificateValid,
			CertIssuer:             result.CertIssuer,
			CertSubject:            result.CertSubject,
			CertNotBefore:          timestamppb.New(result.CertNotBefore),
			CertNotAfter:           timestamppb.New(result.CertNotAfter),
			CertDnsNames:           result.CertDNSNames,
			CertKeyStrength:        int32(result.CertKeyStrength),
			CertSignatureAlgorithm: result.CertSignatureAlgorithm,
			Errors:                 result.Errors,
		},
	}, nil
}

func (s *server.Server) GetTLSScanResultsByDomain(ctx context.Context, req *pb.GetTLSScanResultsByDomainRequest) (*pb.GetTLSScanResultsByDomainResponse, error) {
	if s.TlsPlugin == nil {
		return nil, status.Error(codes.Unavailable, "TLS plugin not loaded")
	}
	if req.Domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}

	results, err := s.TlsPlugin.GetTLSScanResultsByDomain(req.Domain)
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
				CertNotBefore:          timestamppb.New(r.Result.CertNotBefore),
				CertNotAfter:           timestamppb.New(r.Result.CertNotAfter),
				CertDnsNames:           r.Result.CertDNSNames,
				CertKeyStrength:        int32(r.Result.CertKeyStrength),
				CertSignatureAlgorithm: r.Result.CertSignatureAlgorithm,
				Errors:                 r.Result.Errors,
			},
			CreatedAt: timestamppb.New(r.CreatedAt),
		})
	}
	return response, nil
}
