// components/Sidebar.jsx
import { Box, Button, Typography, Avatar } from '@mui/joy';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/AutoStories';


function Sidebar() {
  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        bgcolor: 'background.level3',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        gap: 2,
      }}
    >
      {/* Профиль пользователя */}
      <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
        }}
      >
        <Avatar src="/static/images/avatar/1.jpg" alt="User Avatar" />
        <Typography>John Doe</Typography>
      </Box>

      {/* Навигационные ссылки */}
      <Box sx={{ flexGrow: 1, width: '100%' }}>
        <Button
          component={Link}
          to="/dashboard" variant="plain"
          fullWidth
          sx={{
            display: 'flex' ,
            justifyContent: 'space-between'
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
            display: 'flex' , 
            justifyContent: 'space-between'
          }}
        >
          <SettingsIcon />
          Settings
        </Button>
      </Box>

      {/* Выйти из профиля */}
      <Box>
        <Button component={Link} to="/logout" variant="solid" color="danger" fullWidth>
          <LogoutIcon />
          Logout
        </Button>
      </Box>
    </Box>
  );
}

export default Sidebar;
