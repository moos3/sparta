import React, { useContext } from 'react';
import { AuthContext } from './App';
import { useNavigate } from 'react-router-dom';
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    AppBar,
    Typography,
    Box,
    IconButton,
    Divider,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

function Dashboard({ children }) {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('sparta_token');
        localStorage.removeItem('sparta_user');
        setUser(null);
        navigate('/login');
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: 'background.paper' }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        Sparta Security Dashboard
                    </Typography>
                    {user && (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body1" sx={{ mr: 2 }}>
                                {user.firstName} {user.lastName}
                            </Typography>
                            <IconButton color="inherit" onClick={handleLogout}>
                                <LogoutIcon />
                            </IconButton>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        bgcolor: 'background.default',
                    },
                }}
            >
                <Toolbar />
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate('/scans')}>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Scans" />
                        </ListItemButton>
                    </ListItem>
                    {user && user.isAdmin && (
                        <>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => navigate('/users')}>
                                    <ListItemIcon>
                                        <PeopleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Users" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => navigate('/invites')}>
                                    <ListItemIcon>
                                        <MailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Invites" />
                                </ListItemButton>
                            </ListItem>
                        </>
                    )}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}

export default Dashboard;