import { Helmet } from 'react-helmet-async'
import FaqJsonLd from '../components/FaqJsonLd'
import { useLanguage } from '../context/useLanguage'
import ar from '../locales/ar.json'
import en from '../locales/en.json'
import { absoluteAppUrl } from '../constants/site'
import '../App.css'

const messages = { ar, en }

export default function FaqPage() {
  const { t, locale } = useLanguage()
  const canonical = absoluteAppUrl('faq')
  const title = `${t('faq.sectionTitle')} — ${t('nav.brandName')}`
  const faqItems = messages[locale].faq.items

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={t('faq.sectionLead')} />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <FaqJsonLd />
      <main className="site-main">
        <section className="section section--alt scroll-mt-20" aria-labelledby="faq-heading">
          <div className="container">
            <header className="section__intro">
              <h1 id="faq-heading" className="section__title">
                {t('faq.sectionTitle')}
              </h1>
              <p className="section__lead">{t('faq.sectionLead')}</p>
            </header>
            <div className="faq-list">
              {faqItems.map((item, i) => (
                <details key={i} className="faq-item" name="faq">
                  <summary className="faq-item__q">{item.q}</summary>
                  <p className="faq-item__a">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
