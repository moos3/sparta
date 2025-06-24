import React, { useState, useContext } from 'react';
import { TextField, Button, Box, Typography, FormControlLabel, Checkbox, Alert, Paper } from '@mui/material';
import { AuthContext } from './App';
import * as proto from './service_grpc_web_pb';
import * as protoService from './service_pb';

const client = new proto.service.AuthServiceClient('http://localhost:50051', null, null);

const Invites = () => {
    const { user } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleInvite = () => {
        const request = new protoService.service.InviteUserRequest();
        request.setEmail(email);
        request.setIsAdmin(isAdmin);
        client.inviteUser(request, {}, (err, response) => {
            if (err) {
                setError(`Failed to send invite: ${err.message}`);
                setSuccess('');
                return;
            }
            setSuccess(`Invite sent to ${email} with ID: ${response.getInvitationId()}`);
            setError('');
            setEmail('');
            setIsAdmin(false);
        });
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Invite Users
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h6">Send Invite</Typography>
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    sx={{ m: 1 }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isAdmin}
                            onChange={(e) => setIsAdmin(e.target.checked)}
                        />
                    }
                    label="Admin Privileges"
                    sx={{ m: 1 }}
                />
                <Button variant="contained" onClick={handleInvite} sx={{ mt: 2 }}>
                    Send Invite
                </Button>
            </Box>
        </Box>
    );
};

export default Invites;