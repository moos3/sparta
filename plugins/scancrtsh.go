package plugins

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"strings"
	"time"

	"github.com/google/uuid"
	"github.com/moos3/sparta/internal/db"
	"github.com/moos3/sparta/internal/interfaces"
	"github.com/moos3/sparta/proto"
	"golang.org/x/time/rate"
	"google.golang.org/protobuf/types/known/timestamppb"
)

// ScanCrtShPlugin implements the CrtShScanPlugin interface
type ScanCrtShPlugin struct {
	name        string
	db          db.Database
	rateLimiter *rate.Limiter
}

// Name returns the plugin name
func (p *ScanCrtShPlugin) Name() string {
	log.Printf("ScanCrtShPlugin.Name called, returning: ScanCrtSh")
	return "ScanCrtSh"
}

// Initialize sets up the plugin
func (p *ScanCrtShPlugin) Initialize() error {
	p.name = "ScanCrtSh"
	p.rateLimiter = rate.NewLimiter(10, 10) // 10 requests per second
	if p.db == nil {
		log.Printf("Warning: database connection not provided for plugin %s", p.name)
	} else {
		log.Printf("Initialized plugin %s with database connection", p.name)
	}
	return nil
}

// SetDatabase sets the database connection
func (p *ScanCrtShPlugin) SetDatabase(db db.Database) {
	p.db = db
	log.Printf("Database connection set for plugin %s", p.name)
}

// ScanCrtSh queries crt.sh for certificate and subdomain information
func (p *ScanCrtShPlugin) ScanCrtSh(domain string, dnsScanID string) (*proto.CrtShSecurityResult, error) {
	if p.db == nil {
		return nil, fmt.Errorf("database connection not provided")
	}

	result := &proto.CrtShSecurityResult{
		Errors: []string{},
	}

	// Normalize domain
	domain = strings.TrimSpace(strings.ToLower(domain))

	// Query crt.sh for certificates
	certs, subdomains, err := p.queryCrtSh(domain)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("crt.sh query error: %v", err))
	} else {
		result.Certificates = certs
		result.Subdomains = subdomains
	}

	// Store result
	id, err := p.InsertCrtShScanResult(domain, dnsScanID, result)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Database storage error: %v", err))
		log.Printf("Failed to store crt.sh scan result for %s: %v", domain, err)
	} else {
		log.Printf("Stored crt.sh scan result for %s with ID: %s", domain, id)
	}

	return result, nil
}

// InsertCrtShScanResult inserts a crt.sh scan result into the database
func (p *ScanCrtShPlugin) InsertCrtShScanResult(domain string, dnsScanID string, result *proto.CrtShSecurityResult) (string, error) {
	if p.db == nil {
		return "", fmt.Errorf("database connection not provided")
	}
	id := uuid.New().String()
	resultJSON, err := json.Marshal(result)
	if err != nil {
		return "", fmt.Errorf("failed to marshal result: %w", err)
	}
	query := `
		INSERT INTO crtsh_scan_results (id, domain, dns_scan_id, result, created_at)
		VALUES ($1, $2, $3, $4, $5)
	`
	_, err = p.db.Exec(query, id, domain, dnsScanID, resultJSON, time.Now())
	if err != nil {
		return "", fmt.Errorf("failed to insert crt.sh scan result: %w", err)
	}
	return id, nil
}

// GetCrtShScanResultsByDomain retrieves historical crt.sh scan results
func (p *ScanCrtShPlugin) GetCrtShScanResultsByDomain(domain string) ([]interfaces.CrtShScanResult, error) {
	if p.db == nil {
		return nil, fmt.Errorf("database connection not provided")
	}
	query := `
		SELECT id, domain, dns_scan_id, result, created_at
		FROM crtsh_scan_results
		WHERE domain = $1
		ORDER BY created_at DESC
	`
	rows, err := p.db.Query(query, strings.TrimSpace(strings.ToLower(domain)))
	if err != nil {
		return nil, fmt.Errorf("failed to query crt.sh scan results: %w", err)
	}
	defer rows.Close()

	var results []interfaces.CrtShScanResult
	for rows.Next() {
		var r interfaces.CrtShScanResult
		var resultJSON []byte
		if err := rows.Scan(&r.ID, &r.Domain, &r.DNSScanID, &resultJSON, &r.CreatedAt); err != nil {
			return nil, fmt.Errorf("failed to scan row: %w", err)
		}
		var scanResult proto.CrtShSecurityResult
		if err := json.Unmarshal(resultJSON, &scanResult); err != nil {
			return nil, fmt.Errorf("failed to unmarshal result: %w", err)
		}
		r.Result = scanResult
		results = append(results, r)
	}
	return results, nil
}

