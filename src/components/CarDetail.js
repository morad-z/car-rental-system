import React, { useState } from 'react';
import { Typography, Box, Button, Grid } from '@mui/material';
import FavoriteButton from './FavoriteButton';

const CarDetail = ({ car, onBack }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem('favorites')) || []
    );

    const toggleFavorite = () => {
        const newFavorites = favorites.some(fav => fav.id === car.id)
            ? favorites.filter(fav => fav.id !== car.id)
            : [...favorites, car];
        
        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    };

    const images = [car.image, car.image, car.image];

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <img 
                        src={images[selectedImage]} 
                        alt={car.name} 
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`${car.name} view ${index + 1}`}
                                style={{ 
                                    width: '100px', 
                                    height: '70px',
                                    cursor: 'pointer',
                                    border: selectedImage === index ? '2px solid blue' : 'none'
                                }}
                                onClick={() => setSelectedImage(index)}
                            />
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h4">{car.name}</Typography>
                        <FavoriteButton 
                            isFavorite={favorites.some(fav => fav.id === car.id)}
                            onClick={toggleFavorite}
                        />
                    </Box>
                    <Typography variant="h6" color="primary" sx={{ my: 2 }}>
                        ${car.price}/day
                    </Typography>
                    <Typography variant="body1">{car.description}</Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth 
                        sx={{ mt: 3 }}
                    >
                        Rent Now
                    </Button>
                    <Button 
                        variant="outlined" 
                        onClick={onBack} 
                        fullWidth 
                        sx={{ mt: 2 }}
                    >
                        Back to Home
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};
export default CarDetail;