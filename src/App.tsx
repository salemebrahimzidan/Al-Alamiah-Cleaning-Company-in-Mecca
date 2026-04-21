import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FaqPage from './pages/FaqPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ServicesPage from './pages/ServicesPage'
import WhyUsPage from './pages/WhyUsPage'
import { useLanguage } from './context/useLanguage'

const SeoLandingPage = lazy(() => import('./pages/SeoLandingPage'))

function SeoPageFallback() {
  const { t } = useLanguage()
  return (
    <main className="site-main" aria-busy="true" aria-label={t('seo.loadingPage')}>
      <div className="container px-4 py-16 md:px-6 md:py-20 lg:px-10 xl:px-16">
        <div className="mx-auto h-10 w-full max-w-md animate-pulse rounded-xl bg-(--section-alt)" />
      </div>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="why-us" element={<WhyUsPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route
          path="services/:slug"
          element={
            <Suspense fallback={<SeoPageFallback />}>
              <SeoLandingPage area="services" />
            </Suspense>
          }
        />
        <Route
          path="locations/:slug"
          element={
            <Suspense fallback={<SeoPageFallback />}>
              <SeoLandingPage area="locations" />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
