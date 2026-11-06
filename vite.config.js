import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// in produzione il sito è servito da GitHub Pages sotto /sito-psicologo-frontend/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/sito-psicologo-frontend/' : '/',
  plugins: [react(), tailwindcss()],
}))
