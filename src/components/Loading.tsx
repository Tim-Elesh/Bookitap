import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';

const Loading = () =>{
    return(
        <Box 
            sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh',
                width: '100%' ,
                backgroundColor: 'white',
            }}
        >
        <CircularProgress />
    </Box>
    )
}

export default Loading;