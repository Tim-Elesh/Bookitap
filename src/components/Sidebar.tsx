// components/Sidebar.jsx
import { Box, Button, Typography, Avatar } from '@mui/joy';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/AutoStories';
import EmailIcon from '@mui/icons-material/Email';
import LogOutModal from '../Modals/LogOutModal';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';


function Sidebar() {
  const { getUserEmail } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);

  // Get user email and format it for display
  const userEmail = getUserEmail();
  const displayName = userEmail ? userEmail.split('@')[0] : 'User';

  const handleLogoutClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        bgcolor: 'background.level3',
        display: {
          xs: 'none',
          sm: 'none',
          md: 'flex',
          xl: 'flex',
          "2xl": 'flex',
          "3xl": 'flex',
      },
        flexDirection: 'column',
        p: 2,
        gap: 2,
        backgroundColor: '#2ca8fe',
        color: '#fff',
        borderRadius: '0 18px 18px 0'
      }}
    >
      {/* Профиль пользователя */}
      <Box
        sx={{
          p: '2',
        }}
      >
        <Typography
          sx={{
            color: 'white',
            fontWeight: '550',
            fontSize: '22px',
          }}
        >
          Bookitap
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Avatar 
          src="/static/images/avatar/1.jpg" 
          alt={displayName}
          size='sm'
        />
        <Typography
          sx={{
            color: '#fff',
            textTransform: 'capitalize',
            fontWeight: 'bold'
          }}
        >
          {displayName}
        </Typography>
      </Box>

      {/* Навигационные ссылки */}
      <Box
        sx={{
          flexGrow: 1,
          width: '100%',
        }}
      >
        <Button
          component={Link}
          to="/dashboard" 
          variant="plain"
          fullWidth
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            color: '#fff',
          }}
        >
          <BookIcon />
          Dashboard
        </Button>
        <Button
          component={Link}
          to="/settings" 
          variant="plain"
          fullWidth
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            color: '#fff',
          }}
        >
          <SettingsIcon />
          Settings
        </Button>
        <Button
          component={Link}
          to="/feedback" 
          variant="plain"
          fullWidth
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            color: '#fff',
          }}
        >
          <EmailIcon />
          Feedback
        </Button>
      </Box>

      {/* Выйти из профиля */}
      <Box>
        <Button onClick={handleLogoutClick} variant="solid" color="danger" fullWidth>
          <LogoutIcon />
          Logout
        </Button>
        <LogOutModal open={isModalOpen} onClose={handleCloseModal} />
      </Box>
    </Box>
  );
}

export default Sidebar;
