// plugins/scanwhois.go
package plugins

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"strings"
	"time"

	"github.com/google/uuid"
	"github.com/likexian/whois"
	"github.com/moos3/sparta/internal/config"
	"github.com/moos3/sparta/internal/db"
	"github.com/moos3/sparta/internal/interfaces"
	"github.com/moos3/sparta/proto"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type ScanWhoisPlugin struct {
	name   string
	db     db.Database
	config *config.Config
}

func (p *ScanWhoisPlugin) Initialize() error {
	p.name = "ScanWhois"
	if p.db == nil {
		log.Printf("Warning: database connection not provided for plugin %s", p.name)
	} else {
		log.Printf("Initialized plugin %s with database connection", p.name)
	}
	return nil
}

func (p *ScanWhoisPlugin) Name() string {
	return p.name
}

func (p *ScanWhoisPlugin) SetDatabase(db db.Database) {
	p.db = db
	log.Printf("Database connection set for plugin %s", p.name)
}

func (p *ScanWhoisPlugin) SetConfig(cfg *config.Config) error {
	p.config = cfg
	log.Printf("Configuration set for plugin %s", p.name)
	return nil
}

func (p *ScanWhoisPlugin) ScanWhois(domain, dnsScanID string) (*proto.WhoisSecurityResult, error) {
	if p.db == nil {
		return nil, fmt.Errorf("database connection not provided")
	}
	// Normalize domain
	domain = strings.TrimSpace(strings.ToLower(domain))
	domain = strings.TrimSuffix(domain, ".")

	// Perform Whois query
	result, err := whois.Whois(domain)
	if err != nil {
		return &proto.WhoisSecurityResult{Errors: []string{fmt.Sprintf("Whois query failed: %v", err)}}, nil
	}

	// Parse Whois result (simplified)
	registrar := ""
	expirationDate := time.Time{}
	lines := strings.Split(result, "\n")
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if strings.HasPrefix(line, "Registrar:") {
			registrar = strings.TrimSpace(strings.TrimPrefix(line, "Registrar:"))
		}
		if strings.HasPrefix(line, "Expiration Date:") || strings.HasPrefix(line, "Expiry Date:") {
			dateStr := strings.TrimSpace(strings.TrimPrefix(line, strings.Split(line, ":")[0]+":"))
			if parsed, err := time.Parse("2006-01-02", dateStr); err == nil {
				expirationDate = parsed
			}
		}
	}

	whoisResult := &proto.WhoisSecurityResult{
		Domain:     domain,
		Registrar:  registrar,
		ExpiryDate: timestamppb.New(expirationDate),
		Errors:     []string{},
	}
	// Store result
	id, err := p.InsertWhoisScanResult(domain, dnsScanID, whoisResult)
	if err != nil {
		whoisResult.Errors = append(whoisResult.Errors, fmt.Sprintf("Database storage error: %v", err))
		log.Printf("Failed to store Whois scan result for %s: %v", domain, err)
	} else {
		log.Printf("Stored Whois scan result for %s with ID: %s", domain, id)
	}
	return whoisResult, nil
}

func (p *ScanWhoisPlugin) InsertWhoisScanResult(domain, dnsScanID string, result *proto.WhoisSecurityResult) (string, error) {
	if p.db == nil {
		return "", fmt.Errorf("database connection not provided")
	}
	id := uuid.New().String()
	resultJSON, err := json.Marshal(result)
	if err != nil {
		return "", fmt.Errorf("failed to marshal result: %w", err)
	}
	query := `
		INSERT INTO whois_scan_results (id, domain, dns_scan_id, result, created_at)
		VALUES ($1, $2, $3, $4, $5)
	`
	_, err = p.db.Exec(query, id, domain, dnsScanID, resultJSON, time.Now())
	if err != nil {
		return "", fmt.Errorf("failed to insert Whois scan result: %w", err)
	}
	return id, nil
}

func (p *ScanWhoisPlugin) GetWhoisScanResultsByDomain(domain string) ([]interfaces.WhoisScanResult, error) {
	if p.db == nil {
		return nil, fmt.Errorf("database connection not provided")
	}
	query := `
		SELECT id, domain, dns_scan_id, result, created_at
		FROM whois_scan_results
		WHERE domain = $1
		ORDER BY created_at DESC
	`
	rows, err := p.db.Query(query, strings.TrimSpace(strings.ToLower(domain)))
	if err != nil {
		return nil, fmt.Errorf("failed to query Whois scan results: %w", err)
	}
	defer rows.Close()

	var results []interfaces.WhoisScanResult
	for rows.Next() {
		var r interfaces.WhoisScanResult
		var resultJSON []byte
		if err := rows.Scan(&r.ID, &r.Domain, &r.DNSScanID, &resultJSON, &r.CreatedAt); err != nil {
			return nil, fmt.Errorf("failed to scan row: %w", err)
		}
		var scanResult proto.WhoisSecurityResult
		if err := json.Unmarshal(resultJSON, &scanResult); err != nil {
			return nil, fmt.Errorf("failed to unmarshal result: %w", err)
		}
		r.Result = scanResult
		results = append(results, r)
	}
	return results, nil
}

// Scan implements the GenericPlugin interface
func (p *ScanWhoisPlugin) Scan(ctx context.Context, domain, dnsScanID string) (interface{}, error) {
	return p.ScanWhois(domain, dnsScanID)
}

// InsertResult implements the GenericPlugin interface
func (p *ScanWhoisPlugin) InsertResult(domain, dnsScanID string, result interface{}) (string, error) {
	whoisResult, ok := result.(*proto.WhoisSecurityResult)
	if !ok {
		return "", fmt.Errorf("invalid result type")
	}
	return p.InsertWhoisScanResult(domain, dnsScanID, whoisResult)
}
