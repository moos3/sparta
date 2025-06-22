package plugins

import (
	"context"
	"crypto/x509"
	"database/sql"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"log"
	"strings"
	"time"

	"github.com/google/uuid"
	"github.com/miekg/dns"
	"github.com/moos3/sparta/internal/db"
	"github.com/moos3/sparta/internal/interfaces"
	"github.com/moos3/sparta/proto"
)

// ScanDNSPlugin implements the DNSScanPlugin interface
type ScanDNSPlugin struct {
	name string
	db   db.Database
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
func (p *ScanDNSPlugin) SetDatabase(db db.Database) {
	p.db = db
	log.Printf("Database connection set for plugin %s", p.name)
}

// ScanDomain performs DNS security checks and stores results
func (p *ScanDNSPlugin) ScanDomain(domain string) (*proto.DNSSecurityResult, error) {
	if p.db == nil {
		return nil, fmt.Errorf("database connection not provided")
	}

	result := &proto.DNSSecurityResult{
		Errors: []string{},
	}

	// Normalize domain
	domain = strings.TrimSpace(strings.ToLower(domain))
	if !strings.HasSuffix(domain, ".") {
		domain = domain + "."
	}

	// DNS client
	client := new(dns.Client)
	server := "8.8.8.8:53" // Google DNS

	// Lookup SPF
	spfRecord, spfValid, spfPolicy, err := lookupSPF(client, server, domain)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("SPF lookup error: %v", err))
	} else {
		result.SpfRecord = spfRecord
		result.SpfValid = spfValid
		result.SpfPolicy = spfPolicy
	}

	// Lookup DKIM
	dkimRecord, dkimValid, dkimError, err := lookupAndValidateDKIM(client, server, domain)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("DKIM lookup error: %v", err))
	} else {
		result.DkimRecord = dkimRecord
		result.DkimValid = dkimValid
		result.DkimValidationError = dkimError
	}

	// Lookup DMARC
	dmarcRecord, dmarcPolicy, dmarcValid, dmarcError, err := lookupAndValidateDMARC(client, server, domain)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("DMARC lookup error: %v", err))
	} else {
		result.DmarcRecord = dmarcRecord
		result.DmarcPolicy = dmarcPolicy
		result.DmarcValid = dmarcValid
		result.DmarcValidationError = dmarcError
	}

	// Check DNSSEC
	dnssecEnabled, dnssecValid, dnssecError, err := checkAndValidateDNSSEC(client, server, domain)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("DNSSEC check error: %v", err))
	} else {
		result.DnssecEnabled = dnssecEnabled
		result.DnssecValid = dnssecValid
		result.DnssecValidationError = dnssecError
	}

	// Lookup IPs
	ips, err := lookupIPs(client, server, domain)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("IP lookup error: %v", err))
	} else {
		result.IpAddresses = ips
	}

	// Lookup MX
	mxRecords, err := lookupMX(client, server, domain)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("MX lookup error: %v", err))
	} else {
		result.MxRecords = mxRecords
	}

	// Lookup NS
	nsRecords, err := lookupNS(client, server, domain)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("NS lookup error: %v", err))
	} else {
		result.NsRecords = nsRecords
	}

	// Store result
	domainTrimmed := strings.TrimSuffix(domain, ".")
	id, err := p.InsertDNSScanResult(domainTrimmed, result)
	if err != nil {
		result.Errors = append(result.Errors, fmt.Sprintf("Database storage error: %v", err))
		log.Printf("Failed to store scan result for %s: %v", domainTrimmed, err)
	} else {
		log.Printf("Stored scan result for %s with ID: %s", domainTrimmed, id)
	}

	return result, nil
}

// InsertDNSScanResult inserts a DNS scan result into the database
func (p *ScanDNSPlugin) InsertDNSScanResult(domain string, result *proto.DNSSecurityResult) (string, error) {
	if p.db == nil {
		return "", fmt.Errorf("database connection not provided")
	}
	id := uuid.New().String()
	resultJSON, err := json.Marshal(result)
	if err != nil {
		return "", fmt.Errorf("failed to marshal result: %w", err)
	}
	query := `
		INSERT INTO dns_scan_results (id, domain, result, created_at)
		VALUES ($1, $2, $3, $4)
	`
	_, err = p.db.Exec(query, id, domain, resultJSON, time.Now())
	if err != nil {
		return "", fmt.Errorf("failed to insert DNS scan result: %w", err)
	}
	return id, nil
}

