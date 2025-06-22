package interfaces

import (
	"context"
	"time"

	"github.com/moos3/sparta/internal/config"
	"github.com/moos3/sparta/internal/db"
	"github.com/moos3/sparta/proto"
)

// Plugin defines the base interface for all scan plugins.
type Plugin interface {
	Initialize() error
	Name() string
	SetDatabase(db db.Database)
}

// Generic Plugin interface for server-side usage
type GenericPlugin interface {
	Initialize() error
	Scan(ctx context.Context, domain string, dnsScanID string) (interface{}, error)
	InsertResult(domain string, dnsScanID string, result interface{}) (string, error)
}

type DNSScanPlugin interface {
	Plugin
	ScanDomain(domain string) (proto.DNSSecurityResult, error)
	InsertDNSScanResult(domain string, result proto.DNSSecurityResult) (string, error)
	GetDNSScanResultsByDomain(domain string) ([]DNSScanResult, error)
	GetDNSScanResultByID(id string) (DNSScanResult, error)
}

type TLSScanPlugin interface {
	Plugin
	ScanTLS(domain, dnsScanID string) (proto.TLSSecurityResult, error)
	InsertTLSScanResult(domain, dnsScanID string, result proto.TLSSecurityResult) (string, error)
	GetTLSScanResultsByDomain(domain string) ([]TLSScanResult, error)
}

type CrtShScanPlugin interface {
	Plugin
	ScanCrtSh(domain, dnsScanID string) (proto.CrtShSecurityResult, error)
	InsertCrtShScanResult(domain, dnsScanID string, result proto.CrtShSecurityResult) (string, error)
	GetCrtShScanResultsByDomain(domain string) ([]CrtShScanResult, error)
}

type ChaosScanPlugin interface {
	Plugin
	ScanChaos(ctx context.Context, domain, dnsScanID string) (proto.ChaosSecurityResult, error)
	InsertChaosScanResult(domain, dnsScanID string, result proto.ChaosSecurityResult) (string, error)
	GetChaosScanResultsByDomain(domain string) ([]ChaosScanResult, error)
	SetConfig(cfg *config.Config)
}

type ShodanScanPlugin interface {
	Plugin
	ScanShodan(domain, dnsScanID string) (proto.ShodanSecurityResult, error)
	InsertShodanScanResult(domain, dnsScanID string, result proto.ShodanSecurityResult) (string, error)
	GetShodanScanResultsByDomain(domain string) ([]ShodanScanResult, error)
	SetConfig(cfg *config.Config)
}

type OTXScanPlugin interface {
	Plugin
	ScanOTX(domain, dnsScanID string) (proto.OTXSecurityResult, error)
	InsertOTXScanResult(domain, dnsScanID string, result proto.OTXSecurityResult) (string, error)
	GetOTXScanResultsByDomain(domain string) ([]OTXScanResult, error)
	SetConfig(cfg *config.Config)
}

type WhoisScanPlugin interface {
	Plugin
	ScanWhois(domain, dnsScanID string) (proto.WhoisSecurityResult, error)
	InsertWhoisScanResult(domain, dnsScanID string, result proto.WhoisSecurityResult) (string, error)
	GetWhoisScanResultsByDomain(domain string) ([]WhoisScanResult, error)
}

type AbuseChScanPlugin interface {
	Plugin
	ScanAbuseCh(domain, dnsScanID string) (proto.AbuseChSecurityResult, error)
	InsertAbuseChScanResult(domain, dnsScanID string, result proto.AbuseChSecurityResult) (string, error)
	GetAbuseChScanResultsByDomain(domain string) ([]AbuseChScanResult, error)
}

type DNSScanResult struct {
	ID        string
	Domain    string
	DNSScanID string
	Result    proto.DNSSecurityResult
	CreatedAt time.Time
}

type TLSScanResult struct {
	ID        string
	Domain    string
	DNSScanID string
	Result    proto.TLSSecurityResult
	CreatedAt time.Time
}

type CrtShScanResult struct {
	ID        string
	Domain    string
	DNSScanID string
	Result    proto.CrtShSecurityResult
	CreatedAt time.Time
}

type ChaosScanResult struct {
	ID        string
	Domain    string
	DNSScanID string
	Result    proto.ChaosSecurityResult
	CreatedAt time.Time
}

type ShodanScanResult struct {
	ID        string
	Domain    string
	DNSScanID string
	Result    proto.ShodanSecurityResult
	CreatedAt time.Time
}

type OTXScanResult struct {
	ID        string
	Domain    string
	DNSScanID string
	Result    proto.OTXSecurityResult
	CreatedAt time.Time
}

type WhoisScanResult struct {
	ID        string
	Domain    string
	DNSScanID string
	Result    proto.WhoisSecurityResult
	CreatedAt time.Time
}

type AbuseChScanResult struct {
	ID        string
	Domain    string
	DNSScanID string
	Result    proto.AbuseChSecurityResult
	CreatedAt time.Time
}
