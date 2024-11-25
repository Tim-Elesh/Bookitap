// components/Sidebar.jsx
import { Box, Button, Typography, Avatar } from '@mui/joy';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/AutoStories';
import EmailIcon from '@mui/icons-material/Email';
import LogOutModal from '../Modals/LogOutModal';
import ProfileIcon from '@mui/icons-material/Person'; // Импортируйте иконку профиля
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
            transition: 'color 300ms ease', // Плавный переход для цвета
            '&:hover': {
              color: '#000', // Цвет при наведении
            },
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
          marginTop: '10px',
        }}
      >
        <Avatar 
          src="/static/images/avatar/1.jpg" 
          alt={displayName}
          size='sm'
          sx={{
            transition: 'outline 600ms ease', // Плавный переход для границы
            '&:hover': {
              outline: '1px solid #000', // Цвет и ширина границы при наведении
            },
          }}
        />
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <Typography
            sx={{
              color: '#fff',
              textTransform: 'capitalize',
              fontWeight: 'bold',
              transition: 'color 300ms ease', // Плавный переход для цвета
              '&:hover': {
                color: '#000', // Цвет при наведении
              },
            }}
          >
            {displayName}
          </Typography>
        </Link>
      </Box>

      {/* Навигационные ссылки */}
      <Box
        sx={{
          flexGrow: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0',
        }}
      >
        <Button
          component={Link}
          to="/dashboard" 
          variant="plain"
          fullWidth
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
            color: '#fff',
            padding: '10px 2px',
            width: '100%',
            textAlign: 'left',
            transition: 'background-color 300ms ease, color 300ms ease', // Плавный переход для фона и цвета
            '&:hover': {
              backgroundColor: '#fff', // Цвет фона при наведении
              color: '#000', // Цвет текста при наведении
            },
          }}
        >
          <BookIcon />
          Книги
        </Button>

        <Button
          component={Link}
          to="/profile" 
          variant="plain"
          fullWidth
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
            color: '#fff',
            padding: '10px 2px',
            width: '100%',
            textAlign: 'left',
            transition: 'background-color 300ms ease, color 300ms ease',
            '&:hover': {
              backgroundColor: '#fff',
             color: '#000',
            },
          }}
        >
          <ProfileIcon />
          Профиль
        </Button>

        <Button
          component={Link}
          to="/settings" 
          variant="plain"
          fullWidth
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
            color: '#fff',
            padding: '10px 2px',
            width: '100%',
            textAlign: 'left',
            transition: 'background-color 300ms ease, color 300ms ease', // Плавный переход для фона и цвета
            '&:hover': {
              backgroundColor: '#fff', // Цвет фона при наведении
              color: '#000', // Цвет текста при наведении
            },
          }}
        >
          <SettingsIcon />
          Настройки
        </Button>
        <Button
          component={Link}
          to="/feedback" 
          variant="plain"
          fullWidth
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
            color: '#fff',
            padding: '10px 2px',
            width: '100%',
            textAlign: 'left',
            transition: 'background-color 300ms ease, color 300ms ease', // Плавный переход для фона и цвета
            '&:hover': {
              backgroundColor: '#fff', // Цвет фона при наведении
              color: '#000', // Цвет текста при наведении
            },
          }}
        >
          <EmailIcon />
          Обратная связь
        </Button>
      </Box>

      {/* Выйти из профиля */}
      <Box>
        <Button onClick={handleLogoutClick} variant="solid" color="danger" fullWidth>
          <LogoutIcon />
           Выйти
        </Button>
        <LogOutModal open={isModalOpen} onClose={handleCloseModal} />
      </Box>
    </Box>
  );
}

export default Sidebar;
