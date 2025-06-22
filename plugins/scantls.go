// plugins/scantls.go
package plugins

import (
	"context"
	"crypto/rsa"
	"crypto/tls"
	"encoding/json"
	"fmt"
	"log"
	"net"
	"net/http"
	"strings"
	"time"

	"github.com/google/uuid"
	"github.com/moos3/sparta/internal/db"
	"github.com/moos3/sparta/internal/interfaces"
	"github.com/moos3/sparta/proto"
	"google.golang.org/protobuf/types/known/timestamppb"
)

// ScanTLSPlugin implements the TLSScanPlugin interface
type ScanTLSPlugin struct {
	name string
	db   db.Database
}

// Name returns the plugin name
func (p *ScanTLSPlugin) Name() string {
	log.Printf("ScanTLSPlugin.Name called, returning: ScanTLS")
	return "ScanTLS"
}

// Initialize sets up the plugin
func (p *ScanTLSPlugin) Initialize() error {
	p.name = "ScanTLS"
	if p.db == nil {
		log.Printf("Warning: database connection not provided for plugin %s", p.name)
	} else {
		log.Printf("Initialized plugin %s with database connection", p.name)
	}
	return nil
}

// SetDatabase sets the database connection
func (p *ScanTLSPlugin) SetDatabase(db db.Database) {
	p.db = db
	log.Printf("Database connection set for plugin %s", p.name)
}

// ScanTLS performs TLS configuration assessment
func (p *ScanTLSPlugin) ScanTLS(domain string, dnsScanID string) (*proto.TLSSecurityResult, error) {
	if p.db == nil {
		return nil, fmt.Errorf("database connection not provided")
	}

	result := &proto.TLSSecurityResult{
		Errors: []string{},
	}

	// Normalize domain
	domain = strings.TrimSpace(strings.ToLower(domain))
	if !strings.HasSuffix(domain, ":443") {
		domain = domain + ":443"
	}

	// Dial TLS connection
	conn, err := tls.DialWithDialer(&net.Dialer{Timeout: 5 * time.Second}, "tcp", domain, &tls.Config{
		InsecureSkipVerify: false,
	})
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Failed to establish TLS connection: %v", err))
		return result, nil
	}
	defer conn.Close()

	// Get TLS version and cipher suite
	result.TlsVersion = tlsVersionToString(conn.ConnectionState().Version)
	result.CipherSuite = tls.CipherSuiteName(conn.ConnectionState().CipherSuite)

	// Get certificate details
	if len(conn.ConnectionState().PeerCertificates) > 0 {
		cert := conn.ConnectionState().PeerCertificates[0]
		result.CertificateValid = time.Now().After(cert.NotBefore) && time.Now().Before(cert.NotAfter)
		result.CertIssuer = cert.Issuer.String()
		result.CertSubject = cert.Subject.String()
		result.CertNotBefore = timestamppb.New(cert.NotBefore)
		result.CertNotAfter = timestamppb.New(cert.NotAfter)
		result.CertDnsNames = cert.DNSNames
		result.CertSignatureAlgorithm = cert.SignatureAlgorithm.String()

		// Estimate key strength
		if rsaKey, ok := cert.PublicKey.(*rsa.PublicKey); ok {
			result.CertKeyStrength = int32(rsaKey.Size() * 8) // Bits
		} else {
			result.CertKeyStrength = 0 // Unknown or non-RSA
		}
	} else {
		result.Errors = append(result.Errors, "No certificates provided")
		result.CertificateValid = false
	}

	// Check HSTS header
	hstsEnabled, err := checkHSTS(domain)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("HSTS check error: %v", err))
	} else {
		result.HstsHeader = hstsEnabled
	}

	// Store result
	id, err := p.InsertTLSScanResult(strings.TrimSuffix(domain, ":443"), dnsScanID, result)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Database storage error: %v", err))
		log.Printf("Failed to store TLS scan result for %s: %v", domain, err)
	} else {
		log.Printf("Stored TLS scan result for %s with ID: %s", domain, id)
	}

	return result, nil
}

