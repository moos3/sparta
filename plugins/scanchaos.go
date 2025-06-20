package main

import (
	"encoding/json"
	"fmt"
	"github.com/google/uuid"
	"log"
	"strings"
	"time"

	"context"
	"github.com/moos3/sparta/internal/config"
	"github.com/moos3/sparta/internal/db"
	"github.com/projectdiscovery/chaos-client/pkg/chaos"
	"golang.org/x/time/rate"
)

// ScanChaosPlugin implements the Plugin interface
type ScanChaosPlugin struct {
	name        string
	db          *db.Database
	client      *chaos.Client
	rateLimiter *rate.Limiter
	config      *config.Config
}

// Name returns the plugin name
func (p *ScanChaosPlugin) Name() string {
	log.Printf("ScanChaosPlugin.Name called, returning: ScanChaos")
	return "ScanChaos"
}

// Initialize sets up the plugin
func (p *ScanChaosPlugin) Initialize() error {
	p.name = "ScanChaos"
	if p.db == nil {
		log.Printf("Warning: database connection not provided for plugin %s", p.name)
	} else {
		log.Printf("Initialized plugin %s with database connection", p.name)
	}

	// Initialize Chaos client
	if p.config == nil || p.config.Chaos.APIKey == "" {
		log.Printf("Warning: Chaos API key not provided in config")
		return fmt.Errorf("Chaos API key not provided")
	}

	client := chaos.New(p.config.Chaos.APIKey)

	p.client = client
	log.Printf("Initialized Chaos client for plugin %s with base URL %s", p.name, p.config.Chaos.BaseURL)

	// Initialize rate limiter (requests per second = 1000ms / delay)
	rateLimit := rate.Limit(1000.0 / float64(p.config.Chaos.RequestDelay))
	p.rateLimiter = rate.NewLimiter(rateLimit, int(rateLimit))
	log.Printf("Initialized rate limiter for plugin %s with %d ms delay", p.name, p.config.Chaos.RequestDelay)

	return nil
}

// SetDatabase sets the database connection
func (p *ScanChaosPlugin) SetDatabase(db *db.Database) {
	p.db = db
	log.Printf("Database connection set for plugin %s", p.name)
}

// SetConfig sets the configuration
func (p *ScanChaosPlugin) SetConfig(cfg *config.Config) {
	p.config = cfg
	log.Printf("Configuration set for plugin %s", p.name)
}

// ScanChaos queries Chaos API for subdomain information
func (p *ScanChaosPlugin) ScanChaos(domain string, dnsScanID string) (db.ChaosSecurityResult, error) {
	if p.db == nil {
		return db.ChaosSecurityResult{}, fmt.Errorf("database connection not provided")
	}
	if p.client == nil {
		return db.ChaosSecurityResult{}, fmt.Errorf("Chaos client not initialized")
	}

	result := db.ChaosSecurityResult{
		Errors: []string{},
	}

	// Normalize domain
	domain = strings.TrimSpace(strings.ToLower(domain))

	// Rate limit
	if err := p.rateLimiter.Wait(context.Background()); err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Rate limit error: %v", err))
		return result, nil
	}

	// Query Chaos API
	subdomains := p.client.GetSubdomains(&chaos.SubdomainsRequest{
		Domain: domain,
	})

	// Collect subdomains
	for subdomain := range subdomains {
		result.Subdomains = append(result.Subdomains, subdomain.Subdomain)
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

// InsertChaosScanResult inserts a Chaos scan result into the database
func (p *ScanChaosPlugin) InsertChaosScanResult(domain string, dnsScanID string, result db.ChaosSecurityResult) (string, error) {
	if p.db == nil {
		return "", fmt.Errorf("database connection not provided")
	}
	id := uuid.New().String()
	resultJSON, err := json.Marshal(result)
	if err != nil {
		return "", fmt.Errorf("failed to marshal result: %w", err)
	}
	_, err = p.db.Exec(
		"INSERT INTO chaos_scan_results (id, domain, dns_scan_id, result, created_at) VALUES ($1, $2, $3, $4, $5)",
		id, domain, dnsScanID, resultJSON, time.Now())
	if err != nil {
		return "", fmt.Errorf("failed to insert Chaos scan result: %w", err)
	}
	return id, nil
}

// GetChaosScanResultsByDomain retrieves historical Chaos scan results
func (p *ScanChaosPlugin) GetChaosScanResultsByDomain(domain string) ([]struct {
	ID        string
	Domain    string
	DNSScanID string
	Result    db.ChaosSecurityResult
	CreatedAt time.Time
}, error) {
	if p.db == nil {
		return nil, fmt.Errorf("database connection not provided")
	}
	rows, err := p.db.Query(
		"SELECT id, domain, dns_scan_id, result, created_at FROM chaos_scan_results WHERE domain = $1 ORDER BY created_at DESC",
		strings.TrimSpace(strings.ToLower(domain)))
	if err != nil {
		return nil, fmt.Errorf("failed to query Chaos scan results: %w", err)
	}
	defer rows.Close()

	var results []struct {
		ID        string
		Domain    string
		DNSScanID string
		Result    db.ChaosSecurityResult
		CreatedAt time.Time
	}
	for rows.Next() {
		var id, domain, dnsScanID string
		var resultJSON []byte
		var createdAt time.Time
		if err := rows.Scan(&id, &domain, &dnsScanID, &resultJSON, &createdAt); err != nil {
			return nil, fmt.Errorf("failed to scan row: %w", err)
		}
		var result db.ChaosSecurityResult
		if err := json.Unmarshal(resultJSON, &result); err != nil {
			return nil, fmt.Errorf("failed to unmarshal result: %w", err)
		}
		results = append(results, struct {
			ID        string
			Domain    string
			DNSScanID string
			Result    db.ChaosSecurityResult
			CreatedAt time.Time
		}{ID: id, Domain: domain, DNSScanID: dnsScanID, Result: result, CreatedAt: createdAt})
	}
	return results, nil
}

// Plugin instance exported for the server
var Plugin ScanChaosPlugin
