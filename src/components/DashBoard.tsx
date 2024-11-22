import { Box, CircularProgress, Alert } from "@mui/joy";
import { useState, useEffect } from "react";
import BookCard from "./BookCard";
import BookModal from "../Modals/BookModal";
import { BookData, fetchBooks, initializeDatabase } from "../services/bookService";
import BookSearch from "./BookSearch";
import Header from "./Header";
import { useAuth } from "../context/AuthContext";

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
        let isMounted = true;

        const loadBooks = async () => {
            try {
                setLoading(true);
                setError(null);
                const fetchedBooks = await fetchBooks();
                
                if (isMounted) {
                    setBooks(fetchedBooks);
                }
            } catch (err) {
                if (isMounted) {
                    console.error('Loading error:', err);
                    setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        loadBooks();

        return () => {
            isMounted = false;
        };
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
            <Box 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '100vh',
                    width: '100%' 
                }}
            >
                <CircularProgress />
            </Box>
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
                    overflow: 'auto'
                }}
            >
                <Header />
                <BookSearch onSearch={setSearchQuery} />
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '20px',
                        padding: '20px',
                        overflow: 'auto'
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