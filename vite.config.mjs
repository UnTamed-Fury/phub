import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,       // Change to any port you prefer
    host: '0.0.0.0'   // Allow access from other devices (LAN or remote)
  }
})
