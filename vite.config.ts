import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  plugins: [tailwindcss(), react()],
  base:
    mode === 'github'
      ? '/Al-Alamiah-Cleaning-Company-in-Mecca/'
      : '/',
}))