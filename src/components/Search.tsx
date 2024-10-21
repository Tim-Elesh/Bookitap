import { Box, Button, Input} from "@mui/joy"
import SearchIcon from '@mui/icons-material/Search';

const Search = () =>{
    return(
        <Box sx={{display: 'flex'}}>
            <Input placeholder="Поиск..." />
            <Button>
                <SearchIcon />
            </Button>
        </Box>
    )
}

export default Search;