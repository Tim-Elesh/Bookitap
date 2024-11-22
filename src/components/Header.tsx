import { Box, Typography, IconButton, Menu, MenuItem, Dropdown, MenuButton } from '@mui/joy';
import MenuIcon from '@mui/icons-material/Menu';
import BookIcon from '@mui/icons-material/AutoStories';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import LogOutModal from '../Modals/LogOutModal';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <Box
            sx={{
                display: {
                    xs: 'flex',
                    sm: 'flex',
                    md: 'none',
                    xl: 'none',
                    "2xl": 'none',
                    "3xl": 'none',
                },
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingX: '16px',
                paddingTop: '8px',
            }}
        >
            <Typography
                level='h3'
                onClick={() => handleNavigation('/dashboard')}
                sx={{ cursor: 'pointer' }}
            >
                Bookitap
            </Typography>
            <Dropdown>
                <MenuButton
                    slots={{ root: IconButton }}
                    slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
                >
                    <MenuIcon />
                </MenuButton>
                <Menu>
                    <MenuItem
                        onClick={() => handleNavigation('/dashboard')}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        Dashboard
                        <BookIcon />
                    </MenuItem>
                    <MenuItem
                        onClick={() => handleNavigation('/settings')}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        Settings
                        <SettingsIcon />
                    </MenuItem>
                    <MenuItem
                        onClick={() => handleNavigation('/feedback')}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        Feedback
                        <EmailIcon />
                    </MenuItem>
                    <MenuItem
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            color: 'danger.plainColor',
                        }}
                        onClick={handleLogoutClick}
                    >
                        Logout
                        <LogoutIcon />
                    </MenuItem>
                </Menu>
                <LogOutModal open={isModalOpen} onClose={handleCloseModal} />
            </Dropdown>
        </Box>
    );
}

export default Header;