import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import SeoLandingPage from './pages/SeoLandingPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services/:slug" element={<SeoLandingPage area="services" />} />
        <Route path="locations/:slug" element={<SeoLandingPage area="locations" />} />
      </Route>
    </Routes>
  )
}
