import React, { useState } from 'react';
import { ReactReader } from 'react-reader'


interface EpubReaderProps {
    url: string; // URL или путь к файлу EPUB
}

const EpubReader: React.FC<EpubReaderProps> = ({ url }) => {
    const [location, setLocation] = useState<string | number>(0);

    return (
        <div style={{ height: '100vh' }}>
            <ReactReader
                url={url}
                location={location}
                locationChanged={(epubcfi: string) => setLocation(epubcfi)}
            />
        </div>
    );
};

export default EpubReader;