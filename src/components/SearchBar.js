import React, { useState } from 'react';
import { TextField, Box, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (query.length >= 2) {
      setError('');
      onSearch(query);
    } else if (query.length > 0) {
      setError('At least 2 characters required');
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length === 0) {
      setError('');
      onSearch(''); 
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%', // Ensure it aligns with the header's height
        padding: 0,
        marginLeft: '16px', // Adjust left margin for spacing (optional)
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        label="Search cars by name"
        value={query}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        error={!!error}
        helperText={error}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          height: '40px',
          maxWidth: 400, 
        }}
      />
    </Box>
  );
};

export default SearchBar;
