// web/src/Scans.tsx
import React, { useState, useContext } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText, Paper, Alert, CircularProgress, Tabs, Tab } from '@mui/material';
import {
    ScanDomainRequest, ScanDomainResponse,
    ScanTLSRequest, ScanTLSResponse,
    ScanCrtShRequest, ScanCrtShResponse,
    ScanChaosRequest, ScanChaosResponse,
    ScanShodanRequest, ScanShodanResponse,
    ScanOTXRequest, ScanOTXResponse,
    ScanWhoisRequest, ScanWhoisResponse,
    ScanAbuseChRequest, ScanAbuseChResponse,
    GetDNSScanResultsByDomainRequest, GetDNSScanResultsByDomainResponse, DNSScanResult,
    GetTLSScanResultsByDomainRequest, GetTLSScanResultsByDomainResponse, TLSScanResult,
    GetCrtShScanResultsByDomainRequest, GetCrtShScanResultsByDomainResponse, CrtShScanResult,
    GetChaosScanResultsByDomainRequest, GetChaosScanResultsByDomainResponse, ChaosScanResult,
    GetShodanScanResultsByDomainRequest, GetShodanScanResultsByDomainResponse, ShodanScanResult,
    GetOTXScanResultsByDomainRequest, GetOTXScanResultsByDomainResponse, OTXScanResult,
    GetWhoisScanResultsByDomainRequest, GetWhoisScanResultsByDomainResponse, WhoisScanResult,
    GetAbuseChScanResultsByDomainRequest, GetAbuseChScanResultsByDomainResponse, AbuseChScanResult,
} from './proto/service'; // Import message types
import { ScanServiceClient } from './proto/service.client'; // Import client
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport'; // Import transport
import { AuthContext } from './App';
import { Timestamp } from './proto/google/protobuf/timestamp'; // Import Timestamp for formatting

const transport = new GrpcWebFetchTransport({
    baseUrl: 'http://localhost:8080',
    // Add interceptor to include x-api-key header
    interceptors: [{
        intercept(method, next) {
            return async req => {
                const authContext = useContext(AuthContext);
                const userToken = authContext?.user?.token; // Get token from context
                if (userToken) {
                    req.headers.set('x-api-key', userToken);
                }
                return await next(method, req);
            };
        }
    }]
});
const scanClient = new ScanServiceClient(transport); // Instantiate client

