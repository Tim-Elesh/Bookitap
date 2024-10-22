import React from 'react';
import { Input, Box } from '@mui/joy';

interface SearchProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
    return (
        <Box
            sx={{
            
            }}
        >
            <Input
                placeholder="Search for a book..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ marginBottom: '16px', width: '100%' , padding: '8px' }}
            />
        </Box>
    );
};

export default Search;
