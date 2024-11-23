import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Alert } from '@mui/joy';
import { addBook } from '../services/bookService';

const AddBookForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData(event.currentTarget);
      const coverImageFile = formData.get('coverImage') as File;
      const pdfFile = formData.get('pdf') as File;

      if (!coverImageFile.type.startsWith('image/')) {
        throw new Error('Cover file must be an image');
      }

      if (pdfFile.type !== 'application/pdf') {
        throw new Error('File must be a PDF');
      }

      await addBook(
        {
          title: formData.get('title') as string,
          author: formData.get('author') as string,
          coverImage: '',
          pdf: ''
        },
        coverImageFile,
        pdfFile
      );
      event.currentTarget.reset();
    } catch (err) {
      setError(`Failed to add book: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit}
      sx={{
        width: '100%',
        height: '100vh',
      }}
    >
      <FormControl
        sx={{
          marginTop: '10px'
        }}
      >
        <FormLabel
          sx={{
            fontSize: '20px',
            fontWeight: '550',
          }}
        >
          Название книги
        </FormLabel>
        <Input placeholder="Введите название книги" name="title" required />
      </FormControl>
      <FormControl
        sx={{
          marginTop: '10px'
        }}
      >
        <FormLabel
          sx={{
            fontSize: '20px',
            fontWeight: '550',
          }}
        >
          Автор
        </FormLabel>
        <Input placeholder="Введите имя автора книги" name="author" required />
      </FormControl>
      <FormControl
        sx={{
          marginTop: '10px'
        }}
      >
        <FormLabel
          sx={{
            fontSize: '20px',
            fontWeight: '550',
          }}
        >
          Обложка книги
        </FormLabel>
        <Input
          sx={{
            padding: '4px',
          }}
          slotProps={{
            input: {
              type: 'file',
              accept: 'image/*'
            }
          }}
          name="coverImage" 
          required 
        />
      </FormControl>
      <FormControl
        sx={{
          marginTop: '10px'
        }}
      >
        <FormLabel
          sx={{
            fontSize: '20px',
            fontWeight: '550',
          }}
        >
          PDF файл
        </FormLabel>
        <Input 
          sx={{
            padding: '4px',
          }}
          slotProps={{
            input: {
              type: 'file',
              accept: 'application/pdf'
            }
          }}
          name="pdf" 
          required 
        />
      </FormControl>
      <Button
        sx={{
          width: '100%',
          my: '10px'
        }} 
        type="submit" 
        loading={loading}
      >
        Добавить книгу
      </Button>
      {error && <Alert color="danger">{error}</Alert>}
    </Box>
  );
};

export default AddBookForm;