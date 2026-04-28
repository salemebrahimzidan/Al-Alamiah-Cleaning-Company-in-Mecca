import {
  type LucideIcon,
  AirVent,
  Briefcase,
  Bug,
  Building2,
  Home,
  Sparkles,
  SprayCan,
  Users,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { SERVICE_CARD_SUMMARIES } from "../constants/serviceSummaries";
import { LOCATION_LINKS, serviceLink } from "../constants/serviceRoutes";
import type { ServiceSeoSlug } from "../data/seoLandings";
import { absoluteAppUrl } from "../constants/site";
import { useLanguage } from "../context/useLanguage";
import "../App.css";

const SERVICE_ICONS: Record<ServiceSeoSlug, LucideIcon> = {
  "home-cleaning-makkah": Home,
  "apartment-cleaning-makkah": Building2,
  "villa-cleaning-makkah": Users,
  "office-cleaning-makkah": Briefcase,
  "deep-cleaning-makkah": Sparkles,
  "ac-cleaning-makkah": AirVent,
  "sofa-carpet-cleaning-makkah": SprayCan,
  "pest-control-makkah": Bug,
};

/** Premium SaaS-style accent circles (blue / green / orange rotation). */
const ICON_WRAP = [
  "bg-sky-50 text-sky-700 ring-sky-200/85 shadow-inner shadow-sky-100/60",
  "bg-emerald-50 text-emerald-700 ring-emerald-200/85 shadow-inner shadow-emerald-100/60",
  "bg-orange-50 text-orange-800 ring-orange-200/85 shadow-inner shadow-orange-100/60",
] as const;

export default function ServicesPage() {
  const { t } = useLanguage();
  const canonical = absoluteAppUrl("services");
  const title = `${t("services.sectionTitle")} — ${t("nav.brandName")}`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={t("services.sectionLead")} />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <main className="site-main">
        <section
          className="section scroll-mt-20"
          aria-labelledby="services-hub-heading"
        >
          <div className="container">
            <header className="section__intro">
              <h1 id="services-hub-heading" className="section__title">
                {t("services.sectionTitle")}
              </h1>
              <p className="section__lead">{t("services.sectionLead")}</p>
            </header>

            <header className="section__intro section__intro--sub">
              <h2 className="section__title section__title--sub">
                {t("services.gridTitle")}
              </h2>
              <p className="section__lead">{t("services.gridLead")}</p>
            </header>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {SERVICE_CARD_SUMMARIES.map(({ slug, titleKey, blurbKey }, index) => {
                const Icon = SERVICE_ICONS[slug as ServiceSeoSlug];
                const wrap = ICON_WRAP[index % ICON_WRAP.length];
                return (
                  <article
                    key={slug}
                    className="service-card bg-white p-4 rounded-xl shadow transition hover:shadow-md"
                  >
                    <div className="service-card__icon" aria-hidden>
                      <span
                        className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full ring-1 ${wrap}`}
                      >
                        <Icon className="size-[18px]" strokeWidth={2.25} aria-hidden />
                      </span>
                    </div>
                    <h3 className="service-card__title">{t(titleKey)}</h3>
                    <p className="service-card__desc">{t(blurbKey)}</p>
                    <Link className="service-card__link" to={serviceLink(slug)}>
                      {t("common.viewService")} →
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="section section--alt scroll-mt-20"
          aria-labelledby="areas-heading"
        >
          <div className="container">
            <header className="section__intro section__intro--sub">
              <h2
                id="areas-heading"
                className="section__title section__title--sub"
              >
                {t("footer.locationsTitle")}
              </h2>
              <p className="section__lead">{t("servicePages.sectionLead")}</p>
            </header>
            <nav
              className="service-hub"
              aria-label={t("footer.locationsTitle")}
            >
              {LOCATION_LINKS.map(({ to, titleKey }) => (
                <Link key={to} className="service-hub__link" to={to}>
                  {t(titleKey)}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <section
          id="makkah-local"
          className="section scroll-mt-20"
          aria-labelledby="local-makkah-heading"
        >
          <div className="container">
            <header className="section__intro">
              <h2 id="local-makkah-heading" className="section__title">
                {t("localMakkah.sectionTitle")}
              </h2>
              <p className="section__lead">{t("localMakkah.sectionLead")}</p>
            </header>
            <div className="local-seo-block">
              <p>{t("localMakkah.intro")}</p>

              <h3>{t("localMakkah.hHomes")}</h3>
              <p>{t("localMakkah.pHomes")}</p>
              <p>
                <Link
                  className="local-seo-block__link"
                  to={serviceLink("home-cleaning-makkah")}
                >
                  {t("localMakkah.linkHomes")} →
                </Link>
              </p>

              <h3>{t("localMakkah.hVillas")}</h3>
              <p>{t("localMakkah.pVillas")}</p>
              <p>
                <Link
                  className="local-seo-block__link"
                  to={serviceLink("villa-cleaning-makkah")}
                >
                  {t("localMakkah.linkVillas")} →
                </Link>
              </p>

              <h3>{t("localMakkah.hAc")}</h3>
              <p>{t("localMakkah.pAc")}</p>
              <p>
                <Link
                  className="local-seo-block__link"
                  to={serviceLink("ac-cleaning-makkah")}
                >
                  {t("localMakkah.linkAc")} →
                </Link>
              </p>

              <h3>{t("localMakkah.hUpholstery")}</h3>
              <p>{t("localMakkah.pUpholstery")}</p>
              <p>
                <Link
                  className="local-seo-block__link"
                  to={serviceLink("sofa-carpet-cleaning-makkah")}
                >
                  {t("localMakkah.linkUpholstery")} →
                </Link>
              </p>

              <p className="local-seo-block__cta">{t("localMakkah.ctaNote")}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
