import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: {
      overlay: true,
    },
  },
  plugins: [react(), WindiCSS()],
});
