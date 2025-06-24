// plugins/scanchaos.go
package plugins

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"strings"
	"time"

	"github.com/google/uuid"
	"github.com/moos3/sparta/internal/config"
	"github.com/moos3/sparta/internal/db"
	"github.com/moos3/sparta/internal/interfaces"
	"github.com/moos3/sparta/proto"
	"github.com/projectdiscovery/chaos-client/pkg/chaos"
	"golang.org/x/time/rate"
)

type ScanChaosPlugin struct {
	name        string
	db          db.Database
	client      *chaos.Client
	rateLimiter *rate.Limiter
	config      *config.Config
}

func (p *ScanChaosPlugin) Initialize() error {
	p.name = "ScanChaos"
	//if p.config == nil {
	//	log.Printf("Warning: configuration not provided for plugin %s", p.name)
	//	return nil
	//}
	if p.config.Chaos.APIKey == "" {
		log.Printf("Warning: Chaos API key not provided for plugin %s", p.name)
		return nil
	}
	if p.db == nil {
		log.Printf("Warning: database connection not provided for plugin %s", p.name)
	}
	p.client = chaos.New(p.config.Chaos.APIKey)
	p.rateLimiter = rate.NewLimiter(rate.Every(time.Duration(p.config.Chaos.RequestDelay)*time.Millisecond), 1)
	return nil
}

func (p *ScanChaosPlugin) Name() string {
	return p.name
}

func (p *ScanChaosPlugin) SetDatabase(db db.Database) {
	p.db = db
	log.Printf("Database connection set for plugin %s", p.name)
}

func (p *ScanChaosPlugin) SetConfig(cfg *config.Config) error {
	p.config = cfg
	log.Printf("Configuration set for plugin %s", p.name)
	return nil
}

func (p *ScanChaosPlugin) ScanChaos(ctx context.Context, domain, dnsScanID string) (*proto.ChaosSecurityResult, error) {
	if p.client == nil {
		return nil, fmt.Errorf("Chaos client not initialized; API key may be missing")
	}
	if p.db == nil {
		return nil, fmt.Errorf("database not initialized for plugin %s", p.name)
	}
	// Validate dnsScanID
	var exists bool
	err := p.db.QueryRow("SELECT EXISTS (SELECT 1 FROM dns_scan_results WHERE id = $1)", dnsScanID).Scan(&exists)
	if err != nil {
		return nil, fmt.Errorf("failed to validate DNS scan ID: %v", err)
	}
	if !exists {
		return nil, fmt.Errorf("invalid DNS scan ID: %s", dnsScanID)
	}

	// Rate-limited Chaos API call
	if err := p.rateLimiter.Wait(ctx); err != nil {
		return nil, fmt.Errorf("rate limiter error: %v", err)
	}
	result := &proto.ChaosSecurityResult{
		Subdomains: []string{},
	}

	subdomains := p.client.GetSubdomains(&chaos.SubdomainsRequest{Domain: domain})
	for item := range subdomains {
		if item.Error != nil {
			log.Printf("Error retrieving subdomains for %s: %v", domain, item.Error)
			result.Errors = append(result.Errors, fmt.Sprintf("Error retrieving subdomain: %v", item.Error))
			continue
		}
		if item.Subdomain != "" {
			log.Printf("Discovered subdomain: %s", item.Subdomain)
			result.Subdomains = append(result.Subdomains, item.Subdomain)
		}
	}

	// Store result
	id, err := p.InsertChaosScanResult(domain, dnsScanID, result)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Database storage error: %v", err))
		log.Printf("Failed to store Chaos scan result for %s: %v", domain, err)
	} else {
		log.Printf("Stored Chaos scan result for %s with ID: %s", domain, id)
	}

	return result, nil
}

func (p *ScanChaosPlugin) InsertChaosScanResult(domain, dnsScanID string, result *proto.ChaosSecurityResult) (string, error) {
	if p.db == nil {
		return "", fmt.Errorf("database not initialized for plugin %s", p.name)
	}
	id := uuid.New().String()
	resultJSON, err := json.Marshal(result)
	if err != nil {
		return "", fmt.Errorf("failed to marshal result: %w", err)
	}
	query := `
		INSERT INTO chaos_scan_results (id, domain, dns_scan_id, result, created_at)
		VALUES ($1, $2, $3, $4, $5)
	`
	_, err = p.db.Exec(query, id, domain, dnsScanID, resultJSON, time.Now())
	if err != nil {
		return "", fmt.Errorf("failed to insert Chaos scan result: %w", err)
	}
	return id, nil
}

func (p *ScanChaosPlugin) GetChaosScanResultsByDomain(domain string) ([]interfaces.ChaosScanResult, error) {
	if p.db == nil {
		return nil, fmt.Errorf("database not initialized for plugin %s", p.name)
	}
	query := `
		SELECT id, domain, dns_scan_id, result, created_at
		FROM chaos_scan_results
		WHERE domain = $1
		ORDER BY created_at DESC
	`
	rows, err := p.db.Query(query, strings.TrimSpace(strings.ToLower(domain)))
	if err != nil {
		return nil, fmt.Errorf("failed to query Chaos scan results: %w", err)
	}
	defer rows.Close()

	var results []interfaces.ChaosScanResult
	for rows.Next() {
		var r interfaces.ChaosScanResult
		var resultJSON []byte
		if err := rows.Scan(&r.ID, &r.Domain, &r.DNSScanID, &resultJSON, &r.CreatedAt); err != nil {
			return nil, fmt.Errorf("failed to scan row: %w", err)
		}
		var scanResult proto.ChaosSecurityResult
		if err := json.Unmarshal(resultJSON, &scanResult); err != nil {
			return nil, fmt.Errorf("failed to unmarshal result: %w", err)
		}
		r.Result = scanResult
		results = append(results, r)
	}
	return results, nil
}

// Scan implements the GenericPlugin interface
func (p *ScanChaosPlugin) Scan(ctx context.Context, domain, dnsScanID string) (interface{}, error) {
	return p.ScanChaos(ctx, domain, dnsScanID)
}

// InsertResult implements the GenericPlugin interface
func (p *ScanChaosPlugin) InsertResult(domain, dnsScanID string, result interface{}) (string, error) {
	chaosResult, ok := result.(*proto.ChaosSecurityResult)
	if !ok {
		return "", fmt.Errorf("invalid result type")
	}
	return p.InsertChaosScanResult(domain, dnsScanID, chaosResult)
}
