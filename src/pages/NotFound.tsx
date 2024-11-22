import { Typography, Box , Button} from '@mui/joy';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography
        level="h1"
        color="primary"
      >
        404 - Page Not Found
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
        Back to books
      </Button>
    </Box>
  );
}

export default NotFound;