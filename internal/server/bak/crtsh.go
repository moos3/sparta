// internal/server/crtsh.go
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

func (s *server.Server) ScanCrtSh(ctx context.Context, req *pb.ScanCrtShRequest) (*pb.ScanCrtShResponse, error) {
	if s.CrtShPlugin == nil {
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

	// Validate dns_scan_id
	exists, err := s.checkDNSScanID(req.DnsScanId)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to validate DNS scan ID: %v", err))
	}
	if !exists {
		return nil, status.Error(codes.InvalidArgument, "Invalid DNS scan ID")
	}

	result, err := s.CrtShPlugin.ScanCrtSh(domain, dnsScanID)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to scan crt.sh: %v", err))
	}

	id, err := s.CrtShPlugin.InsertCrtShScanResult(domain, dnsScanID, result)
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
			NotBefore:          timestamppb.New(cert.NotBefore),
			NotAfter:           timestamppb.New(cert.NotAfter),
			SerialNumber:       cert.SerialNumber,
			DnsNames:           cert.DNSNames,
			SignatureAlgorithm: cert.SignatureAlgorithm,
		}
	}

	return response, nil
}

func (s *server.Server) GetCrtShScanResultsByDomain(ctx context.Context, req *pb.GetCrtShScanResultsByDomainRequest) (*pb.GetCrtShScanResultsByDomainResponse, error) {
	if s.CrtShPlugin == nil {
		return nil, status.Error(codes.Unavailable, "ScanCrtSh plugin not loaded")
	}

	domain := strings.TrimSpace(strings.ToLower(req.GetDomain()))
	if domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}

	results, err := s.CrtShPlugin.GetCrtShScanResultsByDomain(domain)
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
				NotBefore:          timestamppb.New(cert.NotBefore),
				NotAfter:           timestamppb.New(cert.NotAfter),
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
			CreatedAt: timestamppb.New(r.CreatedAt),
		})
	}
	return response, nil
}
