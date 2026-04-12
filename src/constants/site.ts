/** Set in `.env` for canonical URLs in production, e.g. VITE_SITE_URL=https://example.com */
export function getSiteOrigin(): string {
  const fromEnv = import.meta.env.VITE_SITE_URL as string | undefined
  if (fromEnv && typeof fromEnv === 'string') {
    return fromEnv.replace(/\/$/, '')
  }
  if (typeof window !== 'undefined') {
    return window.location.origin
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
