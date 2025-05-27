import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'localhost',
      '875f-2604-2d80-d486-2400-b850-4229-f2bd-951c.ngrok-free.app'
    ]
  }
})
