// web/src/Profile.tsx
import React, { useState, useEffect, useContext } from 'react';
import { Box, Typography, TextField, Button, Paper, Alert, CircularProgress, List, ListItem, ListItemText, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import RefreshIcon from '@mui/icons-material/Refresh';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
    GetUserRequest, GetUserResponse,
    ChangePasswordRequest, ChangePasswordResponse,
    CreateAPIKeyRequest, CreateAPIKeyResponse,
    RotateAPIKeyRequest, RotateAPIKeyResponse,
    ActivateAPIKeyRequest, ActivateAPIKeyResponse,
    DeactivateAPIKeyRequest, DeactivateAPIKeyResponse,
    ListAPIKeysRequest, ListAPIKeysResponse, APIKey,
    User
} from './proto/service';
import { UserServiceClient } from './proto/service.client';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { AuthContext } from './AuthContext';
import { Timestamp } from './proto/google/protobuf/timestamp';

const transport = new GrpcWebFetchTransport({
    baseUrl: 'http://localhost:8080',
    interceptors: [{
        intercept(method, next) {
            return async req => {
                const userToken = localStorage.getItem('sparta_token');
                if (userToken) {
                    req.headers.set('x-api-key', userToken);
                }
                return await next(method, req);
            };
        }
    }]
});
const userClient = new UserServiceClient(transport);

