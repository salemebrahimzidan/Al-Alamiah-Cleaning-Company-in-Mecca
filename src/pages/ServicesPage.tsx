import type { ComponentType } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  IconClock,
  IconPest,
  IconSparkle,
  IconSteam,
  IconTeam,
  IconZap,
} from '../components/HomeIcons'
import { SERVICE_CARD_SUMMARIES } from '../constants/serviceSummaries'
import { LOCATION_LINKS, serviceLink } from '../constants/serviceRoutes'
import type { ServiceSeoSlug } from '../data/seoLandings'
import { absoluteAppUrl } from '../constants/site'
import { useLanguage } from '../context/useLanguage'
import '../App.css'

const SERVICE_ICONS: Record<ServiceSeoSlug, ComponentType<{ className?: string }>> = {
  'home-cleaning-makkah': IconZap,
  'apartment-cleaning-makkah': IconSparkle,
  'villa-cleaning-makkah': IconTeam,
  'office-cleaning-makkah': IconClock,
  'deep-cleaning-makkah': IconSparkle,
  'ac-cleaning-makkah': IconZap,
  'sofa-carpet-cleaning-makkah': IconSteam,
  'pest-control-makkah': IconPest,
}

export default function ServicesPage() {
  const { t } = useLanguage()
  const canonical = absoluteAppUrl('services')
  const title = `${t('services.sectionTitle')} — ${t('nav.brandName')}`

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={t('services.sectionLead')} />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <main className="site-main">
        <section className="section scroll-mt-20" aria-labelledby="services-hub-heading">
          <div className="container">
            <header className="section__intro">
              <h1 id="services-hub-heading" className="section__title">
                {t('services.sectionTitle')}
              </h1>
              <p className="section__lead">{t('services.sectionLead')}</p>
            </header>

            <header className="section__intro section__intro--sub">
              <h2 className="section__title section__title--sub">{t('services.gridTitle')}</h2>
              <p className="section__lead">{t('services.gridLead')}</p>
            </header>

            <div className="services-grid">
              {SERVICE_CARD_SUMMARIES.map(({ slug, titleKey, blurbKey }) => {
                const Icon = SERVICE_ICONS[slug as ServiceSeoSlug]
                return (
                  <article key={slug} className="service-card">
                    <div className="service-card__icon" aria-hidden>
                      <Icon className="h-9 w-9" />
                    </div>
                    <h3 className="service-card__title">{t(titleKey)}</h3>
                    <p className="service-card__desc">{t(blurbKey)}</p>
                    <Link className="service-card__link" to={serviceLink(slug)}>
                      {t('common.viewService')} →
                    </Link>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section section--alt scroll-mt-20" aria-labelledby="areas-heading">
          <div className="container">
            <header className="section__intro section__intro--sub">
              <h2 id="areas-heading" className="section__title section__title--sub">
                {t('footer.locationsTitle')}
              </h2>
              <p className="section__lead">{t('servicePages.sectionLead')}</p>
            </header>
            <nav className="service-hub" aria-label={t('footer.locationsTitle')}>
              {LOCATION_LINKS.map(({ to, titleKey }) => (
                <Link key={to} className="service-hub__link" to={to}>
                  {t(titleKey)}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <section
          id="makkah-local"
          className="section scroll-mt-20"
          aria-labelledby="local-makkah-heading"
        >
          <div className="container">
            <header className="section__intro">
              <h2 id="local-makkah-heading" className="section__title">
                {t('localMakkah.sectionTitle')}
              </h2>
              <p className="section__lead">{t('localMakkah.sectionLead')}</p>
            </header>
            <div className="local-seo-block">
              <p>{t('localMakkah.intro')}</p>

              <h3>{t('localMakkah.hHomes')}</h3>
              <p>{t('localMakkah.pHomes')}</p>
              <p>
                <Link className="local-seo-block__link" to={serviceLink('home-cleaning-makkah')}>
                  {t('localMakkah.linkHomes')} →
                </Link>
              </p>

              <h3>{t('localMakkah.hVillas')}</h3>
              <p>{t('localMakkah.pVillas')}</p>
              <p>
                <Link className="local-seo-block__link" to={serviceLink('villa-cleaning-makkah')}>
                  {t('localMakkah.linkVillas')} →
                </Link>
              </p>

              <h3>{t('localMakkah.hAc')}</h3>
              <p>{t('localMakkah.pAc')}</p>
              <p>
                <Link className="local-seo-block__link" to={serviceLink('ac-cleaning-makkah')}>
                  {t('localMakkah.linkAc')} →
                </Link>
              </p>

              <h3>{t('localMakkah.hUpholstery')}</h3>
              <p>{t('localMakkah.pUpholstery')}</p>
              <p>
                <Link className="local-seo-block__link" to={serviceLink('sofa-carpet-cleaning-makkah')}>
                  {t('localMakkah.linkUpholstery')} →
                </Link>
              </p>

              <p className="local-seo-block__cta">{t('localMakkah.ctaNote')}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
