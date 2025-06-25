// plugins/scanisc.go
package plugins

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
	"github.com/moos3/sparta/internal/interfaces"
	"github.com/moos3/sparta/proto"
	"golang.org/x/time/rate"
	"google.golang.org/protobuf/types/known/timestamppb"
)

// ISCAPIResponse represents the simplified structure of a hypothetical SANS ISC API response
type ISCAPIResponse struct {
	Domain    string `json:"domain"`
	Incidents []struct {
		ID          string `json:"id"`
		Date        string `json:"date"`
		Description string `json:"description"`
		Severity    string `json:"severity"`
	} `json:"incidents"`
	OverallRisk string   `json:"overall_risk"`
	Errors      []string `json:"errors"`
}

// ScanISCPlugin implements the ISC scan plugin
type ScanISCPlugin struct {
	name        string
	db          db.Database
	client      *http.Client
	rateLimiter *rate.Limiter
	config      *config.Config
}

// Name returns the plugin name
func (p *ScanISCPlugin) Name() string {
	return "ScanISC"
}

// Initialize sets up the plugin
func (p *ScanISCPlugin) Initialize() error {
	p.name = "ScanISC"
	if p.config == nil || p.config.ISC.APIKey == "" {
		log.Printf("Warning: ISC API key not provided in config for plugin %s. API calls will be skipped.", p.name)
		// It's acceptable to not return an error if the plugin can still function partially
		// (e.g., just database interaction without API calls). Here, we'll indicate it.
	}

	// Create HTTP client with timeout
	p.client = &http.Client{
		Timeout: 15 * time.Second,
	}
	log.Printf("Initialized HTTP client for plugin %s", p.name)

	// Initialize rate limiter (requests per second = 1000ms / delay)
	// Default to 5 seconds if not configured, to be very cautious with external APIs
	requestDelay := p.config.ISC.RequestDelay
	if requestDelay == 0 {
		requestDelay = 5000 // Default to 5 seconds (1 request every 5 seconds)
	}
	rateLimit := rate.Limit(1000.0 / float64(requestDelay))
	p.rateLimiter = rate.NewLimiter(rateLimit, 1) // Burst of 1
	log.Printf("Initialized rate limiter for plugin %s with %d ms delay", p.name, requestDelay)

	if p.db == nil {
		log.Printf("Warning: database connection not provided for plugin %s", p.name)
	} else {
		log.Printf("Database connection ready for plugin %s", p.name)
	}

	return nil
}

// SetDatabase sets the database connection
func (p *ScanISCPlugin) SetDatabase(db db.Database) {
	p.db = db
}

// SetConfig sets the configuration
func (p *ScanISCPlugin) SetConfig(cfg *config.Config) error {
	p.config = cfg
	return nil
}

// ScanISC queries a hypothetical SANS ISC API for incident reports related to a domain
func (p *ScanISCPlugin) ScanISC(ctx context.Context, domain string, dnsScanID string) (*proto.ISCSecurityResult, error) {
	result := &proto.ISCSecurityResult{
		Errors: []string{},
	}

	if p.config == nil || p.config.ISC.APIKey == "" {
		result.Errors = append(result.Errors, "ISC API key not configured. Skipping API scan.")
		// We still store results, even if empty or with errors, to record the attempt.
		_, err := p.InsertISCScanResult(domain, dnsScanID, result)
		if err != nil {
			log.Printf("Failed to store partial ISC scan result (no API key): %v", err)
		}
		return result, nil
	}

	if p.db == nil {
		result.Errors = append(result.Errors, "Database connection not provided. Cannot store results.")
		return result, fmt.Errorf("database connection not provided for ScanISC")
	}

	// Normalize domain
	domain = strings.TrimSpace(strings.ToLower(domain))
	// Remove trailing dot if present
	if strings.HasSuffix(domain, ".") {
		domain = strings.TrimSuffix(domain, ".")
	}

	// Rate limit
	if err := p.rateLimiter.Wait(ctx); err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Rate limit error: %v", err))
		return result, nil
	}

	// Hypothetical ISC API URL
	apiURL := fmt.Sprintf("%s/v1/domain_info/%s?apikey=%s", p.config.ISC.BaseURL, domain, p.config.ISC.APIKey)
	if p.config.ISC.BaseURL == "" {
		apiURL = fmt.Sprintf("https://mock.isc.sans.edu/api/v1/domain_info/%s?apikey=%s", domain, p.config.ISC.APIKey) // Fallback mock URL
	}

	req, err := http.NewRequestWithContext(ctx, "GET", apiURL, nil)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Failed to create HTTP request: %v", err))
		return result, nil
	}

	resp, err := p.client.Do(req)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("ISC API request failed: %v", err))
		return result, nil
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		bodyBytes, _ := io.ReadAll(resp.Body)
		result.Errors = append(result.Errors, fmt.Sprintf("ISC API returned status %d: %s", resp.StatusCode, string(bodyBytes)))
		// Still try to store the partial result with the error
		_, err = p.InsertISCScanResult(domain, dnsScanID, result)
		if err != nil {
			log.Printf("Failed to store partial ISC scan result (API error): %v", err)
		}
		return result, nil
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Failed to read API response: %v", err))
		return result, nil
	}

	var iscResp ISCAPIResponse
	if err := json.Unmarshal(body, &iscResp); err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Failed to unmarshal API response: %v", err))
		return result, nil
	}

	result.OverallRisk = iscResp.OverallRisk
	for _, incident := range iscResp.Incidents {
		parsedDate, parseErr := time.Parse("2006-01-02", incident.Date)
		if parseErr != nil {
			log.Printf("Failed to parse incident date %s: %v", incident.Date, parseErr)
		}
		result.Incidents = append(result.Incidents, &proto.ISCIncident{
			Id:          incident.ID,
			Date:        timestamppb.New(parsedDate),
			Description: incident.Description,
			Severity:    incident.Severity,
		})
	}
	if len(iscResp.Errors) > 0 {
		result.Errors = append(result.Errors, iscResp.Errors...)
	}

	// Store result
	id, err := p.InsertISCScanResult(domain, dnsScanID, result)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Database storage error: %v", err))
		log.Printf("Failed to store ISC scan result for %s: %v", domain, err)
	} else {
		log.Printf("Stored ISC scan result for %s with ID: %s", domain, id)
	}

	return result, nil
}

