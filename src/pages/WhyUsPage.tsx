import { Helmet } from 'react-helmet-async'
import { IconClock, IconLeaf, IconTeam } from '../components/HomeIcons'
import { useLanguage } from '../context/useLanguage'
import { absoluteAppUrl } from '../constants/site'
import '../App.css'

const WHY_KEYS = ['team', 'eco', 'punctual'] as const

const whyIcons = {
  team: IconTeam,
  eco: IconLeaf,
  punctual: IconClock,
} as const

export default function WhyUsPage() {
  const { t } = useLanguage()
  const canonical = absoluteAppUrl('why-us')
  const title = `${t('whyUs.sectionTitle')} — ${t('nav.brandName')}`

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={t('whyUs.sectionLead')} />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <main className="site-main">
        <section className="section scroll-mt-20" aria-labelledby="why-heading">
          <div className="container">
            <header className="section__intro">
              <h1 id="why-heading" className="section__title">
                {t('whyUs.sectionTitle')}
              </h1>
              <p className="section__lead">{t('whyUs.sectionLead')}</p>
            </header>
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
      </main>
    </>
  )
}
