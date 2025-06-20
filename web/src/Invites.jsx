// web/src/Invites.jsx
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { inviteUser, validateInvite } from './services/api';

function Invites() {
    const [inviteEmail, setInviteEmail] = useState('');
    const [inviteToken, setInviteToken] = useState('');
    const [message, setMessage] = useState('');

    const handleInvite = async () => {
        try {
            const response = await inviteUser(inviteEmail);
            setMessage(`Invite sent! Token: ${response.invite_token}`);
            setInviteEmail('');
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    const handleValidate = async () => {
        try {
            const response = await validateInvite(inviteToken);
            setMessage(response.valid ? 'Valid invite token' : 'Invalid invite token');
            setInviteToken('');
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Invites
            </Typography>
            <Card sx={{ mb: 4 }}>
                <CardContent>
                    <Typography variant="h6">Invite User</Typography>
                    <TextField
                        fullWidth
                        label="Email"
                        value={inviteEmail}
                        onChange={(e) => setInviteEmail(e.target.value)}
                        margin="normal"
                    />
                    <Button variant="contained" onClick={handleInvite}>
                        Send Invite
                    </Button>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography variant="h6">Validate Invite Token</Typography>
                    <TextField
                        fullWidth
                        label="Invite Token"
                        value={inviteToken}
                        onChange={(e) => setInviteToken(e.target.value)}
                        margin="normal"
                    />
                    <Button variant="contained" onClick={handleValidate}>
                        Validate Token
                    </Button>
                </CardContent>
            </Card>
            <Typography color="text.secondary" sx={{ mt: 2 }}>
                {message}
            </Typography>
        </Box>
    );
}

export default Invites;