// internal/testutils/mocks.go
package testutils

import (
	"database/sql"
	"time"

	"github.com/moos3/sparta/internal/db"
	"github.com/stretchr/testify/mock"
)

// User stubs a user entity
type User struct {
	ID        string
	Email     string
	Name      string
	CreatedAt time.Time
}

// MockDatabase stubs a database implementation
type MockDatabase struct {
	mock.Mock
}

func NewMockDatabase() *MockDatabase {
	return &MockDatabase{}
}

func (m *MockDatabase) CreateUser(email, name, apiKey string, expiresAt time.Time) (string, error) {
	args := m.Called(email, name, apiKey, expiresAt)
	return args.String(0), args.Error(1)
}

func (m *MockDatabase) GetUser(userID string) (string, string, string, time.Time, error) {
	args := m.Called(userID)
	return args.String(0), args.String(1), args.String(2), args.Get(3).(time.Time), args.Error(4)
}

func (m *MockDatabase) UpdateUser(userID, email, name string) error {
	args := m.Called(userID, email, name)
	return args.Error(0)
}

func (m *MockDatabase) DeleteUser(userID string) error {
	args := m.Called(userID)
	return args.Error(0)
}

func (m *MockDatabase) ListUsers() ([]db.User, error) {
	args := m.Called()
	return args.Get(0).([]db.User), args.Error(1)
}

func (m *MockDatabase) Exec(query string, args ...interface{}) (sql.Result, error) {
	calledArgs := append([]interface{}{query}, args...)
	return m.Called(calledArgs...).Get(0).(sql.Result), m.Called(calledArgs...).Error(1)
}

func (m *MockDatabase) Query(query string, args ...interface{}) (*sql.Rows, error) {
	calledArgs := append([]interface{}{query}, args...)
	return m.Called(calledArgs...).Get(0).(*sql.Rows), m.Called(calledArgs...).Error(1)
}

func (m *MockDatabase) QueryRow(query string, args ...any) *sql.Row {
	calledArgs := append([]interface{}{query}, args...)
	return m.Called(calledArgs...).Get(0).(*sql.Row)
}

// MockRow stubs *sql.Row
type MockRow struct {
	mock.Mock
}

func (m *MockRow) Scan(dest ...interface{}) error {
	args := m.Called(dest...)
	return args.Error(0)
}

// Other stub types (DNSSecurityResult, TLSSecurityResult, etc.) remain unchanged
type DNSSecurityResult struct {
	SPFRecord             string
	SPFValid              bool
	SPFPolicy             string
	DKIMRecord            string
	DKIMValid             bool
	DKIMValidationError   string
	DMARCRecord           string
	DMARCPolicy           string
	DMARCValid            bool
	DMARCValidationError  string
	DNSSECEnabled         bool
	DNSSECValid           bool
	DNSSECValidationError string
	IPAddresses           []string
	MXRecords             []string
	NSRecords             []string
	Errors                []string
}

type TLSSecurityResult struct {
	TLSVersion             string
	CipherSuite            string
	HSTSHeader             string
	CertificateValid       bool
	CertIssuer             string
	CertSubject            string
	CertNotBefore          time.Time
	CertNotAfter           time.Time
	CertDNSNames           []string
	CertKeyStrength        int
	CertSignatureAlgorithm string
	Errors                 []string
}

type CrtShCertificate struct {
	ID                 int64
	CommonName         string
	Issuer             string
	NotBefore          time.Time
	NotAfter           time.Time
	SerialNumber       string
	DNSNames           []string
	SignatureAlgorithm string
}

type CrtShSecurityResult struct {
	Certificates []CrtShCertificate
	Subdomains   []string
	Errors       []string
}

type ChaosSecurityResult struct {
	Subdomains []string
	Errors     []string
}

type ShodanHost struct {
	IP         string
	Port       int
	Hostnames  []string
	OS         string
	Banner     string
	Tags       []string
	Location   ShodanLocation
	SSL        *ShodanSSL
	Domains    []string
	ASN        string
	Org        string
	ISP        string
	Timestamp  string
	ShodanMeta ShodanMetadata
}

type ShodanLocation struct {
	City        string
	CountryName string
	Latitude    float64
	Longitude   float64
}

type ShodanSSL struct {
	Issuer  string
	Subject string
	Expires string
}

type ShodanMetadata struct {
	Module string
}

type ShodanSecurityResult struct {
	Hosts  []ShodanHost
	Errors []string
}

type OTXURL struct {
	URL      string
	Datetime string
}

type OTXMalware struct {
	Hash     string
	Datetime string
}

type OTXPassiveDNS struct {
	Address  string
	Hostname string
	Record   string
	Datetime string
}

type OTXGeneralInfo struct {
	PulseCount int
	Pulses     []string
}

type OTXSecurityResult struct {
	GeneralInfo *OTXGeneralInfo
	Malware     []OTXMalware
	Urls        []OTXURL
	PassiveDNS  []OTXPassiveDNS
	Errors      []string
}

type WhoisSecurityResult struct {
	Registrar      string
	CreationDate   time.Time
	ExpiryDate     time.Time
	RegistrantName string
	Errors         []string
}
