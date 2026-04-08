import {
  IconClock,
  IconLeaf,
  IconPest,
  IconSparkle,
  IconSteam,
  IconTeam,
  IconZap,
} from './components/HomeIcons'
import {
  IconLocation,
  IconMail,
  IconPhone,
  IconWhatsApp,
} from './components/ContactIcons'
import Navbar from './components/Navbar'
import {
  COMPANY_EMAIL,
  COMPANY_PHONE_DIGITS,
  PHONE_TEL_HREF,
  WHATSAPP_HREF,
} from './constants/contact'
import { useLanguage } from './context/LanguageContext'
import './App.css'

const SERVICE_KEYS = ['steam', 'pest', 'deep', 'quick'] as const
const WHY_KEYS = ['team', 'eco', 'punctual'] as const

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

function App() {
  const { t } = useLanguage()
  const phoneDisplay = formatPhoneDisplay(COMPANY_PHONE_DIGITS)

  return (
    <>
      <Navbar />
      <main className="site-main">
        <section id="home" className="page-hero scroll-mt-20" aria-labelledby="hero-heading">
          <div className="page-hero__bg" aria-hidden />
          <div className="container page-hero__content">
            <p className="page-hero__kicker">{t('hero.kicker')}</p>
            <h1 id="hero-heading" className="page-hero__headline">
              {t('hero.headline')}
            </h1>
            <p className="page-hero__tagline">{t('hero.tagline')}</p>

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

            <div className="page-hero__cta">
              <a className="btn btn--primary" href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                {t('hero.ctaBook')}
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
                return (
                  <article key={key} className="service-card">
                    <div className="service-card__icon" aria-hidden>
                      <Icon className="h-9 w-9 text-[#38bdf8]" />
                    </div>
                    <h3 className="service-card__title">{t(`services.cards.${key}.title`)}</h3>
                    <p className="service-card__desc">{t(`services.cards.${key}.desc`)}</p>
                  </article>
                )
              })}
            </div>
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
                      <Icon className="h-8 w-8 text-[#34d399]" />
                    </div>
                    <h3 className="feature-card__title">{t(`whyUs.${key}.title`)}</h3>
                    <p className="feature-card__desc">{t(`whyUs.${key}.desc`)}</p>
                  </article>
                )
              })}
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
                  href={WHATSAPP_HREF}
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

        <footer className="site-footer">
          <div className="container site-footer__inner">
            <div>
              <p className="site-footer__brand">{t('nav.brandName')}</p>
              <p className="site-footer__muted">{t('nav.brandTagline')}</p>
            </div>
            <nav className="site-footer__nav" aria-label={t('footer.quickLinks')}>
              <a href="#home">{t('nav.home')}</a>
              <a href="#services">{t('nav.services')}</a>
              <a href="#about">{t('nav.about')}</a>
              <a href="#why-us">{t('nav.whyUs')}</a>
              <a href="#contact">{t('nav.contact')}</a>
            </nav>
            <p className="site-footer__copy">
              © {new Date().getFullYear()} {t('nav.brandName')}. {t('footer.rights')}
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
