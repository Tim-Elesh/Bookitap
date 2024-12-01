import React from 'react';
import Box from "@mui/joy/Box";
import Autocomplete from '@mui/joy/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';

interface SearchProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {

    const top10Books = [
        { label: 'Қарағанды' },
        { label: 'Адамның кейбір' },
        { label: 'Мен роботпын' },
        { label: 'Қорғансыздың күні' },
        { label: 'Абай Кунанбаев' },
        { label: 'Көкшетау' },
        { label: 'Қаздар қайтып' },
        { label: 'Дулат Исабеков' },
        { label: 'Сейтак Айбатыр' },
        { label: 'Уақыт қайтарымы' },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                padding: '4px',
                borderRadius: '6px',
                backgroundColor: '#fff',
            }}
        >
            <Autocomplete
                inputValue={searchQuery}
                onInputChange={(_, newInputValue) => setSearchQuery(newInputValue)}
                sx={{
                    width: '100%',
                    padding: '8px',
                    outline: 'none',
                    border: 'none',
                    backgroundColor: '#fff',
                    boxShadow: 'none',
                }}
                type='search'
                placeholder="Найти книгу..."
                color="primary"
                options={top10Books}
                getOptionLabel={(option) => typeof option === 'string' ? option : option.label}
                freeSolo
                disableClearable
                endDecorator={<SearchIcon color="primary" 
                />}
            />
        </Box>
    );
};

export default Search;
