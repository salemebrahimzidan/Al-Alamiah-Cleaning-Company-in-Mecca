import { Helmet } from 'react-helmet-async'
import { Link, useLocation } from 'react-router-dom'
import { WHATSAPP_HREF_AR, WHATSAPP_HREF_EN } from '../constants/contact'
import { useLanguage } from '../context/useLanguage'

export default function NotFoundPage() {
  const { locale, t } = useLanguage()
  const wa = locale === 'ar' ? WHATSAPP_HREF_AR : WHATSAPP_HREF_EN
  const { pathname } = useLocation()

  const title = locale === 'ar' ? 'الصفحة غير موجودة' : 'Page not found'
  const message =
    locale === 'ar'
      ? 'عذرًا، لم نعثر على الصفحة المطلوبة. يمكنك الرجوع للصفحة الرئيسية أو التواصل معنا عبر واتساب.'
      : 'Sorry, we couldn’t find that page. You can go back home or contact us on WhatsApp.'

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="site-main">
        <section className="section">
          <div className="container">
            <div className="mx-auto max-w-2xl rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-600">
                404
              </p>
              <h1 className="mt-2 text-balance text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {title}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                {message}
              </p>
              <p className="mt-2 break-all text-xs font-semibold text-gray-500">
                {pathname}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link className="btn btn--primary" to="/">
                  {locale === 'ar' ? 'العودة للرئيسية' : 'Back to home'}
                </Link>
                <a
                  className="btn btn--secondary"
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('contact.ariaBookWhatsapp')}
                >
                  {locale === 'ar' ? 'تواصل عبر واتساب' : 'WhatsApp'}
                </a>
                <Link className="btn btn--secondary" to="/contact">
                  {locale === 'ar' ? 'صفحة التواصل' : 'Contact'}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

