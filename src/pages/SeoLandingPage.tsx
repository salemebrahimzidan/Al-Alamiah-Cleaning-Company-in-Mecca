import { Helmet } from 'react-helmet-async'
import { useMemo } from 'react'
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

  const isValid = Boolean(slug && VALID[area].includes(slug as SeoSlug))
  const page = isValid ? getSeoPage(slug, locale) : null
  const canonical = page ? absoluteAppUrl(page.path.replace(/^\//, '')) : ''
  const ogImage = absoluteAppUrl('og-image.webp')
  const homeUrl = absoluteAppUrl()

  const breadcrumbJson = useMemo(() => {
    if (!page || !canonical || !homeUrl) return ''
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: t('nav.home'),
          item: homeUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: page.h1,
          item: canonical,
        },
      ],
    })
  }, [page, canonical, homeUrl, t])

  if (!isValid || !page) {
    return <Navigate to="/" replace />
  }

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
        {ogImage ? <meta property="og:image" content={ogImage} /> : null}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={page.title} />
        <meta name="twitter:description" content={page.description} />
        {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        {canonical ? (
          <>
            <link rel="alternate" hrefLang="ar-SA" href={canonical} />
            <link rel="alternate" hrefLang="en-SA" href={canonical} />
            <link rel="alternate" hrefLang="x-default" href={canonical} />
          </>
        ) : null}
        {breadcrumbJson ? (
          <script type="application/ld+json">{breadcrumbJson}</script>
        ) : null}
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
            <a
              className="btn btn--primary"
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('contact.ariaBookWhatsapp')}
            >
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
