import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarDetail from '../components/CarDetail';
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

    return (
        <Box>
            <Header />
            {car && <CarDetail car={car} onBack={() => navigate('/')} />}
            <Footer />
        </Box>
    );
};

export default CarDetailPage;