import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import  routerPlugin  from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    routerPlugin({
      target: 'react',
      autoCodeSplitting: true,
      routeFilePrefix: '~', 
      routeFileIgnorePrefix: '.', 
    }),
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': '/src',
    },
  },
})