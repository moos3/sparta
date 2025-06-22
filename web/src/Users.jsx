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
    Select,
    MenuItem,
    FormControlLabel,
    Checkbox,
    Alert,
    Paper,
} from '@mui/material';
import { AuthServiceClient, UserServiceClient } from './services/service_grpc_web_pb';
import {
    CreateUserRequest,
    ListUsersRequest,
    CreateAPIKeyRequest,
    ListAPIKeysRequest,
    ScanDomainRequest,
    ScanCrtShRequest,
    GetCrtShScanResultsByDomainRequest,
} from './services/service_pb';

const authClient = new AuthServiceClient('http://localhost:50051');
const userClient = new UserServiceClient('http://localhost:50051');

function Users() {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [apiKeys, setApiKeys] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [domain, setDomain] = useState('');
    const [dnsScanId, setDnsScanId] = useState('');
    const [plugin, setPlugin] = useState('CrtSh');
    const [scanResults, setScanResults] = useState([]);
    const [error, setError] = useState('');

    const fetchUsers = () => {
        if (!user.isAdmin) return;
        const request = new ListUsersRequest();
        authClient.listUsers(request, { 'x-api-key': user.token }, (err, response) => {
            if (err) {
                setError('Failed to list users: ' + err.message);
                return;
            }
            setUsers(response.getUsersList());
        });
    };

    const fetchAPIKeys = () => {
        const request = new ListAPIKeysRequest();
        request.setUserId(user.userId);
        authClient.listAPIKeys(request, { 'x-api-key': user.token }, (err, response) => {
            if (err) {
                setError('Failed to list API keys: ' + err.message);
                return;
            }
            setApiKeys(response.getApiKeysList());
        });
    };

    const handleCreateUser = () => {
        const request = new CreateUserRequest();
        request.setFirstName(firstName);
        request.setLastName(lastName);
        request.setEmail(email);
        request.setPassword(password);
        request.setIsAdmin(isAdmin);
        authClient.createUser(request, { 'x-api-key': user.token }, (err) => {
            if (err) {
                setError('Failed to create user: ' + err.message);
                return;
            }
            setError('User created successfully');
            fetchUsers();
        });
    };

    const handleCreateAPIKey = () => {
        const request = new CreateAPIKeyRequest();
        request.setUserId(user.userId);
        request.setRole('user');
        request.setIsServiceKey(false);
        authClient.createAPIKey(request, { 'x-api-key': user.token }, (err, response) => {
            if (err) {
                setError('Failed to create API key: ' + err.message);
                return;
            }
            setError('API key created: ' + response.getApiKey());
            fetchAPIKeys();
        });
    };

    const handleScan = () => {
        if (!dnsScanId) {
            const request = new ScanDomainRequest();
            request.setDomain(domain);
            userClient.scanDomain(request, { 'x-api-key': user.token }, (err, response) => {
                if (err) {
                    setError('Failed to initiate DNS scan: ' + err.message);
                    return;
                }
                setDnsScanId(response.getDnsScanId());
                setError('DNS scan initiated: ' + response.getDnsScanId());
            });
            return;
        }

        const plugins = {
            CrtSh: { client: userClient.scanCrtSh, requestType: ScanCrtShRequest },
        };

        const { client, requestType } = plugins[plugin];
        const request = new requestType();
        request.setDomain(domain);
        request.setDnsScanId(dnsScanId);
        client(request, { 'x-api-key': user.token }, (err) => {
            if (err) {
                setError(`Failed to initiate ${plugin} scan: ${err.message}`);
                return;
            }
            setError(`${plugin} scan initiated for ${domain}`);
        });
    };

    const handleGetResults = () => {
        const request = new GetCrtShScanResultsByDomainRequest();
        request.setDomain(domain);
        userClient.getCrtShScanResultsByDomain(request, { 'x-api-key': user.token }, (err, response) => {
            if (err) {
                setError('Failed to retrieve scan results: ' + err.message);
                return;
            }
            setScanResults(response.getResultsList());
            setError('Scan results retrieved');
        });
    };

    useEffect(() => {
        if (user) {
            fetchAPIKeys();
            if (user.isAdmin) fetchUsers();
        }
    }, [user]);

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
                {user.isAdmin ? 'User Management & Scans' : 'Scans & API Keys'}
            </Typography>
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {user.isAdmin && (
                <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Create User
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                        <TextField
                            label="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            variant="outlined"
                            size="small"
                        />
                        <TextField
                            label="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            variant="outlined"
                            size="small"
                        />
                        <TextField
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                            size="small"
                        />
                        <TextField
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            variant="outlined"
                            size="small"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />}
                            label="Admin"
                        />
                        <Button variant="contained" onClick={handleCreateUser} sx={{ alignSelf: 'flex-start' }}>
                            Create User
                        </Button>
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                        Users
                    </Typography>
                    <TableContainer component={Paper} elevation={3}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Admin</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((u) => (
                                    <TableRow key={u.getId()}>
                                        <TableCell>{u.getId()}</TableCell>
                                        <TableCell>{u.getFirstName()} {u.getLastName()}</TableCell>
                                        <TableCell>{u.getEmail()}</TableCell>
                                        <TableCell>{u.getIsAdmin() ? 'Yes' : 'No'}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            )}
            <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                    API Keys
                </Typography>
                <Button variant="contained" onClick={handleCreateAPIKey} sx={{ mb: 2 }}>
                    Create API Key
                </Button>
                <TableContainer component={Paper} elevation={3}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Key</TableCell>
                                <TableCell>Role</TableCell>
                                <TableCell>Service Key</TableCell>
                                <TableCell>Active</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {apiKeys.map((key) => (
                                <TableRow key={key.getApiKey()}>
                                    <TableCell>{key.getApiKey()}</TableCell>
                                    <TableCell>{key.getRole()}</TableCell>
                                    <TableCell>{key.getIsServiceKey() ? 'Yes' : 'No'}</TableCell>
                                    <TableCell>{key.getIsActive() ? 'Yes' : 'No'}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Run Scan
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                    <TextField
                        label="Domain"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        label="DNS Scan ID"
                        value={dnsScanId}
                        onChange={(e) => setDnsScanId(e.target.value)}
                        variant="outlined"
                        size="small"
                    />
                    <Select
                        value={plugin}
                        onChange={(e) => setPlugin(e.target.value)}
                        variant="outlined"
                        size="small"
                    >
                        <MenuItem value="CrtSh">CrtSh</MenuItem>
                    </Select>
                    <Button variant="contained" onClick={handleScan} sx={{ alignSelf: 'flex-start' }}>
                        Run Scan
                    </Button>
                    <Button variant="contained" onClick={handleGetResults} sx={{ alignSelf: 'flex-start' }}>
                        Get Results
                    </Button>
                </Box>
                <Typography variant="h6" gutterBottom>
                    Scan Results
                </Typography>
                {scanResults.map((result, index) => (
                    <Paper key={index} elevation={2} sx={{ p: 2, mb: 2 }}>
                        <Typography variant="body1"><strong>Domain:</strong> {result.getDomain()}</Typography>
                        <Typography variant="body1"><strong>DNS Scan ID:</strong> {result.getDnsScanId()}</Typography>
                        <Typography variant="body1"><strong>Certificates:</strong></Typography>
                        <ul>
                            {result.getResult().getCertificatesList().map((cert, certIndex) => (
                                <li key={certIndex}>
                                    <Typography variant="body2">
                                        {cert.getCommonName()} (Issuer: {cert.getIssuer()}, Expires: {new Date(cert.getNotAfter().getSeconds() * 1000).toLocaleString()})
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </Paper>
                ))}
            </Paper>
        </Box>
    );
}

export default Users;