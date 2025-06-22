// internal/db/db.go
package db

import (
	"database/sql"
	"fmt"
	"time"

	_ "github.com/lib/pq"
	"github.com/moos3/sparta/internal/config"
)

type Database interface {
	Exec(query string, args ...interface{}) (sql.Result, error)
	Query(query string, args ...interface{}) (*sql.Rows, error)
	QueryRow(query string, args ...interface{}) *sql.Row
	Close() error
}

type PostgresDB struct {
	db *sql.DB
}

func New(cfg *config.Config) (Database, error) {
	connStr := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		cfg.Database.Host, cfg.Database.Port, cfg.Database.User, cfg.Database.Password, cfg.Database.DBName)
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		return nil, fmt.Errorf("failed to connect to database: %v", err)
	}
	if err := db.Ping(); err != nil {
		return nil, fmt.Errorf("failed to ping database: %v", err)
	}
	return &PostgresDB{db: db}, nil
}

func (p *PostgresDB) Exec(query string, args ...interface{}) (sql.Result, error) {
	return p.db.Exec(query, args...)
}

func (p *PostgresDB) Query(query string, args ...interface{}) (*sql.Rows, error) {
	return p.db.Query(query, args...)
}

func (p *PostgresDB) QueryRow(query string, args ...interface{}) *sql.Row {
	return p.db.QueryRow(query, args...)
}

func (p *PostgresDB) Close() error {
	return p.db.Close()
}

type DNSSecurityResult struct {
	Records []string
	Errors  []string
}

type TLSSecurityResult struct {
	CipherSuite string
	Expires     time.Time
	Issuer      string
	Errors      []string
}

type CrtShSecurityResult struct {
	Subdomains []string
	Errors     []string
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
	Timestamp  time.Time
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
	Expires time.Time
}

type ShodanMetadata struct {
	Module string
}

type ShodanSecurityResult struct {
	Hosts  []ShodanHost
	Errors []string
}

type OTXGeneralInfo struct {
	PulseCount int
	Pulses     []string
}

type OTXSecurityResult struct {
	GeneralInfo *OTXGeneralInfo
	Errors      []string
}

type WhoisSecurityResult struct {
	Domain         string
	Registrar      string
	ExpirationDate time.Time
	Errors         []string
}

type AbuseChIOC struct {
	IOCType      string
	IOCValue     string
	ThreatType   string
	Confidence   float32
	FirstSeen    time.Time
	LastSeen     time.Time
	MalwareAlias []string
	Tags         []string
}

type AbuseChSecurityResult struct {
	IOCs   []AbuseChIOC
	Errors []string
}
