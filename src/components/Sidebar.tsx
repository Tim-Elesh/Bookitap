// components/Sidebar.jsx
import { Box, Button, Typography, Avatar } from '@mui/joy';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/AutoStories';
import LogOutModal from '../Modals/LogOutModal';
import { useState } from 'react';


function Sidebar() {

  const [isModalOpen, setModalOpen] = useState(false);

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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Avatar src="/static/images/avatar/1.jpg" alt="User Avatar" />
        <Typography
          sx={{
            color: '#fff'
          }}
        >
          John Doe
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
          to="/dashboard" variant="plain"
          fullWidth
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            color: '#fff'
          }}
        >
          <BookIcon />
          Dashboard
        </Button>
        <Button
          component={Link}
          to="/settings" variant="plain"
          fullWidth
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            color: '#fff'
          }}
        >
          <SettingsIcon />
          Settings
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
