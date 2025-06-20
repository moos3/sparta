package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/google/uuid"
	"github.com/moos3/sparta/internal/config"
	"github.com/moos3/sparta/internal/db"
	"golang.org/x/time/rate"
)

// ScanOTXPlugin implements the OTX scan plugin
type ScanOTXPlugin struct {
	name        string
	db          *db.Database
	client      *http.Client
	rateLimiter *rate.Limiter
	config      *config.Config
}

// Name returns the plugin name
func (p *ScanOTXPlugin) Name() string {
	log.Printf("ScanOTXPlugin.Name called, returning: ScanOTX")
	return "ScanOTX"
}

// Initialize sets up the plugin
func (p *ScanOTXPlugin) Initialize() error {
	p.name = "ScanOTX"
	if p.db == nil {
		log.Printf("Warning: database connection not provided for plugin %s", p.name)
	}
	if p.config == nil || p.config.OTX.APIKey == "" {
		log.Printf("Warning: OTX API key not provided in config")
		return fmt.Errorf("OTX API key not provided")
	}

	// Create HTTP client with timeout
	p.client = &http.Client{
		Timeout: 10 * time.Second,
	}
	log.Printf("Initialized HTTP client for plugin %s", p.name)

	// Initialize rate limiter (requests per second = 1000ms / delay)
	rateLimit := rate.Limit(1000.0 / float64(p.config.OTX.RequestDelay))
	p.rateLimiter = rate.NewLimiter(rateLimit, 1) // Burst of 1
	log.Printf("Initialized rate limiter for plugin %s with %d ms delay", p.name, p.config.OTX.RequestDelay)

	return nil
}

// SetDatabase sets the database connection
func (p *ScanOTXPlugin) SetDatabase(db *db.Database) {
	p.db = db
	log.Printf("Database connection set for plugin %s", p.name)
}

// SetConfig sets the configuration
func (p *ScanOTXPlugin) SetConfig(cfg *config.Config) {
	p.config = cfg
	log.Printf("Configuration set for plugin %s", p.name)
}

// ScanOTX queries AlienVault OTX API for threat intelligence
func (p *ScanOTXPlugin) ScanOTX(domain string, dnsScanID string) (db.OTXSecurityResult, error) {
	if p.db == nil {
		return db.OTXSecurityResult{}, fmt.Errorf("database connection not provided")
	}
	if p.client == nil {
		return db.OTXSecurityResult{}, fmt.Errorf("OTX client not initialized")
	}

	result := db.OTXSecurityResult{
		Errors: []string{},
	}

	// Normalize domain
	domain = strings.TrimSpace(strings.ToLower(domain))

	// Rate limit
	if err := p.rateLimiter.Wait(context.Background()); err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Rate limit error: %v", err))
		return result, nil
	}

	// Query OTX API for general domain info
	generalInfo, err := p.queryOTXGeneral(domain)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("OTX general query error: %v", err))
	} else {
		result.GeneralInfo = generalInfo
	}

	// Query OTX API for malware
	malware, err := p.queryOTXMalware(domain)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("OTX malware query error: %v", err))
	} else {
		result.Malware = malware
	}

	// Query OTX API for URLs
	urls, err := p.queryOTXURLs(domain)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("OTX URLs query error: %v", err))
	} else {
		result.URLs = urls
	}

	// Query OTX API for passive DNS
	passiveDNS, err := p.queryOTXPassiveDNS(domain)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("OTX passive DNS query error: %v", err))
	} else {
		result.PassiveDNS = passiveDNS
	}

	// Store result
	id, err := p.InsertOTXScanResult(domain, dnsScanID, result)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Database storage error: %v", err))
		log.Printf("Failed to store OTX scan result for %s: %v", domain, err)
	} else {
		log.Printf("Stored OTX scan result for %s with ID: %s", domain, id)
	}

	return result, nil
}

// queryOTXGeneral queries the OTX general endpoint
func (p *ScanOTXPlugin) queryOTXGeneral(domain string) (*db.OTXGeneralInfo, error) {
	url := fmt.Sprintf("%sindicators/domain/%s/general", p.config.OTX.BaseURL, domain)
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("X-OTX-API-KEY", p.config.OTX.APIKey)

	resp, err := p.client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("OTX general query failed: status %d", resp.StatusCode)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var general struct {
		PulseCount int      `json:"pulse_count"`
		Pulses     []string `json:"pulses"`
	}
	if err := json.Unmarshal(body, &general); err != nil {
		return nil, err
	}

	return &db.OTXGeneralInfo{
		PulseCount: general.PulseCount,
		Pulses:     general.Pulses,
	}, nil
}

