import React, { useState, useContext } from 'react';
import { AuthContext } from './App';
import {
    TextField,
    Button,
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Alert,
} from '@mui/material';
import { UserServiceClient } from './services/service_grpc_web_pb';
import {
    GetCrtShScanResultsByDomainRequest,
    GetDNSScanResultsByDomainRequest,
    GetTLSScanResultsByDomainRequest,
    GetChaosScanResultsByDomainRequest,
    GetShodanScanResultsByDomainRequest,
    GetOTXScanResultsByDomainRequest,
    GetWhoisScanResultsByDomainRequest,
    GetAbuseChScanResultsByDomainRequest,
    CalculateRiskScoreRequest,
} from './services/service_pb';

const userClient = new UserServiceClient('http://localhost:50051');

function Scans() {
    const { user } = useContext(AuthContext);
    const [domain, setDomain] = useState('');
    const [scanResults, setScanResults] = useState({});
    const [riskScore, setRiskScore] = useState(null);
    const [error, setError] = useState('');

    const fetchScanResults = () => {
        if (!domain) {
            setError('Please enter a domain');
            return;
        }
        const plugins = [
            { name: 'CrtSh', client: userClient.getCrtShScanResultsByDomain, requestType: GetCrtShScanResultsByDomainRequest },
            { name: 'DNS', client: userClient.getDNSScanResultsByDomain, requestType: GetDNSScanResultsByDomainRequest },
            { name: 'TLS', client: userClient.getTLSScanResultsByDomain, requestType: GetTLSScanResultsByDomainRequest },
            { name: 'Chaos', client: userClient.getChaosScanResultsByDomain, requestType: GetChaosScanResultsByDomainRequest },
            { name: 'Shodan', client: userClient.getShodanScanResultsByDomain, requestType: GetShodanScanResultsByDomainRequest },
            { name: 'OTX', client: userClient.getOTXScanResultsByDomain, requestType: GetOTXScanResultsByDomainRequest },
            { name: 'Whois', client: userClient.getWhoisScanResultsByDomain, requestType: GetWhoisScanResultsByDomainRequest },
            { name: 'AbuseCh', client: userClient.getAbuseChScanResultsByDomain, requestType: GetAbuseChScanResultsByDomainRequest },
        ];

        Promise.all(
            plugins.map(({ name, client, requestType }) =>
                new Promise((resolve) => {
                    const request = new requestType();
                    request.setDomain(domain.toLowerCase().trim());
                    client(request, { 'x-api-key': user.token }, (err, response) => {
                        if (err) {
                            resolve({ name, error: err.message });
                        } else {
                            resolve({ name, results: response.getResultsList() });
                        }
                    });
                })
            )
        ).then((pluginResults) => {
            const groupedResults = {};
            pluginResults.forEach(({ name, results, error }) => {
                if (error) {
                    groupedResults[name] = { error };
                    return;
                }
                results.forEach((scan) => {
                    const createdAt = scan.getCreatedAt();
                    const date = createdAt ? new Date(createdAt.getSeconds() * 1000).toISOString().split('T')[0] : 'Unknown';
                    const scanId = scan.getDnsScanId() || 'N/A';
                    if (!groupedResults[date]) {
                        groupedResults[date] = {};
                    }
                    if (!groupedResults[date][scanId]) {
                        groupedResults[date][scanId] = {};
                    }
                    groupedResults[date][scanId][name] = scan.getResult();
                });
            });

            setScanResults(groupedResults);
            setError('Scan results retrieved');
        }).catch((err) => {
            setError('Failed to retrieve scan results: ' + err.message);
        });
    };

    const calculateRiskScore = () => {
        if (!domain) {
            setError('Please enter a domain');
            return;
        }
        const request = new CalculateRiskScoreRequest();
        request.setDomain(domain.toLowerCase().trim());
        userClient.calculateRiskScore(request, { 'x-api-key': user.token }, (err, response) => {
            if (err) {
                setError('Failed to calculate risk score: ' + err.message);
                setRiskScore(null);
            } else {
                setRiskScore({
                    score: response.getScore(),
                    riskTier: response.getRiskTier(),
                });
                setError('Risk score calculated');
            }
        });
    };

    const renderResult = (pluginName, result) => {
        if (!result) {
            return <Typography variant="body2">No results</Typography>;
        }
        switch (pluginName) {
            case 'CrtSh':
                return (
                    <ul>
                        {result.getCertificatesList().map((cert, index) => (
                            <li key={index}>
                                <Typography variant="body2">
                                    {cert.getCommonName()} (Issuer: {cert.getIssuer()}, Expires: {new Date(cert.getNotAfter().getSeconds() * 1000).toLocaleString()})
                                </Typography>
                            </li>
                        ))}
                    </ul>
                );
            case 'DNS':
                return (
                    <ul>
                        {result.getIpAddressesList().map((ip, index) => (
                            <li key={index}>
                                <Typography variant="body2">IP: {ip}</Typography>
                            </li>
                        ))}
                        <li><Typography variant="body2">SPF Valid: {result.getSpfValid() ? 'Yes' : 'No'}</Typography></li>
                        <li><Typography variant="body2">DMARC Valid: {result.getDmarcValid() ? 'Yes' : 'No'}</Typography></li>
                    </ul>
                );
            case 'TLS':
                return (
                    <Typography variant="body2">
                        TLS Version: {result.getTlsVersion()}, Cipher Suite: {result.getCipherSuite()}, Certificate Valid: {result.getCertificateValid() ? 'Yes' : 'No'}
                    </Typography>
                );
            case 'Chaos':
                return (
                    <ul>
                        {result.getSubdomainsList().map((subdomain, index) => (
                            <li key={index}>
                                <Typography variant="body2">{subdomain}</Typography>
                            </li>
                        ))}
                    </ul>
                );
            case 'Shodan':
                return (
                    <ul>
                        {result.getHostsList().map((host, index) => (
                            <li key={index}>
                                <Typography variant="body2">
                                    IP: {host.getIp()}, Hostnames: {host.getHostnamesList().join(', ')}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                );
            case 'OTX':
                return (
                    <Typography variant="body2">
                        Pulse Count: {result.getGeneralInfo()?.getPulseCount() || 0}, Malware: {result.getMalwareList().length}
                    </Typography>
                );
            case 'Whois':
                return (
                    <Typography variant="body2">
                        Registrar: {result.getRegistrar()}, Expiry: {result.getExpiryDate() ? new Date(result.getExpiryDate().getSeconds() * 1000).toLocaleString() : 'N/A'}
                    </Typography>
                );
            case 'AbuseCh':
                return (
                    <ul>
                        {result.getIocsList().map((ioc, index) => (
                            <li key={index}>
                                <Typography variant="body2">
                                    IOC: {ioc.getIocValue()}, Type: {ioc.getIocType()}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                );
            default:
                return <Typography variant="body2">Unsupported plugin</Typography>;
        }
    };

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
                Scan Results
            </Typography>
            {error && <Alert severity={error.includes('retrieved') || error.includes('calculated') ? 'success' : 'error'} sx={{ mb: 2 }}>
                {error}
            </Alert>}
            <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                    <TextField
                        label="Domain"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: 300 }}
                    />
                    <Button variant="contained" onClick={fetchScanResults}>
                        Get Scan Results
                    </Button>
                    <Button variant="contained" onClick={calculateRiskScore}>
                        Calculate Risk Score
                    </Button>
                </Box>
                {riskScore && (
                    <Typography variant="body1">
                        Risk Score: {riskScore.score} ({riskScore.riskTier})
                    </Typography>
                )}
            </Paper>
            {Object.entries(scanResults).map(([date, scanGroups]) => (
                <Paper key={date} elevation={3} sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Date: {date}
                    </Typography>
                    {Object.entries(scanGroups).map(([scanId, plugins]) => (
                        <Box key={scanId} sx={{ mb: 2 }}>
                            <Typography variant="subtitle1" gutterBottom>
                                Scan ID: {scanId}
                            </Typography>
                            <TableContainer component={Paper} elevation={2}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Plugin</TableCell>
                                            <TableCell>Results</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {Object.entries(plugins).map(([pluginName, result]) => (
                                            <TableRow key={pluginName}>
                                                <TableCell>{pluginName}</TableCell>
                                                <TableCell>
                                                    {result.error ? (
                                                        <Typography variant="body2">Error: {result.error}</Typography>
                                                    ) : (
                                                        renderResult(pluginName, result)
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    ))}
                </Paper>
            ))}
        </Box>
    );
}

export default Scans;