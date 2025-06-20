// web/src/Users.jsx
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import { createUser, updateUser, deleteUser, listUsers } from './services/api';

function Users() {
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [editUserId, setEditUserId] = useState(null);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await listUsers();
            setUsers(response);
        } catch (error) {
            setMessage(`Error fetching users: ${error.message}`);
            console.error('Fetch users error:', error);
        }
    };

    const handleOpen = (user = null) => {
        if (user) {
            setEditUserId(user.userId); // Use userId
            setEmail(user.email);
            setName(user.name);
        } else {
            setEditUserId(null);
            setEmail('');
            setName('');
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEditUserId(null);
        setEmail('');
        setName('');
    };

    const handleSubmit = async () => {
        try {
            if (editUserId) {
                await updateUser(editUserId, email, name);
                setMessage('User updated successfully');
            } else {
                const response = await createUser(email, name);
                setMessage(`User created with ID: ${response.userId}`);
            }
            handleClose();
            fetchUsers();
        } catch (error) {
            setMessage(`Error: ${error.message}`);
            console.error('Submit error:', error);
        }
    };

    const handleDelete = async (userId) => {
        try {
            await deleteUser(userId);
            setMessage('User deleted successfully');
            fetchUsers();
        } catch (error) {
            setMessage(`Error: ${error.message}`);
            console.error('Delete error:', error);
        }
    };

    const columns = [
        { field: 'userId', headerName: 'ID', width: 250 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'createdAt', headerName: 'Created At', width: 200 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <>
                    <Button onClick={() => handleOpen(params.row)}>Edit</Button>
                    <Button onClick={() => handleDelete(params.row.userId)} color="error">
                        Delete
                    </Button>
                </>
            ),
        },
    ];

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Users
            </Typography>
            <Button variant="contained" onClick={() => handleOpen()} sx={{ mb: 2 }}>
                Create User
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    getRowId={(row) => row.userId} // Map userId to id
                    pageSizeOptions={[5]}
                    initialState={{
                        pagination: { paginationModel: { pageSize: 5 } },
                    }}
                />
            </div>
            <Typography color="error" sx={{ mt: 2 }}>
                {message}
            </Typography>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{editUserId ? 'Update User' : 'Create User'}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Email"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Name"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default Users;