// queryOTXMalware queries the OTX malware endpoint
func (p *ScanOTXPlugin) queryOTXMalware(domain string) ([]db.OTXMalware, error) {
	url := fmt.Sprintf("%sindicators/domain/%s/malware", p.config.OTX.BaseURL, domain)
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("X-OTX-API-KEY", p.config.OTX.APIKey)

	resp, err := p.client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("OTX malware query failed: status %d", resp.StatusCode)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var malwareData []struct {
		Hash     string `json:"hash"`
		Datetime string `json:"datetime"`
	}
	if err := json.Unmarshal(body, &malwareData); err != nil {
		return nil, err
	}

	malware := make([]db.OTXMalware, len(malwareData))
	for i, m := range malwareData {
		malware[i] = db.OTXMalware{
			Hash:     m.Hash,
			Datetime: m.Datetime,
		}
	}
	return malware, nil
}

// queryOTXURLs queries the OTX URLs endpoint
func (p *ScanOTXPlugin) queryOTXURLs(domain string) ([]db.OTXURL, error) {
	url := fmt.Sprintf("%sindicators/domain/%s/url_list", p.config.OTX.BaseURL, domain)
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("X-OTX-API-KEY", p.config.OTX.APIKey)

	resp, err := p.client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("OTX URLs query failed: status %d", resp.StatusCode)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var urlData []struct {
		URL      string `json:"url"`
		Datetime string `json:"datetime"`
	}
	if err := json.Unmarshal(body, &urlData); err != nil {
		return nil, err
	}

	urls := make([]db.OTXURL, len(urlData))
	for i, u := range urlData {
		urls[i] = db.OTXURL{
			URL:      u.URL,
			Datetime: u.Datetime,
		}
	}
	return urls, nil
}

// queryOTXPassiveDNS queries the OTX passive DNS endpoint
func (p *ScanOTXPlugin) queryOTXPassiveDNS(domain string) ([]db.OTXPassiveDNS, error) {
	url := fmt.Sprintf("%sindicators/domain/%s/passive_dns", p.config.OTX.BaseURL, domain)
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("X-OTX-API-KEY", p.config.OTX.APIKey)

	resp, err := p.client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("OTX passive DNS query failed: status %d", resp.StatusCode)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var dnsData []struct {
		Address  string `json:"address"`
		Hostname string `json:"hostname"`
		Record   string `json:"record_type"`
		Datetime string `json:"first_seen"`
	}
	if err := json.Unmarshal(body, &dnsData); err != nil {
		return nil, err
	}

	passiveDNS := make([]db.OTXPassiveDNS, len(dnsData))
	for i, d := range dnsData {
		passiveDNS[i] = db.OTXPassiveDNS{
			Address:  d.Address,
			Hostname: d.Hostname,
			Record:   d.Record,
			Datetime: d.Datetime,
		}
	}
	return passiveDNS, nil
}

// InsertOTXScanResult inserts an OTX scan result into the database
func (p *ScanOTXPlugin) InsertOTXScanResult(domain string, dnsScanID string, result db.OTXSecurityResult) (string, error) {
	if p.db == nil {
		return "", fmt.Errorf("database connection not provided")
	}
	id := uuid.New().String()
	resultJSON, err := json.Marshal(result)
	if err != nil {
		return "", fmt.Errorf("failed to marshal result: %w", err)
	}
	_, err = p.db.Exec(
		"INSERT INTO otx_scan_results (id, domain, dns_scan_id, result, created_at) VALUES ($1, $2, $3, $4, $5)",
		id, domain, dnsScanID, resultJSON, time.Now())
	if err != nil {
		return "", fmt.Errorf("failed to insert OTX scan result: %w", err)
	}
	return id, nil
}

// GetOTXScanResultsByDomain retrieves historical OTX scan results
func (p *ScanOTXPlugin) GetOTXScanResultsByDomain(domain string) ([]struct {
	ID        string
	Domain    string
	DNSScanID string
	Result    db.OTXSecurityResult
	CreatedAt time.Time
}, error) {
	if p.db == nil {
		return nil, fmt.Errorf("database connection not provided")
	}
	rows, err := p.db.Query(
		"SELECT id, domain, dns_scan_id, result, created_at FROM otx_scan_results WHERE domain = $1 ORDER BY created_at DESC",
		strings.TrimSpace(strings.ToLower(domain)))
	if err != nil {
		return nil, fmt.Errorf("failed to query OTX scan results: %w", err)
	}
	defer rows.Close()

	var results []struct {
		ID        string
		Domain    string
		DNSScanID string
		Result    db.OTXSecurityResult
		CreatedAt time.Time
	}
	for rows.Next() {
		var id, domain, dnsScanID string
		var resultJSON []byte
		var createdAt time.Time
		if err := rows.Scan(&id, &domain, &dnsScanID, &resultJSON, &createdAt); err != nil {
			return nil, fmt.Errorf("failed to scan row: %w", err)
		}
		var result db.OTXSecurityResult
		if err := json.Unmarshal(resultJSON, &result); err != nil {
			return nil, fmt.Errorf("failed to unmarshal result: %w", err)
		}
		results = append(results, struct {
			ID        string
			Domain    string
			DNSScanID string
			Result    db.OTXSecurityResult
			CreatedAt time.Time
		}{ID: id, Domain: domain, DNSScanID: dnsScanID, Result: result, CreatedAt: createdAt})
	}
	return results, nil
}

// Plugin instance exported for the server
var Plugin ScanOTXPlugin
