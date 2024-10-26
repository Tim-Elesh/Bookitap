import { Typography, Box } from '@mui/joy';

function NotFound() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography
        level="h1"
        color="danger"
      >
        404 - Page Not Found
      </Typography>
    </Box>
  );
}

export default NotFound;