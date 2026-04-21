import { Helmet } from 'react-helmet-async'
import { useMemo } from 'react'
import { absoluteAppUrl, getSiteOrigin } from '../constants/site'
import { useLanguage } from '../context/useLanguage'

export type HomepageFaqItem = { q: string; a: string }

export default function HomepageFaqJsonLd({ items }: { items: HomepageFaqItem[] }) {
  const { locale } = useLanguage()

  const json = useMemo(() => {
    const origin = getSiteOrigin()
    if (!origin) return ''
    const homeUrl = absoluteAppUrl()
    if (!homeUrl) return ''
    if (!items.length) return ''

    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${homeUrl}#faq`,
      url: homeUrl,
      inLanguage: locale,
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    })
  }, [items, locale])

  if (!json) return null

  return (
    <Helmet>
      <script type="application/ld+json">{json}</script>
    </Helmet>
  )
}

