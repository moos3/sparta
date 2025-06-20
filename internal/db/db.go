package db

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"time"

	"github.com/google/uuid"
	_ "github.com/lib/pq"
	"github.com/moos3/sparta/internal/config"
)

type Database struct {
	conn *sql.DB
}

type DNSSecurityResult struct {
	SPFRecord             string   `json:"spf_record"`
	SPFValid              bool     `json:"spf_valid"`
	SPFPolicy             string   `json:"spf_policy"`
	DKIMRecord            string   `json:"dkim_record"`
	DKIMValid             bool     `json:"dkim_valid"`
	DKIMValidationError   string   `json:"dkim_validation_error"`
	DMARCRecord           string   `json:"dmarc_record"`
	DMARCPolicy           string   `json:"dmarc_policy"`
	DMARCValid            bool     `json:"dmarc_valid"`
	DMARCValidationError  string   `json:"dmarc_validation_error"`
	DNSSECEnabled         bool     `json:"dnssec_enabled"`
	DNSSECValid           bool     `json:"dnssec_valid"`
	DNSSECValidationError string   `json:"dnssec_validation_error"`
	IPAddresses           []string `json:"ip_addresses"`
	MXRecords             []string `json:"mx_records"`
	NSRecords             []string `json:"ns_records"`
	Errors                []string `json:"errors"`
}

type TLSSecurityResult struct {
	TLSVersion             string    `json:"tls_version"`
	CipherSuite            string    `json:"cipher_suite"`
	HSTSHeader             bool      `json:"hsts_header"`
	CertificateValid       bool      `json:"certificate_valid"`
	CertIssuer             string    `json:"cert_issuer"`
	CertSubject            string    `json:"cert_subject"`
	CertNotBefore          time.Time `json:"cert_not_before"`
	CertNotAfter           time.Time `json:"cert_not_after"`
	CertDNSNames           []string  `json:"cert_dns_names"`
	CertKeyStrength        int       `json:"cert_key_strength"`
	CertSignatureAlgorithm string    `json:"cert_signature_algorithm"`
	Errors                 []string  `json:"errors"`
}

type CrtShCertificate struct {
	ID                 int64     `json:"id"`
	CommonName         string    `json:"common_name"`
	Issuer             string    `json:"issuer"`
	NotBefore          time.Time `json:"not_before"`
	NotAfter           time.Time `json:"not_after"`
	SerialNumber       string    `json:"serial_number"`
	DNSNames           []string  `json:"dns_names"`
	SignatureAlgorithm string    `json:"signature_algorithm"`
}

type CrtShSecurityResult struct {
	Certificates []CrtShCertificate `json:"certificates"`
	Subdomains   []string           `json:"subdomains"`
	Errors       []string           `json:"errors"`
}

type ChaosSecurityResult struct {
	Subdomains []string `json:"subdomains"`
	Errors     []string `json:"errors"`
}

