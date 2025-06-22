import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import MailIcon from '@mui/icons-material/Mail';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ReportIcon from '@mui/icons-material/Report';
import Dashboard from './Dashboard';
import Login from './Login';
import Users from './Users';
import Invites from './Invites';
import Scans from './Scans';
import Reports from './Reports';

export const AuthContext = createContext();

const drawerWidth = 240;
const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    const [user, setUser] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem button component="a" href="/dashboard">
                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                {user?.isAdmin && (
                    <>
                        <ListItem button component="a" href="/users">
                            <ListItemIcon><PeopleIcon /></ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItem>
                        <ListItem button component="a" href="/invites">
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="Invites" />
                        </ListItem>
                    </>
                )}
                <ListItem button component="a" href="/scans">
                    <ListItemIcon><AssessmentIcon /></ListItemIcon>
                    <ListItemText primary="Scans" />
                </ListItem>
                <ListItem button component="a" href="/reports">
                    <ListItemIcon><ReportIcon /></ListItemIcon>
                    <ListItemText primary="Reports" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Box sx={{ display: 'flex' }}>
                        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ mr: 2, display: { sm: 'none' } }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" noWrap>
                                    Sparta
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        {user && (
                            <Box
                                component="nav"
                                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                            >
                                <Drawer
                                    variant="temporary"
                                    open={mobileOpen}
                                    onClose={handleDrawerToggle}
                                    ModalProps={{ keepMounted: true }}
                                    sx={{
                                        display: { xs: 'block', sm: 'none' },
                                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                                    }}
                                >
                                    {drawer}
                                </Drawer>
                                <Drawer
                                    variant="permanent"
                                    sx={{
                                        display: { xs: 'none', sm: 'block' },
                                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                                    }}
                                    open
                                >
                                    {drawer}
                                </Drawer>
                            </Box>
                        )}
                        <Box
                            component="main"
                            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                        >
                            <Toolbar />
                            <Routes>
                                <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
                                <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
                                <Route path="/users" element={user?.isAdmin ? <Users /> : <Navigate to="/dashboard" />} />
                                <Route path="/invites" element={user?.isAdmin ? <Invites /> : <Navigate to="/dashboard" />} />
                                <Route path="/scans" element={user ? <Scans /> : <Navigate to="/login" />} />
                                <Route path="/reports" element={user ? <Reports /> : <Navigate to="/login" />} />
                                <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
                            </Routes>
                        </Box>
                    </Box>
                </Router>
            </ThemeProvider>
        </AuthContext.Provider>
    );
}

export default App;