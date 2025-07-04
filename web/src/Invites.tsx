// web/src/Invites.tsx
import React, { useState, useContext, useMemo } from 'react'; // Added useMemo
import { TextField, Button, Box, Typography, FormControlLabel, Checkbox, Alert, Paper, List, ListItem, ListItemText } from '@mui/material';
import { AuthContext } from './AuthContext';
import { InviteUserRequest, InviteUserResponse } from './proto/service';
import { AuthServiceClient } from './proto/service.client';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { RpcOptions } from '@protobuf-ts/runtime-rpc';

// REMOVE GLOBAL transport and authClient HERE

const Invites: React.FC = () => {
    const authContext = useContext(AuthContext);
    const user = authContext?.user;

    // NEW: Instantiate transport and client inside the component using useMemo
    const authClient = useMemo(() => {
        const transport = new GrpcWebFetchTransport({
            baseUrl: 'http://localhost:8080',
            interceptors: [{
                intercept(next) {
                    console.log("Interceptor: Intercept function invoked (Invites from useMemo)."); // Added for debug
                    return async (req) => {
                        const userToken = localStorage.getItem('sparta_token');
                        console.log("Interceptor (Invites from useMemo): User token:", userToken); // Added for debug
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

    const [email, setEmail] = useState<string>('');
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    const handleInvite = () => {
        setError('');
        setSuccess('');

        if (!user || !user.isAdmin) {
            setError("You do not have permission to send invites.");
            return;
        }

        const request: InviteUserRequest = {
            email: email,
            isAdmin: isAdmin,
        };

        authClient.inviteUser(request).then((callResponse) => {
            const response: InviteUserResponse = callResponse.response;
            setSuccess(`Invite sent to ${email}. Invitation ID: ${response.invitationId}, Token: ${response.token}, Expires: ${response.expiresAt?.toDate().toLocaleString()}`);
            setEmail('');
            setIsAdmin(false);
        }).catch((err: any) => {
            setError(`Failed to send invite: ${err.message}`);
            setSuccess('');
        });
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Invite Users
            </Typography>
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

            {user && user.isAdmin ? (
                <Box sx={{ mb: 4, component: Paper, p: 3 }}>
                    <Typography variant="h6" gutterBottom>Send New Invite</Typography>
                    <TextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={isAdmin}
                                onChange={(e) => setIsAdmin(e.target.checked)}
                            />
                        }
                        label="Grant Admin Privileges"
                        sx={{ mb: 2 }}
                    />
                    <Button variant="contained" onClick={handleInvite} sx={{ mt: 2 }}>
                        Send Invite
                    </Button>
                </Box>
            ) : (
                <Alert severity="warning">You must be an administrator to send invites.</Alert>
            )}

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>Recent Invites</Typography>
            <Paper sx={{ p: 2 }}>
                <List>
                    <ListItem>
                        <ListItemText primary="No historical invite listing available from the API." secondary="Invites are generated and displayed once on creation." />
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};

export default Invites;