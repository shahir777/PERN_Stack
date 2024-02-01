import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // we need to define which port we will run on
  server: {
    proxy: { "/api": "http://localhost:3002" },
    watch: {
      usePolling: true,
    },
    host: true, // Here
    strictPort: true,
    port: 5173,
  }
  
})