// tlsVersionToString converts TLS version to string
func tlsVersionToString(version uint16) string {
	switch version {
	case tls.VersionTLS10:
		return "TLS 1.0"
	case tls.VersionTLS11:
		return "TLS 1.1"
	case tls.VersionTLS12:
		return "TLS 1.2"
	case tls.VersionTLS13:
		return "TLS 1.3"
	default:
		return fmt.Sprintf("Unknown (%d)", version)
	}
}

// checkHSTS checks for HSTS header
func checkHSTS(domain string) (bool, error) {
	client := &http.Client{
		Timeout: 5 * time.Second,
		Transport: &http.Transport{
			TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
		},
	}
	resp, err := client.Get("https://" + strings.TrimSuffix(domain, ":443"))
	if err != nil {
		return false, err
	}
	defer resp.Body.Close()

	hsts := resp.Header.Get("Strict-Transport-Security")
	return hsts != "", nil
}

// InsertTLSScanResult inserts a TLS scan result into the database
func (p *ScanTLSPlugin) InsertTLSScanResult(domain string, dnsScanID string, result *proto.TLSSecurityResult) (string, error) {
	if p.db == nil {
		return "", fmt.Errorf("database connection not provided")
	}
	id := uuid.New().String()
	resultJSON, err := json.Marshal(result)
	if err != nil {
		return "", fmt.Errorf("failed to marshal result: %w", err)
	}
	query := `
		INSERT INTO tls_scan_results (id, domain, dns_scan_id, result, created_at)
		VALUES ($1, $2, $3, $4, $5)
	`
	_, err = p.db.Exec(query, id, domain, dnsScanID, resultJSON, time.Now())
	if err != nil {
		return "", fmt.Errorf("failed to insert TLS scan result: %w", err)
	}
	return id, nil
}

// GetTLSScanResultsByDomain retrieves historical TLS scan results
func (p *ScanTLSPlugin) GetTLSScanResultsByDomain(domain string) ([]interfaces.TLSScanResult, error) {
	if p.db == nil {
		return nil, fmt.Errorf("database connection not provided")
	}
	query := `
		SELECT id, domain, dns_scan_id, result, created_at
		FROM tls_scan_results
		WHERE domain = $1
		ORDER BY created_at DESC
	`
	rows, err := p.db.Query(query, strings.TrimSpace(strings.ToLower(domain)))
	if err != nil {
		return nil, fmt.Errorf("failed to query TLS scan results: %w", err)
	}
	defer rows.Close()

	var results []interfaces.TLSScanResult
	for rows.Next() {
		var r interfaces.TLSScanResult
		var resultJSON []byte
		if err := rows.Scan(&r.ID, &r.Domain, &r.DNSScanID, &resultJSON, &r.CreatedAt); err != nil {
			return nil, fmt.Errorf("failed to scan row: %w", err)
		}
		var scanResult proto.TLSSecurityResult
		if err := json.Unmarshal(resultJSON, &scanResult); err != nil {
			return nil, fmt.Errorf("failed to unmarshal result: %w", err)
		}
		r.Result = scanResult
		results = append(results, r)
	}
	return results, nil
}

// Scan implements the GenericPlugin interface
func (p *ScanTLSPlugin) Scan(ctx context.Context, domain, dnsScanID string) (interface{}, error) {
	return p.ScanTLS(domain, dnsScanID)
}

// InsertResult implements the GenericPlugin interface
func (p *ScanTLSPlugin) InsertResult(domain, dnsScanID string, result interface{}) (string, error) {
	tlsResult, ok := result.(*proto.TLSSecurityResult)
	if !ok {
		return "", fmt.Errorf("invalid result type")
	}
	return p.InsertTLSScanResult(domain, dnsScanID, tlsResult)
}
