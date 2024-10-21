import { Box, Typography, Button, FormControl, FormLabel, Input } from '@mui/joy';
import GoogleIcon from '../components/CustomIcons';

const SignUpPage = () => {
  return (
    <Box 
    sx={{
      height: '100vh',
      width: '100%',
    }}>
      <Box
        sx={{
          maxWidth: '500px',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 2,
          p: 3,
          bgcolor: 'background.level1',
          borderRadius: 'md',
          boxShadow: 'md',
        }}
      >
        <Typography level="h4" sx={{ textAlign: 'center' }}>
          Sign Up
        </Typography>

        <Button
          variant="soft"
          color="neutral"
          fullWidth
          startDecorator={<GoogleIcon />}
        >
          Continue with Google
        </Button>

        <FormControl required>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" />
        </FormControl>

        <FormControl required>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" />
        </FormControl>

        <Button variant="solid" color="primary">
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpPage;
