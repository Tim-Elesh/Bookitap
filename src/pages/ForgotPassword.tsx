import { Box, Typography, Input, Button } from '@mui/joy';

const ForgotPassword = () => {
  return (
    <Box
      sx={{
        width: '100vw', // ширина на всю страницу
        height: '100vh', // высота на всю страницу
        display: 'flex',
        justifyContent: 'center', // центрирование по горизонтали
        alignItems: 'center', // центрирование по вертикали
        bgcolor: 'background.level1',
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 3,
          bgcolor: 'background.level1',
          borderRadius: 'md',
          boxShadow: 'md',
          textAlign: 'center',
        }}
      >
        {/* Заголовок */}
        <Typography level="h4" sx={{ mb: 2 }}>
          Forgot your Password?
        </Typography>

        {/* Поле ввода email */}
        <Input placeholder="Enter your email" type="email" required sx={{ mb: 2 }} />

        {/* Кнопка отправки */}
        <Button variant="solid" color="primary">
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ForgotPassword;

