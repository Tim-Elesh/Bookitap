import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/joy';
import PdfViewer from './PdViewer'; // Импортируйте компонент PdfViewer

interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  pdf: string;
}

interface BookCardProps {
  book: Book;
  onOpen: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onOpen }) => {
  const [isPdfViewerOpen, setPdfViewerOpen] = useState(false);

  // Функция для открытия PDF в модальном окне
  const handleOpenPdf = () => {
    setPdfViewerOpen(true);
  };

  // Функция для закрытия модального окна с PDF
  const handleClosePdf = () => {
    setPdfViewerOpen(false);
  };

  return (
    <>
      <Box
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
        <img src={book.coverImage} alt={`${book.title} cover`} width="100" />
        <Typography level="h2">{book.title}</Typography>
        <Typography level="h3">by {book.author}</Typography>

        {/* Кнопка для открытия PDF */}
        <Button onClick={handleOpenPdf} sx={{ marginTop: '8px' }}>
          View PDF
        </Button>

        {/* Кнопка для загрузки PDF */}
        <Button component="a" href={book.pdf} target="_blank" sx={{ marginTop: '8px' }}>
          Download PDF
        </Button>
      </Box>

      {/* Если модальное окно открыто, отображаем компонент PdfViewer */}
      {isPdfViewerOpen && (
        <PdfViewer pdfUrl={book.pdf} onClose={handleClosePdf} />
      )}
    </>
  );
};

export default BookCard;


