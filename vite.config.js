import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@containers', replacement: '/src/components/containers' },
      { find: '@ui', replacement: '/src/components/ui' },
      { find: '@css', replacement: '/src/components/css' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@services', replacement: '/src/services' },
      { find: '@api', replacement: '/src/services/api' },
      { find: '@utils', replacement: '/src/utils' },
    ],
  },
});
