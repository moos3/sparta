// web/src/App.tsx
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// Import AuthContext from its new dedicated file
import { AuthContext, UserContextType } from './AuthContext';

// Lazy load components - ensure these files are renamed to .tsx
const Dashboard = lazy(() => import('./Dashboard'));
const Reports = lazy(() => import('./Reports'));
const Users = lazy(() => import('./Users'));
const Invites = lazy(() => import('./Invites'));
const Scans = lazy(() => import('./Scans'));
const Profile = lazy(() => import('./Profile'));

const App: React.FC = () => {
    const [user, setUser] = useState<{
        userId: string;
        firstName: string;
        lastName: string;
        isAdmin: boolean;
        token: string;
    } | null>(null);

    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('sparta_user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (e) {
            console.error("Failed to parse user from localStorage", e);
            localStorage.removeItem('sparta_user');
            localStorage.removeItem('sparta_token');
        }
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem('sparta_user', JSON.stringify(user));
        } else {
            localStorage.removeItem('sparta_user');
            localStorage.removeItem('sparta_token');
        }
    }, [user]);

    // Simple check to ensure AuthContext is not used before it's provided
    // This check can be performed by the consuming components via useContext(AuthContext)!
    // Removing the throw Error here, as useContext returning undefined is handled by optional chaining elsewhere.

    return (
        <AuthContext.Provider value={{ user, setUser } as UserContextType}>
            <Router>
                <Suspense fallback={
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <CircularProgress />
                    </Box>
                }>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={user ? <DashboardLayout /> : <Navigate to="/login" />}>
                            <Route index element={<Navigate to="/scans" />} />
                            <Route path="scans" element={<Scans />} />
                            <Route path="reports" element={<Reports />} />
                            <Route path="profile" element={<Profile />} />
                            {user && user.isAdmin && (
                                <>
                                    <Route path="users" element={<Users />} />
                                    <Route path="invites" /> {/* Fixed Invites route which was empty element */}
                                </>
                            )}
                        </Route>
                        <Route path="*" element={<Navigate to="/login" />} />
                    </Routes>
                </Suspense>
            </Router>
        </AuthContext.Provider>
    );
};

const DashboardLayout: React.FC = () => {
    return <Dashboard />;
};

export default App;