import React from 'react';
import { Box, Autocomplete } from '@mui/joy';
import SearchIcon from '@mui/icons-material/Search';

interface SearchProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {

    const top10Books = [
        { label: 'Book1' },
        { label: 'Book2' },
        { label: 'Book3' },
        { label: 'Book4' },
        { label: 'Book5' },
        { label: 'Book6' },
        { label: 'Book7' },
        { label: 'Book8' },
        { label: 'Book9' },
        { label: 'Book10' },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                padding: '4px',
                borderRadius: '6px',
                backgroundColor: '#fff',
            }}
        >
            <Autocomplete
                inputValue={searchQuery}
                onInputChange={(event, newInputValue) => setSearchQuery(newInputValue)}
                sx={{
                    width: '100%',
                    padding: '8px',
                    outline: 'none',
                    border: 'none',
                    backgroundColor: '#fff',
                    boxShadow: 'none',
                }}
                type='search'
                placeholder="Search for a book..."
                color="primary"
                options={top10Books}
                getOptionLabel={(option) => option.label}
                freeSolo
                disableClearable
                endDecorator={<SearchIcon color="primary" 
                />}
            />
        </Box>
    );
};

export default Search;
