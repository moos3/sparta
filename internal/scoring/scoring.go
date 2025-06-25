package scoring

import (
	"time"

	pb "github.com/moos3/sparta/proto"
)

type RiskScore struct {
	Score    int
	RiskTier string
}

type DomainScanResults struct {
	DNS     *pb.DNSSecurityResult
	TLS     *pb.TLSSecurityResult
	CrtSh   *pb.CrtShSecurityResult
	Chaos   *pb.ChaosSecurityResult
	Shodan  *pb.ShodanSecurityResult
	OTX     *pb.OTXSecurityResult
	Whois   *pb.WhoisSecurityResult
	AbuseCh *pb.AbuseChSecurityResult
	ISC     *pb.ISCSecurityResult // New: ISC Scan Result
}

func CalculateRiskScore(results *DomainScanResults) RiskScore {
	score := 0
	now := time.Now()

	// DNS Scoring
	if results.DNS != nil {
		if !results.DNS.SpfValid {
			score += 20 // Missing or invalid SPF increases risk
		}
		if !results.DNS.DmarcValid {
			score += 20 // Missing or invalid DMARC increases risk
		}
		if !results.DNS.DnssecEnabled || !results.DNS.DnssecValid {
			score += 15 // Lack of DNSSEC or invalid DNSSEC increases risk
		}
		if len(results.DNS.Errors) > 0 {
			score += 10 * len(results.DNS.Errors) // Errors indicate issues
		}
	}

	// TLS Scoring
	if results.TLS != nil {
		switch results.TLS.TlsVersion {
		case "TLS 1.0", "TLS 1.1":
			score += 25 // Outdated TLS versions are highly risky
		case "TLS 1.2":
			score += 10 // TLS 1.2 is acceptable but not ideal
		case "TLS 1.3":
			// No penalty for TLS 1.3
		default:
			score += 15 // Unknown version is moderately risky
		}
		if !results.TLS.HstsHeader {
			score += 10 // Missing HSTS weakens security
		}
		if !results.TLS.CertificateValid || (results.TLS.CertNotAfter != nil && now.After(results.TLS.CertNotAfter.AsTime())) {
			score += 20 // Invalid or expired certificate increases risk
		}
		if results.TLS.CertKeyStrength < 2048 {
			score += 10 // Weak key strength increases risk
		}
		if len(results.TLS.Errors) > 0 {
			score += 5 * len(results.TLS.Errors) // Errors indicate issues
		}
	}

	// CrtSh Scoring
	if results.CrtSh != nil {
		for _, cert := range results.CrtSh.Certificates {
			if cert.NotAfter != nil && now.After(cert.NotAfter.AsTime()) {
				score += 10 // Expired certificates increase risk
			}
			if len(cert.DnsNames) > 5 {
				score += 5 // Many DNS names may indicate overexposure
			}
		}
		if len(results.CrtSh.Subdomains) > 10 {
			score += 10 // Excessive subdomains increase attack surface
		}
		if len(results.CrtSh.Errors) > 0 {
			score += 5 * len(results.CrtSh.Errors)
		}
	}

	// Chaos Scoring
	if results.Chaos != nil {
		if len(results.Chaos.Subdomains) > 10 {
			score += 10 // Many subdomains increase attack surface
		}
		if len(results.Chaos.Errors) > 0 {
			score += 5 * len(results.Chaos.Errors)
		}
	}

	// Shodan Scoring
	if results.Shodan != nil {
		for _, host := range results.Shodan.Hosts {
			if host.Ssl != nil && host.Ssl.NotAfter != nil && now.After(host.Ssl.NotAfter.AsTime()) {
				score += 10 // Expired SSL certificates increase risk
			}
			if len(host.Hostnames) > 5 {
				score += 5 // Many hostnames increase exposure
			}
			if len(host.Tags) > 0 {
				for _, tag := range host.Tags {
					if tag == "vulnerable" || tag == "exposed" {
						score += 10 // Vulnerable tags indicate high risk
					}
				}
			}
			if host.Timestamp != nil && now.Sub(host.Timestamp.AsTime()) > 30*24*time.Hour {
				score += 5 // Stale data may indicate outdated scans
			}
		}
		if len(results.Shodan.Errors) > 0 {
			score += 5 * len(results.Shodan.Errors)
		}
	}

	// OTX Scoring
	if results.OTX != nil {
		if results.OTX.GeneralInfo != nil && results.OTX.GeneralInfo.PulseCount > 0 {
			score += 15 * int(results.OTX.GeneralInfo.PulseCount) // Threat intelligence pulses indicate risk
		}
		for _, malware := range results.OTX.Malware {
			if malware.Datetime != nil && now.Sub(malware.Datetime.AsTime()) < 90*24*time.Hour {
				score += 20 // Recent malware detections are high risk
			}
		}
		for _, url := range results.OTX.Urls {
			if url.Datetime != nil && now.Sub(url.Datetime.AsTime()) < 90*24*time.Hour {
				score += 10 // Recent malicious URLs increase risk
			}
		}
		if len(results.OTX.Errors) > 0 {
			score += 5 * len(results.OTX.Errors)
		}
	}

	// Whois Scoring
	if results.Whois != nil {
		if results.Whois.ExpiryDate != nil {
			expiry := results.Whois.ExpiryDate.AsTime()
			if now.After(expiry) {
				score += 20 // Expired domain is high risk
			} else if now.Add(30 * 24 * time.Hour).After(expiry) {
				score += 10 // Domain expiring soon increases risk
			}
		}
		if results.Whois.Domain == "" {
			score += 5 // Missing domain field indicates incomplete data
		}
		if len(results.Whois.Errors) > 0 {
			score += 5 * len(results.Whois.Errors)
		}
	}

	// AbuseCh Scoring
	if results.AbuseCh != nil {
		for _, ioc := range results.AbuseCh.Iocs {
			if ioc.Confidence > 0.7 {
				score += 15 // High-confidence IOCs are significant
			} else if ioc.Confidence > 0.5 {
				score += 10 // Medium-confidence IOCs are moderately risky
			}
			if ioc.LastSeen != nil && now.Sub(ioc.LastSeen.AsTime()) < 30*24*time.Hour {
				score += 10 // Recent IOCs increase risk
			}
		}
		if len(results.AbuseCh.Errors) > 0 {
			score += 5 * len(results.AbuseCh.Errors)
		}
	}

	// New: ISC Scoring
	if results.ISC != nil {
		if results.ISC.OverallRisk == "High" {
			score += 30 // High overall risk from ISC
		} else if results.ISC.OverallRisk == "Medium" {
			score += 15 // Medium overall risk
		}
		if len(results.ISC.Incidents) > 0 {
			score += 10 * len(results.ISC.Incidents) // Each incident increases risk
			// Further scoring could differentiate by incident severity
		}
		if len(results.ISC.Errors) > 0 {
			score += 5 * len(results.ISC.Errors) // Errors indicate issues with scan
		}
	}

	// Cap score at 100
	if score > 100 {
		score = 100
	}

	// Determine Risk Tier
	riskTier := "Low"
	switch {
	case score >= 80:
		riskTier = "Critical"
	case score >= 60:
		riskTier = "High"
	case score >= 40:
		riskTier = "Medium"
	}

	return RiskScore{
		Score:    score,
		RiskTier: riskTier,
	}
}
