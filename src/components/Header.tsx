import { Box, Typography } from "@mui/joy";

const Header = () => {
    return (
        <>
            <header>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                        level="h2"
                    >
                        Hello
                    </Typography>
                    <Typography
                        level="h2"
                    >
                        Tim
                    </Typography>
                </Box>
            </header>
        </>
    )
}

export default Header;