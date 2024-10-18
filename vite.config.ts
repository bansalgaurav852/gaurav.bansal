import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Allow access from any IP
    port: 3000, // Default Vite port, change if needed
  },
  plugins: [react()],
})
