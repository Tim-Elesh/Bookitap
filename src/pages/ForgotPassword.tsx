import { Box, Typography, Input, Button } from '@mui/joy';
import Alert from '@mui/joy/Alert';
import { useState } from 'react';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ForgotPassword = () => {
  const [email, setEmail] = useState(''); // состояние для хранения введенного email
  const [alertMessage, setAlertMessage] = useState(''); // состояние для сообщения алерта
  const [alertColor, setAlertColor] = useState('success'); // состояние для цвета алерта (успех или ошибка)
  const [alertDecorator , setAlertDecorator] = useState(<CheckCircleIcon />)


  // Функция проверки валидности email
  const isValidEmail = (email) => {
    // Простое регулярное выражение для проверки email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleButtonClick = () => {
    if (!email) {
      setAlertMessage('Ошибка: поле email не может быть пустым.');
      setAlertColor('danger'); // устанавливаем цвет алерта как ошибка
      setAlertDecorator(<WarningIcon/>);

    } else if (!isValidEmail(email)) {
      setAlertMessage('Ошибка: неверный формат email.');
      setAlertColor('danger');
      setAlertDecorator(<WarningIcon/>);
    } else {
      setAlertMessage('Скоро вам придет сообщение на почту.');
      setAlertColor('success'); // устанавливаем цвет алерта как успех
      setAlertDecorator(<CheckCircleIcon/>);
    }
  };

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
        <Typography level="h3" sx={{ mb: 2 , textAlign: 'left' }}>
          Забыли пароль?
        </Typography>

        <Typography level="h4" sx={{ mb: 2 , textAlign: 'left' }}>
          Введите свою почту <br /> чтобы сменить пароль
        </Typography>

        {/* Поле ввода email */}
        <Input 
          placeholder="Enter your email" 
          type="email" 
          required 
          value={email} // связываем значение input с состоянием email
          onChange={(e) => setEmail(e.target.value)} // обновляем email при изменении input
          sx={{ mb: 2 }} 
        />

        {/* Кнопка отправки */}
        <Button onClick={handleButtonClick} variant="solid" color="primary">
          Send
        </Button>

        {/* Алерт с сообщением об ошибке или успешной отправке */}
        {alertMessage && <Alert startDecorator={alertDecorator} color={alertColor}>{alertMessage}</Alert>}
      </Box>
    </Box>
  );
};

export default ForgotPassword;