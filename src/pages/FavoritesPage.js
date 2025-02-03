import React, { useState, useEffect } from 'react';
import { Box, Grid, Container } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarList from '../components/CarList';
import Filters from '../components/Filters'; // Import Filters component
import SearchBar from '../components/SearchBar'; // Import SearchBar component

const FavoritesPage = () => {
    const [favoriteCars, setFavoriteCars] = useState([]);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoriteCars(favorites);
    }, []);

    const handleSearch = (query) => {
        console.log(query);
    };

    const handleFilterChange = (filters) => {
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />

            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                <SearchBar onSearch={handleSearch} />
            </Box>

            <Container maxWidth="xl" sx={{ flex: 1, py: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <Box sx={{ marginLeft: '20px' }}>
                            <Filters onFilterChange={handleFilterChange} />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={9}>
                        <CarList cars={favoriteCars} onCarClick={(car) => console.log(car)} />
                    </Grid>
                </Grid>
            </Container>

            <Footer />
        </Box>
    );
};

export default FavoritesPage;
