import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  IconClock,
  IconLeaf,
  IconPest,
  IconSparkle,
  IconSteam,
  IconTeam,
  IconZap,
} from '../components/HomeIcons'
import {
  IconLocation,
  IconMail,
  IconPhone,
  IconWhatsApp,
} from '../components/ContactIcons'
import SeoJsonLd from '../components/SeoJsonLd'
import {
  COMPANY_EMAIL,
  COMPANY_PHONE_DIGITS,
  PHONE_TEL_HREF,
  WHATSAPP_HREF_AR,
  WHATSAPP_HREF_EN,
} from '../constants/contact'
import { absoluteAppUrl } from '../constants/site'
import { useLanguage } from '../context/LanguageContext'
import ar from '../locales/ar.json'
import en from '../locales/en.json'
import '../App.css'

const SERVICE_KEYS = ['steam', 'pest', 'deep', 'quick'] as const
const WHY_KEYS = ['team', 'eco', 'punctual'] as const

const SERVICE_DETAIL_PATH: Record<(typeof SERVICE_KEYS)[number], string> = {
  steam: '/services/deep-cleaning-makkah',
  pest: '/#contact',
  deep: '/services/deep-cleaning-makkah',
  quick: '/services/home-cleaning-makkah',
}

const SERVICE_HUB = [
  { to: '/services/home-cleaning-makkah', key: 'servicePages.home' as const },
  { to: '/services/villa-cleaning-makkah', key: 'servicePages.villa' as const },
  { to: '/services/office-cleaning-makkah', key: 'servicePages.office' as const },
  { to: '/services/deep-cleaning-makkah', key: 'servicePages.deep' as const },
  { to: '/locations/al-aziziyah-makkah', key: 'servicePages.locAziziyah' as const },
  { to: '/locations/al-shawqiyah-makkah', key: 'servicePages.locShawqiyah' as const },
  { to: '/locations/near-al-haram-makkah', key: 'servicePages.locHaram' as const },
]

const messages = { ar, en }

function formatPhoneDisplay(digits: string) {
  if (digits.length === 12 && digits.startsWith('966')) {
    const r = digits.slice(3)
    return `+966 ${r.slice(0, 2)} ${r.slice(2, 5)} ${r.slice(5)}`
  }
  return `+${digits}`
}

const serviceIcons = {
  steam: IconSteam,
  pest: IconPest,
  deep: IconSparkle,
  quick: IconZap,
} as const

const whyIcons = {
  team: IconTeam,
  eco: IconLeaf,
  punctual: IconClock,
} as const

