import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

const CarList = ({ cars }) => {
    const navigate = useNavigate();
    const [favorites, setFavorites] = React.useState(
        JSON.parse(localStorage.getItem('favorites')) || []
    );

    const toggleFavorite = (car) => {
        const newFavorites = favorites.some(fav => fav.id === car.id)
            ? favorites.filter(fav => fav.id !== car.id)
            : [...favorites, car];
        
        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
                Available Cars ({cars.length})
            </Typography>
            <Grid container spacing={3}>
                {cars.map((car) => (
                    <Grid item key={car.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={car.image}
                                alt={car.name}
                                onClick={() => navigate(`/car/${car.id}`)}
                                sx={{ cursor: 'pointer' }}
                            />
                            <CardContent>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography gutterBottom variant="h6">
                                        {car.name}
                                    </Typography>
                                    <FavoriteButton 
                                        isFavorite={favorites.some(fav => fav.id === car.id)}
                                        onClick={() => toggleFavorite(car)}
                                    />
                                </Box>
                                <Typography variant="body2" color="text.secondary">
                                    ${car.price}/day
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CarList;