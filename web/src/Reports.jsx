import React, { useState, useEffect, useContext } from 'react';
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
    GenerateReportRequest,
    ListReportsRequest,
    GetDNSScanResultByIDRequest,
    GetTLSScanResultsByDomainRequest,
    GetCrtShScanResultsByDomainRequest,
    GetChaosScanResultsByDomainRequest,
    GetShodanScanResultsByDomainRequest,
    GetOTXScanResultsByDomainRequest,
    GetWhoisScanResultsByDomainRequest,
    GetAbuseChScanResultsByDomainRequest,
} from './services/service_pb';

const userClient = new UserServiceClient('http://localhost:50051');

function Reports() {
    const { user } = useContext(AuthContext);
    const [domain, setDomain] = useState('');
    const [reports, setReports] = useState([]);
    const [error, setError] = useState('');

    // Fetch reports on mount
    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = () => {
        const request = new ListReportsRequest();
        if (domain) {
            request.setDomain(domain.toLowerCase().trim());
        }
        userClient.listReports(request, { 'x-api-key': user.token }, (err, response) => {
            if (err) {
                setError('Failed to fetch reports: ' + err.message);
                return;
            }
            const fetchedReports = response.getReportsList().map(report => ({
                id: report.getReportId(),
                domain: report.getDomain(),
                dnsScanID: report.getDnsScanId(),
                score: report.getScore(),
                riskTier: report.getRiskTier(),
                createdAt: new Date(report.getCreatedAt().getSeconds() * 1000).toISOString().split('T')[0],
                results: {},
            }));
            Promise.all(
                fetchedReports.map(report =>
                    new Promise(resolve => {
                        const plugins = [
                            { name: 'DNS', client: userClient.getDNSScanResultByID, requestType: GetDNSScanResultByIDRequest, useID: true },
                            { name: 'TLS', client: userClient.getTLSScanResultsByDomain, requestType: GetTLSScanResultsByDomainRequest },
                            { name: 'CrtSh', client: userClient.getCrtShScanResultsByDomain, requestType: GetCrtShScanResultsByDomainRequest },
                            { name: 'Chaos', client: userClient.getChaosScanResultsByDomain, requestType: GetChaosScanResultsByDomainRequest },
                            { name: 'Shodan', client: userClient.getShodanScanResultsByDomain, requestType: GetShodanScanResultsByDomainRequest },
                            { name: 'OTX', client: userClient.getOTXScanResultsByDomain, requestType: GetOTXScanResultsByDomainRequest },
                            { name: 'Whois', client: userClient.getWhoisScanResultsByDomain, requestType: GetWhoisScanResultsByDomainRequest },
                            { name: 'AbuseCh', client: userClient.getAbuseChScanResultsByDomain, requestType: GetAbuseChScanResultsByDomainRequest },
                        ];
                        Promise.all(
                            plugins.map(({ name, client, requestType, useID }) =>
                                new Promise(resolvePlugin => {
                                    const request = new requestType();
                                    if (useID) {
                                        request.setDnsScanId(report.dnsScanID);
                                    } else {
                                        request.setDomain(report.domain.toLowerCase().trim());
                                    }
                                    client(request, { 'x-api-key': user.token }, (err, response) => {
                                        if (err) {
                                            resolvePlugin({ name, error: err.message });
                                        } else {
                                            resolvePlugin({
                                                name,
                                                results: useID ? [response.getResult()] : response.getResultsList().find(r => r.getDnsScanId() === report.dnsScanID) || response.getResultsList()[0],
                                            });
                                        }
                                    });
                                })
                            )
                        ).then(pluginResults => {
                            const updatedReport = { ...report };
                            pluginResults.forEach(({ name, results, error }) => {
                                updatedReport.results[name] = error ? { error } : results;
                            });
                            resolve(updatedReport);
                        });
                    })
                )
            ).then(updatedReports => {
                setReports(updatedReports);
                setError('Reports fetched successfully');
            }).catch(err => {
                setError('Failed to retrieve scan results: ' + err.message);
            });
        });
    };

    const generateReport = () => {
        if (!domain) {
            setError('Please enter a domain');
            return;
        }
        const request = new GenerateReportRequest();
        request.setDomain(domain.toLowerCase().trim());
        userClient.generateReport(request, { 'x-api-key': user.token }, (err, response) => {
            if (err) {
                setError('Failed to generate report: ' + err.message);
                return;
            }
            // Fetch scan results for the dns_scan_id
            const dnsScanID = response.getDnsScanId();
            const plugins = [
                { name: 'DNS', client: userClient.getDNSScanResultByID, requestType: GetDNSScanResultByIDRequest, useID: true },
                { name: 'TLS', client: userClient.getTLSScanResultsByDomain, requestType: GetTLSScanResultsByDomainRequest },
                { name: 'CrtSh', client: userClient.getCrtShScanResultsByDomain, requestType: GetCrtShScanResultsByDomainRequest },
                { name: 'Chaos', client: userClient.getChaosScanResultsByDomain, requestType: GetChaosScanResultsByDomainRequest },
                { name: 'Shodan', client: userClient.getShodanScanResultsByDomain, requestType: GetShodanScanResultsByDomainRequest },
                { name: 'OTX', client: userClient.getOTXScanResultsByDomain, requestType: GetOTXScanResultsByDomainRequest },
                { name: 'Whois', client: userClient.getWhoisScanResultsByDomain, requestType: GetWhoisScanResultsByDomainRequest },
                { name: 'AbuseCh', client: userClient.getAbuseChScanResultsByDomain, requestType: GetAbuseChScanResultsByDomainRequest },
            ];

            Promise.all(
                plugins.map(({ name, client, requestType, useID }) =>
                    new Promise(resolve => {
                        const request = new requestType();
                        if (useID) {
                            request.setDnsScanId(dnsScanID);
                        } else {
                            request.setDomain(domain.toLowerCase().trim());
                        }
                        client(request, { 'x-api-key': user.token }, (err, response) => {
                            if (err) {
                                resolve({ name, error: err.message });
                            } else {
                                resolve({
                                    name,
                                    results: useID ? [response.getResult()] : response.getResultsList().find(r => r.getDnsScanId() === dnsScanID) || response.getResultsList()[0],
                                });
                            }
                        });
                    })
                )
            ).then(pluginResults => {
                const report = {
                    id: response.getReportId(),
                    domain,
                    dnsScanID,
                    score: response.getScore(),
                    riskTier: response.getRiskTier(),
                    createdAt: new Date(response.getCreatedAt().getSeconds() * 1000).toISOString().split('T')[0],
                    results: {},
                };
                pluginResults.forEach(({ name, results, error }) => {
                    report.results[name] = error ? { error } : results;
                });
                setReports(prev => [...prev, report]);
                setError('Report generated successfully');
            }).catch(err => {
                setError('Failed to retrieve scan results: ' + err.message);
            });
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
                        {result.getCertificates().map((cert, index) => (
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
                        {result.getIpAddresses().map((ip, index) => (
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
                        {result.getSubdomains().map((subdomain, index) => (
                            <li key={index}>
                                <Typography variant="body2">{subdomain}</Typography>
                            </li>
                        ))}
                    </ul>
                );
            case 'Shodan':
                return (
                    <ul>
                        {result.getHosts().map((host, index) => (
                            <li key={index}>
                                <Typography variant="body2">
                                    IP: {host.getIp()}, Hostnames: {host.getHostnames().join(', ')}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                );
            case 'OTX':
                return (
                    <Typography variant="body2">
                        Pulse Count: {result.getGeneralInfo()?.getPulseCount() || 0}, Malware: {result.getMalware().length}
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
                        {result.getIocs().map((ioc, index) => (
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
                Reports
            </Typography>
            {error && <Alert severity={error.includes('successfully') ? 'success' : 'error'} sx={{ mb: 2 }}>
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
                    <Button variant="contained" onClick={generateReport}>
                        Generate Report
                    </Button>
                    <Button variant="contained" onClick={fetchReports}>
                        Refresh Reports
                    </Button>
                </Box>
            </Paper>
            {reports.map((report) => (
                <Paper key={report.id} elevation={3} sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Report for {report.domain} (Date: {report.createdAt})
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Score: {report.score} ({report.riskTier})
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        DNS Scan ID: {report.dnsScanID}
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
                                {Object.entries(report.results).map(([pluginName, result]) => (
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
                </Paper>
            ))}
        </Box>
    );
}

export default Reports;