// InsertISCScanResult inserts an ISC scan result into the database
func (p *ScanISCPlugin) InsertISCScanResult(domain string, dnsScanID string, result *proto.ISCSecurityResult) (string, error) {
	if p.db == nil {
		return "", fmt.Errorf("database connection not provided")
	}
	id := uuid.New().String()
	resultJSON, err := json.Marshal(result)
	if err != nil {
		return "", fmt.Errorf("failed to marshal result: %w", err)
	}
	query := `
		INSERT INTO isc_scan_results (id, domain, dns_scan_id, result, created_at)
		VALUES ($1, $2, $3, $4, $5)
	`
	_, err = p.db.Exec(query, id, domain, dnsScanID, resultJSON, time.Now())
	if err != nil {
		return "", fmt.Errorf("failed to insert ISC scan result: %w", err)
	}
	return id, nil
}

// GetISCScanResultsByDomain retrieves historical ISC scan results
func (p *ScanISCPlugin) GetISCScanResultsByDomain(domain string) ([]interfaces.ISCScanResult, error) {
	if p.db == nil {
		return nil, fmt.Errorf("database connection not provided")
	}
	query := `
		SELECT id, domain, dns_scan_id, result, created_at
		FROM isc_scan_results
		WHERE domain = $1
		ORDER BY created_at DESC
	`
	rows, err := p.db.Query(query, strings.TrimSpace(strings.ToLower(domain)))
	if err != nil {
		return nil, fmt.Errorf("failed to query ISC scan results: %w", err)
	}
	defer rows.Close()

	var results []interfaces.ISCScanResult
	for rows.Next() {
		var r interfaces.ISCScanResult
		var resultJSON []byte
		if err := rows.Scan(&r.ID, &r.Domain, &r.DNSScanID, &resultJSON, &r.CreatedAt); err != nil {
			return nil, fmt.Errorf("failed to scan row: %w", err)
		}
		var scanResult proto.ISCSecurityResult
		if err := json.Unmarshal(resultJSON, &scanResult); err != nil {
			return nil, fmt.Errorf("failed to unmarshal result: %w", err)
		}
		r.Result = scanResult
		results = append(results, r)
	}
	return results, nil
}

// Scan implements the GenericPlugin interface
func (p *ScanISCPlugin) Scan(ctx context.Context, domain, dnsScanID string) (interface{}, error) {
	return p.ScanISC(ctx, domain, dnsScanID)
}

// InsertResult implements the GenericPlugin interface
func (p *ScanISCPlugin) InsertResult(domain, dnsScanID string, result interface{}) (string, error) {
	iscResult, ok := result.(*proto.ISCSecurityResult)
	if !ok {
		return "", fmt.Errorf("invalid result type for ISC plugin")
	}
	return p.InsertISCScanResult(domain, dnsScanID, iscResult)
}
