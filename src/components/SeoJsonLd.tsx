import { Helmet } from 'react-helmet-async'
import { useMemo } from 'react'
import { useLanguage } from '../context/LanguageContext'
import ar from '../locales/ar.json'
import en from '../locales/en.json'
import { COMPANY_EMAIL, COMPANY_PHONE_DIGITS } from '../constants/contact'
import { absoluteAppUrl, getSiteOrigin } from '../constants/site'

const messages = { ar, en }

type FaqItem = { q: string; a: string }

function buildGraph(homeUrl: string, locale: 'ar' | 'en', faqItems: FaqItem[]) {
  const m = messages[locale]
  const phone = `+${COMPANY_PHONE_DIGITS}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${homeUrl}#business`,
        name: m.nav.brandName,
        alternateName: locale === 'ar' ? 'Al-Alamiya Cleaning' : 'شركة العالمية للتنظيف',
        url: homeUrl,
        telephone: phone,
        email: COMPANY_EMAIL,
        image: absoluteAppUrl('favicon.svg'),
        address: {
          '@type': 'PostalAddress',
          addressLocality: locale === 'ar' ? 'مكة المكرمة' : 'Mecca',
          addressRegion: locale === 'ar' ? 'منطقة مكة المكرمة' : 'Makkah Province',
          addressCountry: 'SA',
        },
        areaServed: [
          { '@type': 'City', name: locale === 'ar' ? 'مكة المكرمة' : 'Mecca' },
          {
            '@type': 'Place',
            name: locale === 'ar' ? 'محيط الحرم المكي' : 'Al Haram area, Mecca',
          },
        ],
        priceRange: '$$',
        inLanguage: locale,
      },
      {
        '@type': 'WebSite',
        '@id': `${homeUrl}#website`,
        url: homeUrl,
        name: m.pageTitle,
        publisher: { '@id': `${homeUrl}#business` },
        inLanguage: ['ar', 'en'],
      },
      {
        '@type': 'FAQPage',
        '@id': `${homeUrl}#faq`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  }
}

export default function SeoJsonLd() {
  const { locale } = useLanguage()
  const faqItems = messages[locale].faq.items as FaqItem[]

  const json = useMemo(() => {
    const origin = getSiteOrigin()
    if (!origin) return ''
    const homeUrl = absoluteAppUrl()
    return JSON.stringify(buildGraph(homeUrl, locale, faqItems))
  }, [locale, faqItems])

  if (!json) return null

  return (
    <Helmet>
      <script type="application/ld+json">{json}</script>
    </Helmet>
  )
}
