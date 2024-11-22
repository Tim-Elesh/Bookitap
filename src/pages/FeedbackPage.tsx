import  Box from "@mui/joy/Box";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import FeedbackForm from "../components/FeedbackForm";

const FeedBackPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                height: '100vh',
            }}
        >   
            <Sidebar />
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'auto'
                }}
            >
                <Header />
                <FeedbackForm />
            </Box>
        </Box>
    );
};

export default FeedBackPage;