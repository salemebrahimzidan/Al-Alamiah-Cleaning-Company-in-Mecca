import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import NavHashLink from './NavHashLink'
import { useLanguage } from '../context/LanguageContext'
import logoArabicAvif from '../assets/logo-alamiah.avif'
import logoArabicWebp from '../assets/logo-alamiah.webp'
import logoEnglishAvif from '../assets/logo-english.avif'
import logoEnglishWebp from '../assets/logo-english.webp'
import { WHATSAPP_HREF_AR, WHATSAPP_HREF_EN } from '../constants/contact'

const NAV_ITEMS = [
  { key: 'nav.home', to: '/#home' },
  { key: 'nav.about', to: '/#about' },
  { key: 'nav.services', to: '/#services' },
  { key: 'nav.whyUs', to: '/#why-us' },
  { key: 'faq.sectionTitle', to: '/#faq' },
  { key: 'nav.contact', to: '/#contact' },
] as const

const toolbarBtn =
  'inline-flex shrink-0 items-center justify-center rounded-xl border font-bold transition-[background,border-color,box-shadow,transform] duration-300 ease-out ' +
  'border-[#e5e7eb] bg-white text-(--text-strong) shadow-[0_1px_2px_rgba(0,0,0,0.04)] ' +
  'hover:border-[color-mix(in_oklab,var(--primary)_25%,#e5e7eb)] hover:bg-[#f9fafb] ' +
  'hover:shadow-[0_4px_14px_rgba(0,0,0,0.06)] ' +
  'active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ' +
  'focus-visible:outline-[color-mix(in_oklab,var(--primary)_45%,transparent)]'

const whatsappToolbarClass =
  `${toolbarBtn} !border-transparent !text-white !shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_22px_rgba(16,185,129,0.28)] ` +
  '!bg-[linear-gradient(135deg,#22c55e,#10b981)] ' +
  'hover:!border-transparent hover:!bg-[linear-gradient(135deg,#34d399,#10b981)] hover:!text-white hover:!shadow-[0_2px_4px_rgba(0,0,0,0.06),0_12px_28px_rgba(16,185,129,0.35)]'

const navLinkClass =
  'rounded-[10px] border border-transparent px-2.5 py-2 text-sm font-medium text-(--text) ' +
  'transition-[background,border-color,color] duration-300 ease-out ' +
  'hover:border-(--border) hover:bg-(--surface) hover:text-(--text-strong) lg:text-[15px]'

function Navbar() {
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
    <header className="topbar-frosted fixed inset-s-0 inset-e-0 top-0 z-50">
      <nav
        className="mx-auto flex w-full max-w-[1120px] flex-nowrap items-center gap-3 px-5 py-3.5 md:gap-4"
        aria-label={t('nav.ariaMain')}
      >
        <Link
          to="/"
          className="flex min-w-0 shrink-0 items-center gap-2.5 rounded-[10px] py-1 pe-2 ps-1 text-start no-underline transition-opacity hover:opacity-90 sm:gap-3 sm:py-1.5 sm:ps-1.5"
          aria-label={`${t('nav.brandName')} — ${t('nav.brandTagline')}`}
          onClick={closeMenu}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-[0_4px_14px_rgba(0,0,0,0.08)] ring-1 ring-[#f3f4f6] sm:h-14 sm:w-14 sm:p-1.5">
            <picture key={locale}>
              <source srcSet={brandLogoAvif} type="image/avif" />
              <img
                src={brandLogoWebp}
                alt={t('nav.logoAlt')}
                className="h-full w-full object-contain object-center"
                width={192}
                height={192}
                decoding="async"
                loading="eager"
                fetchPriority="low"
              />
            </picture>
          </span>
          <span className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span className="text-xs font-semibold text-(--muted) md:text-[13px]">
              {t('nav.brandTagline')}
            </span>
          </span>
        </Link>

        <ul className="hidden min-w-0 flex-1 flex-wrap items-center justify-center gap-1 md:flex">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <NavHashLink to={to} className={navLinkClass}>
                {label}
              </NavHashLink>
            </li>
          ))}
        </ul>

        <div className="ms-auto flex shrink-0 items-center gap-2 md:ms-0 md:gap-2.5">
          <button
            type="button"
            className={`${toolbarBtn} min-h-[42px] min-w-[72px] px-3 text-[13px] sm:min-w-[78px] sm:px-4 sm:text-[15px]`}
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
            className={`${whatsappToolbarClass} hidden min-h-[44px] px-4 text-sm transition-transform sm:inline-flex md:text-[15px]`}
          >
            {t('nav.whatsapp')}
          </a>

          <button
            type="button"
            className={`${toolbarBtn} h-10 w-10 p-2 md:hidden`}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="flex w-[22px] flex-col gap-1.5">
              <span
                className={`block h-0.5 rounded-sm bg-(--text-strong) transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span
                className={`block h-0.5 rounded-sm bg-(--text-strong) transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 rounded-sm bg-(--text-strong) transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        role="region"
        aria-label={t('nav.mobileNav')}
        aria-hidden={!menuOpen}
        className={`border-t border-(--border) bg-white/95 backdrop-blur-md md:hidden ${menuOpen ? 'max-h-128 opacity-100' : 'pointer-events-none max-h-0 overflow-hidden opacity-0'} transition-all duration-300 ease-out`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          <li>
            <button
              type="button"
              className={`${toolbarBtn} w-full justify-center py-3`}
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
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <NavHashLink
                to={to}
                className={`${navLinkClass} block w-full px-3 py-3 text-base`}
                onClick={closeMenu}
              >
                {label}
              </NavHashLink>
            </li>
          ))}
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
    </header>
  )
}

export default memo(Navbar)