// GetDNSScanResultsByDomain retrieves historical DNS scan results by domain
func (p *ScanDNSPlugin) GetDNSScanResultsByDomain(domain string) ([]interfaces.DNSScanResult, error) {
	if p.db == nil {
		return nil, fmt.Errorf("database connection not provided")
	}
	query := `
		SELECT id, domain, id AS dns_scan_id, result, created_at
		FROM dns_scan_results
		WHERE domain = $1
		ORDER BY created_at DESC
	`
	rows, err := p.db.Query(query, strings.TrimSpace(strings.ToLower(domain)))
	if err != nil {
		return nil, fmt.Errorf("failed to query DNS scan results: %w", err)
	}
	defer rows.Close()

	var results []interfaces.DNSScanResult
	for rows.Next() {
		var r interfaces.DNSScanResult
		var resultJSON []byte
		if err := rows.Scan(&r.ID, &r.Domain, &r.DNSScanID, &resultJSON, &r.CreatedAt); err != nil {
			return nil, fmt.Errorf("failed to scan row: %w", err)
		}
		var scanResult proto.DNSSecurityResult
		if err := json.Unmarshal(resultJSON, &scanResult); err != nil {
			return nil, fmt.Errorf("failed to unmarshal result: %w", err)
		}
		r.Result = scanResult
		results = append(results, r)
	}
	return results, nil
}

// GetDNSScanResultByID retrieves a single DNS scan result by ID
func (p *ScanDNSPlugin) GetDNSScanResultByID(dnsScanID string) (interfaces.DNSScanResult, error) {
	if p.db == nil {
		return interfaces.DNSScanResult{}, fmt.Errorf("database connection not provided")
	}
	query := `
		SELECT id, domain, id AS dns_scan_id, result, created_at
		FROM dns_scan_results
		WHERE id = $1
	`
	var r interfaces.DNSScanResult
	var resultJSON []byte
	err := p.db.QueryRow(query, dnsScanID).Scan(&r.ID, &r.Domain, &r.DNSScanID, &resultJSON, &r.CreatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			return interfaces.DNSScanResult{}, fmt.Errorf("no DNS scan result found for ID: %s", dnsScanID)
		}
		return interfaces.DNSScanResult{}, fmt.Errorf("failed to query DNS scan result: %w", err)
	}
	var scanResult proto.DNSSecurityResult
	if err := json.Unmarshal(resultJSON, &scanResult); err != nil {
		return interfaces.DNSScanResult{}, fmt.Errorf("failed to unmarshal result: %w", err)
	}
	r.Result = scanResult
	return r, nil
}

// Scan implements the GenericPlugin interface
func (p *ScanDNSPlugin) Scan(ctx context.Context, domain, dnsScanID string) (interface{}, error) {
	return p.ScanDomain(domain)
}

// InsertResult implements the GenericPlugin interface
func (p *ScanDNSPlugin) InsertResult(domain, dnsScanID string, result interface{}) (string, error) {
	dnsResult, ok := result.(*proto.DNSSecurityResult)
	if !ok {
		return "", fmt.Errorf("invalid result type")
	}
	return p.InsertDNSScanResult(domain, dnsResult)
}

// lookupSPF queries TXT records for SPF
func lookupSPF(client *dns.Client, server, domain string) (string, bool, string, error) {
	m := new(dns.Msg)
	m.SetQuestion(domain, dns.TypeTXT)
	r, _, err := client.Exchange(m, server)
	if err != nil {
		return "", false, "", err
	}

	for _, ans := range r.Answer {
		if txt, ok := ans.(*dns.TXT); ok {
			for _, record := range txt.Txt {
				if strings.HasPrefix(record, "v=spf1") {
					policy := extractSPFPolicy(record)
					return record, isSPFValid(record), policy, nil
				}
			}
		}
	}
	return "", false, "", nil
}

// extractSPFPolicy extracts the SPF policy
func extractSPFPolicy(record string) string {
	parts := strings.Fields(record)
	for _, part := range parts {
		if part == "-all" || part == "~all" || part == "+all" || part == "?all" {
			return part
		}
	}
	return ""
}

