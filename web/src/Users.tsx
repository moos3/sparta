// web/src/Users.tsx
import React, { useState, useEffect, useContext } from 'react';
import { Box, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Alert, Dialog, DialogTitle, DialogContent, DialogActions, FormControlLabel, Checkbox } from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CreateUserRequest, CreateUserResponse, ListUsersRequest, ListUsersResponse, User, CreateAPIKeyRequest, CreateAPIKeyResponse, DeleteUserRequest, UpdateUserRequest, GetUserRequest, GetUserResponse } from './proto/service';
import { AuthServiceClient, UserServiceClient } from './proto/service.client';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { AuthContext } from './AuthContext'; // Corrected import path
import { Timestamp } from './proto/google/protobuf/timestamp';
import { RpcInterceptorFn, RpcOptions } from '@protobuf-ts/runtime-rpc'; // NEW: Import RpcInterceptorFn, RpcOptions

// AuthClient for AuthService methods
const authTransport = new GrpcWebFetchTransport({
    baseUrl: 'http://localhost:8080',
    interceptors: [{
        intercept(next: RpcInterceptorFn) { // Corrected signature
            return async (req: RpcOptions) => {
                const userToken = localStorage.getItem('sparta_token');
                if (userToken) {
                    req.headers.set('x-api-key', userToken);
                }
                return await next(req);
            };
        }
    }]
});
const authClient = new AuthServiceClient(authTransport);

// UserClient for UserService methods (API Key Management, Change Password)
const userTransport = new GrpcWebFetchTransport({
    baseUrl: 'http://localhost:8080',
    interceptors: [{
        intercept(next: RpcInterceptorFn) { // Corrected signature
            return async (req: RpcOptions) => {
                const userToken = localStorage.getItem('sparta_token');
                if (userToken) {
                    req.headers.set('x-api-key', userToken);
                }
                return await next(req);
            };
        }
    }]
});
const userClient = new UserServiceClient(userTransport); // Instantiate userClient

interface CurrentUser {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
    password?: string;
}

