import { Box, Typography, Button } from '@mui/joy';
import AddBookForm from '../components/AddBookForm';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';

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
      display: 'flex',
      width: '100%',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <Sidebar />
      <Box sx={{ 
        padding: '20px',
        maxWidth: '100%',
        margin: '0 auto',
        flex: 1
      }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <Typography level="h1">Панель Админа</Typography>
          <Button onClick={() => navigate('/dashboard')}>На главную</Button>
        </Box>
        
        <Box sx={{ 
          backgroundColor: 'background.surface',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: 'sm'
        }}>
          <Typography level="h2" sx={{ marginBottom: '20px' }}>Добавить новую книгу</Typography>
          <AddBookForm />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminPage;