import { Box, Typography, Button, Select, FormControl, FormLabel , Option } from "@mui/joy";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

const Settings = () => {
    return (
        <Box 
        sx={{  
            backgroundColor: '#f5f5f5', 
            display: 'flex', 
        }}
        >
            <Sidebar />
            <Box 
            sx={{ 
                marginTop: 2,
                paddingLeft: '10%', 
            }}
            >
                <Typography level="h4" sx={{ marginBottom: 2 }}>Настройки</Typography>
                <FormControl 
                    fullWidth 
                    sx={{ 
                        marginBottom: 2 
                    }}
                >
                    <FormLabel>Тема</FormLabel>
                    <Select>
                        <Option value="light">Светлая</Option>
                        <Option value="dark">Тёмная</Option>
                    </Select>
                </FormControl>
                <Button variant="outlined" color="primary" onClick={() => alert("Настройки сохранены!")}>
                    Сохранить
                </Button>
            </Box>
        </Box>
    );
};

export default Settings;