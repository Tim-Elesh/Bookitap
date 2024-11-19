import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';


const Loading = () =>{
    return(
        <Box 
        sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            <CircularProgress color="primary" variant="solid"/>
        </Box>
    )
}

export default Loading;