import { Helmet } from 'react-helmet-async'
import { Link, Navigate, useParams } from 'react-router-dom'
import NavHashLink from '../components/NavHashLink'
import {
  SEO_LOCATION_SLUGS,
  SEO_SERVICE_SLUGS,
  type SeoSlug,
  getSeoPage,
} from '../data/seoLandings'
import { WHATSAPP_HREF_AR, WHATSAPP_HREF_EN } from '../constants/contact'
import { absoluteAppUrl } from '../constants/site'
import { useLanguage } from '../context/LanguageContext'
import '../App.css'

type Area = 'services' | 'locations'

const VALID: Record<Area, readonly SeoSlug[]> = {
  services: SEO_SERVICE_SLUGS,
  locations: SEO_LOCATION_SLUGS,
}

export default function SeoLandingPage({ area }: { area: Area }) {
  const { slug } = useParams()
  const { locale, t } = useLanguage()
  const wa = locale === 'ar' ? WHATSAPP_HREF_AR : WHATSAPP_HREF_EN

  const isValid = slug && VALID[area].includes(slug as SeoSlug)
  if (!isValid) {
    return <Navigate to="/" replace />
  }

  const page = getSeoPage(slug, locale)!
  const canonical = absoluteAppUrl(page.path.replace(/^\//, ''))

  return (
    <>
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        {canonical ? <meta property="og:url" content={canonical} /> : null}
        <meta property="og:locale" content={t('seo.ogLocale')} />
      </Helmet>

      <main className="site-main seo-page">
        <article className="container seo-page__article">
          <nav className="seo-page__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{t('nav.home')}</Link>
            <span className="seo-page__bc-sep" aria-hidden>
              /
            </span>
            <span>{page.h1}</span>
          </nav>

          <h1 className="seo-page__h1">{page.h1}</h1>
          <p className="seo-page__lead">{page.description}</p>

          <div className="seo-page__body">
            {page.blocks.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={i} className="seo-page__h2">
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'h3') {
                return (
                  <h3 key={i} className="seo-page__h3">
                    {block.text}
                  </h3>
                )
              }
              return (
                <p key={i} className="seo-page__p">
                  {block.text}
                </p>
              )
            })}
          </div>

          <div className="seo-page__cta">
            <a className="btn btn--primary" href={wa} target="_blank" rel="noopener noreferrer">
              {t('hero.ctaBook')}
            </a>
            <NavHashLink className="btn btn--secondary" to="/#contact">
              {t('hero.ctaContact')}
            </NavHashLink>
          </div>

          <section className="seo-page__related" aria-labelledby="related-heading">
            <h2 id="related-heading" className="seo-page__h2">
              {t('servicePages.sectionTitle')}
            </h2>
            <ul className="seo-page__related-list">
              {page.relatedSlugs.map((rs) => {
                const p = getSeoPage(rs, locale)!
                return (
                  <li key={rs}>
                    <Link to={p.path}>{p.h1}</Link>
                  </li>
                )
              })}
            </ul>
          </section>
        </article>
      </main>
    </>
  )
}