type ShodanLocation struct {
	City        string  `json:"city"`
	CountryName string  `json:"country_name"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
}

type ShodanSSL struct {
	Issuer  string `json:"issuer"`
	Subject string `json:"subject"`
	Expires string `json:"expires"`
}

type ShodanMetadata struct {
	Module string `json:"module"`
	Region string `json:"region"`
}

type ShodanHost struct {
	IP         string         `json:"ip"`
	Port       int            `json:"port"`
	Hostnames  []string       `json:"hostnames"`
	OS         string         `json:"os"`
	Banner     string         `json:"banner"`
	Tags       []string       `json:"tags"`
	Location   ShodanLocation `json:"location"`
	SSL        *ShodanSSL     `json:"ssl"`
	Domains    []string       `json:"domains"`
	ASN        string         `json:"asn"`
	Org        string         `json:"org"`
	ISP        string         `json:"isp"`
	Timestamp  string         `json:"timestamp"`
	ShodanMeta ShodanMetadata `json:"_shodan"`
}

type ShodanSecurityResult struct {
	Hosts  []ShodanHost `json:"hosts"`
	Errors []string     `json:"errors"`
}

func New(cfg *config.Config) (*Database, error) {
	connStr := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable search_path=public",
		cfg.Database.Host, cfg.Database.Port, cfg.Database.User, cfg.Database.Password, cfg.Database.DBName)

	conn, err := sql.Open("postgres", connStr)
	if err != nil {
		return nil, err
	}

	return &Database{conn: conn}, nil
}

func (d *Database) CreateUser(email, name, apiKey string, expiresAt time.Time) (string, error) {
	id := uuid.New().String()
	_, err := d.conn.Exec(
		"INSERT INTO users (id, email, name, api_key, api_key_expires_at) VALUES ($1, $2, $3, $4, $5)",
		id, email, name, apiKey, expiresAt)
	return id, err
}

func (d *Database) GetUser(id string) (string, string, string, time.Time, error) {
	var email, name string
	var createdAt time.Time
	err := d.conn.QueryRow(
		"SELECT email, name, created_at FROM users WHERE id = $1", id).
		Scan(&email, &name, &createdAt)
	return id, email, name, createdAt, err
}

func (d *Database) UpdateUser(id, email, name string) error {
	_, err := d.conn.Exec(
		"UPDATE users SET email = $1, name = $2 WHERE id = $3",
		email, name, id)
	return err
}

func (d *Database) DeleteUser(id string) error {
	_, err := d.conn.Exec(
		"DELETE FROM users WHERE id = $1", id)
	return err
}

func (d *Database) ListUsers() ([]struct {
	ID        string
	Email     string
	Name      string
	CreatedAt time.Time
}, error) {
	rows, err := d.conn.Query("SELECT id, email, name, created_at FROM users")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var users []struct {
		ID        string
		Email     string
		Name      string
		CreatedAt time.Time
	}
	for rows.Next() {
		var user struct {
			ID        string
			Email     string
			Name      string
			CreatedAt time.Time
		}
		if err := rows.Scan(&user.ID, &user.Email, &user.Name, &user.CreatedAt); err != nil {
			return nil, err
		}
		users = append(users, user)
	}
	return users, nil
}

func (d *Database) InsertDNSScanResult(domain string, result DNSSecurityResult) (string, error) {
	id := uuid.New().String()
	resultJSON, err := json.Marshal(result)
	if err != nil {
		return "", fmt.Errorf("failed to marshal result: %w", err)
	}
	_, err = d.conn.Exec(
		"INSERT INTO dns_scan_results (id, domain, result, created_at) VALUES ($1, $2, $3, $4)",
		id, domain, resultJSON, time.Now())
	if err != nil {
		return "", fmt.Errorf("failed to insert scan result: %w", err)
	}
	return id, nil
}

func (d *Database) GetDNSScanResultsByDomain(domain string) ([]struct {
	ID        string
	Domain    string
	Result    DNSSecurityResult
	CreatedAt time.Time
}, error) {
	rows, err := d.conn.Query(
		"SELECT id, domain, result, created_at FROM dns_scan_results WHERE domain = $1 ORDER BY created_at DESC",
		domain)
	if err != nil {
		return nil, fmt.Errorf("failed to query scan results: %w", err)
	}
	defer rows.Close()

	var results []struct {
		ID        string
		Domain    string
		Result    DNSSecurityResult
		CreatedAt time.Time
	}
	for rows.Next() {
		var id, domain string
		var resultJSON []byte
		var createdAt time.Time
		if err := rows.Scan(&id, &domain, &resultJSON, &createdAt); err != nil {
			return nil, fmt.Errorf("failed to scan row: %w", err)
		}
		var result DNSSecurityResult
		if err := json.Unmarshal(resultJSON, &result); err != nil {
			return nil, fmt.Errorf("failed to unmarshal result: %w", err)
		}
		results = append(results, struct {
			ID        string
			Domain    string
			Result    DNSSecurityResult
			CreatedAt time.Time
		}{ID: id, Domain: domain, Result: result, CreatedAt: createdAt})
	}
	return results, nil
}

func (d *Database) QueryRow(query string, args ...interface{}) *sql.Row {
	return d.conn.QueryRow(query, args...)
}

func (d *Database) Query(query string, args ...interface{}) (*sql.Rows, error) {
	return d.conn.Query(query, args...)
}

func (d *Database) Exec(query string, args ...interface{}) (sql.Result, error) {
	return d.conn.Exec(query, args...)
}
