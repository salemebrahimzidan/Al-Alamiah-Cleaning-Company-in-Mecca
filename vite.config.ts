import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  plugins: [tailwindcss(), react()],
  base:
    mode === 'github'
      ? '/Al-Alamiah-Cleaning-Company-in-Mecca/'
      : '/',
  build: {
    cssMinify: 'lightningcss',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('react-router')) return 'vendor-router'
          if (id.includes('react-helmet-async')) return 'vendor-helmet'
          if (
            id.includes('react-dom') ||
            id.includes('/react/') ||
            id.includes('\\react\\')
          ) {
            return 'vendor-react'
          }
        },
      },
    },
  },
}))