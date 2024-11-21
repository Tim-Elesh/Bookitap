import Box from "@mui/joy/Box"
import Sidebar from "../components/Sidebar";
import { FormControl, FormLabel, Input, Textarea, Button } from "@mui/joy";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const FeedBackPage = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<string>("");

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                'service_uxjpebi',
                'YOUR_TEMPLATE_ID',
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

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                height: '100vh'
            }}
        >   
            <Sidebar/>
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
                    bgcolor: 'background.surface',
                }}
            >
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
        </Box>
    );
};

export default FeedBackPage;