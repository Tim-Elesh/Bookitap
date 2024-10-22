import React from 'react';
import { Modal, ModalDialog, Button, Typography } from '@mui/joy';
import CloseIcon from '@mui/icons-material/Close';

interface BookModalProps {
    open: boolean;
    onClose: () => void;
}

const BookModal: React.FC<BookModalProps> = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <ModalDialog
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Typography id="modal-title" level="h4">
                    Book Title
                </Typography>

                <img
                    src=""
                    alt=""
                />

                <Typography id="modal-description" level="h2">
                    This is a simple modal window created with Joy UI.
                </Typography>

                <Button
                sx={{
                    display: 'flex' , 
                    justifyContent: 'space-between' ,
                    alignItems: 'center'
                }} 
                onClick={onClose}>
                    Close
                    <CloseIcon />
                </Button>
            </ModalDialog>
        </Modal>
    )
}

export default BookModal;