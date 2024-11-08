import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import { Box, Typography } from '@mui/joy';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/AutoStories';
import LogOutModal from '../Modals/LogOutModal';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function Header() {

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
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        My account
                        <BookIcon />
                    </MenuItem>
                    <MenuItem
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
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
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