import React from 'react';
import { useParams } from 'react-router-dom';
import books from '../data/books'; // Импортируйте массив книг
import EpubReader from '../components/EpubReader'; // Импортируйте компонент для чтения EPUB
import BookNotFound from './BookNotFound';

const BookPage: React.FC = () => {
    const { bookId } = useParams<{ bookId: string }>();
    const book = books.find(b => b.id === bookId); // Найдите книгу по ID

    console.log('Book ID from URL:', bookId);
    console.log('Books array:', books);
    console.log('Found book:', book);

    if (!book) {
        return <BookNotFound />; // Обработка случая, если книга не найдена
    }

    return (
        <EpubReader url={book.epub} /> // Передайте URL EPUB в компонент EpubReader
    );
};

export default BookPage;
