import React, { useState, useContext } from 'react';
import { AuthContext } from './App';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Alert, Paper } from '@mui/material';
import { AuthServiceClient } from './services/service_grpc_web_pb';
import { LoginRequest } from './services/service_pb';

const authClient = new AuthServiceClient('http://localhost:50051');

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        const request = new LoginRequest();
        request.setEmail(email);
        request.setPassword(password);

        authClient.login(request, {}, (err, response) => {
            if (err) {
                setError('Login failed: ' + err.message);
                return;
            }
            const userData = {
                userId: response.getUserId(),
                firstName: response.getFirstName(),
                lastName: response.getLastName(),
                isAdmin: response.getIsAdmin(),
                token: response.getToken(),
            };
            localStorage.setItem('sparta_token', response.getToken());
            localStorage.setItem('sparta_user', JSON.stringify(userData));
            setUser(userData);
            setError('');
            navigate('/');
        });
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: 'background.default' }}>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%' }}>
                <Typography variant="h4" gutterBottom align="center">
                    Sparta Login
                </Typography>
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="outlined"
                />
                <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={handleLogin}
                >
                    Sign In
                </Button>
                {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
            </Paper>
        </Box>
    );
}

export default Login;