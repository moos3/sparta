import React, { useState, useEffect, useContext } from 'react';
import { Box, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import * as proto from './service_grpc_web_pb';
import * as protoService from './service_pb';
import { AuthContext } from './App';

const client = new proto.service.AuthServiceClient('http://localhost:50051', null, null);

const Users = () => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const request = new protoService.service.ListUsersRequest();
        client.listUsers(request, {}, (err, response) => {
            if (err) {
                setError(`Failed to fetch users: ${err.message}`);
                return;
            }
            setUsers(response.getUsersList());
        });
    }, []);

    const handleCreateUser = () => {
        const request = new protoService.service.CreateUserRequest();
        request.setEmail(email);
        request.setFirstName(firstName);
        request.setLastName(lastName);
        request.setPassword(password);
        request.setIsAdmin(false);
        client.createUser(request, {}, (err, response) => {
            if (err) {
                setError(`Failed to create user: ${err.message}`);
                return;
            }
            setUsers([...users, { id: response.getUserId(), email, firstName, lastName, isAdmin: false }]);
            setEmail('');
            setFirstName('');
            setLastName('');
            setPassword('');
        });
    };

    const handleCreateAPIKey = (userId) => {
        const request = new protoService.service.CreateAPIKeyRequest();
        request.setUserId(userId);
        request.setRole('user');
        request.setIsServiceKey(false);
        client.createAPIKey(request, {}, (err, response) => {
            if (err) {
                setError(`Failed to create API key: ${err.message}`);
                return;
            }
            alert(`API Key created: ${response.getApiKey()}`);
        });
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Manage Users
            </Typography>
            {error && <Box sx={{ mb: 2 }}><Alert severity="error">{error}</Alert></Box>}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h6">Create User</Typography>
                <TextField
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    sx={{ m: 1 }}
                />
                <TextField
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    sx={{ m: 1 }}
                />
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ m: 1 }}
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ m: 1 }}
                />
                <Button variant="contained" onClick={handleCreateUser} sx={{ mt: 2 }}>
                    Create User
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Admin</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((u) => (
                            <TableRow key={u.getId()}>
                                <TableCell>{u.getEmail()}</TableCell>
                                <TableCell>{u.getFirstName()}</TableCell>
                                <TableCell>{u.getLastName()}</TableCell>
                                <TableCell>{u.getIsAdmin() ? 'Yes' : 'No'}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => handleCreateAPIKey(u.getId())}>
                                        <VpnKeyIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Users;