const Users: React.FC = () => {
    const authContext = useContext(AuthContext);
    const user = authContext?.user;

    const [users, setUsers] = useState<User[]>([]);
    const [email, setEmail] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
    const [currentEmailBeforeEdit, setCurrentEmailBeforeEdit] = useState<string>('');

    const fetchUsers = async () => {
        setError('');
        if (!user || !user.isAdmin) {
            setError("You do not have permission to view users.");
            setUsers([]);
            return;
        }

        try {
            const request: ListUsersRequest = {};
            const response: ListUsersResponse = (await authClient.listUsers(request)).response;
            setUsers(response.users);
        } catch (err: any) {
            setError(`Failed to fetch users: ${err.message}`);
            setUsers([]);
        }
    };

    useEffect(() => {
        if (user?.token && user.isAdmin) {
            fetchUsers();
        } else if (user && !user.isAdmin) {
            setUsers([]);
            setError("You do not have permission to view users.");
        }
    }, [user]);

    const handleCreateUser = async () => {
        setError('');
        setSuccess('');

        if (!user || !user.isAdmin) {
            setError("Only administrators can create users.");
            return;
        }

        const request: CreateUserRequest = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
            isAdmin: isAdmin,
        };

        try {
            const response: CreateUserResponse = (await authClient.createUser(request)).response;
            setSuccess(`User ${email} created successfully with ID: ${response.userId}`);
            setEmail('');
            setFirstName('');
            setLastName('');
            setPassword('');
            setIsAdmin(false);
            fetchUsers();
        } catch (err: any) {
            setError(`Failed to create user: ${err.message}`);
        }
    };

    const handleCreateAPIKey = async (userId: string) => {
        setError('');
        setSuccess('');

        if (!user || !user.token) {
            setError("You must be logged in to create API keys.");
            return;
        }
        if (!user.isAdmin && user.userId !== userId) {
            setError("You do not have permission to create API keys for other users.");
            return;
        }

        const request: CreateAPIKeyRequest = {
            userId: userId,
            role: 'user',
            isServiceKey: false,
        };

        try {
            const response: CreateAPIKeyResponse = (await userClient.createAPIKey(request)).response; // NEW: Use userClient
            alert(`API Key created for ${userId}: ${response.apiKey}\nPlease save this key, it will not be shown again.`);
            setSuccess(`API Key created for user ID: ${userId}`);
        } catch (err: any) {
            setError(`Failed to create API key: ${err.message}`);
        }
    };

    const handleDeleteUser = async (userId: string) => {
        setError('');
        setSuccess('');

        if (!user || !user.isAdmin) {
            setError("Only administrators can delete users.");
            return;
        }

        if (window.confirm(`Are you sure you want to delete user ID: ${userId}?`)) {
            const request: DeleteUserRequest = { userId: userId };

            try {
                await authClient.deleteUser(request);
                setSuccess(`User ID: ${userId} deleted successfully.`);
                fetchUsers();
            }
            catch (err: any) {
                setError(`Failed to delete user: ${err.message}`);
            }
        }
    };

    const handleEditClick = (u: User) => {
        setCurrentUser({
            userId: u.id,
            firstName: u.firstName,
            lastName: u.lastName,
            email: u.email,
            isAdmin: u.isAdmin,
            password: '',
        });
        setCurrentEmailBeforeEdit(u.email);
        setOpenEditDialog(true);
    };

    const handleUpdateUser = async () => {
        setError('');
        setSuccess('');
        if (!currentUser) return;

        if (!user || (!user.isAdmin && user.userId !== currentUser.userId)) {
            setError("You do not have permission to update this user.");
            return;
        }

        if (currentUser.email !== currentEmailBeforeEdit && !user.isAdmin) {
            setError("Error: Email address can only be changed by an administrator.");
            return;
        }
        if (currentUser.password && !user.isAdmin) {
            setError("Error: Password can only be changed by an administrator through this interface. Regular users must use 'Change Password' on their profile.");
            return;
        }

        const request: UpdateUserRequest = {
            userId: currentUser.userId,
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            email: currentUser.email,
            ...(currentUser.password && { password: currentUser.password })
        };

        try {
            await authClient.updateUser(request);
            setSuccess(`User ${currentUser.email} updated successfully.`);
            setOpenEditDialog(false);
            fetchUsers();
        } catch (err: any) {
            setError(`Failed to update user: ${err.message}`);
        }
    };

    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
        setCurrentUser(null);
        setCurrentEmailBeforeEdit('');
    };

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCurrentUser(prev => ({ ...prev, [name]: value } as CurrentUser));
    };

    const handleIsAdminChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!user || !user.isAdmin) {
            setError("You do not have permission to change admin status.");
            return;
        }
        setCurrentUser(prev => ({ ...prev, isAdmin: e.target.checked } as CurrentUser));
    };

    const formatTimestamp = (timestamp: Timestamp | undefined) => {
        if (!timestamp) return 'N/A';
        return timestamp.toDate().toLocaleString();
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Manage Users
            </Typography>
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

            {user && user.isAdmin && (
                <Box sx={{ mb: 4, component: Paper, p: 3 }}>
                    <Typography variant="h6" gutterBottom>Create New User</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                        <TextField
                            label="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            sx={{ flexGrow: 1, minWidth: '200px' }}
                        />
                        <TextField
                            label="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            sx={{ flexGrow: 1, minWidth: '200px' }}
                        />
                        <TextField
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            fullWidth
                        />
                        <TextField
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={isAdmin}
                                    onChange={(e) => setIsAdmin(e.target.checked)}
                                />
                            }
                            label="Admin Privileges"
                        />
                        <Button variant="contained" onClick={handleCreateUser} sx={{ mt: 2 }}>
                            Create User
                        </Button>
                    </Box>
                </Box>
            )}

            <Typography variant="h6" gutterBottom>Existing Users</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Admin</TableCell>
                            <TableCell>Created At</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((u) => (
                            <TableRow key={u.id}>
                                <TableCell sx={{ fontSize: '0.8rem' }}>{u.id}</TableCell>
                                <TableCell>{u.email}</TableCell>
                                <TableCell>{u.firstName}</TableCell>
                                <TableCell>{u.lastName}</TableCell>
                                <TableCell>{u.isAdmin ? 'Yes' : 'No'}</TableCell>
                                <TableCell>{formatTimestamp(u.createdAt)}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => handleCreateAPIKey(u.id)} title="Create API Key">
                                        <VpnKeyIcon />
                                    </IconButton>
                                    {(user && user.isAdmin) && (
                                        <>
                                            <IconButton onClick={() => handleEditClick(u)} title="Edit User">
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => handleDeleteUser(u.id)} title="Delete User">
                                                <DeleteIcon />
                                            </IconButton>
                                        </>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
                <DialogTitle>Edit User</DialogTitle>
                <DialogContent>
                    {currentUser && (
                        <Box component="form" sx={{ mt: 2 }}>
                            <TextField
                                autoFocus
                                margin="dense"
                                name="firstName"
                                label="First Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={currentUser.firstName}
                                onChange={handleEditChange}
                            />
                            <TextField
                                margin="dense"
                                name="lastName"
                                label="Last Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={currentUser.lastName}
                                onChange={handleEditChange}
                            />
                            <TextField
                                margin="dense"
                                name="email"
                                label="Email"
                                type="email"
                                fullWidth
                                variant="outlined"
                                value={currentUser.email}
                                onChange={handleEditChange}
                                disabled={!user?.isAdmin}
                                helperText={!user?.isAdmin ? "Only admin can change email" : ""}
                            />
                            {user?.isAdmin && (
                                <TextField
                                    margin="dense"
                                    name="password"
                                    label="New Password (optional, admin only)"
                                    type="password"
                                    fullWidth
                                    variant="outlined"
                                    value={currentUser.password}
                                    onChange={handleEditChange}
                                    placeholder="Leave blank to keep current password"
                                />
                            )}
                            {user && user.isAdmin && (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={currentUser.isAdmin}
                                            onChange={handleIsAdminChange}
                                            name="isAdmin"
                                        />
                                    }
                                    label="Admin Privileges"
                                    sx={{ mt: 1 }}
                                />
                            )}
                        </Box>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEditDialog}>Cancel</Button>
                    <Button onClick={handleUpdateUser} variant="contained">Update</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Users;