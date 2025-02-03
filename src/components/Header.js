// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = () => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: 'white',
                boxShadow: 'none',
                width: 'calc(100% + 16px)',
                marginLeft: '-8px',
            }}
        >
            <Toolbar>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="logo">ShenCarCar</div>
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                <Link to="/favorites" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <IconButton color="inherit" sx={{ color: 'red' }}>
                        <FavoriteIcon />
                    </IconButton>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
