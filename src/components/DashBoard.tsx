import { Box, CircularProgress, Alert } from "@mui/joy";
import { useState, useEffect } from "react";
import BookCard from "./BookCard";
import BookModal from "../Modals/BookModal";
import { BookData, initializeDatabase } from "../services/bookService";
import BookSearch from "./BookSearch";
import Header from "./Header";
import { useAuth } from "../context/AuthContext";
import booksData from "../data/books";
import Loading from "./Loading";

const DashBoard = () => {
    const { isAuthenticated, currentUser } = useAuth();
    const [open, setOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState<string | null>(null);
    const [books, setBooks] = useState<BookData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const initDB = async () => {
            try {
                await initializeDatabase();
            } catch (error) {
                console.error('Failed to initialize database:', error);
            }
        };

        // Раскомментируйте следующую строку только для первой инициализации
        // initDB();
    }, []);

    useEffect(() => {
        console.log(booksData);
        setBooks(booksData);
        setLoading(false);
    }, []);

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleOpen = (bookTitle: string) => {
        setSelectedBook(bookTitle);
        setOpen(true);
    };

    const handleClose = () => {
        setSelectedBook(null);
        setOpen(false);
    };

    if (loading) {
        return (
            <Loading />
        );
    }

    if (error) {
        return (
            <Box sx={{ p: 2 }}>
                <Alert color="danger" variant="soft">
                    {error}
                </Alert>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                height: '100vh',
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'auto',
                }}
            >
                <Header />
                <BookSearch onSearch={setSearchQuery} />
                <Box
                    sx={{
                        display: {
                            xs: 'flex',
                            sm: 'grid',
                            md: 'grid',
                        },
                        gridTemplateColumns: {
                            xs: '1fr', // 1 колонка для маленьких экранов (480px и ниже)
                            sm: 'repeat(2, 1fr)', // 2 колонки для экранов от 481px
                            md: 'repeat(auto-fill, minmax(300px, 1fr))', // Автоматическое заполнение для больших экранов
                        },
                        flexDirection: 'column',
                        gap: '20px',
                        padding: '20px',
                        justifyContent: 'center', // Центрирование карточек
                        alignItems: 'center',
                        overflow: 'auto',
                    }}
                >
                    {filteredBooks.map((book: BookData) => (
                        <BookCard
                            key={book.id}
                            book={book}
                            onOpen={() => handleOpen(book.title)}
                        />
                    ))}
                </Box>
                <BookModal open={open} onClose={handleClose} bookTitle={selectedBook || ""} />
            </Box>
        </Box>
    );
};

export default DashBoard;