import React, { useState } from 'react';
import { Box, Typography } from '@mui/joy';
import BookModal from '../Modals/BookModal';

interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  pdf: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [isBookModalOpen, setBookModalOpen] = useState(false);

  const handleOpenBookModal = () => {
    setBookModalOpen(true);
  };

  const handleCloseBookModal = () => {
    setBookModalOpen(false);
  };

  return (
    <>
      <Box
        onClick={handleOpenBookModal}
        sx={{
          cursor: 'pointer',
          padding: '16px',
          backgroundColor: 'lightgray',
          height: '400px',
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '8px',
          marginBottom: '16px',
        }}
      >
        <img 
          src={book.coverImage || '/images/placeholder.jpg'} 
          alt={`${book.title} cover`} 
          style={{
            width: '100%',
            height: '100%'
          }}
        />
        <Typography 
          level="h4"
          sx={{
            fontSize: '18px',
          }}
        >{book.title}</Typography>
        <Typography level="h4">{book.author}</Typography>
      </Box>

      <BookModal 
        open={isBookModalOpen} 
        onClose={handleCloseBookModal} 
        bookTitle={book.title} 
        bookAuthor={book.author} 
        pdfUrl={book.pdf} 
        coverImage={book.coverImage} 
      />
    </>
  );
};

export default BookCard;


