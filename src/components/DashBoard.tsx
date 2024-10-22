import { Box, Typography } from "@mui/joy"
import { useState } from "react";
import BookCard from "./BookCard";
import BookModal from "../Modals/BookModal";

const DashBoard = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return (
        <Box sx={{ width: '100%', height: '100vh' }}>
            <Typography>Hello</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <BookCard onOpen={handleOpen} />




                <BookModal open={open} onClose={handleClose} />
            </Box>
        </Box>
    )
}

export default DashBoard;