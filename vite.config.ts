import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Relative base so CSS/JS and public assets load on GitHub Pages project sites
// (e.g. https://user.github.io/Repo-Name/) without root-relative /assets/... 404s.
export default defineConfig({
  base: './',
  plugins: [tailwindcss(), react()],
})
