import React from 'react';
import { useParams } from 'react-router-dom';
import books from '../data/books'; // Импортируйте массив книг
import EpubReader from '../components/EpubReader'; // Импортируйте компонент для чтения EPUB

const BookPage: React.FC = () => {
    const { bookId } = useParams<{ bookId: string }>();
    const book = books.find(b => b.id === bookId); // Найдите книгу по ID

    if (!book) {
        return <div>Книга не найдена</div>; // Обработка случая, если книга не найдена
    }

    return (
        <EpubReader url={book.epub} /> // Передайте URL EPUB в компонент EpubReader
    );
};

export default BookPage;
