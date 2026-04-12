import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import ar from '../locales/ar.json'
import en from '../locales/en.json'

export type Locale = 'ar' | 'en'

type Messages = typeof ar

const STORAGE_KEY = 'cleaning-company-locale'

const messages: Record<Locale, Messages> = { ar, en }

function readStoredLocale(): Locale {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'en' || v === 'ar') return v
  } catch {
    /* ignore */
  }
  return 'ar'
}

function getByPath(obj: unknown, path: string): string {
  const parts = path.split('.')
  let current: unknown = obj
  for (const p of parts) {
    if (current !== null && typeof current === 'object' && p in current) {
      current = (current as Record<string, unknown>)[p]
    } else {
      return path
    }
  }
  return typeof current === 'string' ? current : path
}

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: (path: string) => string
  dir: 'rtl' | 'ltr'
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

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

  const t = useCallback(
    (path: string) => getByPath(messages[locale], path),
    [locale],
  )

  useLayoutEffect(() => {
    const root = document.documentElement
    root.lang = locale
    root.dir = dir
  }, [locale, dir])

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale, t, dir }),
    [locale, setLocale, toggleLocale, t, dir],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}