export default function HomePage() {
  const { t, locale } = useLanguage()
  const phoneDisplay = formatPhoneDisplay(COMPANY_PHONE_DIGITS)
  const wa = locale === 'ar' ? WHATSAPP_HREF_AR : WHATSAPP_HREF_EN
  const canonical = absoluteAppUrl()
  const ogImage = absoluteAppUrl('og-image.webp')
  const faqItems = messages[locale].faq.items

  return (
    <>
      <Helmet>
        <title>{t('pageTitle')}</title>
        <meta name="description" content={t('seo.metaDescription')} />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t('pageTitle')} />
        <meta property="og:description" content={t('seo.metaDescription')} />
        {canonical ? <meta property="og:url" content={canonical} /> : null}
        <meta property="og:locale" content={t('seo.ogLocale')} />
        {ogImage ? <meta property="og:image" content={ogImage} /> : null}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('pageTitle')} />
        <meta name="twitter:description" content={t('seo.metaDescription')} />
        {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}
      </Helmet>
      <SeoJsonLd />

      <main className="site-main">
        <section id="home" className="page-hero scroll-mt-20" aria-labelledby="hero-heading">
          <div className="page-hero__bg" aria-hidden />
          <div className="container page-hero__content">
            <p className="page-hero__kicker">{t('hero.kicker')}</p>
            <h1 id="hero-heading" className="page-hero__headline">
              {t('hero.headline')}
            </h1>
            <p className="page-hero__subbrand">{t('hero.subheadBrand')}</p>
            <p className="page-hero__tagline">{t('hero.tagline')}</p>

            <ul className="trust-strip" aria-label={t('trustStrip.a')}>
              <li>{t('trustStrip.a')}</li>
              <li>{t('trustStrip.b')}</li>
              <li>{t('trustStrip.c')}</li>
              <li>{t('trustStrip.d')}</li>
            </ul>

            <div className="page-hero__highlights">
              <div className="hero-pill hero-pill--steam">
                <span className="hero-pill__icon-wrap" aria-hidden>
                  <IconSteam className="hero-pill__svg" />
                </span>
                <span className="hero-pill__label">{t('hero.highlightSteam')}</span>
              </div>
              <div className="hero-pill hero-pill--pest">
                <span className="hero-pill__icon-wrap" aria-hidden>
                  <IconPest className="hero-pill__svg" />
                </span>
                <span className="hero-pill__label">{t('hero.highlightPest')}</span>
              </div>
              <div className="hero-pill hero-pill--fast">
                <span className="hero-pill__icon-wrap" aria-hidden>
                  <IconZap className="hero-pill__svg" />
                </span>
                <span className="hero-pill__label">{t('hero.highlightFast')}</span>
              </div>
            </div>

            <div className="page-hero__cta page-hero__cta--triple">
              <a className="btn btn--primary" href={wa} target="_blank" rel="noopener noreferrer">
                {t('hero.ctaBook')}
              </a>
              <a className="btn btn--call" href={PHONE_TEL_HREF}>
                {t('hero.ctaCall')}
              </a>
              <a className="btn btn--secondary" href="#contact">
                {t('hero.ctaContact')}
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section scroll-mt-20" aria-labelledby="about-heading">
          <div className="container">
            <h2 id="about-heading" className="section__title">
              {t('about.sectionTitle')}
            </h2>
            <div className="about-grid">
              <article className="info-card info-card--mission">
                <h3 className="info-card__title">{t('about.missionTitle')}</h3>
                <p className="info-card__body">{t('about.missionBody')}</p>
              </article>
              <article className="info-card info-card--vision">
                <h3 className="info-card__title">{t('about.visionTitle')}</h3>
                <p className="info-card__body">{t('about.visionBody')}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="services" className="section section--alt scroll-mt-20" aria-labelledby="services-heading">
          <div className="container">
            <h2 id="services-heading" className="section__title">
              {t('services.sectionTitle')}
            </h2>
            <p className="section__lead">{t('services.sectionLead')}</p>
            <div className="services-grid">
              {SERVICE_KEYS.map((key) => {
                const Icon = serviceIcons[key]
                const detail = SERVICE_DETAIL_PATH[key]
                const isHash = detail.startsWith('/#')
                const inner = (
                  <>
                    <div className="service-card__icon" aria-hidden>
                      <Icon className="h-9 w-9" />
                    </div>
                    <h3 className="service-card__title">{t(`services.cards.${key}.title`)}</h3>
                    <p className="service-card__desc">{t(`services.cards.${key}.desc`)}</p>
                    {isHash ? (
                      <a className="service-card__link" href={detail}>
                        {t('services.pestLink')}
                      </a>
                    ) : (
                      <Link className="service-card__link" to={detail}>
                        {t('services.cardLink')} →
                      </Link>
                    )}
                  </>
                )
                return (
                  <article key={key} className="service-card">
                    {inner}
                  </article>
                )
              })}
            </div>

            <h2 className="section__title section__title--sub">{t('servicePages.sectionTitle')}</h2>
            <p className="section__lead">{t('servicePages.sectionLead')}</p>
            <nav className="service-hub" aria-label={t('servicePages.sectionTitle')}>
              {SERVICE_HUB.map(({ to, key }) => (
                <Link key={to} className="service-hub__link" to={to}>
                  {t(key)}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <section id="why-us" className="section scroll-mt-20" aria-labelledby="why-heading">
          <div className="container">
            <h2 id="why-heading" className="section__title">
              {t('whyUs.sectionTitle')}
            </h2>
            <p className="section__lead">{t('whyUs.sectionLead')}</p>
            <div className="features-grid">
              {WHY_KEYS.map((key) => {
                const Icon = whyIcons[key]
                return (
                  <article key={key} className="feature-card">
                    <div className="feature-card__icon" aria-hidden>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="feature-card__title">{t(`whyUs.${key}.title`)}</h3>
                    <p className="feature-card__desc">{t(`whyUs.${key}.desc`)}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="faq" className="section section--alt scroll-mt-20" aria-labelledby="faq-heading">
          <div className="container">
            <h2 id="faq-heading" className="section__title">
              {t('faq.sectionTitle')}
            </h2>
            <p className="section__lead">{t('faq.sectionLead')}</p>
            <div className="faq-list">
              {faqItems.map((item, i) => (
                <details key={i} className="faq-item" name="faq">
                  <summary className="faq-item__q">{item.q}</summary>
                  <p className="faq-item__a">{item.a}</p>
                </details>
              ))}
            </div>
            <div className="faq-cta">
              <a className="btn btn--primary" href={wa} target="_blank" rel="noopener noreferrer">
                {t('hero.ctaBook')}
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section section--contact scroll-mt-20" aria-labelledby="contact-heading">
          <div className="container">
            <h2 id="contact-heading" className="section__title">
              {t('contact.sectionTitle')}
            </h2>
            <p className="section__lead">{t('contact.sectionLead')}</p>

            <div className="contact-layout">
              <div className="contact-cards">
                <a className="contact-card" href={PHONE_TEL_HREF}>
                  <span className="contact-card__row">
                    <span
                      className="contact-card__icon-wrap contact-card__icon-wrap--phone"
                      aria-hidden
                    >
                      <IconPhone className="contact-card__icon-svg" />
                    </span>
                    <span className="contact-card__body">
                      <span className="contact-card__label">{t('contact.phoneCard')}</span>
                      <span className="contact-card__value contact-card__value--ltr" dir="ltr">
                        {phoneDisplay}
                      </span>
                    </span>
                  </span>
                </a>
                <a className="contact-card" href={`mailto:${COMPANY_EMAIL}`}>
                  <span className="contact-card__row">
                    <span
                      className="contact-card__icon-wrap contact-card__icon-wrap--mail"
                      aria-hidden
                    >
                      <IconMail className="contact-card__icon-svg" />
                    </span>
                    <span className="contact-card__body">
                      <span className="contact-card__label">{t('contact.emailCard')}</span>
                      <span className="contact-card__value contact-card__value--ltr" dir="ltr">
                        {COMPANY_EMAIL}
                      </span>
                    </span>
                  </span>
                </a>
                <a
                  className="contact-card contact-card--accent"
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-card__row">
                    <span
                      className="contact-card__icon-wrap contact-card__icon-wrap--wa"
                      aria-hidden
                    >
                      <IconWhatsApp className="contact-card__icon-svg" />
                    </span>
                    <span className="contact-card__body">
                      <span className="contact-card__label">{t('contact.whatsappCard')}</span>
                      <span className="contact-card__value">{t('contact.whatsappCtaLine')}</span>
                    </span>
                  </span>
                </a>
                <div className="contact-card contact-card--static">
                  <span className="contact-card__row">
                    <span
                      className="contact-card__icon-wrap contact-card__icon-wrap--loc"
                      aria-hidden
                    >
                      <IconLocation className="contact-card__icon-svg" />
                    </span>
                    <span className="contact-card__body">
                      <span className="contact-card__label">{t('contact.addressTitle')}</span>
                      <span className="contact-card__value">{t('contact.addressBody')}</span>
                    </span>
                  </span>
                </div>
              </div>

              <div className="contact-aside">
                <div className="map-embed" aria-label={t('contact.mapTitle')}>
                  <iframe
                    title={t('contact.mapTitle')}
                    src="https://www.openstreetmap.org/export/embed.html?bbox=39.805%2C21.405%2C39.835%2C21.435&amp;layer=mapnik"
                    className="map-embed__frame"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
