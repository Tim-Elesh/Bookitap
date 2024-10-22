import { useState } from 'react';
import { Box, Typography } from '@mui/joy';
import Search from './Search';
import BookCard from './BookCard';
import books, { Book } from '../data/books'; // Импортируем данные книг

const BookSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');

    // Фильтрация книг по названию и автору
    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Box
            sx={{
                width: '100%',
                padding: '16px'
            }}
        >
            {/* Компонент поиска */}
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {/* Отображение отфильтрованных карточек книг */}
            {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                    <BookCard key={book.id} book={book} onOpen={() => console.log(`Opened ${book.title}`)} />
                ))
            ) : (
                <Typography
                    level='h3'
                    sx={{
                        textAlign: 'center'
                    }}
                >
                    No books found
                </Typography>
            )}
        </Box>
    );
};

export default BookSearch;

