import { Box, Typography, Button } from '@mui/joy';
import { useState, useEffect } from 'react';

// Функция для расчёта оставшегося времени
const calculateTimeLeft = () => {
  const eventDate = new Date('2024-12-31T00:00:00'); // Дата события
  const currentTime = new Date();
  const difference = eventDate - currentTime;

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Очищаем таймер при размонтировании компонента
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.level1',
        textAlign: 'center',
      }}
    >
      <Box sx={{ p: 3, maxWidth: 600 }}>
        <Typography level="h1" sx={{ mb: 2 }}>
          Coming Soon!
        </Typography>
        <Typography level="h4" sx={{ mb: 4 }}>
          We're launching something new. Stay tuned!
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            fontSize: '24px',
          }}
        >
          <Box>
            <Typography>{timeLeft.days || '0'}</Typography>
            <Typography level="h2">Days</Typography>
          </Box>
          <Box>
            <Typography>{timeLeft.hours || '0'}</Typography>
            <Typography level="h2">Hours</Typography>
          </Box>
          <Box>
            <Typography>{timeLeft.minutes || '0'}</Typography>
            <Typography level="h2">Minutes</Typography>
          </Box>
          <Box>
            <Typography>{timeLeft.seconds || '0'}</Typography>
            <Typography level="h2">Seconds</Typography>
          </Box>
        </Box>

        <Button sx={{ mt: 4 }} variant="solid" color="primary">
          Notify Me
        </Button>
      </Box>
    </Box>
  );
};

export default ComingSoon;
