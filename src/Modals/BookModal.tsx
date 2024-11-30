import React from 'react';
import { Modal, ModalDialog, Button, Typography, Box } from '@mui/joy';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

interface BookModalProps {
    open: boolean;
    onClose: () => void;
    bookTitle: string;
    bookAuthor: string;
    pdfUrl: string;
    epubUrl: string;
    coverImage: string;
    bookId: number;
}

const BookModal: React.FC<BookModalProps> = ({ open, onClose, bookTitle, bookAuthor, pdfUrl, coverImage, bookId }) => {
    const navigate = useNavigate();

    const handleReadClick = () => {
        navigate(`/books/${bookId}`);
    };

    return (
        <Modal open={open} onClose={onClose}>
            <ModalDialog
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                sx={{ display: 'flex', flexDirection: 'row', width: { xs: '90%', sm: '600px' }, maxWidth: '90vw' }}
            >
                <Box
                    sx={{
                        width: '50%',
                        height: '100%',
                        overflow: 'hidden',
                    }}
                >
                    <img
                        src={coverImage}
                        alt={`${bookTitle} cover`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        width: '50%',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Typography id="modal-title" level="h4">
                        {bookTitle}
                    </Typography>
                    <Typography level="h4" sx={{ marginBottom: '16px' }}>
                        Автор: {bookAuthor}
                    </Typography>

                    <Button
                        component="a"
                        href={pdfUrl}
                        target="_blank"
                        sx={{ marginBottom: '8px' }}
                    >
                        Открыть PDF
                    </Button>

                    <Button
                        component="a"
                        href={pdfUrl}
                        download
                        sx={{ marginBottom: '8px' }}
                    >
                        Скачать PDF
                    </Button>

                    <Button
                        onClick={handleReadClick}
                        sx={{ marginBottom: '8px' }}
                    >
                        Читать
                    </Button>
                </Box>

                <Button
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        minWidth: 0,
                        padding: '6px',
                        color: 'neutral',
                        border: 'none',
                        backgroundColor: 'grey',
                    }}
                >
                    <CloseIcon />
                </Button>
            </ModalDialog>
        </Modal>
    );
};

export default BookModal;