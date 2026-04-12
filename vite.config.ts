import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Tailwind must run via @tailwindcss/vite or utilities (hidden, flex, md:flex, …)
// never reach the browser — layout breaks without it.
// Relative base keeps JS/CSS URLs correct on GitHub Pages for any repo folder name.
export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: '/Al-Alamiah-Cleaning-Company-in-Mecca/',
})