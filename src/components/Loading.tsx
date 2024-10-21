import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';


const Loading = () =>{
    return(
        <Box>
            <CircularProgress color="primary" variant="solid"/>
        </Box>
    )
}

export default Loading;