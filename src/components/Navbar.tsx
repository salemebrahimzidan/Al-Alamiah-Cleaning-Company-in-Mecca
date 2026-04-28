import {
  memo,
  startTransition,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import logoArabicAvif from '../assets/logo-alamiah.avif'
import logoArabicWebp from '../assets/logo-alamiah.webp'
import logoEnglishAvif from '../assets/logo-english.avif'
import logoEnglishWebp from '../assets/logo-english.webp'
import { WHATSAPP_HREF_AR, WHATSAPP_HREF_EN } from '../constants/contact'

const NAV_ITEMS = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.about', to: '/about' },
  { key: 'nav.services', to: '/services' },
  { key: 'nav.whyUs', to: '/why-us' },
  { key: 'faq.sectionTitle', to: '/faq' },
  { key: 'nav.contact', to: '/contact' },
] as const

const languageSwitcherBtn =
  'inline-flex shrink-0 items-center justify-center rounded-xl border border-[#e5e7eb] bg-white px-3 py-2 font-bold text-[#333333] shadow-none transition-[background,border-color,transform] duration-200 ease-out ' +
  'hover:border-[#d1d5db] hover:bg-[#fafafa] active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#90caf9]'

const whatsappToolbarClass =
  'inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-[#25D366] px-5 py-2.5 text-[15px] font-bold text-white shadow-[0_4px_18px_rgba(37,211,102,0.4)] transition-[background,box-shadow,transform] duration-200 ease-out ' +
  'hover:bg-[#1ebe57] hover:shadow-[0_6px_24px_rgba(37,211,102,0.5)] active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34d399]'

const menuToggleBtn =
  'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#e5e7eb] bg-white text-[#333333] shadow-none transition-[background,border-color] duration-200 hover:bg-[#fafafa]'

const navLinkClass =
  'relative px-4 py-2.5 text-[15px] font-medium leading-snug text-[#333333] transition-colors duration-200 ease-out ' +
  'rounded-xl hover:bg-[#f4f4f4] hover:text-[#333333] lg:text-[15px]'

const navLinkActiveClass =
  ' font-semibold text-[#1a202c] hover:bg-transparent after:pointer-events-none after:absolute after:inset-x-5 after:-bottom-px after:h-[3px] after:rounded-full after:bg-emerald-500'

function isNavItemActive(pathname: string, to: string): boolean {
  const path = pathname.replace(/\/$/, '') || '/'
  const target = to.replace(/\/$/, '') || '/'
  if (target === '/') return path === '/'
  if (target === '/services') return path === '/services' || path.startsWith('/services/')
  return path === target
}

