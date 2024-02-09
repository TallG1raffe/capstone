import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": { "target": "http://localhost:3000", changeOrigin: true },
      "/predict": { "target": "http://localhost:5000", changeOrigin: true }
    }
  }
})