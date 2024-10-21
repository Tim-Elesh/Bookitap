// components/Sidebar.jsx
import { Box, Button, Typography, Avatar } from '@mui/joy';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        bgcolor: 'background.level1',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        gap: 2,
      }}
    >
      {/* Профиль пользователя */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar src="/static/images/avatar/1.jpg" alt="User Avatar" />
        <Typography level="h6">John Doe</Typography>
      </Box>

      {/* Навигационные ссылки */}
      <Box sx={{ flexGrow: 1 }}>
        <Button component={Link} to="/" variant="plain" fullWidth>
          Home
        </Button>
        <Button component={Link} to="/dashboard" variant="plain" fullWidth>
          Dashboard
        </Button>
        <Button component={Link} to="/settings" variant="plain" fullWidth>
          Settings
        </Button>
      </Box>

      {/* Выйти из профиля */}
      <Box>
        <Button component={Link} to="/logout" variant="solid" color="danger" fullWidth>
          Logout
        </Button>
      </Box>
    </Box>
  );
}

export default Sidebar;
