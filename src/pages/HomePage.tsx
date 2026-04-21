import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { IconPest, IconSteam, IconZap } from "../components/HomeIcons";
import SeoJsonLd from "../components/SeoJsonLd";
import {
  HOMEPAGE_FEATURED_SERVICE_SLUGS,
  SERVICE_CARD_SUMMARIES,
} from "../constants/serviceSummaries";
import { serviceLink } from "../constants/serviceRoutes";
import { absoluteAppUrl, getSiteOrigin } from "../constants/site";
import { useLanguage } from "../context/useLanguage";
import "../App.css";

const TRUST_STAT_KEYS = ["a", "b", "c", "d"] as const;

const HERO_HIGHLIGHTS = [
  {
    key: "steam" as const,
    msgKey: "hero.highlightSteam" as const,
    Icon: IconSteam,
    iconWrap: "border-sky-200 bg-sky-50 text-sky-600",
  },
  {
    key: "pest" as const,
    msgKey: "hero.highlightPest" as const,
    Icon: IconPest,
    iconWrap: "border-emerald-200 bg-emerald-50 text-emerald-600",
  },
  {
    key: "fast" as const,
    msgKey: "hero.highlightFast" as const,
    Icon: IconZap,
    iconWrap: "border-amber-200 bg-amber-50 text-amber-600",
  },
] as const;

const HOMEPAGE_FEATURED_SERVICES = HOMEPAGE_FEATURED_SERVICE_SLUGS.map(
  (slug) => {
    const row = SERVICE_CARD_SUMMARIES.find((c) => c.slug === slug);
    if (!row) throw new Error(`Missing service summary for ${slug}`);
    return row;
  },
);

const SITE_PREVIEW_LINKS = [
  {
    to: "/about",
    titleKey: "about.sectionTitle" as const,
    blurbKey: "homePreview.aboutBlurb" as const,
  },
  {
    to: "/why-us",
    titleKey: "whyUs.sectionTitle" as const,
    blurbKey: "homePreview.whyBlurb" as const,
  },
  {
    to: "/faq",
    titleKey: "faq.sectionTitle" as const,
    blurbKey: "homePreview.faqBlurb" as const,
  },
  {
    to: "/contact",
    titleKey: "contact.sectionTitle" as const,
    blurbKey: "homePreview.contactBlurb" as const,
  },
] as const;

const HOMEPAGE_TRUST_FACTS = {
  ar: [
    "أكثر من 1000 عميل راضٍ",
    "خبرة أكثر من 5 سنوات",
    "خدمة سريعة خلال 24 ساعة",
  ],
  en: [
    "Over 1,000 satisfied clients",
    "More than 5 years experience",
    "Fast 24-hour response",
  ],
} as const;

const HOMEPAGE_TESTIMONIALS = {
  ar: [
    {
      name: "فاطمة",
      quote:
        "خدمة متميزة، الفريق محترف والنظافة كانت فوق المتوقع. أحسنت شركة العالمية للتنظيف.",
    },
    {
      name: "محمد",
      quote:
        "حجزت عبر واتساب وجاءوا في نفس اليوم بسرعة وبدون تأخير. أنصح بهم جداً.",
    },
    {
      name: "نورة",
      quote:
        "تنظيف الفلل كان دقيقاً، والأسعار واضحة. تجربة ممتازة من البداية إلى النهاية.",
    },
  ],
  en: [
    {
      name: "Fatima",
      quote: "Excellent service, professional team and spotless results.",
    },
    {
      name: "Mohammad",
      quote: "Booked via WhatsApp and they arrived quickly with no delay.",
    },
    {
      name: "Noura",
      quote: "The villa cleaning was thorough and pricing was transparent.",
    },
  ],
} as const;

