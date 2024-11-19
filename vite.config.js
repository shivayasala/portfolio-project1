import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
    },
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
    extensions: ['.js', '.jsx'],
  },
});