// isSPFValid performs basic SPF validation
func isSPFValid(record string) bool {
	return strings.HasPrefix(record, "v=spf1") && (strings.Contains(record, "-all") || strings.Contains(record, "~all"))
}

// lookupAndValidateDKIM queries and validates DKIM records
func lookupAndValidateDKIM(client *dns.Client, server, domain string) (string, bool, string, error) {
	dkimDomain := "default._domainkey." + strings.TrimSuffix(domain, ".")
	m := new(dns.Msg)
	m.SetQuestion(dkimDomain, dns.TypeTXT)
	r, _, err := client.Exchange(m, server)
	if err != nil {
		return "", false, "", err
	}

	for _, ans := range r.Answer {
		if txt, ok := ans.(*dns.TXT); ok {
			for _, record := range txt.Txt {
				if strings.HasPrefix(record, "v=DKIM1") {
					validationError := validateDKIMRecord(record)
					return record, validationError == "", validationError, nil
				}
			}
		}
	}
	return "", false, "No DKIM record found", nil
}

// validateDKIMRecord checks DKIM record format and public key
func validateDKIMRecord(record string) string {
	if !strings.HasPrefix(record, "v=DKIM1") {
		return "Invalid DKIM version"
	}

	parts := strings.Split(record, ";")
	var keyType, pubKey string
	for _, part := range parts {
		part = strings.TrimSpace(part)
		if strings.HasPrefix(part, "k=") {
			keyType = strings.TrimPrefix(part, "k=")
		} else if strings.HasPrefix(part, "p=") {
			pubKey = strings.TrimPrefix(part, "p=")
		}
	}

	if keyType != "rsa" {
		return "Unsupported key type: " + keyType
	}
	if pubKey == "" {
		return "Missing public key"
	}

	// Decode and validate public key
	pubKeyBytes, err := base64.StdEncoding.DecodeString(pubKey)
	if err != nil {
		return "Invalid public key encoding: " + err.Error()
	}
	_, err = x509.ParsePKIXPublicKey(pubKeyBytes)
	if err != nil {
		return "Invalid public key format: " + err.Error()
	}

	return ""
}

// lookupAndValidateDMARC queries and validates DMARC records
func lookupAndValidateDMARC(client *dns.Client, server, domain string) (string, string, bool, string, error) {
	dmarcDomain := "_dmarc." + strings.TrimSuffix(domain, ".")
	m := new(dns.Msg)
	m.SetQuestion(dmarcDomain, dns.TypeTXT)
	r, _, err := client.Exchange(m, server)
	if err != nil {
		return "", "", false, "", err
	}

	for _, ans := range r.Answer {
		if txt, ok := ans.(*dns.TXT); ok {
			for _, record := range txt.Txt {
				if strings.HasPrefix(record, "v=DMARC1") {
					policy, valid, validationError := validateDMARCRecord(record)
					return record, policy, valid, validationError, nil
				}
			}
		}
	}
	return "", "", false, "No DMARC record found", nil
}

// validateDMARCRecord validates DMARC record
func validateDMARCRecord(record string) (string, bool, string) {
	if !strings.HasPrefix(record, "v=DMARC1") {
		return "", false, "Invalid DMARC version"
	}

	parts := strings.Split(record, ";")
	policy := ""
	hasPolicy := false
	for _, part := range parts {
		part = strings.TrimSpace(part)
		if strings.HasPrefix(part, "p=") {
			policy = strings.TrimPrefix(part, "p=")
			hasPolicy = true
			break
		}
	}

	if !hasPolicy {
		return "", false, "Missing policy (p=) field"
	}
	if policy != "none" && policy != "quarantine" && policy != "reject" {
		return policy, false, "Invalid policy: " + policy
	}

	// Check for recommended fields (e.g., rua)
	hasRua := false
	for _, part := range parts {
		part = strings.TrimSpace(part)
		if strings.HasPrefix(part, "rua=") {
			hasRua = true
			break
		}
	}
	if !hasRua {
		return policy, true, "Missing recommended rua field"
	}

	return policy, true, ""
}

