import { Avatar , Box , Typography } from '@mui/joy';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import Loading from './Loading';

interface ProfileFormProps {
    displayName: string;
}

const ProfileForm = ({ displayName }: ProfileFormProps) =>{
    const [loading, setLoading] = useState(true);
    const { currentUser } = useAuth();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return (
            <Loading />
        );
    }

    return(
        <Box
        sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mx: 'auto',
            flexDirection: 'column',
            padding: '20px',
            overflow: 'auto',
            gap: '16px'
        }}
    >
        <Box>
            <Box
                sx={{
                    display: 'flex'
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
                <Typography
                    level="h2"
                >
                    Профиль пользователя
                </Typography>
            </Box>
            <Typography 
                level="h2"
            >
                Имя: {currentUser?.displayName || 'Не указано'}
            </Typography>
            <Typography 
                level="h2"
            >
                Email: {currentUser?.email || 'Не указано'}
            </Typography>
        </Box>
     </Box>
    )
}

export default ProfileForm;