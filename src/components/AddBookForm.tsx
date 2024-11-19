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

    const formData = new FormData(event.currentTarget);
    const coverImageFile = formData.get('coverImage') as File;
    const pdfFile = formData.get('pdf') as File;

    try {
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
    <Box component="form" onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input name="title" required />
      </FormControl>
      <FormControl>
        <FormLabel>Author</FormLabel>
        <Input name="author" required />
      </FormControl>
      <FormControl>
        <FormLabel>Cover Image</FormLabel>
        <Input component="input" type="file" name="coverImage" required accept="image/*" />
      </FormControl>
      <FormControl>
        <FormLabel>PDF File</FormLabel>
        <Input component="input" type="file" name="pdf" required accept="application/pdf" />
      </FormControl>
      <Button type="submit" loading={loading}>Add Book</Button>
      {error && <Alert color="danger">{error}</Alert>}
    </Box>
  );
};

export default AddBookForm;