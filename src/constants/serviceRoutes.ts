import { type ServiceSeoSlug, publicPathForServiceSlug } from '../data/seoLandings'

/** Primary service pages (clean `/services/...` URLs). */
export const PRIMARY_SERVICE_LINKS = [
  { slug: 'home-cleaning-makkah' as const, titleKey: 'servicePages.home' as const },
  { slug: 'apartment-cleaning-makkah' as const, titleKey: 'servicePages.apartment' as const },
  { slug: 'villa-cleaning-makkah' as const, titleKey: 'servicePages.villa' as const },
  { slug: 'ac-cleaning-makkah' as const, titleKey: 'servicePages.ac' as const },
  { slug: 'sofa-carpet-cleaning-makkah' as const, titleKey: 'servicePages.sofaCarpet' as const },
  { slug: 'pest-control-makkah' as const, titleKey: 'servicePages.pest' as const },
] as const

export const MORE_SERVICE_LINKS = [
  { slug: 'office-cleaning-makkah' as const, titleKey: 'servicePages.office' as const },
  { slug: 'deep-cleaning-makkah' as const, titleKey: 'servicePages.deep' as const },
] as const

export const LOCATION_LINKS = [
  { to: '/locations/al-aziziyah-makkah', titleKey: 'servicePages.locAziziyah' as const },
  { to: '/locations/al-shawqiyah-makkah', titleKey: 'servicePages.locShawqiyah' as const },
  { to: '/locations/near-al-haram-makkah', titleKey: 'servicePages.locHaram' as const },
] as const

export function serviceLink(slug: ServiceSeoSlug): string {
  return publicPathForServiceSlug(slug)
}
