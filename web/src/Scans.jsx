import React, { useState } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText, Paper } from '@mui/material';
import * as proto from './service_grpc_web_pb';
import * as protoService from './service_pb';

const client = new proto.service.UserServiceClient('http://localhost:50051', null, null);

const Scans = () => {
    const [domain, setDomain] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const handleScan = (scanType) => {
        let request;
        switch (scanType) {
            case 'dns':
                request = new protoService.service.GetDNSScanResultsByDomainRequest();
                break;
            case 'tls':
                request = new protoService.service.GetTLSScanResultsByDomainRequest();
                break;
            case 'crtsh':
                request = new protoService.service.GetCrtShScanResultsByDomainRequest();
                break;
            default:
                setError('Invalid scan type');
                return;
        }
        request.setDomain(domain);
        client[`get${scanType.charAt(0).toUpperCase() + scanType.slice(1)}ScanResultsByDomain`](request, {}, (err, response) => {
            if (err) {
                setError(`Failed to fetch ${scanType} scan results: ${err.message}`);
                return;
            }
            setResults(response.getResultsList());
            setError('');
        });
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Domain Scans
            </Typography>
            {error && <Box sx={{ mb: 2 }}><Alert severity="error">{error}</Alert></Box>}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h6">Run Scan</Typography>
                <TextField
                    label="Domain"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    fullWidth
                    sx={{ m: 1 }}
                />
                <Button variant="contained" onClick={() => handleScan('dns')} sx={{ m: 1 }}>
                    DNS Scan
                </Button>
                <Button variant="contained" onClick={() => handleScan('tls')} sx={{ m: 1 }}>
                    TLS Scan
                </Button>
                <Button variant="contained" onClick={() => handleScan('crtsh')} sx={{ m: 1 }}>
                    CrtSh Scan
                </Button>
            </Box>
            <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Scan Results</Typography>
                <List>
                    {results.map((result, index) => (
                        <ListItem key={index}>
                            <ListItemText
                                primary={`ID: ${result.getId()}`}
                                secondary={`Domain: ${result.getDomain()}, Created: ${result.getCreatedAt().toDate().toString()}`}
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    );
};

export default Scans;