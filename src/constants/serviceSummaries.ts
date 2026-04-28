import type { ServiceSeoSlug } from '../data/seoLandings'

/** Short blurbs for service cards (keys under `homePreview` in locales). */
export const SERVICE_CARD_SUMMARIES = [
  { slug: 'home-cleaning-makkah' as const, titleKey: 'servicePages.home' as const, blurbKey: 'homePreview.houseBlurb' as const },
  {
    slug: 'apartment-cleaning-makkah' as const,
    titleKey: 'servicePages.apartment' as const,
    blurbKey: 'homePreview.apartmentBlurb' as const,
  },
  { slug: 'villa-cleaning-makkah' as const, titleKey: 'servicePages.villa' as const, blurbKey: 'homePreview.villaBlurb' as const },
  { slug: 'office-cleaning-makkah' as const, titleKey: 'servicePages.office' as const, blurbKey: 'homePreview.officeBlurb' as const },
  { slug: 'deep-cleaning-makkah' as const, titleKey: 'servicePages.deep' as const, blurbKey: 'homePreview.deepBlurb' as const },
  { slug: 'ac-cleaning-makkah' as const, titleKey: 'servicePages.ac' as const, blurbKey: 'homePreview.acBlurb' as const },
  {
    slug: 'sofa-carpet-cleaning-makkah' as const,
    titleKey: 'servicePages.sofaCarpet' as const,
    blurbKey: 'homePreview.sofaBlurb' as const,
  },
  { slug: 'pest-control-makkah' as const, titleKey: 'servicePages.pest' as const, blurbKey: 'homePreview.pestBlurb' as const },
] as const

/** Featured on the homepage only (subset of `SERVICE_CARD_SUMMARIES`). */
export const HOMEPAGE_FEATURED_SERVICE_SLUGS: readonly ServiceSeoSlug[] = [
  'home-cleaning-makkah',
  'ac-cleaning-makkah',
  'villa-cleaning-makkah',
]
