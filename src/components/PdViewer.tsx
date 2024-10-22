// PdfViewer.tsx
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Box, Typography, Button } from '@mui/joy';

interface PdfViewerProps {
  pdfUrl: string;
  onClose: () => void;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl, onClose }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <Box sx={{ width: '100%', height: '100vh', backgroundColor: 'white', padding: '16px', position: 'relative' }}>
      <Typography level="h2">PDF Viewer</Typography>
      <Button onClick={onClose} sx={{ marginBottom: '16px' }}>Close</Button>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <Box sx={{ marginTop: '16px' }}>
        <Typography>
          Page {pageNumber} of {numPages || '--'}
        </Typography>
      </Box>
    </Box>
  );
};

export default PdfViewer;
