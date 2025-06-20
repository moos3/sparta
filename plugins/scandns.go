package main

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"strings"
	"time"

	"github.com/google/uuid"
	"github.com/moos3/sparta/internal/db"
)

// ScanDNSPlugin implements the DNS scan plugin
type ScanDNSPlugin struct {
	name string
	db   *db.Database
}

// Name returns the plugin name
func (p *ScanDNSPlugin) Name() string {
	log.Printf("ScanDNSPlugin.Name called, returning: ScanDNS")
	return "ScanDNS"
}

// Initialize sets up the plugin
func (p *ScanDNSPlugin) Initialize() error {
	p.name = "ScanDNS"
	if p.db == nil {
		log.Printf("Warning: database connection not provided for plugin %s", p.name)
	} else {
		log.Printf("Initialized plugin %s with database connection", p.name)
	}
	return nil
}

// SetDatabase sets the database connection
func (p *ScanDNSPlugin) SetDatabase(db *db.Database) {
	p.db = db
	log.Printf("Database connection set for plugin %s", p.name)
}

// ScanDomain performs a DNS security scan
func (p *ScanDNSPlugin) ScanDomain(domain string) (db.DNSSecurityResult, error) {
	if p.db == nil {
		return db.DNSSecurityResult{}, fmt.Errorf("database connection not provided")
	}

	domain = strings.TrimSpace(strings.ToLower(domain))
	result := db.DNSSecurityResult{
		Errors: []string{},
	}

	// Placeholder: Mock DNS scan logic
	result.SPFRecord = "v=spf1 include:_spf.example.com -all"
	result.SPFValid = true
	result.SPFPolicy = "hardfail"
	result.DKIMRecord = "v=DKIM1; k=rsa; p=..."
	result.DKIMValid = true
	result.DMARCRecord = "v=DMARC1; p=reject;"
	result.DMARCPolicy = "reject"
	result.DMARCValid = true
	result.DNSSECEnabled = true
	result.DNSSECValid = true
	result.IPAddresses = []string{"93.184.216.34"}
	result.MXRecords = []string{"mail.example.com"}
	result.NSRecords = []string{"ns1.example.com"}

	// Store result
	id, err := p.InsertDNSScanResult(domain, result)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Database storage error: %v", err))
		log.Printf("Failed to store DNS scan result for %s: %v", domain, err)
	} else {
		log.Printf("Stored DNS scan result for %s with ID: %s", domain, id)
	}

	return result, nil
}

// InsertDNSScanResult inserts a DNS scan result into the database
func (p *ScanDNSPlugin) InsertDNSScanResult(domain string, result db.DNSSecurityResult) (string, error) {
	if p.db == nil {
		return "", fmt.Errorf("database connection not provided")
	}
	id := uuid.New().String()
	resultJSON, err := json.Marshal(result)
	if err != nil {
		return "", fmt.Errorf("failed to marshal result: %w", err)
	}
	_, err = p.db.Exec(
		"INSERT INTO dns_scan_results (id, domain, result, created_at) VALUES ($1, $2, $3, $4)",
		id, domain, resultJSON, time.Now())
	if err != nil {
		return "", fmt.Errorf("failed to insert DNS scan result: %w", err)
	}
	return id, nil
}

// GetDNSScanResultsByDomain retrieves historical DNS scan results
func (p *ScanDNSPlugin) GetDNSScanResultsByDomain(domain string) ([]struct {
	ID        string
	Domain    string
	Result    db.DNSSecurityResult
	CreatedAt time.Time
}, error) {
	if p.db == nil {
		return nil, fmt.Errorf("database connection not provided")
	}
	rows, err := p.db.Query(
		"SELECT id, domain, result, created_at FROM dns_scan_results WHERE domain = $1 ORDER BY created_at DESC",
		strings.TrimSpace(strings.ToLower(domain)))
	if err != nil {
		return nil, fmt.Errorf("failed to query DNS scan results: %w", err)
	}
	defer rows.Close()

	var results []struct {
		ID        string
		Domain    string
		Result    db.DNSSecurityResult
		CreatedAt time.Time
	}
	for rows.Next() {
		var id, domain string
		var resultJSON []byte
		var createdAt time.Time
		if err := rows.Scan(&id, &domain, &resultJSON, &createdAt); err != nil {
			return nil, fmt.Errorf("failed to scan row: %w", err)
		}
		var result db.DNSSecurityResult
		if err := json.Unmarshal(resultJSON, &result); err != nil {
			return nil, fmt.Errorf("failed to unmarshal result: %w", err)
		}
		results = append(results, struct {
			ID        string
			Domain    string
			Result    db.DNSSecurityResult
			CreatedAt time.Time
		}{ID: id, Domain: domain, Result: result, CreatedAt: createdAt})
	}
	return results, nil
}

// Plugin instance exported for the server
var Plugin ScanDNSPlugin