// checkAndValidateDNSSEC checks and validates DNSSEC
func checkAndValidateDNSSEC(client *dns.Client, server, domain string) (bool, bool, string, error) {
	// Check for DS or DNSKEY records
	m := new(dns.Msg)
	m.SetQuestion(domain, dns.TypeDS)
	m.SetEdns0(4096, true) // Enable DNSSEC
	r, _, err := client.Exchange(m, server)
	if err != nil {
		return false, false, "", err
	}
	hasDS := len(r.Answer) > 0

	// Query DNSKEY records
	m = new(dns.Msg)
	m.SetQuestion(domain, dns.TypeDNSKEY)
	m.SetEdns0(4096, true)
	r, _, err = client.Exchange(m, server)
	if err != nil {
		return false, false, "", err
	}
	hasDNSKEY := len(r.Answer) > 0

	if !hasDS && !hasDNSKEY {
		return false, false, "No DS or DNSKEY records found", nil
	}

	// Collect DNSKEYs
	var dnskeys []*dns.DNSKEY
	for _, ans := range r.Answer {
		if key, ok := ans.(*dns.DNSKEY); ok {
			dnskeys = append(dnskeys, key)
		}
	}
	if len(dnskeys) == 0 {
		return true, false, "No DNSKEY records found", nil
	}

	// Query A records with RRSIG
	m = new(dns.Msg)
	m.SetQuestion(domain, dns.TypeA)
	m.SetEdns0(4096, true)
	r, _, err = client.Exchange(m, server)
	if err != nil {
		return true, false, "Failed to query A records: " + err.Error(), nil
	}

	// Collect A records
	var aRecords []dns.RR
	for _, ans := range r.Answer {
		if _, ok := ans.(*dns.A); ok {
			aRecords = append(aRecords, ans)
		}
	}
	if len(aRecords) == 0 {
		return true, false, "No A records found", nil
	}

	// Find RRSIG for A records
	for _, sig := range r.Answer {
		if rrsig, ok := sig.(*dns.RRSIG); ok && rrsig.TypeCovered == dns.TypeA {
			for _, dnskey := range dnskeys {
				err := rrsig.Verify(dnskey, aRecords)
				if err == nil {
					return true, true, "", nil
				}
				log.Printf("DNSSEC verification failed with DNSKEY: %v", err)
			}
			return true, false, "DNSSEC signature verification failed for all DNSKEYs", nil
		}
	}

	return true, false, "No valid RRSIG found for A records", nil
}

// lookupIPs queries A and AAAA records
func lookupIPs(client *dns.Client, server, domain string) ([]string, error) {
	var ips []string

	m := new(dns.Msg)
	m.SetQuestion(domain, dns.TypeA)
	r, _, err := client.Exchange(m, server)
	if err != nil {
		return nil, err
	}
	for _, ans := range r.Answer {
		if a, ok := ans.(*dns.A); ok {
			ips = append(ips, a.A.String())
		}
	}

	m.SetQuestion(domain, dns.TypeAAAA)
	r, _, err = client.Exchange(m, server)
	if err != nil {
		return nil, err
	}
	for _, ans := range r.Answer {
		if aaaa, ok := ans.(*dns.AAAA); ok {
			ips = append(ips, aaaa.AAAA.String())
		}
	}

	return ips, nil
}

// lookupMX queries MX records
func lookupMX(client *dns.Client, server, domain string) ([]string, error) {
	m := new(dns.Msg)
	m.SetQuestion(domain, dns.TypeMX)
	r, _, err := client.Exchange(m, server)
	if err != nil {
		return nil, err
	}

	var mxRecords []string
	for _, ans := range r.Answer {
		if mx, ok := ans.(*dns.MX); ok {
			mxRecords = append(mxRecords, mx.Mx)
		}
	}
	return mxRecords, nil
}

// lookupNS queries NS records
func lookupNS(client *dns.Client, server, domain string) ([]string, error) {
	m := new(dns.Msg)
	m.SetQuestion(domain, dns.TypeNS)
	r, _, err := client.Exchange(m, server)
	if err != nil {
		return nil, err
	}

	var nsRecords []string
	for _, ans := range r.Answer {
		if ns, ok := ans.(*dns.NS); ok {
			nsRecords = append(nsRecords, ns.Ns)
		}
	}
	return nsRecords, nil
}
