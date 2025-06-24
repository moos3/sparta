// plugins/scanabusech.go
package plugins

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"google.golang.org/protobuf/types/known/timestamppb"
	"io"
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/google/uuid"
	"github.com/moos3/sparta/internal/config"
	"github.com/moos3/sparta/internal/db"
	"github.com/moos3/sparta/internal/interfaces"
	"github.com/moos3/sparta/proto"
)

// ScanAbuseChPlugin implements the ScanAbuseChPlugin interface
type ScanAbuseChPlugin struct {
	name    string
	db      db.Database
	conifig *config.Config
}

// Name returns the plugin name
func (p *ScanAbuseChPlugin) Name() string {
	log.Printf("ScanAbuseChPlugin.Name called, returning: ScanAbuseCh")
	return "ScanAbuseCh"
}

// Initialize sets up the plugin
func (p *ScanAbuseChPlugin) Initialize() error {
	p.name = "ScanAbuseCh"
	if p.db == nil {
		log.Printf("Warning: database connection not provided for plugin %s", p.name)
	} else {
		log.Printf("Initialized plugin %s with database connection", p.name)
	}
	return nil
}

// SetDatabase sets the database connection
func (p *ScanAbuseChPlugin) SetDatabase(db db.Database) {
	p.db = db
	log.Printf("Database connection set for plugin %s", p.name)
}

// SetConfig sets the configuration for the plugin
func (p *ScanAbuseChPlugin) SetConfig(cfg *config.Config) error {
	p.conifig = cfg
	log.Printf("Configuration set for plugin %s", p.name)
	return nil
}

// ThreatFoxResponse represents the ThreatFox API response structure
type ThreatFoxResponse struct {
	QueryStatus string `json:"query_status"`
	Data        []struct {
		IOC          string   `json:"ioc"`
		IOCType      string   `json:"ioc_type"`
		ThreatType   string   `json:"threat_type"`
		Confidence   float64  `json:"confidence"`
		FirstSeen    string   `json:"first_seen"`
		LastSeen     string   `json:"last_seen"`
		MalwareAlias []string `json:"malware_alias"`
		Tags         []string `json:"tags"`
	} `json:"data"`
}

// ScanAbuseCh queries ThreatFox API for IOCs
func (p *ScanAbuseChPlugin) ScanAbuseCh(domain, dnsScanID string) (*proto.AbuseChSecurityResult, error) {
	if p.db == nil {
		return nil, fmt.Errorf("database connection not provided")
	}

	result := &proto.AbuseChSecurityResult{
		Errors: []string{},
	}

	// Normalize domain
	domain = strings.TrimSpace(strings.ToLower(domain))
	domain = strings.TrimSuffix(domain, ".")

	// Query ThreatFox API
	url := "https://threatfox-api.abuse.ch/api/v1/"
	payload := map[string]string{
		"query":       "search_ioc",
		"search_term": domain,
	}
	payloadBytes, err := json.Marshal(payload)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Failed to marshal API payload: %v", err))
		return result, nil
	}

	resp, err := http.Post(url, "application/json", bytes.NewBuffer(payloadBytes))
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("ThreatFox API request failed: %v", err))
		return result, nil
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Failed to read API response: %v", err))
		return result, nil
	}

	var tfResp ThreatFoxResponse
	if err := json.Unmarshal(body, &tfResp); err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Failed to unmarshal API response: %v", err))
		return result, nil
	}

	if tfResp.QueryStatus != "ok" {
		result.Errors = append(result.Errors, fmt.Sprintf("ThreatFox API error: %s", tfResp.QueryStatus))
		return result, nil
	}

	for _, item := range tfResp.Data {
		firstSeen, err := time.Parse("2006-01-02 15:04:05", item.FirstSeen)
		if err != nil {
			result.Errors = append(result.Errors, fmt.Sprintf("Failed to parse first_seen: %v", err))
			continue
		}
		lastSeen, err := time.Parse("2006-01-02 15:04:05", item.LastSeen)
		if err != nil {
			result.Errors = append(result.Errors, fmt.Sprintf("Failed to parse last_seen: %v", err))
			continue
		}
		result.Iocs = append(result.Iocs, &proto.AbuseChIOC{
			IocType:      item.IOCType,
			IocValue:     item.IOC,
			ThreatType:   item.ThreatType,
			Confidence:   float32(item.Confidence),
			FirstSeen:    timestamppb.New(firstSeen),
			LastSeen:     timestamppb.New(lastSeen),
			MalwareAlias: item.MalwareAlias,
			Tags:         item.Tags,
		})
	}

	// Store result
	id, err := p.InsertAbuseChScanResult(domain, dnsScanID, result)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Database storage error: %v", err))
		log.Printf("Failed to store AbuseCh scan result for %s: %v", domain, err)
	} else {
		log.Printf("Stored AbuseCh scan result for %s with ID: %s", domain, id)
	}

	return result, nil
}

