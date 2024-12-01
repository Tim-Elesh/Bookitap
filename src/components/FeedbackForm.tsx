import { Box, FormControl, FormLabel, Input, Textarea, Button, Typography } from "@mui/joy";
import { useRef, useState , useEffect  } from "react";
import emailjs from '@emailjs/browser';
import Loading from "../components/Loading";

const FeedbackForm = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<string>("");
    const [loading, setLoading] = useState(true);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                'service_uxjpebi',
                'template_r6kc5rp',
                form.current,
                'JNcy0nPEqVpX3_2uA'
            )
            .then(() => {
                setStatus("Сообщение успешно отправлено!");
                if (form.current) form.current.reset();
            })
            .catch((error) => {
                setStatus("Произошла ошибка при отправке.");
                console.error(error);
            });
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    if (loading) {
        return (
            <Loading />
        );
    }

    return (
        <Box
            component="form"
            ref={form}
            onSubmit={sendEmail}
            sx={{
                maxWidth: 500,
                mx: 'auto',
                my: 4,
                p: 3,
                borderRadius: 'sm',
                width: '100%',
                backgroundColor: 'white',
            }}
        >
            <Typography
                sx={{
                    fontSize: '18px',
                    fontWeight: '510',
                }}
            >
                Если у вас есть пожелания или жалобы
            </Typography>
            <Typography
                sx={{
                    fontSize: '18px',
                    fontWeight: '510',
                }}
            >
                отправьте их нам!
            </Typography>
            <FormControl required sx={{ mb: 2 }}>
                <FormLabel>Имя</FormLabel>
                <Input name="user_name" />
            </FormControl>

            <FormControl required sx={{ mb: 2 }}>
                <FormLabel>Email</FormLabel>
                <Input name="user_email" type="email" />
            </FormControl>

            <FormControl required sx={{ mb: 2 }}>
                <FormLabel>Сообщение</FormLabel>
                <Textarea name="message" minRows={3} />
            </FormControl>

            <Button type="submit" sx={{ mt: 2 }} fullWidth>
                Отправить
            </Button>

            {status && (
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                    {status}
                </Box>
            )}
        </Box>
    );
};

export default FeedbackForm;
