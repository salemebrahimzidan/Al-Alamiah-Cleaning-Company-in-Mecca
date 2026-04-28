import type { LucideIcon } from 'lucide-react'
import { Clock, Leaf, Users } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { absoluteAppUrl } from '../constants/site'
import { useLanguage } from '../context/useLanguage'
import '../App.css'

const WHY_KEYS = ['team', 'eco', 'punctual'] as const

const whyIcons: Record<(typeof WHY_KEYS)[number], LucideIcon> = {
  team: Users,
  eco: Leaf,
  punctual: Clock,
}

const WHY_WRAP = {
  team: 'bg-sky-50 text-sky-700 ring-sky-200/85 shadow-inner shadow-sky-100/60',
  eco: 'bg-emerald-50 text-emerald-700 ring-emerald-200/85 shadow-inner shadow-emerald-100/60',
  punctual:
    'bg-orange-50 text-orange-800 ring-orange-200/85 shadow-inner shadow-orange-100/60',
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
                      <span
                        className={`inline-flex size-10 shrink-0 items-center justify-center rounded-full ring-1 ${WHY_WRAP[key]}`}
                      >
                        <Icon className="size-4" strokeWidth={2.25} aria-hidden />
                      </span>
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
