// web/src/Login.tsx
import React, { useState, useContext, useMemo } from 'react'; // Added useMemo
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Alert, Paper } from '@mui/material';
import { LoginRequest, LoginResponse } from './proto/service';
import { AuthServiceClient } from './proto/service.client';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { AuthContext } from './AuthContext';
import { RpcOptions } from '@protobuf-ts/runtime-rpc';

// REMOVE GLOBAL transport and authClient HERE

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error("Login must be used within an AuthContext.Provider");
    }
    const { setUser } = authContext;

    // NEW: Instantiate transport and client inside the component using useMemo
    const authClient = useMemo(() => {
        const transport = new GrpcWebFetchTransport({
            baseUrl: 'http://localhost:8080',
            interceptors: [{
                intercept(next) {
                    console.log("Interceptor: Intercept function invoked (Login from useMemo)."); // Added for debug
                    return async (req) => {
                        const userToken = localStorage.getItem('sparta_token');
                        console.log("Interceptor (Login from useMemo): User token:", userToken); // Added for debug
                        if (userToken) {
                            req.headers.set('x-api-key', userToken);
                        }
                        return await next(req);
                    };
                }
            }]
        });
        return new AuthServiceClient(transport);
    }, []); // Empty dependency array means it's created once

    const navigate = useNavigate();

    const handleLogin = () => {
        setError('');
        const request: LoginRequest = {
            email: email,
            password: password,
        };

        authClient.login(request).then((callResponse) => {
            const response: LoginResponse = callResponse.response;

            console.log("Login successful! Full response object:", callResponse);
            console.log("Token value received from backend:", response.token);

            localStorage.setItem('sparta_token', response.token);

            setUser({
                userId: response.userId,
                firstName: response.firstName,
                lastName: response.lastName,
                isAdmin: response.isAdmin,
                token: response.token,
            });
            navigate('/scans');
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