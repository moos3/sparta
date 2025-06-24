import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Alert, Paper } from '@mui/material';
import * as proto from './service_grpc_web_pb';
import * as protoService from './service_pb';
import { AuthContext } from './App';

const client = new proto.service.AuthServiceClient('http://localhost:50051', null, null);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        const request = new protoService.service.LoginRequest();
        request.setEmail(email);
        request.setPassword(password);
        client.login(request, {}, (err, response) => {
            if (err) {
                setError(`Login failed: ${err.message}`);
                return;
            }
            setUser({
                userId: response.getUserId(),
                firstName: response.getFirstName(),
                lastName: response.getLastName(),
                isAdmin: response.getIsAdmin(),
                token: response.getToken(),
            });
            navigate('/dashboard');
        });
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Paper sx={{ p: 4, maxWidth: 400, width: '100%' }}>
                <Typography variant="h5" gutterBottom>
                    Login
                </Typography>
                {error && <Alert severity="error">{error}</Alert>}
                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" fullWidth onClick={handleLogin} sx={{ mt: 2 }}>
                    Login
                </Button>
            </Paper>
        </Box>
    );
};

export default Login;