// Scan implements the GenericPlugin interface
func (p *ScanCrtShPlugin) Scan(ctx context.Context, domain, dnsScanID string) (interface{}, error) {
	return p.ScanCrtSh(domain, dnsScanID)
}

// InsertResult implements the GenericPlugin interface
func (p *ScanCrtShPlugin) InsertResult(domain, dnsScanID string, result interface{}) (string, error) {
	crtShResult, ok := result.(*proto.CrtShSecurityResult)
	if !ok {
		return "", fmt.Errorf("invalid result type")
	}
	return p.InsertCrtShScanResult(domain, dnsScanID, crtShResult)
}

// queryCrtSh queries crt.sh API for certificates and subdomains
func (p *ScanCrtShPlugin) queryCrtSh(domain string) ([]*proto.CrtShCertificate, []string, error) {
	ctx := context.Background()
	client := &http.Client{Timeout: 10 * time.Second}

	// Rate limit
	if err := p.rateLimiter.Wait(ctx); err != nil {
		return nil, nil, fmt.Errorf("rate limit error: %v", err)
	}

	// Query crt.sh
	query := url.QueryEscape("%." + domain)
	url := fmt.Sprintf("https://crt.sh/?q=%s&output=json", query)
	resp, err := client.Get(url)
	if err != nil {
		return nil, nil, fmt.Errorf("failed to query crt.sh: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, nil, fmt.Errorf("crt.sh returned status: %s", resp.Status)
	}

	var entries []struct {
		ID                 int64  `json:"id"`
		CommonName         string `json:"common_name"`
		Issuer             string `json:"issuer_name"`
		NotBefore          string `json:"not_before"`
		NotAfter           string `json:"not_after"`
		SerialNumber       string `json:"serial_number"`
		NameValue          string `json:"name_value"`
		SignatureAlgorithm string `json:"signature_algorithm"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&entries); err != nil {
		return nil, nil, fmt.Errorf("failed to decode crt.sh response: %v", err)
	}

	// Process certificates and extract subdomains
	var certs []*proto.CrtShCertificate
	subdomainSet := make(map[string]struct{})
	for _, entry := range entries {
		// Parse dates
		notBefore, err := time.Parse("2006-01-02T15:04:05", entry.NotBefore)
		if err != nil {
			log.Printf("Failed to parse not_before: %v", err)
			continue
		}
		notAfter, err := time.Parse("2006-01-02T15:04:05", entry.NotAfter)
		if err != nil {
			log.Printf("Failed to parse not_after: %v", err)
			continue
		}

		// Extract DNS names from name_value
		dnsNames := strings.Split(entry.NameValue, "\n")
		for i, name := range dnsNames {
			dnsNames[i] = strings.TrimSpace(name)
		}

		certs = append(certs, &proto.CrtShCertificate{
			Id:                 entry.ID,
			CommonName:         entry.CommonName,
			Issuer:             entry.Issuer,
			NotBefore:          timestamppb.New(notBefore),
			NotAfter:           timestamppb.New(notAfter),
			SerialNumber:       entry.SerialNumber,
			DnsNames:           dnsNames,
			SignatureAlgorithm: entry.SignatureAlgorithm,
		})

		// Collect subdomains
		for _, name := range dnsNames {
			if strings.HasSuffix(name, "."+domain) {
				subdomainSet[name] = struct{}{}
			}
		}
	}

	// Convert subdomain set to slice
	var subdomains []string
	for subdomain := range subdomainSet {
		subdomains = append(subdomains, subdomain)
	}

	return certs, subdomains, nil
}
