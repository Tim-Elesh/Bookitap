import React, { useState } from 'react';
import { Epub } from 'react-reader';

interface EpubReaderProps {
    url: string; // URL или путь к файлу EPUB
}

const EpubReader: React.FC<EpubReaderProps> = ({ url }) => {
    const [location, setLocation] = useState<string | null>(null);

    const handleLocationChange = (newLocation: string) => {
        setLocation(newLocation);
    };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <Epub
                url={url}
                onLocationChange={handleLocationChange}
                location={location}
                // Вы можете добавить дополнительные параметры, если необходимо
            />
        </div>
    );
};

export default EpubReader;