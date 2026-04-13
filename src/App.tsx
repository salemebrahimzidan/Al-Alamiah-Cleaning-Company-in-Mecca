import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'

const SeoLandingPage = lazy(() => import('./pages/SeoLandingPage'))

function SeoPageFallback() {
  return (
    <main className="site-main" aria-busy="true" aria-label="Loading">
      <div className="container py-24">
        <div className="mx-auto h-10 max-w-56 animate-pulse rounded-xl bg-(--section-alt)" />
      </div>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
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
      </Route>
    </Routes>
  )
}
