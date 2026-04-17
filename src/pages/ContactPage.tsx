import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import {
  IconLocation,
  IconMail,
  IconPhone,
  IconWhatsApp,
} from '../components/ContactIcons'
import {
  COMPANY_EMAIL,
  COMPANY_PHONE_DIGITS,
  formatPhoneDisplay,
  PHONE_TEL_HREF,
  WHATSAPP_HREF_AR,
  WHATSAPP_HREF_EN,
} from '../constants/contact'
import { absoluteAppUrl } from '../constants/site'
import { useLanguage } from '../context/useLanguage'
import '../App.css'

const OpenStreetMapEmbed = lazy(() => import('../components/OpenStreetMapEmbed'))

export default function ContactPage() {
  const { t, locale } = useLanguage()
  const phoneDisplay = formatPhoneDisplay(COMPANY_PHONE_DIGITS)
  const wa = locale === 'ar' ? WHATSAPP_HREF_AR : WHATSAPP_HREF_EN
  const canonical = absoluteAppUrl('contact')
  const title = `${t('contact.sectionTitle')} — ${t('nav.brandName')}`

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={t('contact.sectionLead')} />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <main className="site-main">
        <section className="section section--contact scroll-mt-20" aria-labelledby="contact-heading">
          <div className="container">
            <header className="section__intro">
              <h1 id="contact-heading" className="section__title">
                {t('contact.sectionTitle')}
              </h1>
              <p className="section__lead">{t('contact.sectionLead')}</p>
            </header>

            <div className="contact-layout">
              <div className="contact-cards">
                <a
                  className="contact-card"
                  href={PHONE_TEL_HREF}
                  aria-label={t('contact.ariaPhone')}
                >
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
                <a
                  className="contact-card"
                  href={`mailto:${COMPANY_EMAIL}`}
                  aria-label={t('contact.ariaEmail')}
                >
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
                  aria-label={t('contact.ariaWhatsapp')}
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
                <div className="map-embed" role="region" aria-label={t('contact.mapTitle')}>
                  <Suspense
                    fallback={
                      <div
                        className="map-embed__frame map-embed--pending"
                        role="status"
                        aria-live="polite"
                        aria-label={t('contact.mapLoading')}
                      />
                    }
                  >
                    <OpenStreetMapEmbed />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
