import { Box, Typography } from "@mui/joy";
import { useState } from "react";
import BookCard from "./BookCard";
import BookModal from "../Modals/BookModal";
import books, { Book } from "../data/books"; // Импортируем данные и тип Book
import BookSearch from "./BookSearch";

const DashBoard = () => {
    const [open, setOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState<string | null>(null);

    const handleOpen = (bookTitle: string) => {
        setSelectedBook(bookTitle);
        setOpen(true);
    };

    const handleClose = () => {
        setSelectedBook(null);
        setOpen(false);
    };

    return (
        <Box sx={{ width: '100%', height: '100vh' }}>
            <BookSearch />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {books.map((book: Book) => (
                    <BookCard
                        key={book.id}
                        book={book}  // Передаем объект книги
                        onOpen={() => handleOpen(book.title)}  // Передаем onOpen для открытия модального окна
                    />
                ))}
                <BookModal open={open} onClose={handleClose} bookTitle={selectedBook || ""} />
            </Box>
        </Box>
    );
};

export default DashBoard;
