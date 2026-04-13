import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import SiteFooter from './SiteFooter'
import {
  PHONE_TEL_HREF,
  WHATSAPP_HREF_AR,
  WHATSAPP_HREF_EN,
} from '../constants/contact'
import { useLanguage } from '../context/LanguageContext'

export default function Layout() {
  const { t, locale } = useLanguage()
  const wa = locale === 'ar' ? WHATSAPP_HREF_AR : WHATSAPP_HREF_EN
  const location = useLocation()

  /** After navigating from another route to `/#section`, scroll to the target id. */
  useLayoutEffect(() => {
    if (location.pathname !== '/') return
    const id = location.hash.replace(/^#/, '')
    if (!id) return
    const el = document.getElementById(id)
    if (!el) return
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [location.pathname, location.hash])

  return (
    <>
      <Navbar />
      <Outlet />
      <SiteFooter />
      <nav className="mobile-cta-bar md:hidden" aria-label={t('hero.ctaBook')}>
        <div className="mobile-cta-bar__inner">
          <a
            className="btn btn--primary"
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('contact.ariaBookWhatsapp')}
          >
            {t('hero.ctaBook')}
          </a>
          <a
            className="btn btn--call btn--call--compact"
            href={PHONE_TEL_HREF}
            aria-label={t('contact.ariaPhone')}
          >
            {t('hero.ctaCall')}
          </a>
        </div>
      </nav>
    </>
  )
}
