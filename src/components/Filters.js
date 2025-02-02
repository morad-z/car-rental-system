import React, { useState, useEffect } from 'react';
import { 
  FormGroup, 
  FormControlLabel, 
  Checkbox, 
  Slider, 
  Typography, 
  Box,
  Divider 
} from '@mui/material';

const Filters = ({ onFilterChange }) => {
  const [carTypes, setCarTypes] = useState({
    Sedan: true,
    SUV: true,
    Coupe: true,
    Convertible: true,
    Hatchback: true,
    Truck: true
  });

  const [features, setFeatures] = useState({
    '2 Person': true,
    '4 Person': true,
    '6 Person': true,

  });

  const [priceRange, setPriceRange] = useState([0, 200]);

  // Effect to trigger filter changes
  useEffect(() => {
    handleFilterUpdate();
  }, [carTypes, features, priceRange]);

  const handleCarTypeChange = (event) => {
    setCarTypes(prev => ({
      ...prev,
      [event.target.name]: event.target.checked
    }));
  };

  const handleFeatureChange = (event) => {
    setFeatures(prev => ({
      ...prev,
      [event.target.name]: event.target.checked
    }));
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleFilterUpdate = () => {
    onFilterChange({
      carTypes,
      features,
      priceRange
    });
  };

  return (
    <Box sx={{ p: 2, width: '100%', maxWidth: 300 }}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      
      <Typography variant="subtitle1" gutterBottom>
        Car Types
      </Typography>
      <FormGroup>
        {Object.keys(carTypes).map((type) => (
          <FormControlLabel
            key={type}
            control={
              <Checkbox
                checked={carTypes[type]}
                onChange={handleCarTypeChange}
                name={type}
              />
            }
            label={type}
          />
        ))}
      </FormGroup>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1" gutterBottom>
        Features
      </Typography>
      <FormGroup>
        {Object.keys(features).map((feature) => (
          <FormControlLabel
            key={feature}
            control={
              <Checkbox
                checked={features[feature]}
                onChange={handleFeatureChange}
                name={feature}
              />
            }
            label={feature}
          />
        ))}
      </FormGroup>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1" gutterBottom>
        Daily Price Range ($)
      </Typography>
      <Box sx={{ px: 2 }}>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={200}
          step={10}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2">${priceRange[0]}</Typography>
          <Typography variant="body2">${priceRange[1]}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Filters;