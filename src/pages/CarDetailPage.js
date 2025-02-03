import React, { useState, useEffect } from 'react';
import { Box, Grid, Container } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarDetail from '../components/CarDetail';
import Filters from '../components/Filters'; // Import Filters component
import SearchBar from '../components/SearchBar'; // Import SearchBar component
import { useParams, useNavigate } from 'react-router-dom';

const CarDetailPage = () => {
    const [car, setCar] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCar = async () => {
            const response = await fetch(`/cars.json`);
            const data = await response.json();
            const selectedCar = data.find((car) => car.id === parseInt(id));
            setCar(selectedCar);
        };
        fetchCar();
    }, [id]);

    const handleSearch = (query) => {
        console.log(query);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            
            {/* Search Bar at the same height as the header */}
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                <SearchBar onSearch={handleSearch} />
            </Box>

            {/* Main content area with Filters and Car Detail */}
            <Container maxWidth="xl" sx={{ flex: 1, py: 3 }}>
                <Grid container spacing={3}>
                    {/* Filters Section with margin to the left */}
                    <Grid item xs={12} md={3}>
                        <Box sx={{ marginLeft: '20px' }}>
                            <Filters onFilterChange={() => {}} />
                        </Box>
                    </Grid>

                    {/* Car Detail Section */}
                    <Grid item xs={12} md={9}>
                        {car && <CarDetail car={car} onBack={() => navigate('/')} />}
                    </Grid>
                </Grid>
            </Container>

            <Footer />
        </Box>
    );
};

export default CarDetailPage;