const Scans: React.FC = () => {
    const authContext = useContext(AuthContext);
    const user = authContext?.user;

    const [domain, setDomain] = useState<string>('');
    const [dnsScanId, setDnsScanId] = useState<string>(''); // To store the ID from the initial DNS scan
    const [results, setResults] = useState<any[]>([]); // Can hold various scan result types
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<number>(0); // 0 for Run Scans, 1 for View Results

    const handleRunScan = async (scanType: string) => {
        setError('');
        setSuccess('');
        setLoading(true);

        if (!domain) {
            setError("Domain is required to run a scan.");
            setLoading(false);
            return;
        }
        if (!user?.token) {
            setError("Authentication token missing. Please log in.");
            setLoading(false);
            return;
        }
        if (scanType !== 'dns' && !dnsScanId) {
            setError("A DNS scan must be run first to get a DNS Scan ID for other scans.");
            setLoading(false);
            return;
        }

        try {
            let response;
            let newScanId: string | undefined;

            switch (scanType) {
                case 'dns':
                    const dnsReq: ScanDomainRequest = { domain: domain };
                    response = await scanClient.scanDomain(dnsReq);
                    newScanId = (response.response as ScanDomainResponse).scanId;
                    setDnsScanId(newScanId || '');
                    break;
                case 'tls':
                    const tlsReq: ScanTLSRequest = { domain: domain, dnsScanId: dnsScanId };
                    response = await scanClient.scanTLS(tlsReq);
                    newScanId = (response.response as ScanTLSResponse).scanId;
                    break;
                case 'crtsh':
                    const crtshReq: ScanCrtShRequest = { domain: domain, dnsScanId: dnsScanId };
                    response = await scanClient.scanCrtSh(crtshReq);
                    newScanId = (response.response as ScanCrtShResponse).scanId;
                    break;
                case 'chaos':
                    const chaosReq: ScanChaosRequest = { domain: domain, dnsScanId: dnsScanId };
                    response = await scanClient.scanChaos(chaosReq);
                    newScanId = (response.response as ScanChaosResponse).scanId;
                    break;
                case 'shodan':
                    const shodanReq: ScanShodanRequest = { domain: domain, dnsScanId: dnsScanId };
                    response = await scanClient.scanShodan(shodanReq);
                    newScanId = (response.response as ScanShodanResponse).scanId;
                    break;
                case 'otx':
                    const otxReq: ScanOTXRequest = { domain: domain, dnsScanId: dnsScanId };
                    response = await scanClient.scanOTX(otxReq);
                    newScanId = (response.response as ScanOTXResponse).scanId;
                    break;
                case 'whois':
                    const whoisReq: ScanWhoisRequest = { domain: domain, dnsScanId: dnsScanId };
                    response = await scanClient.scanWhois(whoisReq);
                    newScanId = (response.response as ScanWhoisResponse).scanId;
                    break;
                case 'abusech':
                    const abuseChReq: ScanAbuseChRequest = { domain: domain, dnsScanId: dnsScanId };
                    response = await scanClient.scanAbuseCh(abuseChReq);
                    newScanId = (response.response as ScanAbuseChResponse).scanId;
                    break;
                default:
                    setError('Invalid scan type');
                    setLoading(false);
                    return;
            }

            setSuccess(`${scanType.toUpperCase()} scan initiated for ${domain}. Scan ID: ${newScanId || 'N/A'}`);
        } catch (err: any) {
            setError(`Failed to run ${scanType} scan: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleViewResults = async (scanType: string) => {
        setError('');
        setSuccess('');
        setLoading(true);
        setResults([]); // Clear previous results

        if (!domain) {
            setError("Domain is required to view scan results.");
            setLoading(false);
            return;
        }
        if (!user?.token) {
            setError("Authentication token missing. Please log in.");
            setLoading(false);
            return;
        }

        try {
            let response;
            switch (scanType) {
                case 'dns':
                    response = await scanClient.getDNSScanResultsByDomain({ domain: domain });
                    setResults((response.response as GetDNSScanResultsByDomainResponse).results);
                    break;
                case 'tls':
                    response = await scanClient.getTLSScanResultsByDomain({ domain: domain });
                    setResults((response.response as GetTLSScanResultsByDomainResponse).results);
                    break;
                case 'crtsh':
                    response = await scanClient.getCrtShScanResultsByDomain({ domain: domain });
                    setResults((response.response as GetCrtShScanResultsByDomainResponse).results);
                    break;
                case 'chaos':
                    response = await scanClient.getChaosScanResultsByDomain({ domain: domain });
                    setResults((response.response as GetChaosScanResultsByDomainResponse).results);
                    break;
                case 'shodan':
                    response = await scanClient.getShodanScanResultsByDomain({ domain: domain });
                    setResults((response.response as GetShodanScanResultsByDomainResponse).results);
                    break;
                case 'otx':
                    response = await scanClient.getOTXScanResultsByDomain({ domain: domain });
                    setResults((response.response as GetOTXScanResultsByDomainResponse).results);
                    break;
                case 'whois':
                    response = await scanClient.getWhoisScanResultsByDomain({ domain: domain });
                    setResults((response.response as GetWhoisScanResultsByDomainResponse).results);
                    break;
                case 'abusech':
                    response = await scanClient.getAbuseChScanResultsByDomain({ domain: domain });
                    setResults((response.response as GetAbuseChScanResultsByDomainResponse).results);
                    break;
                default:
                    setError('Invalid scan type');
                    return;
            }
            setSuccess(`Fetched ${response.response.results.length} ${scanType} scan results for ${domain}.`);
        } catch (err: any) {
            setError(`Failed to fetch ${scanType} scan results: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
        setError('');
        setSuccess('');
        setResults([]);
        setDnsScanId(''); // Clear DNS scan ID on tab change
    };

    const formatTimestamp = (timestamp: Timestamp | undefined) => {
        if (!timestamp) return 'N/A';
        return timestamp.toDate().toLocaleString();
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Domain Scans
            </Typography>
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
            {loading && <CircularProgress sx={{ mb: 2 }} />}

            <Tabs value={activeTab} onChange={handleTabChange} aria-label="scan tabs" sx={{ mb: 3 }}>
                <Tab label="Run New Scan" />
                <Tab label="View Past Results" />
            </Tabs>

            {activeTab === 0 && (
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>Initiate New Scan</Typography>
                    <TextField
                        label="Domain"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        fullWidth
                        sx={{ mb: 2 }}
                        placeholder="e.g., example.com"
                    />
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        <Button variant="contained" onClick={() => handleRunScan('dns')} disabled={loading}>
                            Run DNS Scan
                        </Button>
                        <Button variant="contained" onClick={() => handleRunScan('tls')} disabled={loading || !dnsScanId}>
                            Run TLS Scan
                        </Button>
                        <Button variant="contained" onClick={() => handleRunScan('crtsh')} disabled={loading || !dnsScanId}>
                            Run Crt.sh Scan
                        </Button>
                        <Button variant="contained" onClick={() => handleRunScan('chaos')} disabled={loading || !dnsScanId}>
                            Run Chaos Scan
                        </Button>
                        <Button variant="contained" onClick={() => handleRunScan('shodan')} disabled={loading || !dnsScanId}>
                            Run Shodan Scan
                        </Button>
                        <Button variant="contained" onClick={() => handleRunScan('otx')} disabled={loading || !dnsScanId}>
                            Run OTX Scan
                        </Button>
                        <Button variant="contained" onClick={() => handleRunScan('whois')} disabled={loading || !dnsScanId}>
                            Run Whois Scan
                        </Button>
                        <Button variant="contained" onClick={() => handleRunScan('abusech')} disabled={loading || !dnsScanId}>
                            Run Abuse.ch Scan
                        </Button>
                    </Box>
                    {dnsScanId && (
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                            Current DNS Scan ID: <strong>{dnsScanId}</strong> (used for subsequent scans)
                        </Typography>
                    )}
                </Paper>
            )}

            {activeTab === 1 && (
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>View Past Scan Results</Typography>
                    <TextField
                        label="Domain"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        fullWidth
                        sx={{ mb: 2 }}
                        placeholder="e.g., example.com"
                    />
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        <Button variant="contained" onClick={() => handleViewResults('dns')} disabled={loading}>
                            View DNS Results
                        </Button>
                        <Button variant="contained" onClick={() => handleViewResults('tls')} disabled={loading}>
                            View TLS Results
                        </Button>
                        <Button variant="contained" onClick={() => handleViewResults('crtsh')} disabled={loading}>
                            View Crt.sh Results
                        </Button>
                        <Button variant="contained" onClick={() => handleViewResults('chaos')} disabled={loading}>
                            View Chaos Results
                        </Button>
                        <Button variant="contained" onClick={() => handleViewResults('shodan')} disabled={loading}>
                            View Shodan Results
                        </Button>
                        <Button variant="contained" onClick={() => handleViewResults('otx')} disabled={loading}>
                            View OTX Results
                        </Button>
                        <Button variant="contained" onClick={() => handleViewResults('whois')} disabled={loading}>
                            View Whois Results
                        </Button>
                        <Button variant="contained" onClick={() => handleViewResults('abusech')} disabled={loading}>
                            View Abuse.ch Results
                        </Button>
                    </Box>

                    <Typography variant="subtitle1" gutterBottom>Results List</Typography>
                    <List dense sx={{ maxHeight: 400, overflow: 'auto', border: '1px solid #eee', borderRadius: 1 }}>
                        {results.length > 0 ? (
                            results.map((result: any, index: number) => ( // Use 'any' as results array holds mixed types
                                <ListItem key={result.id || index} divider>
                                    <ListItemText
                                        primary={`ID: ${result.id || 'N/A'} - Domain: ${result.domain}`}
                                        secondary={`Created: ${formatTimestamp(result.createdAt)}`}
                                    />
                                </ListItem>
                            ))
                        ) : (
                            <ListItem>
                                <ListItemText primary="No scan results found for this domain and type." />
                            </ListItem>
                        )}
                    </List>
                </Paper>
            )}
        </Box>
    );
};

export default Scans;