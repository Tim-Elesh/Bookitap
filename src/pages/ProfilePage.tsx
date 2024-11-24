import Box from '@mui/joy/Box';
import Sidebar from '../components/Sidebar';
import ProfileForm from '../components/ProfileFrom';
import Header from '../components/Header';


const ProfilePage = () => {
    return (
        <Box 
            sx={{ 
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    sm: 'column',
                    md: 'row',
                }, 
                width: '100%', 
                height: '100vh' 
            }}
        >
            <Sidebar />
            <Header />
            <ProfileForm />
        </Box>
    );
};

export default ProfilePage;