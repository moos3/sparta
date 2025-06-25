// web/src/Reports.tsx
import React, { useState, useEffect, useContext } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText, Paper, Alert, CircularProgress, Grid } from '@mui/material';
import { GenerateReportRequest, GenerateReportResponse, ListReportsRequest, ListReportsResponse, GetReportByIdRequest, GetReportByIdResponse, Report } from './proto/service'; // Import message types
import { ReportServiceClient } from './proto/service.client'; // Import client
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
const reportClient = new ReportServiceClient(transport); // Instantiate client

const Reports: React.FC = () => {
    const authContext = useContext(AuthContext);
    const user = authContext?.user;

    const [reports, setReports] = useState<Report[]>([]);
    const [domain, setDomain] = useState<string>('');
    const [reportId, setReportId] = useState<string>('');
    const [selectedReport, setSelectedReport] = useState<Report | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    const fetchReports = (filterDomain: string = '') => {
        setError('');
        setLoading(true);
        const request: ListReportsRequest = { domain: filterDomain };

        if (!user?.token) {
            setError("Authentication token missing. Please log in.");
            setLoading(false);
            setReports([]);
            return;
        }

        reportClient.listReports(request).then((response: ListReportsResponse) => {
            setLoading(false);
            setReports(response.reports);
        }).catch((err: any) => {
            setLoading(false);
            setError(`Error fetching reports: ${err.message}`);
            setReports([]);
        });
    };

    useEffect(() => {
        if (user && user.token) {
            fetchReports();
        }
    }, [user]);

    const handleGenerateReport = () => {
        setError('');
        setSuccess('');
        setLoading(true);
        setSelectedReport(null);

        if (!domain) {
            setError("Domain is required to generate a report.");
            setLoading(false);
            return;
        }
        if (!user?.token) {
            setError("Authentication token missing. Please log in.");
            setLoading(false);
            return;
        }

        const request: GenerateReportRequest = { domain: domain };

        reportClient.generateReport(request).then((response: GenerateReportResponse) => {
            setLoading(false);
            setSuccess(`Report generated for ${domain} with ID: ${response.reportId}`);
            setDomain('');
            fetchReports();
        }).catch((err: any) => {
            setLoading(false);
            setError(`Error generating report: ${err.message}`);
        });
    };

    const handleGetReportById = () => {
        setError('');
        setSuccess('');
        setLoading(true);
        setSelectedReport(null);

        if (!reportId) {
            setError("Report ID is required to fetch a specific report.");
            setLoading(false);
            return;
        }
        if (!user?.token) {
            setError("Authentication token missing. Please log in.");
            setLoading(false);
            return;
        }

        const request: GetReportByIdRequest = { reportId: reportId };

        reportClient.getReportById(request).then((response: GetReportByIdResponse) => {
            setLoading(false);
            setSelectedReport(response.report || null); // Ensure it's null if undefined
        }).catch((err: any) => {
            setLoading(false);
            setError(`Error fetching report by ID: ${err.message}`);
        });
    };

    const formatTimestamp = (timestamp: Timestamp | undefined) => {
        if (!timestamp) return 'N/A';
        // protobuf-ts Timestamp has toJsDate() method
        return timestamp.toDate().toLocaleString();
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Domain Security Reports
            </Typography>
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
            {loading && <CircularProgress sx={{ mb: 2 }} />}

            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Generate New Report</Typography>
                        <TextField
                            label="Domain to Scan"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            fullWidth
                            sx={{ mb: 2 }}
                            placeholder="e.g., example.com"
                        />
                        <Button variant="contained" onClick={handleGenerateReport} disabled={loading}>
                            Generate Report
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Get Report by ID</Typography>
                        <TextField
                            label="Report ID"
                            value={reportId}
                            onChange={(e) => setReportId(e.target.value)}
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                        <Button variant="contained" onClick={handleGetReportById} disabled={loading}>
                            Get Report
                        </Button>
                    </Paper>
                </Grid>
            </Grid>

            {selectedReport && (
                <Paper sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>Selected Report Details</Typography>
                    <List dense>
                        <ListItem><ListItemText primary={`Report ID: ${selectedReport.reportId}`} /></ListItem>
                        <ListItem><ListItemText primary={`Domain: ${selectedReport.domain}`} /></ListItem>
                        <ListItem><ListItemText primary={`DNS Scan ID: ${selectedReport.dnsScanId}`} /></ListItem>
                        <ListItem><ListItemText primary={`Score: ${selectedReport.score}`} /></ListItem>
                        <ListItem><ListItemText primary={`Risk Tier: ${selectedReport.riskTier}`} /></ListItem>
                        <ListItem><ListItemText primary={`Created At: ${formatTimestamp(selectedReport.createdAt)}`} /></ListItem>
                    </List>
                </Paper>
            )}

            <Typography variant="h6" gutterBottom>All Reports</Typography>
            <Paper sx={{ p: 2 }}>
                <List dense>
                    {reports.length > 0 ? (
                        reports.map((report) => (
                            <ListItem key={report.reportId} divider>
                                <ListItemText
                                    primary={`${report.domain} - Score: ${report.score} - Risk: ${report.riskTier}`}
                                    secondary={`ID: ${report.reportId}, Created: ${formatTimestamp(report.createdAt)}`}
                                />
                                <Button size="small" onClick={() => setReportId(report.reportId)}>View Details</Button>
                            </ListItem>
                        ))
                    ) : (
                        <ListItem>
                            <ListItemText primary="No reports found. Generate one above!" />
                        </ListItem>
                    )}
                </List>
            </Paper>
        </Box>
    );
};

export default Reports;