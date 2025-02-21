import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Make sure this line is present
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react(), tailwindcss(), autoprefixer()], // And this line includes the plugin
});