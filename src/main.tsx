import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from './context/LanguageProvider'
import './index.css'
import App from './App.tsx'

function routerBasename(): string | undefined {
  const raw = import.meta.env.BASE_URL
  if (!raw || raw === '/') return undefined
  return raw.endsWith('/') ? raw.slice(0, -1) : raw
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter basename={routerBasename()}>
          <App />
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  </StrictMode>,
)
