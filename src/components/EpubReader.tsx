import  Box  from '@mui/joy/Box';
import React, { useEffect, useState } from 'react';
import { ReactReader } from 'react-reader'

interface EpubReaderProps {
    url: string; // URL или путь к файлу EPUB
}

const EpubReader: React.FC<EpubReaderProps> = ({ url }) => {
    const [location, setLocation] = useState("");

    console.log(`url: ${url}`);
    console.log(`location ${location}`);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    console.log("EPUB доступен:", response);
                } else {
                    console.error("Ошибка загрузки EPUB:", response.status, response.statusText);
                }
            })
            .catch(error => console.error("Ошибка запроса:", error));
    }, [url]);
    

    return (
        <Box 
            sx={{ 
                height: '100vh', 
                width: '100%',
            }}
        >
            <ReactReader
                //url="/epubs/10_1_Gabiden_Mustafin_Karagandi.epub"
                url={url}
                location={location}
                locationChanged={(epubcfi: string) => setLocation(epubcfi)}
            />
        </Box>
    );
};

export default EpubReader;