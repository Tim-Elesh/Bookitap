import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Sidebar from '../components/Sidebar';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
    const { currentUser } = useAuth();

    return (
        <Box sx={{ display: 'flex', width: '100%', height: '100vh' }}>
            <Sidebar />
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    mx: 'auto',
                    flexDirection: 'column',
                    padding: '20px',
                    overflow: 'auto',
                }}
            >
                <Typography level="h1">Профиль пользователя</Typography>
                <Typography level="h2">Имя: {currentUser?.displayName || 'Не указано'}</Typography>
                <Typography level="h2">Email: {currentUser?.email || 'Не указано'}</Typography>
                {/* Добавьте дополнительные поля профиля по мере необходимости */}
            </Box>
        </Box>
    );
};

export default ProfilePage;