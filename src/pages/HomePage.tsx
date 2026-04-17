import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { IconPest, IconSteam, IconZap } from "../components/HomeIcons";
import SeoJsonLd from "../components/SeoJsonLd";
import {
  PHONE_TEL_HREF,
  WHATSAPP_HREF_AR,
  WHATSAPP_HREF_EN,
} from "../constants/contact";
import {
  HOMEPAGE_FEATURED_SERVICE_SLUGS,
  SERVICE_CARD_SUMMARIES,
} from "../constants/serviceSummaries";
import { serviceLink } from "../constants/serviceRoutes";
import { absoluteAppUrl } from "../constants/site";
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

export default function HomePage() {
  const { t, locale } = useLanguage();
  const wa = locale === "ar" ? WHATSAPP_HREF_AR : WHATSAPP_HREF_EN;
  const canonical = absoluteAppUrl();
  const ogImage = absoluteAppUrl("og-image.webp");

  return (
    <>
      <Helmet>
        <title>{t("pageTitle")}</title>
        <meta name="description" content={t("seo.metaDescription")} />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t("pageTitle")} />
        <meta property="og:description" content={t("seo.metaDescription")} />
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
        <meta name="twitter:title" content={t("pageTitle")} />
        <meta name="twitter:description" content={t("seo.metaDescription")} />
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
                    {t("hero.headline")}
                  </h1>

                  <p className="text-base font-bold text-sky-600 md:text-lg">
                    {t("hero.subheadBrand")}
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

                  <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 lg:justify-start">
                    <a
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 px-5 text-sm font-bold text-white shadow-md shadow-emerald-500/20 transition hover:shadow-lg hover:shadow-emerald-500/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 sm:min-h-11 sm:w-auto sm:px-6 sm:text-sm md:text-base"
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("contact.ariaBookWhatsapp")}
                    >
                      {t("hero.ctaBook")}
                    </a>
                    <a
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-sky-200 bg-white px-5 text-sm font-bold text-sky-700 shadow-sm transition hover:border-sky-300 hover:bg-sky-50/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 sm:min-h-11 sm:w-auto sm:px-6 sm:text-sm md:text-base"
                      href={PHONE_TEL_HREF}
                      aria-label={t("contact.ariaPhone")}
                    >
                      {t("hero.ctaCall")}
                    </a>
                    <Link
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-gray-300 bg-transparent px-5 text-sm font-bold text-gray-800 transition hover:bg-gray-50/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 sm:min-h-11 sm:w-auto sm:px-6 sm:text-sm md:text-base"
                      to="/contact"
                    >
                      {t("hero.ctaContact")}
                    </Link>
                  </div>
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
