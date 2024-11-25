import { Box } from "@mui/joy";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SettingsPoints from "../components/SettingsPoints";

const Settings = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#f5f5f5',
                display: 'flex',
                height: '100vh'
            }}
        >
            <Sidebar />
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column',
                }}
            >
                <Header />
                <SettingsPoints />
            </Box>
        </Box>
    );
};

export default Settings;