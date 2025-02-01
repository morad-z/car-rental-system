import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavoriteButton = ({ isFavorite, onClick }) => {
    return (
        <IconButton onClick={onClick} color={isFavorite ? 'secondary' : 'default'}>
            <FavoriteIcon />
        </IconButton>
    );
};

export default FavoriteButton;