// web/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './Dashboard';
import Users from './Users';
import Invites from './Invites';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Router>
                <Dashboard>
                    <Routes>
                        <Route path="/" element={<Users />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/invites" element={<Invites />} />
                    </Routes>
                </Dashboard>
            </Router>
        </ThemeProvider>
    );
}

export default App;