// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="h6">ShenCarCar</Typography>
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                <Link to="/favorites" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <IconButton color="inherit">
                        <FavoriteIcon />
                    </IconButton>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header; 