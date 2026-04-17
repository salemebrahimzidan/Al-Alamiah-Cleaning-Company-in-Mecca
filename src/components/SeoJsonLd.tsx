import { Helmet } from 'react-helmet-async'
import { useMemo } from 'react'
import { useLanguage } from '../context/useLanguage'
import ar from '../locales/ar.json'
import en from '../locales/en.json'
import { COMPANY_EMAIL, COMPANY_PHONE_DIGITS } from '../constants/contact'
import { absoluteAppUrl, getSiteOrigin } from '../constants/site'

const messages = { ar, en }

function buildGraph(
  homeUrl: string,
  locale: 'ar' | 'en',
  businessImageUrl: string,
  businessDescription: string,
  knowsAbout: string[],
) {
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
        description: businessDescription,
        url: homeUrl,
        telephone: phone,
        email: COMPANY_EMAIL,
        image: businessImageUrl || absoluteAppUrl('favicon.svg'),
        priceRange: '$$',
        inLanguage: locale,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 21.3891,
          longitude: 39.8579,
        },
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
          {
            '@type': 'AdministrativeArea',
            name: locale === 'ar' ? 'حي العزيزية، مكة' : 'Al Aziziyah, Makkah',
          },
          {
            '@type': 'AdministrativeArea',
            name: locale === 'ar' ? 'حي الشوقية، مكة' : 'Al Shawqiyah, Makkah',
          },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            opens: '08:00',
            closes: '22:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Friday', 'Saturday'],
            opens: '09:00',
            closes: '20:00',
          },
        ],
        knowsAbout,
        serviceType:
          locale === 'ar' ? 'تنظيف منازل ومكاتب وفلل' : 'Residential and commercial cleaning',
      },
      {
        '@type': 'WebSite',
        '@id': `${homeUrl}#website`,
        url: homeUrl,
        name: m.pageTitle,
        publisher: { '@id': `${homeUrl}#business` },
        inLanguage: ['ar', 'en'],
      },
    ],
  }
}

export default function SeoJsonLd() {
  const { locale } = useLanguage()

  const json = useMemo(() => {
    const origin = getSiteOrigin()
    if (!origin) return ''
    const homeUrl = absoluteAppUrl()
    const m = messages[locale]
    const businessImageUrl = absoluteAppUrl('og-image.webp')
    const knowsAbout = m.seo.knowsAbout as string[]
    return JSON.stringify(
      buildGraph(homeUrl, locale, businessImageUrl, m.seo.metaDescription, knowsAbout),
    )
  }, [locale])

  if (!json) return null

  return (
    <Helmet>
      <script type="application/ld+json">{json}</script>
    </Helmet>
  )
}