function Navbar() {
  const { pathname } = useLocation()
  const { t, locale, toggleLocale } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const navLinks = useMemo(
    () => NAV_ITEMS.map((item) => ({ label: t(item.key), to: item.to })),
    [t],
  )

  const brandLogoAvif = locale === 'en' ? logoEnglishAvif : logoArabicAvif
  const brandLogoWebp = locale === 'en' ? logoEnglishWebp : logoArabicWebp
  const wa = locale === 'ar' ? WHATSAPP_HREF_AR : WHATSAPP_HREF_EN

  useEffect(() => {
    startTransition(() => {
      setMenuOpen(false)
    })
  }, [pathname])

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-[1480px] px-4 pt-4 md:px-8 lg:px-12">
        <div className="rounded-2xl border border-gray-200/75 bg-white/95 shadow-[0_14px_44px_rgba(15,23,42,0.09)] backdrop-blur-xl md:rounded-full md:shadow-[0_18px_52px_rgba(15,23,42,0.11)]">
          <nav
            className="flex w-full flex-nowrap items-center gap-3 px-4 py-3.5 md:gap-6 md:px-6 md:py-3 lg:gap-8 xl:gap-10"
            aria-label={t('nav.ariaMain')}
          >
            <Link
              to="/"
              className="flex min-w-0 shrink-0 items-center gap-2.5 rounded-[10px] py-1 pe-2 ps-1 text-start no-underline transition-opacity hover:opacity-95 sm:gap-3 sm:py-1.5 sm:ps-1.5"
              aria-label={`${t('nav.brandName')} — ${t('nav.brandTagline')}`}
              onClick={closeMenu}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-[0_2px_14px_rgba(0,0,0,0.07)] ring-1 ring-[#eef0f3] sm:h-[52px] sm:w-[52px] sm:p-1.5">
                <picture key={locale}>
                  <source srcSet={brandLogoAvif} type="image/avif" />
                  <img
                    src={brandLogoWebp}
                    alt={t('nav.logoAlt')}
                    className="h-full w-full object-contain object-center"
                    width={112}
                    height={112}
                    decoding="async"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
              </span>
              <span className="hidden min-w-0 flex-col justify-center leading-none sm:flex">
                <span className="text-[17px] font-medium tracking-tight text-[#333333]">
                  {t('nav.brandTagline')}
                </span>
              </span>
            </Link>

            <ul className="hidden min-w-0 flex-1 flex-wrap items-center justify-center gap-2 md:flex lg:gap-3 xl:gap-4">
              {navLinks.map(({ label, to }) => {
                const active = isNavItemActive(pathname, to)
                return (
                  <li key={to}>
                    <Link
                      to={to}
                      className={`${navLinkClass}${active ? navLinkActiveClass : ''}`}
                      aria-current={active ? 'page' : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="ms-auto flex shrink-0 items-center gap-2.5 md:ms-0 md:gap-3">
              <button
                type="button"
                className={`${languageSwitcherBtn} min-h-[42px] min-w-[72px] px-3 text-[13px] sm:min-w-[78px] sm:px-4 sm:text-[15px]`}
                onClick={toggleLocale}
                aria-label={
                  locale === 'ar'
                    ? t('language.switchAriaToEn')
                    : t('language.switchAriaToAr')
                }
              >
                <span className="leading-snug">
                  {locale === 'ar'
                    ? t('language.labelEnglish')
                    : t('language.labelArabic')}
                </span>
              </button>

              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className={`${whatsappToolbarClass} hidden min-h-[44px] sm:inline-flex`}
              >
                {t('nav.whatsapp')}
              </a>

              <button
                type="button"
                className={`${menuToggleBtn} md:hidden`}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
                onClick={() => setMenuOpen((o) => !o)}
              >
                {menuOpen ? (
                  <X className="size-[22px] text-[#333333]" aria-hidden strokeWidth={2.25} />
                ) : (
                  <Menu className="size-[22px] text-[#333333]" aria-hidden strokeWidth={2.25} />
                )}
              </button>
            </div>
          </nav>
        </div>

        <div
          id="mobile-nav"
          role="region"
          aria-label={t('nav.mobileNav')}
          aria-hidden={!menuOpen}
          className={`mt-3 overflow-hidden rounded-2xl border border-gray-200/85 bg-white shadow-[0_16px_44px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out md:hidden ${menuOpen ? 'max-h-112 opacity-100' : 'pointer-events-none max-h-0 opacity-0'}`}
        >
          <ul className="flex flex-col gap-1 px-4 py-4">
            <li>
              <button
                type="button"
                className={`${languageSwitcherBtn} w-full justify-center py-3`}
                onClick={() => {
                  toggleLocale()
                  closeMenu()
                }}
              >
                {locale === 'ar'
                  ? t('language.labelEnglish')
                  : t('language.labelArabic')}
              </button>
            </li>
            {navLinks.map(({ label, to }) => {
              const active = isNavItemActive(pathname, to)
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={`${navLinkClass} block w-full px-3 py-3 text-base${active ? `${navLinkActiveClass} after:inset-x-8` : ''}`}
                    aria-current={active ? 'page' : undefined}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
            <li className="pt-1">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className={`${whatsappToolbarClass} w-full justify-center py-3 text-base`}
                onClick={closeMenu}
              >
                {t('nav.whatsapp')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default memo(Navbar)
