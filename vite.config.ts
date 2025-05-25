import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isGitHubPages = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/Vibin-Ravikumar/' : '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