const Profile: React.FC = () => {
    const authContext = useContext(AuthContext);
    const loggedInUser = authContext?.user;

    const [profile, setProfile] = useState<User | null>(null);
    const [oldPassword, setOldPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
    const [apiKeys, setApiKeys] = useState<APIKey[]>([]);

    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState<boolean>(false);

    const [openDeactivationDialog, setOpenDeactivationDialog] = useState<boolean>(false);
    const [selectedApiKey, setSelectedApiKey] = useState<string | null>(null);
    const [deactivationMessage, setDeactivationMessage] = useState<string>('');


    const fetchProfile = async () => {
        setError('');
        setLoading(true);
        if (!loggedInUser?.userId || !loggedInUser.token) {
            setError("User not logged in or token missing.");
            setLoading(false);
            return;
        }

        try {
            const request: GetUserRequest = { userId: loggedInUser.userId };
            const response: GetUserResponse = (await userClient.getUser(request)).response;
            setProfile(response.user || null);
        } catch (err: any) {
            setError(`Failed to fetch profile: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const fetchApiKeys = async () => {
        setError('');
        setLoading(true);
        if (!loggedInUser?.userId || !loggedInUser.token) {
            setError("User not logged in or token missing for API keys.");
            setLoading(false);
            return;
        }

        try {
            const request: ListAPIKeysRequest = { userId: loggedInUser.userId };
            const response: ListAPIKeysResponse = (await userClient.listAPIKeys(request)).response;
            setApiKeys(response.apiKeys);
        } catch (err: any) {
            setError(`Failed to fetch API keys: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (loggedInUser) {
            fetchProfile();
            fetchApiKeys();
        }
    }, [loggedInUser]);

    const handleChangePassword = async () => {
        setError('');
        setSuccess('');
        if (!loggedInUser?.userId || !loggedInUser.token) {
            setError("User not logged in.");
            return;
        }
        if (newPassword !== confirmNewPassword) {
            setError("New password and confirmation do not match.");
            return;
        }
        if (!oldPassword || !newPassword) {
            setError("Old and new passwords cannot be empty.");
            return;
        }

        try {
            const request: ChangePasswordRequest = {
                userId: loggedInUser.userId,
                oldPassword: oldPassword,
                newPassword: newPassword,
            };
            await userClient.changePassword(request);
            setSuccess("Password changed successfully!");
            setOldPassword('');
            setNewPassword('');
            setConfirmNewPassword('');
        } catch (err: any) {
            setError(`Failed to change password: ${err.message}`);
        }
    };

    const handleCreateAPIKey = async () => {
        setError('');
        setSuccess('');
        if (!loggedInUser?.userId || !loggedInUser.token) {
            setError("User not logged in.");
            return;
        }

        try {
            const request: CreateAPIKeyRequest = {
                userId: loggedInUser.userId,
                role: 'user', // Default to 'user' role for self-created keys
                isServiceKey: false,
            };
            const response: CreateAPIKeyResponse = (await userClient.createAPIKey(request)).response;
            alert(`New API Key: ${response.apiKey}\nPlease save this key immediately, it will not be shown again.`);
            setSuccess("API Key created successfully!");
            fetchApiKeys();
        } catch (err: any) {
            setError(`Failed to create API key: ${err.message}`);
        }
    };

    const handleRotateAPIKey = async (apiKey: string) => {
        setError('');
        setSuccess('');
        if (!loggedInUser?.token) {
            setError("User not logged in.");
            return;
        }

        try {
            const request: RotateAPIKeyRequest = { apiKey: apiKey };
            const response: RotateAPIKeyResponse = (await userClient.rotateAPIKey(request)).response;
            alert(`Rotated API Key: ${response.newApiKey}\nPlease save this new key immediately, the old one is invalid.`);
            setSuccess("API Key rotated successfully!");
            fetchApiKeys();
        } catch (err: any) {
            setError(`Failed to rotate API key: ${err.message}`);
        }
    };

    const handleActivateAPIKey = async (apiKey: string) => {
        setError('');
        setSuccess('');
        if (!loggedInUser?.token) {
            setError("User not logged in.");
            return;
        }

        try {
            const request: ActivateAPIKeyRequest = { apiKey: apiKey };
            await userClient.activateAPIKey(request);
            setSuccess("API Key activated successfully!");
            fetchApiKeys();
        } catch (err: any) {
            setError(`Failed to activate API Key: ${err.message}`);
        }
    };

    const handleDeactivateAPIKey = async () => {
        setError('');
        setSuccess('');
        if (!loggedInUser?.token || !selectedApiKey) {
            setError("User not logged in or API Key not selected.");
            return;
        }

        try {
            const request: DeactivateAPIKeyRequest = {
                apiKey: selectedApiKey,
                deactivationMessage: deactivationMessage,
            };
            await userClient.deactivateAPIKey(request);
            setSuccess("API Key deactivated successfully!");
            setOpenDeactivationDialog(false);
            setDeactivationMessage('');
            setSelectedApiKey(null);
            fetchApiKeys();
        } catch (err: any) {
            setError(`Failed to deactivate API Key: ${err.message}`);
        }
    };

    const handleOpenDeactivationDialog = (apiKey: string) => {
        setSelectedApiKey(apiKey);
        setOpenDeactivationDialog(true);
    };

    const handleCloseDeactivationDialog = () => {
        setOpenDeactivationDialog(false);
        setDeactivationMessage('');
        setSelectedApiKey(null);
    };

    const formatTimestamp = (timestamp: Timestamp | undefined) => {
        if (!timestamp) return 'N/A';
        return timestamp.toDate().toLocaleString();
    };


    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                User Profile
            </Typography>
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
            {loading && <CircularProgress sx={{ mb: 2 }} />}

            {profile && (
                <Paper sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>Profile Details</Typography>
                    <List dense>
                        <ListItem><ListItemText primary={`User ID: ${profile.id}`} /></ListItem>
                        <ListItem><ListItemText primary={`First Name: ${profile.firstName}`} /></ListItem>
                        <ListItem><ListItemText primary={`Last Name: ${profile.lastName}`} /></ListItem>
                        <ListItem><ListItemText primary={`Email: ${profile.email}`} secondary={profile.isAdmin ? "(Admin)" : ""} /></ListItem>
                        <ListItem><ListItemText primary={`Account Created: ${formatTimestamp(profile.createdAt)}`} /></ListItem>
                        <ListItem>
                            <ListItemText primary="Email address can only be changed by an administrator." />
                        </ListItem>
                    </List>
                </Paper>
            )}

            <Paper sx={{ p: 3, mb: 4 }}>
                <Typography variant="h6" gutterBottom>Change Password</Typography>
                <TextField
                    label="Old Password"
                    type={showOldPassword ? 'text' : 'password'}
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    fullWidth
                    sx={{ mb: 2 }}
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={() => setShowOldPassword(!showOldPassword)} edge="end">
                                {showOldPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        ),
                    }}
                />
                <TextField
                    label="New Password"
                    type={showNewPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    fullWidth
                    sx={{ mb: 2 }}
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={() => setShowNewPassword(!showNewPassword)} edge="end">
                                {showNewPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        ),
                    }}
                />
                <TextField
                    label="Confirm New Password"
                    type={showConfirmNewPassword ? 'text' : 'password'}
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    fullWidth
                    sx={{ mb: 2 }}
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)} edge="end">
                                {showConfirmNewPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        ),
                    }}
                />
                <Button variant="contained" onClick={handleChangePassword} disabled={loading}>
                    Change Password
                </Button>
            </Paper>

            <Paper sx={{ p: 3, mb: 4 }}>
                <Typography variant="h6" gutterBottom>Your API Keys</Typography>
                <Button variant="contained" onClick={handleCreateAPIKey} disabled={loading} sx={{ mb: 2 }}>
                    Generate New API Key
                </Button>
                <List dense>
                    {apiKeys.length > 0 ? (
                        apiKeys.map((key) => (
                            <ListItem key={key.apiKey} divider sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <ListItemText
                                    primary={`API Key: ${key.apiKey.substring(0, 8)}... (Role: ${key.role}, Service: ${key.isServiceKey ? 'Yes' : 'No'})`}
                                    secondary={`Status: ${key.isActive ? 'Active' : `Inactive (${key.deactivationMessage || 'N/A'})`}, Created: ${formatTimestamp(key.createdAt)}, Expires: ${formatTimestamp(key.expiresAt)}`}
                                />
                                <Box>
                                    <IconButton onClick={() => handleRotateAPIKey(key.apiKey)} title="Rotate API Key" disabled={!key.isActive || loading}>
                                        <RefreshIcon />
                                    </IconButton>
                                    {key.isActive ? (
                                        <Button onClick={() => handleOpenDeactivationDialog(key.apiKey)} size="small" variant="outlined" color="error" disabled={loading}>
                                            Deactivate
                                        </Button>
                                    ) : (
                                        <Button onClick={() => handleActivateAPIKey(key.apiKey)} size="small" variant="outlined" color="success" disabled={loading}>
                                            Activate
                                        </Button>
                                    )}
                                </Box>
                            </ListItem>
                        ))
                    ) : (
                        <ListItem>
                            <ListItemText primary="No API keys found. Generate one above!" />
                        </ListItem>
                    )}
                </List>
            </Paper>

            <Dialog open={openDeactivationDialog} onClose={handleCloseDeactivationDialog}>
                <DialogTitle>Deactivate API Key</DialogTitle>
                <DialogContent>
                    <Typography gutterBottom>Are you sure you want to deactivate API Key: {selectedApiKey?.substring(0, 8)}...?</Typography>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Reason for deactivation (optional)"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={deactivationMessage}
                        onChange={(e) => setDeactivationMessage(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDeactivationDialog}>Cancel</Button>
                    <Button onClick={handleDeactivateAPIKey} variant="contained" color="error">Deactivate</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Profile;