export default function HomePage() {
  const { t, locale } = useLanguage();
  const canonical = getSiteOrigin();
  const ogImage = absoluteAppUrl("og-image.webp");

  const heroHeadline = locale === "ar" ? "شركة تنظيف بمكة" : t("hero.headline");
  const heroSubheadline =
    locale === "ar"
      ? "أفضل خدمات تنظيف المنازل والفلل والخزانات بأسعار مناسبة"
      : t("hero.tagline");
  const pageTitle =
    locale === "ar"
      ? "شركة تنظيف بمكة | تنظيف منازل وفلل وخزانات - العالمية"
      : t("pageTitle");
  const pageDescription =
    locale === "ar"
      ? "شركة تنظيف بمكة تقدم خدمات تنظيف منازل وفلل وشقق وخزانات ومجالس بأفضل الأسعار. فريق متخصص وسرعة في التنفيذ داخل مكة."
      : t("seo.metaDescription");
  const trustFacts = HOMEPAGE_TRUST_FACTS[locale];
  const testimonials = HOMEPAGE_TESTIMONIALS[locale];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        {canonical ? <meta property="og:url" content={canonical} /> : null}
        <meta property="og:locale" content={t("seo.ogLocale")} />
        {ogImage ? <meta property="og:image" content={ogImage} /> : null}
        {ogImage ? <meta property="og:image:width" content="1200" /> : null}
        {ogImage ? <meta property="og:image:height" content="630" /> : null}
        {ogImage ? (
          <meta property="og:image:type" content="image/webp" />
        ) : null}
        {ogImage ? (
          <meta property="og:image:alt" content={t("seo.ogImageAlt")} />
        ) : null}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        {canonical ? (
          <>
            <link rel="alternate" hrefLang="x-default" href={canonical} />
          </>
        ) : null}
      </Helmet>
      <SeoJsonLd />

      <main className="site-main">
        <section
          id="home"
          className="relative scroll-mt-20 overflow-hidden bg-linear-to-b from-sky-50/70 via-white to-gray-50/40"
          aria-labelledby="hero-heading"
        >
          <div
            className="pointer-events-none absolute -inset-s-24 -top-24 size-[min(26rem,88vw)] rounded-full bg-sky-200/35 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -inset-e-16 top-1/4 size-[min(20rem,65vw)] rounded-full bg-emerald-200/30 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[42%] bg-[radial-gradient(ellipse_80%_55%_at_50%_-18%,rgb(14_165_233/0.12),transparent)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-sky-200/50 to-transparent"
            aria-hidden
          />

          <div className="relative z-10 mx-auto w-full max-w-336 px-4 py-6 md:px-6 md:py-8 lg:px-10 lg:py-9 xl:px-16">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white/75 p-5 shadow-sm shadow-gray-200/40 ring-1 ring-gray-100/80 backdrop-blur-md md:p-6 lg:p-8">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2394a3b8' fill-opacity='0.09'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
                aria-hidden
              />

              <div className="relative grid items-start gap-6 sm:gap-7 lg:grid-cols-2 lg:gap-8 xl:gap-10">
                <div className="space-y-4 text-center lg:text-start">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-600">
                    {t("hero.kicker")}
                  </p>

                  <h1
                    id="hero-heading"
                    className="text-balance text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-[2.125rem] md:leading-tight lg:text-4xl xl:text-5xl"
                  >
                    {heroHeadline}
                  </h1>

                  <p className="text-base font-semibold text-slate-900 md:text-lg">
                    {heroSubheadline}
                  </p>

                  <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-600 md:text-base lg:mx-0">
                    {t("hero.tagline")}
                  </p>

                  <ul
                    className="flex flex-wrap justify-center gap-2 lg:justify-start"
                    aria-label={t("trustStrip.ariaListLabel")}
                  >
                    {TRUST_STAT_KEYS.map((k) => (
                      <li
                        key={k}
                        className="rounded-full border border-gray-200/90 bg-gray-50/90 px-3 py-1 text-xs font-semibold text-gray-800"
                      >
                        {t(`trustStrip.${k}`)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex min-h-0 flex-col rounded-2xl border border-gray-200/70 bg-gray-50/40 p-4 md:p-5">
                  <h2
                    id="hero-mosaic-heading"
                    className="mb-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-gray-500 lg:mb-4 lg:text-start"
                  >
                    {t("hero.mosaicHeading")}
                  </h2>
                  <ul
                    className="m-0 grid flex-1 list-none auto-rows-fr grid-cols-2 gap-4 p-0 lg:grid-cols-3"
                    aria-labelledby="hero-mosaic-heading"
                  >
                    {TRUST_STAT_KEYS.map((k) => (
                      <li
                        key={k}
                        className="flex min-h-24 flex-col items-center justify-center gap-1 rounded-xl border border-gray-200/90 bg-white p-3 text-center shadow-sm"
                      >
                        <strong className="text-sm font-bold leading-snug text-gray-900">
                          {t(`trustStats.${k}Label`)}
                        </strong>
                        <span className="text-xs font-medium leading-snug text-gray-500">
                          {t(`trustStats.${k}Hint`)}
                        </span>
                      </li>
                    ))}
                    {HERO_HIGHLIGHTS.map(({ key, msgKey, Icon, iconWrap }) => (
                      <li
                        key={key}
                        className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-xl border border-gray-200/90 bg-white p-3 text-center shadow-sm"
                      >
                        <span
                          className={`flex size-9 shrink-0 items-center justify-center rounded-full border md:size-10 ${iconWrap}`}
                          aria-hidden
                        >
                          <Icon className="size-4.5 md:size-5" />
                        </span>
                        <span className="text-xs font-semibold leading-snug text-gray-900 md:text-sm">
                          {t(msgKey)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {locale === "ar" ? (
          <section
            className="section scroll-mt-20"
            aria-labelledby="makkah-seo-heading"
          >
            <div className="container">
              <header className="section__intro">
                <h2 id="makkah-seo-heading" className="section__title">
                  شركة تنظيف بمكة لخدمات منزلية شاملة
                </h2>
                <p className="section__lead">
                  إذا كنت تبحث عن <strong>شركة تنظيف بمكة</strong> تقدم نتائج
                  واضحة وسريعة، فنحن نغطي احتياجات المنازل والشقق والفلل داخل مكة
                  المكرمة مع تنظيم للعمل وجودة متابعة.
                </p>
              </header>

              <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
                <article className="rounded-2xl bg-white p-5 shadow-sm">
                  <h2 className="text-lg font-extrabold text-gray-900">
                    تنظيف منازل بمكة
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    نقدم <strong>تنظيف منازل مكة</strong> للغرف والمطابخ والحمامات
                    وإزالة الغبار وترتيب التفاصيل الأساسية حسب الاتفاق—مناسب
                    للزيارات الدورية أو قبل المناسبات.
                  </p>
                </article>

                <article className="rounded-2xl bg-white p-5 shadow-sm">
                  <h2 className="text-lg font-extrabold text-gray-900">
                    تنظيف فلل بمكة
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    خدمة <strong>تنظيف فلل مكة</strong> تشمل تقسيم العمل على
                    الطوابق والمداخل والمجالس مع تركيز على الجودة في الأماكن
                    الأكثر استخداماً.
                  </p>
                </article>

                <article className="rounded-2xl bg-white p-5 shadow-sm">
                  <h2 className="text-lg font-extrabold text-gray-900">
                    تنظيف خزانات بمكة
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    نهتم بـ <strong>تنظيف خزانات بمكة</strong> بما يناسب نوع
                    الخزان وحالته، مع تنفيذ سريع وتنظيم يضمن تقليل الإزعاج داخل
                    المنزل.
                  </p>
                </article>
              </div>
            </div>
          </section>
        ) : null}

        <section
          className="section scroll-mt-20"
          aria-labelledby="trust-heading"
        >
          <div className="container">
            <header className="section__intro">
              <h2 id="trust-heading" className="section__title">
                {locale === "ar" ? "ثق بنا في مكة" : "Trusted by customers"}
              </h2>
            </header>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {trustFacts.map((fact) => (
                <div
                  key={fact}
                  className="rounded-xl bg-white p-5 text-center shadow-sm transition hover:shadow-md"
                >
                  <p className="text-lg font-semibold text-gray-900">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section section--alt scroll-mt-20"
          aria-labelledby="testimonials-heading"
        >
          <div className="container">
            <header className="section__intro">
              <h2 id="testimonials-heading" className="section__title">
                {locale === "ar" ? "آراء العملاء" : "Testimonials"}
              </h2>
              <p className="section__lead">
                {locale === "ar"
                  ? "تجارب قصيرة من عملائنا في مكة."
                  : "Short customer reviews from our clients."}
              </p>
            </header>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {testimonials.map(({ name, quote }) => (
                <article
                  key={name}
                  className="rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <p className="text-sm leading-relaxed text-gray-600">
                    {quote}
                  </p>
                  <p className="mt-4 font-semibold text-gray-900">{name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section section--alt scroll-mt-20"
          aria-labelledby="preview-services-heading"
        >
          <div className="container">
            <header className="section__intro">
              <h2 id="preview-services-heading" className="section__title">
                {t("homePreview.servicesTitle")}
              </h2>
              <p className="section__lead">{t("homePreview.servicesTeaser")}</p>
            </header>

            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {HOMEPAGE_FEATURED_SERVICES.map(
                ({ slug, titleKey, blurbKey }) => (
                  <article
                    key={slug}
                    className="flex flex-col rounded-2xl border border-gray-200/90 bg-white p-5 text-center shadow-sm"
                  >
                    <h3 className="text-base font-bold text-gray-900">
                      {t(titleKey)}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                      {t(blurbKey)}
                    </p>
                    <Link
                      className="mt-4 inline-flex justify-center text-sm font-bold text-sky-600 no-underline underline-offset-4 hover:underline"
                      to={serviceLink(slug)}
                    >
                      {t("common.viewService")} →
                    </Link>
                  </article>
                ),
              )}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link className="btn btn--primary" to="/services">
                {t("common.allServices")}
              </Link>
            </div>
          </div>
        </section>

        <section
          className="section section--alt scroll-mt-20"
          aria-labelledby="preview-site-heading"
        >
          <div className="container">
            <header className="section__intro">
              <h2 id="preview-site-heading" className="section__title">
                {t("homePreview.moreTitle")}
              </h2>
              <p className="section__lead">{t("homePreview.moreLead")}</p>
            </header>
            <div className="features-grid">
              {SITE_PREVIEW_LINKS.map(({ to, titleKey, blurbKey }) => (
                <article key={to} className="feature-card">
                  <h3 className="feature-card__title">{t(titleKey)}</h3>
                  <p className="feature-card__desc">{t(blurbKey)}</p>
                  <Link className="service-card__link" to={to}>
                    {to === "/contact"
                      ? t("homePreview.contactCta")
                      : `${t("common.learnMore")} →`}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
