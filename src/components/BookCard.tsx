import React from 'react';
import { Box } from '@mui/joy';

interface BookCardProps {
    onOpen: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ onOpen }) => {
    return (
        <Box
            onClick={onOpen}
            sx={{
                cursor: 'pointer',
                padding: '16px',
                backgroundColor: 'lightgray',
                borderRadius: '8px'
            }}>
            
        </Box>
    );
};

export default BookCard;
