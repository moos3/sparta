// web/src/Login.tsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Alert, Paper } from '@mui/material';
import { LoginRequest, LoginResponse } from './proto/service'; // Import message types
import { AuthServiceClient } from './proto/service.client'; // Import client
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport'; // Import transport
import { AuthContext } from './App';

const transport = new GrpcWebFetchTransport({
    baseUrl: 'http://localhost:8080'
});
const authClient = new AuthServiceClient(transport); // Instantiate client

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const authContext = useContext(AuthContext); // Access AuthContext
    if (!authContext) {
        throw new Error("Login must be used within an AuthContext.Provider");
    }
    const { setUser } = authContext;

    const navigate = useNavigate();

    const handleLogin = () => {
        setError(''); // Clear previous errors
        const request: LoginRequest = {
            email: email,
            password: password,
        };

        authClient.login(request).then((response: LoginResponse) => {
            setUser({
                userId: response.userId,
                firstName: response.firstName,
                lastName: response.lastName,
                isAdmin: response.isAdmin,
                token: response.token,
            });
            navigate('/dashboard');
        }).catch((err: any) => {
            setError(`Login failed: ${err.message}`);
        });
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: 'background.default' }}>
            <Paper sx={{ p: 4, maxWidth: 400, width: '100%' }}>
                <Typography variant="h5" gutterBottom>
                    Login
                </Typography>
                {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(ev) => {
                        if (ev.key === 'Enter') {
                            handleLogin();
                            ev.preventDefault();
                        }
                    }}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={(ev) => {
                        if (ev.key === 'Enter') {
                            handleLogin();
                            ev.preventDefault();
                        }
                    }}
                />
                <Button variant="contained" fullWidth onClick={handleLogin} sx={{ mt: 2 }}>
                    Login
                </Button>
            </Paper>
        </Box>
    );
};

export default Login;