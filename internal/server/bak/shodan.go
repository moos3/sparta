// internal/server/shodan.go
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

func (s *server.Server) ScanShodan(ctx context.Context, req *pb.ScanShodanRequest) (*pb.ScanShodanResponse, error) {
	if s.ShodanPlugin == nil {
		return nil, status.Error(codes.Unavailable, "ScanShodan plugin not loaded")
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

	result, err := s.ShodanPlugin.ScanShodan(domain, dnsScanID)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to scan Shodan: %v", err))
	}

	id, err := s.ShodanPlugin.InsertShodanScanResult(domain, dnsScanID, result)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to store Shodan scan result: %v", err))
	}

	response := &pb.ScanShodanResponse{
		Result: &pb.ShodanSecurityResult{
			Hosts:  make([]*pb.ShodanHost, len(result.Hosts)),
			Errors: result.Errors,
		},
		ScanId: id,
	}
	for i, host := range result.Hosts {
		var ssl *pb.ShodanSSL
		if host.SSL != nil {
			ssl = &pb.ShodanSSL{
				Issuer:  host.SSL.Issuer,
				Subject: host.SSL.Subject,
				Expires: host.SSL.Expires,
			}
		}
		response.Result.Hosts[i] = &pb.ShodanHost{
			Ip:        host.IP,
			Port:      int32(host.Port),
			Hostnames: host.Hostnames,
			Os:        host.OS,
			Banner:    host.Banner,
			Tags:      host.Tags,
			Location: &pb.ShodanLocation{
				City:        host.Location.City,
				CountryName: host.Location.CountryName,
				Latitude:    host.Location.Latitude,
				Longitude:   host.Location.Longitude,
			},
			Ssl:       ssl,
			Domains:   host.Domains,
			Asn:       host.ASN,
			Org:       host.Org,
			Isp:       host.ISP,
			Timestamp: host.Timestamp,
			ShodanMeta: &pb.ShodanMetadata{
				Module: host.ShodanMeta.Module,
			},
		}
	}

	return response, nil
}

func (s *server.Server) GetShodanScanResultsByDomain(ctx context.Context, req *pb.GetShodanScanResultsByDomainRequest) (*pb.GetShodanScanResultsByDomainResponse, error) {
	if s.ShodanPlugin == nil {
		return nil, status.Error(codes.Unavailable, "ScanShodan plugin not loaded")
	}

	domain := strings.TrimSpace(strings.ToLower(req.GetDomain()))
	if domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}

	results, err := s.ShodanPlugin.GetShodanScanResultsByDomain(domain)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to retrieve Shodan scan results: %v", err))
	}

	response := &pb.GetShodanScanResultsByDomainResponse{}
	for _, r := range results {
		hosts := make([]*pb.ShodanHost, len(r.Result.Hosts))
		for i, host := range r.Result.Hosts {
			var ssl *pb.ShodanSSL
			if host.SSL != nil {
				ssl = &pb.ShodanSSL{
					Issuer:  host.SSL.Issuer,
					Subject: host.SSL.Subject,
					Expires: host.SSL.Expires,
				}
			}
			hosts[i] = &pb.ShodanHost{
				Ip:        host.IP,
				Port:      int32(host.Port),
				Hostnames: host.Hostnames,
				Os:        host.OS,
				Banner:    host.Banner,
				Tags:      host.Tags,
				Location: &pb.ShodanLocation{
					City:        host.Location.City,
					CountryName: host.Location.CountryName,
					Latitude:    host.Location.Latitude,
					Longitude:   host.Location.Longitude,
				},
				Ssl:       ssl,
				Domains:   host.Domains,
				Asn:       host.ASN,
				Org:       host.Org,
				Isp:       host.ISP,
				Timestamp: host.Timestamp,
				ShodanMeta: &pb.ShodanMetadata{
					Module: host.ShodanMeta.Module,
				},
			}
		}
		response.Results = append(response.Results, &pb.ShodanScanResult{
			Id:        r.ID,
			Domain:    r.Domain,
			DnsScanId: r.DNSScanID,
			Result: &pb.ShodanSecurityResult{
				Hosts:  hosts,
				Errors: r.Result.Errors,
			},
			CreatedAt: timestamppb.New(r.CreatedAt),
		})
	}
	return response, nil
}
