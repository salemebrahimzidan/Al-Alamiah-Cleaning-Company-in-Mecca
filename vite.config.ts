import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: '/Al-Alamiah-Cleaning-Company-in-Mecca/',
})
 // GitHub Pages project URL: https://<user>.github.io/Al-Alamiah-Cleaning-Company-in-Mecca/