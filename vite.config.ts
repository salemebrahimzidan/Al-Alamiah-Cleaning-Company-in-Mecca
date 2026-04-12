import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  base: '/Al-Alamiah-Cleaning-Company-in-Mecca/',
  plugins: [tailwindcss(), react()],
})
