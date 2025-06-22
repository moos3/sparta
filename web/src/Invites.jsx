import React, { useState, useContext } from 'react';
import { AuthContext } from './App';
import { TextField, Button, Box, Typography, FormControlLabel, Checkbox, Alert, Paper } from '@mui/material';
import { AuthServiceClient } from './services/service_grpc_web_pb';
import { InviteUserRequest } from './services/service_pb';

const authClient = new AuthServiceClient('http://localhost:50051');

function Invites() {
    const { user } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [error, setError] = useState('');

    const handleInviteUser = () => {
        const request = new InviteUserRequest();
        request.setEmail(email);
        request.setIsAdmin(isAdmin);
        authClient.inviteUser(request, { 'x-api-key': user.token }, (err, response) => {
            if (err) {
                setError('Failed to send invitation: ' + err.message);
                return;
            }
            setError('Invitation sent: ' + response.getToken());
        });
    };

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
                Invite Users
            </Typography>
            <Paper elevation={3} sx={{ p: 3 }}>
                {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        size="small"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />}
                        label="Admin"
                    />
                    <Button variant="contained" onClick={handleInviteUser} sx={{ alignSelf: 'flex-start' }}>
                        Send Invitation
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default Invites;