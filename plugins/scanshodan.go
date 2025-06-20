package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net"
	"net/http"
	"strings"
	"time"

	"github.com/google/uuid"
	"github.com/shadowscatcher/shodan"
	"golang.org/x/time/rate"
	//"github.com/shadowscatcher/shodan/models"
	"github.com/moos3/sparta/internal/config"
	"github.com/moos3/sparta/internal/db"
	"github.com/shadowscatcher/shodan/search"
)

// ScanShodanPlugin implements the Plugin interface
type ScanShodanPlugin struct {
	name        string
	db          *db.Database
	client      *shodan.Client
	rateLimiter *rate.Limiter
	config      *config.Config
}

// Name returns the plugin name
func (p *ScanShodanPlugin) Name() string {
	log.Printf("ScanShodanPlugin.Name called, returning: ScanShodan")
	return "ScanShodan"
}

// Initialize sets up the plugin
func (p *ScanShodanPlugin) Initialize() error {
	p.name = "ScanShodan"
	if p.db == nil {
		log.Printf("Warning: database connection not provided for plugin %s", p.name)
	} else {
		log.Printf("Initialized plugin %s with database connection", p.name)
	}

	// Initialize Shodan client
	if p.config == nil || p.config.Shodan.APIKey == "" {
		log.Printf("Warning: Shodan API key not provided in config")
		return fmt.Errorf("Shodan API key not provided")
	}

	// Create HTTP client with timeout
	httpClient := &http.Client{
		Timeout: 10 * time.Second,
	}
	client, err := shodan.GetClient(p.config.Shodan.APIKey, httpClient, true)
	if err != nil {
		return fmt.Errorf("failed to initialize Shodan client: %w", err)
	}
	p.client = client
	log.Printf("Initialized Shodan client for plugin %s", p.name)

	// Initialize rate limiter (requests per second = 1000ms / delay)
	rateLimit := rate.Limit(1000.0 / float64(p.config.Shodan.RequestDelay))
	p.rateLimiter = rate.NewLimiter(rateLimit, 1) // Burst of 1
	log.Printf("Initialized rate limiter for plugin %s with %d ms delay", p.name, p.config.Shodan.RequestDelay)

	return nil
}

// SetDatabase sets the database connection
func (p *ScanShodanPlugin) SetDatabase(db *db.Database) {
	p.db = db
	log.Printf("Database connection set for plugin %s", p.name)
}

// SetConfig sets the configuration
func (p *ScanShodanPlugin) SetConfig(cfg *config.Config) {
	p.config = cfg
	log.Printf("Configuration set for plugin %s", p.name)
}

// ScanShodan queries Shodan API for host information
func (p *ScanShodanPlugin) ScanShodan(domain string, dnsScanID string) (db.ShodanSecurityResult, error) {
	if p.db == nil {
		return db.ShodanSecurityResult{}, fmt.Errorf("database connection not provided")
	}
	if p.client == nil {
		return db.ShodanSecurityResult{}, fmt.Errorf("Shodan client not initialized")
	}

	result := db.ShodanSecurityResult{
		Errors: []string{},
	}

	// Normalize domain
	domain = strings.TrimSpace(strings.ToLower(domain))

	// Rate limit
	if err := p.rateLimiter.Wait(context.Background()); err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Rate limit error: %v", err))
		return result, nil
	}

	// Query Shodan API
	params := search.Params{
		Query: search.Query{
			Hostname: fmt.Sprintf("%s", domain),
		},
	}
	hosts, err := p.client.Search(context.Background(), params)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Shodan API query error: %v", err))
		return result, nil
	}

	// Collect host information
	for _, host := range hosts.Matches {
		ipStr := ""
		if host.IP != nil {
			ip := net.IPv4(byte(*host.IP>>24), byte(*host.IP>>16), byte(*host.IP>>8), byte(*host.IP)).String()
			ipStr = ip
		}
		osStr := ""
		if host.OS != nil {
			osStr = *host.OS
		}
		asnStr := ""
		if host.ASN != nil {
			asnStr = *host.ASN
		}
		orgStr := ""
		if host.Org != nil {
			orgStr = *host.Org
		}
		ispStr := ""
		if host.ISP != nil {
			ispStr = *host.ISP
		}
		var ssl *db.ShodanSSL
		if host.SSL != nil && host.SSL.Cert.Issuer.CN != "" {
			issuer := ""
			if host.SSL.Cert.Issuer.CN != "" {
				issuer = host.SSL.Cert.Issuer.CN
			}
			subject := ""
			if host.SSL.Cert.Subject.CN != "" {
				subject = host.SSL.Cert.Subject.CN
			}
			ssl = &db.ShodanSSL{
				Issuer:  issuer,
				Subject: subject,
				Expires: host.SSL.Cert.Expires,
			}
		}
		location := db.ShodanLocation{
			City:        "",
			CountryName: "",
			Latitude:    0.0,
			Longitude:   0.0,
		}
		if host.Location.City != nil {
			location.City = *host.Location.City
		}
		if host.Location.CountryName != nil {
			location.CountryName = *host.Location.CountryName
		}
		if host.Location.Latitude != nil {
			location.Latitude = float64(*host.Location.Latitude)
		}
		if host.Location.Longitude != nil {
			location.Longitude = float64(*host.Location.Longitude)
		}
		timestamp := host.Timestamp
		shodanMeta := db.ShodanMetadata{
			Module: host.Shodan.Module,
		}
		result.Hosts = append(result.Hosts, db.ShodanHost{
			IP:         ipStr,
			Port:       host.Port,
			Hostnames:  host.Hostnames,
			OS:         osStr,
			Banner:     host.Data,
			Tags:       host.Tags,
			Location:   location,
			SSL:        ssl,
			Domains:    host.Domains,
			ASN:        asnStr,
			Org:        orgStr,
			ISP:        ispStr,
			Timestamp:  timestamp,
			ShodanMeta: shodanMeta,
		})
	}

	// Store result
	id, err := p.InsertShodanScanResult(domain, dnsScanID, result)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Database storage error: %v", err))
		log.Printf("Failed to store Shodan scan result for %s: %v", domain, err)
	} else {
		log.Printf("Stored Shodan scan result for %s with ID: %s", domain, id)
	}

	return result, nil
}

