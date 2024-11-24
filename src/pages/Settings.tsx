import { Box, Typography, Button, Select, FormControl, FormLabel , Option } from "@mui/joy";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Settings = () => {
    return (
        <Box 
        sx={{  
            backgroundColor: '#f5f5f5', 
            display: 'flex',
            heigth: '100vh'
        }}
        >
            <Sidebar />
            <Box 
            sx={{
                dispaly: 'flex',
                width: '100%',
                height: '100%',
                flexDirection: 'column',  
            }}
            >
                <Header />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography level="h4" sx={{ marginBottom: 2 }}>Настройки</Typography>
                    <Box>
                        <FormControl
                            fullWidth
                            sx={{
                                marginBottom: 2,
                                display: 'flex',
                            }}
                        >
                            <FormLabel>Тема</FormLabel>
                            <Select>
                                <Option value="light">Светлая</Option>
                                <Option value="dark">Тёмная</Option>
                            </Select>
                        </FormControl>
                    </Box>
                    <Button variant="outlined" color="primary" onClick={() => alert("Настройки сохранены!")}>
                        Сохранить
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Settings;