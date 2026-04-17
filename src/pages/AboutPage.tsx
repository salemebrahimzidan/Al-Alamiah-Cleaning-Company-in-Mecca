import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../context/useLanguage'
import { absoluteAppUrl } from '../constants/site'
import '../App.css'

export default function AboutPage() {
  const { t } = useLanguage()
  const canonical = absoluteAppUrl('about')
  const title = `${t('about.sectionTitle')} — ${t('nav.brandName')}`

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={t('about.missionBody')} />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <main className="site-main">
        <section className="section scroll-mt-20" aria-labelledby="about-heading">
          <div className="container">
            <header className="section__intro">
              <h1 id="about-heading" className="section__title">
                {t('about.sectionTitle')}
              </h1>
            </header>
            <div className="about-grid">
              <article className="info-card info-card--mission">
                <h2 className="info-card__title">{t('about.missionTitle')}</h2>
                <p className="info-card__body">{t('about.missionBody')}</p>
              </article>
              <article className="info-card info-card--vision">
                <h2 className="info-card__title">{t('about.visionTitle')}</h2>
                <p className="info-card__body">{t('about.visionBody')}</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