// InsertShodanScanResult inserts a Shodan scan result into the database
func (p *ScanShodanPlugin) InsertShodanScanResult(domain string, dnsScanID string, result db.ShodanSecurityResult) (string, error) {
	if p.db == nil {
		return "", fmt.Errorf("database connection not provided")
	}
	id := uuid.New().String()
	resultJSON, err := json.Marshal(result)
	if err != nil {
		return "", fmt.Errorf("failed to marshal result: %w", err)
	}
	_, err = p.db.Exec(
		"INSERT INTO shodan_scan_results (id, domain, dns_scan_id, result, created_at) VALUES ($1, $2, $3, $4, $5)",
		id, domain, dnsScanID, resultJSON, time.Now())
	if err != nil {
		return "", fmt.Errorf("failed to insert Shodan scan result: %w", err)
	}
	return id, nil
}

// GetShodanScanResultsByDomain retrieves historical Shodan scan results
func (p *ScanShodanPlugin) GetShodanScanResultsByDomain(domain string) ([]struct {
	ID        string
	Domain    string
	DNSScanID string
	Result    db.ShodanSecurityResult
	CreatedAt time.Time
}, error) {
	if p.db == nil {
		return nil, fmt.Errorf("database connection not provided")
	}
	rows, err := p.db.Query(
		"SELECT id, domain, dns_scan_id, result, created_at FROM shodan_scan_results WHERE domain = $1 ORDER BY created_at DESC",
		strings.TrimSpace(strings.ToLower(domain)))
	if err != nil {
		return nil, fmt.Errorf("failed to query Shodan scan results: %w", err)
	}
	defer rows.Close()

	var results []struct {
		ID        string
		Domain    string
		DNSScanID string
		Result    db.ShodanSecurityResult
		CreatedAt time.Time
	}
	for rows.Next() {
		var id, domain, dnsScanID string
		var resultJSON []byte
		var createdAt time.Time
		if err := rows.Scan(&id, &domain, &dnsScanID, &resultJSON, &createdAt); err != nil {
			return nil, fmt.Errorf("failed to scan row: %w", err)
		}
		var result db.ShodanSecurityResult
		if err := json.Unmarshal(resultJSON, &result); err != nil {
			return nil, fmt.Errorf("failed to unmarshal result: %w", err)
		}
		results = append(results, struct {
			ID        string
			Domain    string
			DNSScanID string
			Result    db.ShodanSecurityResult
			CreatedAt time.Time
		}{ID: id, Domain: domain, DNSScanID: dnsScanID, Result: result, CreatedAt: createdAt})
	}
	return results, nil
}

// Plugin instance exported for the server
var Plugin ScanShodanPlugin
