import { Dashboard } from "@mui/icons-material";
import Sidebar from "../components/Sidebar";
import { Box } from "@mui/joy";

const HomePage = () =>{
    return(
        <Box sx={{width: '100%' , display: 'flex' , justifyContent: 'space-between', margin: 0, padding: 0}}>
            <Sidebar />
            <Dashboard />
        </Box>
    )
}

export default HomePage;