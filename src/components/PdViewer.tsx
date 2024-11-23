import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/joy';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';

// Указываем путь к worker'у
GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

interface PdfViewerProps {
  pdfUrl: string;
  onClose: () => void;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl, onClose }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pdfDocRef = useRef<any>(null); // Ссылка на PDF документ

  useEffect(() => {
    // Загружаем PDF документ при монтировании компонента
    const loadPdf = async () => {
      try {
        const loadingTask = getDocument(pdfUrl); // Получаем PDF документ
        pdfDocRef.current = await loadingTask.promise;
        setNumPages(pdfDocRef.current.numPages); // Сохраняем количество страниц
      } catch (err) {
        setError(`Error loading PDF: ${err.message}`);
      }
    };

    loadPdf();
  }, [pdfUrl]);

  useEffect(() => {
    // Отображаем текущую страницу на канвасе
    const renderPage = async (num: number) => {
      if (!pdfDocRef.current || !canvasRef.current) return;

      try {
        const page = await pdfDocRef.current.getPage(num); // Получаем страницу
        const viewport = page.getViewport({ scale: 1.5 });
        const context = canvasRef.current.getContext('2d');
        if (context) {
          canvasRef.current.width = viewport.width;
          canvasRef.current.height = viewport.height;
          await page.render({ canvasContext: context, viewport }).promise; // Рендерим страницу
        }
      } catch (err) {
        setError(`Error rendering page: ${err.message}`);
      }
    };

    renderPage(pageNumber); // Рендерим страницу при изменении номера
  }, [pageNumber]);

  const handleNextPage = () => {
    if (pageNumber < (numPages || 1)) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'white',
        padding: '16px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography level="h2">PDF Viewer</Typography>
      {error ? (
        <Typography sx={{ color: 'red' }}>{error}</Typography>
      ) : (
        <canvas ref={canvasRef} />
      )}
      <Box sx={{ marginTop: '16px' }}>
        <Typography>
          Page {pageNumber} of {numPages || '--'}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handlePrevPage} sx={{ marginRight: '8px' }}>
          Previous
        </Button>
        <Button onClick={handleNextPage}>Next</Button>
      </Box>
      <Button onClick={onClose} sx={{ marginTop: '16px' }}>Close</Button>
    </Box>
  );
};

export default PdfViewer;
