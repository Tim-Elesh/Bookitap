import Dashboard  from "../components/DashBoard";
import Sidebar from "../components/Sidebar";
import { Box } from "@mui/joy";

const HomePage = () =>{
    return(
        <Box sx={{width: '100%' , height: '100vh' , display: 'flex' , gap: 4 , justifyContent: 'space-between', margin: 0, padding: 0 , overflowX: 'hidden'}}>
            <Sidebar />
            <Dashboard />
        </Box>
    )
}

export default HomePage;