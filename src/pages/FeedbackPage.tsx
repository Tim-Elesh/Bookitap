import  Box from "@mui/joy/Box";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import FeedbackForm from "../components/FeedbackForm";

const FeedBackPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    sm: 'column',
                    md: 'row',
                }, 
                width: '100%',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >   
            <Sidebar />
            <Header />
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'auto',
                }}
            >
                <FeedbackForm />
            </Box>
        </Box>
    );
};

export default FeedBackPage;