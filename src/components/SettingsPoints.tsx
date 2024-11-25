import { Box, Typography, Button, Select, FormControl, FormLabel, Option } from "@mui/joy";
import { useState } from "react";

const SettingsPoints = () => {
    const [theme, setTheme] = useState("light");

    const handleSave = () => {
        alert("Настройки сохранены!");
    };

    return (
        <Box>
            <Typography level="h4" sx={{ marginBottom: 2 }}>Настройки</Typography>
            <FormControl
                fullWidth
                sx={{
                    marginBottom: 2,
                    display: 'flex',
                }}
            >
                <FormLabel>Тема</FormLabel>
                <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
                    <Option value="light">Светлая</Option>
                    <Option value="dark">Тёмная</Option>
                </Select>
            </FormControl>
            <Button variant="outlined" color="primary" onClick={handleSave}>
                Сохранить
            </Button>
        </Box>
    );
};

export default SettingsPoints;