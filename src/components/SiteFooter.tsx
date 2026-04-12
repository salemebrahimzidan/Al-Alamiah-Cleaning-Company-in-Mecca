import { Link } from 'react-router-dom'
import NavHashLink from './NavHashLink'
import { useLanguage } from '../context/LanguageContext'

const SERVICE_PATHS = [
  { to: '/services/home-cleaning-makkah', key: 'servicePages.home' as const },
  { to: '/services/villa-cleaning-makkah', key: 'servicePages.villa' as const },
  { to: '/services/office-cleaning-makkah', key: 'servicePages.office' as const },
  { to: '/services/deep-cleaning-makkah', key: 'servicePages.deep' as const },
]

const LOCATION_PATHS = [
  { to: '/locations/al-aziziyah-makkah', key: 'servicePages.locAziziyah' as const },
  { to: '/locations/al-shawqiyah-makkah', key: 'servicePages.locShawqiyah' as const },
  { to: '/locations/near-al-haram-makkah', key: 'servicePages.locHaram' as const },
]

export default function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__brand">{t('nav.brandName')}</p>
          <p className="site-footer__muted">{t('nav.brandTagline')}</p>
          <p className="site-footer__muted site-footer__services-title">
            {t('footer.servicesTitle')}
          </p>
          <nav className="site-footer__column-links" aria-label={t('footer.servicesTitle')}>
            {SERVICE_PATHS.map(({ to, key }) => (
              <Link key={to} to={to}>
                {t(key)}
              </Link>
            ))}
          </nav>
          <p className="site-footer__muted site-footer__services-title">
            {t('footer.locationsTitle')}
          </p>
          <nav className="site-footer__column-links" aria-label={t('footer.locationsTitle')}>
            {LOCATION_PATHS.map(({ to, key }) => (
              <Link key={to} to={to}>
                {t(key)}
              </Link>
            ))}
          </nav>
        </div>
        <nav className="site-footer__nav" aria-label={t('footer.quickLinks')}>
          <Link to="/">{t('nav.home')}</Link>
          <NavHashLink to="/#services">{t('nav.services')}</NavHashLink>
          <NavHashLink to="/#about">{t('nav.about')}</NavHashLink>
          <NavHashLink to="/#why-us">{t('nav.whyUs')}</NavHashLink>
          <NavHashLink to="/#faq">{t('faq.sectionTitle')}</NavHashLink>
          <NavHashLink to="/#contact">{t('nav.contact')}</NavHashLink>
        </nav>
        <p className="site-footer__copy">
          © {new Date().getFullYear()} {t('nav.brandName')}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
