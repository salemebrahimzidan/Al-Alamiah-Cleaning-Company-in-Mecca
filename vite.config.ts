import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// GitHub Pages project URL: https://<user>.github.io/Al-Alamiah-Cleaning-Company-in-Mecca/
// This base must match the repository name segment in the URL (case-sensitive on the server).
export default defineConfig({
  base: '/Al-Alamiah-Cleaning-Company-in-Mecca/',
  plugins: [tailwindcss(), react()],
})
