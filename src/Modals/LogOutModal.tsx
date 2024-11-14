import { Modal, ModalDialog, Button, Typography } from '@mui/joy';
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface LogOutModalProps {
  open: boolean;
  onClose: () => void;
}

const LogOutModal: React.FC<LogOutModalProps> = ({ open, onClose }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      onClose();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
      // Handle error
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog 
        sx={{
          maxWidth: '90%', 
          width: '400px', 
          padding: '20px', 
          borderRadius: '8px',
          backgroundColor: '#fff',
          '@media (max-width: 600px)': { width: '80%', padding: '16px' }
        }}
      >
        <Button 
          onClick={onClose}
          sx={{ position: 'absolute', top: 8, right: 8, minWidth: 0 }}
          variant="plain"
          color="neutral"
        >
          <CloseIcon />
        </Button>
        <Typography level="h4" sx={{ my: 3 }}>Вы уверены, что хотите выйти?</Typography>
        <Typography level="h4" sx={{ mb: 2 }}>Выйдя из аккаунта, вы завершите текущую сессию.</Typography>
        <Button onClick={handleLogout} variant="soft" color="danger" fullWidth sx={{my: 2}}>
          Выйти
        </Button>
      </ModalDialog>
    </Modal>
  );
};

export default LogOutModal;