// InsertAbuseChScanResult inserts an AbuseCh scan result into the database
func (p *ScanAbuseChPlugin) InsertAbuseChScanResult(domain, dnsScanID string, result *proto.AbuseChSecurityResult) (string, error) {
	if p.db == nil {
		return "", fmt.Errorf("database connection not provided")
	}
	id := uuid.New().String()
	resultJSON, err := json.Marshal(result)
	if err != nil {
		return "", fmt.Errorf("failed to marshal result: %w", err)
	}
	query := `
		INSERT INTO abusech_scan_results (id, domain, dns_scan_id, result, created_at)
		VALUES ($1, $2, $3, $4, $5)
	`
	_, err = p.db.Exec(query, id, domain, dnsScanID, resultJSON, time.Now())
	if err != nil {
		return "", fmt.Errorf("failed to insert AbuseCh scan result: %w", err)
	}
	return id, nil
}

// GetAbuseChScanResultsByDomain retrieves historical AbuseCh scan results
func (p *ScanAbuseChPlugin) GetAbuseChScanResultsByDomain(domain string) ([]interfaces.AbuseChScanResult, error) {
	if p.db == nil {
		return nil, fmt.Errorf("database connection not provided")
	}
	query := `
		SELECT id, domain, dns_scan_id, result, created_at
		FROM abusech_scan_results
		WHERE domain = $1
		ORDER BY created_at DESC
	`
	rows, err := p.db.Query(query, strings.TrimSpace(strings.ToLower(domain)))
	if err != nil {
		return nil, fmt.Errorf("failed to query AbuseCh scan results: %w", err)
	}
	defer rows.Close()

	var results []interfaces.AbuseChScanResult
	for rows.Next() {
		var r interfaces.AbuseChScanResult
		var resultJSON []byte
		if err := rows.Scan(&r.ID, &r.Domain, &r.DNSScanID, &resultJSON, &r.CreatedAt); err != nil {
			return nil, fmt.Errorf("failed to scan row: %w", err)
		}
		var scanResult proto.AbuseChSecurityResult
		if err := json.Unmarshal(resultJSON, &scanResult); err != nil {
			return nil, fmt.Errorf("failed to unmarshal result: %w", err)
		}
		r.Result = scanResult
		results = append(results, r)
	}
	return results, nil
}

// Scan implements the GenericPlugin interface
func (p *ScanAbuseChPlugin) Scan(ctx context.Context, domain, dnsScanID string) (interface{}, error) {
	return p.ScanAbuseCh(domain, dnsScanID)
}

// InsertResult implements the GenericPlugin interface
func (p *ScanAbuseChPlugin) InsertResult(domain, dnsScanID string, result interface{}) (string, error) {
	abuseChResult, ok := result.(*proto.AbuseChSecurityResult)
	if !ok {
		return "", fmt.Errorf("invalid result type")
	}
	return p.InsertAbuseChScanResult(domain, dnsScanID, abuseChResult)
}
