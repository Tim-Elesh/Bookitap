import { Box, Typography, Button } from '@mui/joy';
import AddBookForm from '../components/AddBookForm';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AdminPage = () => {
  const { isAuthenticated, currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Box sx={{ 
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <Typography level="h1">Admin Panel</Typography>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </Box>
      
      <Box sx={{ 
        backgroundColor: 'background.surface',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: 'sm'
      }}>
        <Typography level="h2" sx={{ marginBottom: '20px' }}>Add New Book</Typography>
        <AddBookForm />
      </Box>
    </Box>
  );
};

export default AdminPage;