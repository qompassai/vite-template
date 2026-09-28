// vite.config.ts — smallest useful Vite config.
// Docs: https://vite.dev/config/
import { defineConfig } from 'vite';

export default defineConfig({
  server: { port: 5173 },
  build: { sourcemap: true },
});
