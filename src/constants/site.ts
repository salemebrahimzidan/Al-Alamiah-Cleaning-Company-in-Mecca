export const PRODUCTION_SITE_ORIGIN =
  'https://alamiahcleaningmecca.com'
export function getSiteOrigin(): string {
  const fromEnv = import.meta.env.VITE_SITE_URL as string | undefined
  if (fromEnv && typeof fromEnv === 'string' && fromEnv.trim()) {
    return fromEnv.replace(/\/$/, '')
  }
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  if (import.meta.env.PROD) {
    return PRODUCTION_SITE_ORIGIN
  }
  return ''
}

/** Full URL to the app root (respects Vite `base`, e.g. GitHub Pages subpath). */
export function absoluteAppUrl(path = ''): string {
  const o = getSiteOrigin()
  if (!o) return ''
  const root = new URL(import.meta.env.BASE_URL, `${o}/`)
  const p = path.startsWith('/') ? path.slice(1) : path
  if (!p) return root.href
  return new URL(p, root).href
}
