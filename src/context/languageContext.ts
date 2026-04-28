import { createContext } from 'react'
import ar from '../locales/ar.json'
import en from '../locales/en.json'

export type Locale = 'ar' | 'en'

type Messages = typeof ar

export type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: (path: string) => string
  dir: 'rtl' | 'ltr'
}

export const STORAGE_KEY = 'cleaning-company-locale'

export const messages: Record<Locale, Messages> = { ar, en }

export function readStoredLocale(): Locale {
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

export function translate(locale: Locale, path: string): string {
  return getByPath(messages[locale], path)
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

