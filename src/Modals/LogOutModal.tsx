import { Modal, ModalDialog, Button, Typography } from '@mui/joy';
import CloseIcon from '@mui/icons-material/Close';

interface LogOutModalProps {
  open: boolean;
  onClose: () => void;
}

const LogOutModal: React.FC<LogOutModalProps> = ({ open, onClose }) => {
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
        <Button onClick={onClose} variant="soft" color="danger" fullWidth sx={{my: 2}}>
          Выйти
        </Button>
      </ModalDialog>
    </Modal>
  );
};

export default LogOutModal;
