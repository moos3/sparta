import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Reports from './Reports';
import Users from './Users';
import Invites from './Invites';
import Scans from './Scans';

export const AuthContext = createContext();

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
                    <Route path="/reports" element={user ? <Reports /> : <Navigate to="/login" />} />
                    <Route path="/users" element={user ? <Users /> : <Navigate to="/login" />} />
                    <Route path="/invites" element={user ? <Invites /> : <Navigate to="/login" />} />
                    <Route path="/scans" element={user ? <Scans /> : <Navigate to="/login" />} />
                    <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </Router>
        </AuthContext.Provider>
    );
};

export default App;