import React, { useState, useEffect } from 'react';
import { Box, Grid, Container } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import CarList from '../components/CarList';

const HomePage = () => {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchCars = async () => {
            const response = await fetch('/cars.json');
            const data = await response.json();
            setCars(data);
            setFilteredCars(data);
        };
        fetchCars();
    }, []);

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.length >= 2) {
            const filtered = cars.filter((car) =>
                car.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredCars(filtered);
        } else if (query.length === 0) {
            setFilteredCars(cars);
        }
    };

    const handleFilterChange = (filters) => {
        if (searchQuery.length >= 2) return;
        const { carTypes, features, priceRange } = filters;
        
        const filtered = cars.filter((car) => {
            const typeMatch = carTypes[car.type];
            const featureMatch = car.features?.some(feature => features[feature]);
            const priceMatch = car.price >= priceRange[0] && car.price <= priceRange[1];
            
            return typeMatch && featureMatch && priceMatch;
        });
        
        setFilteredCars(filtered);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            
            {/* Search Bar positioned below the header */}
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                <SearchBar onSearch={handleSearch} />
            </Box>

            {/* Main content area with Filters and Car List */}
            <Container maxWidth="xl" sx={{ flex: 1, py: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        {/* Filters Section with margin to the left */}
                        <Box sx={{ marginLeft: '20px' }}>
                            <Filters onFilterChange={handleFilterChange} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        {/* Car List Section */}
                        <CarList cars={filteredCars} />
                    </Grid>
                </Grid>
            </Container>

            <Footer />
        </Box>
    );
};

export default HomePage;
