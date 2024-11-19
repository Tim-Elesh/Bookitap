import { useState } from 'react';
import { Box } from '@mui/joy';
import Search from './Search';

interface BookSearchProps {
  onSearch: (query: string) => void;
}

const BookSearch = ({ onSearch }: BookSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <Box
      sx={{
        width: '100%',
        padding: '16px'
      }}
    >
      <Search searchQuery={searchQuery} setSearchQuery={handleSearchChange} />
    </Box>
  );
};

export default BookSearch;

