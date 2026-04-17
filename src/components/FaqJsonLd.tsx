import { Helmet } from 'react-helmet-async'
import { useMemo } from 'react'
import { useLanguage } from '../context/useLanguage'
import ar from '../locales/ar.json'
import en from '../locales/en.json'
import { absoluteAppUrl, getSiteOrigin } from '../constants/site'

const messages = { ar, en }

type FaqItem = { q: string; a: string }

export default function FaqJsonLd() {
  const { locale } = useLanguage()

  const json = useMemo(() => {
    const origin = getSiteOrigin()
    if (!origin) return ''
    const faqUrl = absoluteAppUrl('faq')
    const m = messages[locale]
    const faqItems = m.faq.items as FaqItem[]
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${faqUrl}#faq`,
      url: faqUrl,
      inLanguage: locale,
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    })
  }, [locale])

  if (!json) return null

  return (
    <Helmet>
      <script type="application/ld+json">{json}</script>
    </Helmet>
  )
}
