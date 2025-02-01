import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarList from '../components/CarList';

const FavoritesPage = () => {
    const [favoriteCars, setFavoriteCars] = useState([]);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoriteCars(favorites);
    }, []);

    return (
        <Box>
            <Header />
            <CarList cars={favoriteCars} onCarClick={(car) => console.log(car)} />
            <Footer />
        </Box>
    );
};

export default FavoritesPage;