import { useCallback, useLayoutEffect, useMemo, useState, type ReactNode } from 'react'
import { LanguageContext, type Locale, readStoredLocale, translate, STORAGE_KEY } from './languageContext'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() =>
    typeof window !== 'undefined' ? readStoredLocale() : 'ar',
  )

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'ar' ? 'en' : 'ar')
  }, [locale, setLocale])

  const dir: 'rtl' | 'ltr' = locale === 'ar' ? 'rtl' : 'ltr'

  const t = useCallback((path: string) => translate(locale, path), [locale])

  useLayoutEffect(() => {
    const root = document.documentElement
    root.lang = locale
    root.dir = dir
  }, [locale, dir])

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale, t, dir }),
    [locale, setLocale, toggleLocale, t, dir],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

