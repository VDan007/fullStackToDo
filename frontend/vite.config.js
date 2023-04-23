import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/todos': {
        target: 'http://localhost:8888',
        changeOrigin: true
      },
      '/todos/:userEmail': {
        target: 'http://localhost:8888',
        changeOrigin: true
      },
      '/test': {
        target: 'http://localhost:8888',
        changeOrigin: true
      }
    }
  }
})
