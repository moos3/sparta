// web/src/Scans.tsx
import React, { useState, useContext, useMemo } from 'react'; // Added useMemo
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
} from './proto/service';
import { ScanServiceClient } from './proto/service.client';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { AuthContext } from './AuthContext';
import { Timestamp } from './proto/google/protobuf/timestamp';
import { RpcInterceptorFn, RpcOptions } from '@protobuf-ts/runtime-rpc';

// REMOVE GLOBAL transport and scanClient HERE

const Scans: React.FC = () => {
    const authContext = useContext(AuthContext);
    const user = authContext?.user;

    // NEW: Instantiate transport and client inside the component using useMemo
    const scanClient = useMemo(() => {
        const transport = new GrpcWebFetchTransport({
            baseUrl: 'http://localhost:8080',
            interceptors: [{
                intercept(next) {
                    console.log("Interceptor: Intercept function invoked (Scans from useMemo)."); // Added for debug
                    return async (req) => {
                        const userToken = localStorage.getItem('sparta_token');
                        console.log("Interceptor (Scans from useMemo): User token:", userToken); // Added for debug
                        if (userToken) {
                            req.headers.set('x-api-key', userToken);
                        }
                        return await next(req);
                    };
                }
            }]
        });
        return new ScanServiceClient(transport);
    }, []); // Empty dependency array means it's created once

    const [domain, setDomain] = useState<string>('');
    const [dnsScanId, setDnsScanId] = useState<string>('');
    const [results, setResults] = useState<any[]>([]);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<number>(0);

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
            let callResponse;
            let newScanId: string | undefined;

            switch (scanType) {
                case 'dns':
                    const dnsReq: ScanDomainRequest = { domain: domain };
                    console.log("Running dns scan for domain:", domain);
                    callResponse = await scanClient.scanDomain(dnsReq);
                    newScanId = (callResponse.response as ScanDomainResponse).scanId;
                    setDnsScanId(newScanId || '');
                    break;
                case 'tls':
                    const tlsReq: ScanTLSRequest = { domain: domain, dnsScanId: dnsScanId };
                    callResponse = await scanClient.scanTLS(tlsReq);
                    newScanId = (callResponse.response as ScanTLSResponse).scanId;
                    break;
                case 'crtsh':
                    const crtshReq: ScanCrtShRequest = { domain: domain, dnsScanId: dnsScanId };
                    callResponse = await scanClient.scanCrtSh(crtshReq);
                    newScanId = (callResponse.response as ScanCrtShResponse).scanId;
                    break;
                case 'chaos':
                    const chaosReq: ScanChaosRequest = { domain: domain, dnsScanId: dnsScanId };
                    callResponse = await scanClient.scanChaos(chaosReq);
                    newScanId = (callResponse.response as ScanChaosResponse).scanId;
                    break;
                case 'shodan':
                    const shodanReq: ScanShodanRequest = { domain: domain, dnsScanId: dnsScanId };
                    callResponse = await scanClient.scanShodan(shodanReq);
                    newScanId = (callResponse.response as ScanShodanResponse).scanId;
                    break;
                case 'otx':
                    const otxReq: ScanOTXRequest = { domain: domain, dnsScanId: dnsScanId };
                    callResponse = await scanClient.scanOTX(otxReq);
                    newScanId = (callResponse.response as ScanOTXResponse).scanId;
                    break;
                case 'whois':
                    const whoisReq: ScanWhoisRequest = { domain: domain, dnsScanId: dnsScanId };
                    callResponse = await scanClient.scanWhois(whoisReq);
                    newScanId = (callResponse.response as ScanWhoisResponse).scanId;
                    break;
                case 'abusech':
                    const abuseChReq: ScanAbuseChRequest = { domain: domain, dnsScanId: dnsScanId };
                    callResponse = await scanClient.scanAbuseCh(abuseChReq);
                    newScanId = (callResponse.response as ScanAbuseChResponse).scanId;
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
        setResults([]);

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
            let callResponse;
            switch (scanType) {
                case 'dns':
                    callResponse = await scanClient.getDNSScanResultsByDomain({ domain: domain });
                    setResults((callResponse.response as GetDNSScanResultsByDomainResponse).results);
                    break;
                case 'tls':
                    callResponse = await scanClient.getTLSScanResultsByDomain({ domain: domain });
                    setResults((callResponse.response as GetTLSScanResultsByDomainResponse).results);
                    break;
                case 'crtsh':
                    callResponse = await scanClient.getCrtShScanResultsByDomain({ domain: domain });
                    setResults((callResponse.response as GetCrtShScanResultsByDomainResponse).results);
                    break;
                case 'chaos':
                    callResponse = await scanClient.getChaosScanResultsByDomain({ domain: domain });
                    setResults((callResponse.response as GetChaosScanResultsByDomainResponse).results);
                    break;
                case 'shodan':
                    callResponse = await scanClient.getShodanScanResultsByDomain({ domain: domain });
                    setResults((callResponse.response as GetShodanScanResultsByDomainResponse).results);
                    break;
                case 'otx':
                    callResponse = await scanClient.getOTXScanResultsByDomain({ domain: domain });
                    setResults((callResponse.response as GetOTXScanResultsByDomainResponse).results);
                    break;
                case 'whois':
                    callResponse = await scanClient.getWhoisScanResultsByDomain({ domain: domain });
                    setResults((callResponse.response as GetWhoisScanResultsByDomainResponse).results);
                    break;
                case 'abusech':
                    callResponse = await scanClient.getAbuseChScanResultsByDomain({ domain: domain });
                    setResults((callResponse.response as GetAbuseChScanResultsByDomainResponse).results);
                    break;
                default:
                    setError('Invalid scan type');
                    return;
            }
            setSuccess(`Fetched ${callResponse.response.results.length} ${scanType} scan results for ${domain}.`);
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
        setDnsScanId('');
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
                results.map((result: any, index: number) => (
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