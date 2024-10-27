import React from 'react';
import { Input, Box } from '@mui/joy';
import SearchIcon from '@mui/icons-material/Search';

interface SearchProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
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
            <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                    width: '100%',
                    padding: '8px',
                    outline: 'none',
                    border: 'none',
                    backgroundColor: '#fff',
                    boxShadow: 'none',
                }}
                placeholder="Search for a book..."
                color="primary"
            />
            <SearchIcon color="primary"/>
        </Box>
    );
};

export default Search;
