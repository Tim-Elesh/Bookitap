import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import  Typography  from "@mui/joy/Typography";
import { Link } from 'react-router-dom';


const BookNotFound = () =>{
    return(
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography 
                color="primary"
                level="h1"
            >
                Данная книга не найдена либо возникает ошибка при ее открытии
            </Typography>
            <Button
                component={Link}
                to="/dashboard"
                sx={{
                    bgcolor: '#2ca8fe',
                    color: 'white',
                    padding: '8px',
                    fontSize: '18px',
                    margin: '10px',
                }}
            >
                Вернуться на главную 
            </Button>
        </Box>
    )
}

export default BookNotFound;