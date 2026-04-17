import { memo } from 'react'
import { Link } from 'react-router-dom'
import {
  LOCATION_LINKS,
  MORE_SERVICE_LINKS,
  PRIMARY_SERVICE_LINKS,
  serviceLink,
} from '../constants/serviceRoutes'
import { useLanguage } from '../context/useLanguage'

const FOOTER_SERVICE_LINKS = [...PRIMARY_SERVICE_LINKS, ...MORE_SERVICE_LINKS]

function SiteFooter() {
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
            {FOOTER_SERVICE_LINKS.map(({ slug, titleKey }) => (
              <Link key={slug} to={serviceLink(slug)}>
                {t(titleKey)}
              </Link>
            ))}
          </nav>
          <p className="site-footer__muted site-footer__services-title">
            {t('footer.locationsTitle')}
          </p>
          <nav className="site-footer__column-links" aria-label={t('footer.locationsTitle')}>
            {LOCATION_LINKS.map(({ to, titleKey }) => (
              <Link key={to} to={to}>
                {t(titleKey)}
              </Link>
            ))}
          </nav>
        </div>
        <nav className="site-footer__nav" aria-label={t('footer.quickLinks')}>
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/services">{t('nav.services')}</Link>
          <Link to="/about">{t('nav.about')}</Link>
          <Link to="/why-us">{t('nav.whyUs')}</Link>
          <Link to="/faq">{t('faq.sectionTitle')}</Link>
          <Link to="/contact">{t('nav.contact')}</Link>
        </nav>
        <p className="site-footer__copy">
          © {new Date().getFullYear()} {t('nav.brandName')}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}

export default memo(SiteFooter)
