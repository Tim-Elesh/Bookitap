import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('pdf.worker.min.js')) {
            return 'pdf.worker';
          }
        },
      },
    },
  },
  server: {
    mimeTypes: {
      'application/javascript': ['js', 'mjs'], // Убедитесь, что js файлы обрабатываются как JavaScript
    },
  },
});