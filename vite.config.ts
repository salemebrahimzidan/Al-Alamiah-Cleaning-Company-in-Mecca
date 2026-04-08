import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project URL:
// https://salemebrahimzidan.github.io/Al-Alamiah-Cleaning-Company-in-Mecca/
// Base must match the repo name path segment (case-sensitive on the server).
export default defineConfig({
  base: '/Al-Alamiah-Cleaning-Company-in-Mecca/',
  plugins: [tailwindcss(), react()],
})
