// internal/server/otx.go
package bak

import (
	"context"
	"fmt"
	"github.com/moos3/sparta/internal/server"
	pb "github.com/moos3/sparta/proto"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/timestamppb"
	"strings"
)

func (s *server.Server) ScanOTX(ctx context.Context, req *pb.ScanOTXRequest) (*pb.ScanOTXResponse, error) {
	if s.OtxPlugin == nil {
		return nil, status.Error(codes.Unavailable, "ScanOTX plugin not loaded")
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

	result, err := s.OtxPlugin.ScanOTX(domain, dnsScanID)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to scan OTX: %v", err))
	}

	id, err := s.OtxPlugin.InsertOTXScanResult(domain, dnsScanID, result)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to store OTX scan result: %v", err))
	}

	response := &pb.ScanOTXResponse{
		Result: &pb.OTXSecurityResult{
			Errors: result.Errors,
		},
		ScanId: id,
	}

	if result.GeneralInfo != nil {
		response.Result.GeneralInfo = &pb.OTXGeneralInfo{
			PulseCount: int32(result.GeneralInfo.PulseCount),
			Pulses:     result.GeneralInfo.Pulses,
		}
	}

	for _, m := range result.Malware {
		response.Result.Malware = append(response.Result.Malware, &pb.OTXMalware{
			Hash:     m.Hash,
			Datetime: m.Datetime,
		})
	}

	for _, u := range result.Urls {
		response.Result.Urls = append(response.Result.Urls, &pb.OTXURL{
			Url:      u.URL,
			Datetime: u.Datetime,
		})
	}

	for _, p := range result.PassiveDNS {
		response.Result.PassiveDns = append(response.Result.PassiveDns, &pb.OTXPassiveDNS{
			Address:  p.Address,
			Hostname: p.Hostname,
			Record:   p.Record,
			Datetime: p.Datetime,
		})
	}

	return response, nil
}

func (s *server.Server) GetOTXScanResultsByDomain(ctx context.Context, req *pb.GetOTXScanResultsByDomainRequest) (*pb.GetOTXScanResultsByDomainResponse, error) {
	if s.OtxPlugin == nil {
		return nil, status.Error(codes.Unavailable, "ScanOTX plugin not loaded")
	}

	domain := strings.TrimSpace(strings.ToLower(req.GetDomain()))
	if domain == "" {
		return nil, status.Error(codes.InvalidArgument, "Domain is required")
	}

	results, err := s.OtxPlugin.GetOTXScanResultsByDomain(domain)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to retrieve OTX scan results: %v", err))
	}

	response := &pb.GetOTXScanResultsByDomainResponse{}
	for _, r := range results {
		otxResult := &pb.OTXSecurityResult{
			Errors: r.Result.Errors,
		}

		if r.Result.GeneralInfo != nil {
			otxResult.GeneralInfo = &pb.OTXGeneralInfo{
				PulseCount: int32(r.Result.GeneralInfo.PulseCount),
				Pulses:     r.Result.GeneralInfo.Pulses,
			}
		}

		for _, m := range r.Result.Malware {
			otxResult.Malware = append(otxResult.Malware, &pb.OTXMalware{
				Hash:     m.Hash,
				Datetime: m.Datetime,
			})
		}

		for _, u := range r.Result.Urls {
			otxResult.Urls = append(otxResult.Urls, &pb.OTXURL{
				Url:      u.URL,
				Datetime: u.Datetime,
			})
		}

		for _, p := range r.Result.PassiveDNS {
			otxResult.PassiveDns = append(otxResult.PassiveDns, &pb.OTXPassiveDNS{
				Address:  p.Address,
				Hostname: p.Hostname,
				Record:   p.Record,
				Datetime: p.Datetime,
			})
		}

		response.Results = append(response.Results, &pb.OTXScanResult{
			Id:        r.ID,
			Domain:    r.Domain,
			DnsScanId: r.DNSScanID,
			Result:    otxResult,
			CreatedAt: timestamppb.New(r.CreatedAt),
		})
	}

	return response, nil
}
