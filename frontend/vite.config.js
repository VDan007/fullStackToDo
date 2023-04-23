import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/todos': {
        target: 'http://localhost:8888/todos',
        changeOrigin: true
      },
      '/todos/:userEmail': {
        target: 'http://localhost:8888/todos/:userEmail',
        changeOrigin: true
      }
    }
  }
})
