import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import HomepageFaqJsonLd from "../components/HomepageFaqJsonLd";
import SeoJsonLd from "../components/SeoJsonLd";
import {
  HOMEPAGE_FEATURED_SERVICE_SLUGS,
  SERVICE_CARD_SUMMARIES,
} from "../constants/serviceSummaries";
import { serviceLink } from "../constants/serviceRoutes";
import { absoluteAppUrl, getSiteOrigin } from "../constants/site";
import ServiceStatsBar from "../components/ServiceStatsBar";
import FaqAccordion, { FaqSectionBadge } from "../components/FaqAccordion";
import TrustHighlights from "../components/TrustHighlights";
import { useLanguage } from "../context/useLanguage";
import "../App.css";

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

const HOMEPAGE_FAQ_AR = [
  {
    q: "كم تكلفة خدمات التنظيف في مكة؟",
    a: "السعر يعتمد على نوع الخدمة والمساحة وحالة المكان. أرسل تفاصيلك على واتساب لتحصل على عرض واضح وسريع.",
  },
  {
    q: "كيف أحجز موعد تنظيف؟",
    a: "الحجز سهل عبر واتساب أو الاتصال. نؤكد الموعد ونحدد التفاصيل قبل وصول الفريق.",
  },
  {
    q: "كم يستغرق التنظيف عادة؟",
    a: "المدة تختلف حسب حجم العمل، وغالبًا تتراوح من ساعتين إلى عدة ساعات. نخبرك بالوقت المتوقع قبل البدء.",
  },
  {
    q: "هل تغطون جميع أحياء مكة؟",
    a: "نعم، نخدم جميع أحياء مكة حسب توفر المواعيد، مع إمكانية الاستجابة السريعة داخل المدينة.",
  },
] as const;

export default function HomePage() {
  const { t, locale } = useLanguage();
  const canonical = getSiteOrigin();
  const ogImage = absoluteAppUrl("og-image.webp");

  const pageTitle =
    locale === "ar"
      ? "شركة تنظيف بمكة | تنظيف منازل وفلل وخزانات - العالمية"
      : t("pageTitle");
  const pageDescription =
    locale === "ar"
      ? "شركة تنظيف بمكة تقدم خدمات تنظيف منازل وفلل وشقق وخزانات ومجالس بأسعار مميزة. فريق محترف، سرعة في التنفيذ، وخدمة متاحة 24 ساعة داخل جميع أحياء مكة."
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
      {locale === "ar" ? <HomepageFaqJsonLd items={[...HOMEPAGE_FAQ_AR]} /> : null}

      <main className="site-main">
        <section
          id="home"
          className="relative scroll-mt-28 overflow-hidden bg-linear-to-b from-[#eef8ff] via-[#fafdff] to-[#f5f9fc] pb-16 pt-8 md:scroll-mt-32 md:pb-24 md:pt-10"
          aria-labelledby="hero-heading"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_60%_at_72%_-18%,rgb(186_230_253/0.5),transparent)]"
            aria-hidden
          />

          <div
            className="pointer-events-none absolute inset-y-10 right-0 hidden w-[48%] lg:block"
            aria-hidden
          >
            <div
              className="absolute inset-y-4 rounded-4xl bg-cover bg-center opacity-[0.16]"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=75)",
                filter: "blur(4px)",
              }}
            />
            <div className="absolute inset-0 rounded-4xl bg-linear-to-l from-white via-white/88 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto min-w-0 w-full max-w-[1360px] px-4 md:px-6 lg:px-10 xl:px-14">
            <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:gap-12 xl:gap-17">
              <HeroSection />
              <TrustHighlights />
            </div>

            <div className="mt-10 min-w-0 px-0 md:mt-14">
              <ServiceStatsBar />
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
                  <ul className="mt-3 list-disc space-y-1 ps-5 text-sm text-gray-700">
                    <li>تنظيف أرضيات، أسطح، ومناطق الاستخدام اليومي.</li>
                    <li>تنظيم العمل حسب الأولويات (مطبخ/حمامات/غرف).</li>
                    <li>التزام بالمواعيد وسرعة إنجاز بدون إزعاج.</li>
                  </ul>
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
                  <ul className="mt-3 list-disc space-y-1 ps-5 text-sm text-gray-700">
                    <li>تقسيم واضح للمهام بين الطوابق والغرف.</li>
                    <li>عناية بالمجالس والمداخل والواجهات الداخلية.</li>
                    <li>متابعة للتفاصيل لضمان نتيجة نظيفة ومتناسقة.</li>
                  </ul>
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
                  <ul className="mt-3 list-disc space-y-1 ps-5 text-sm text-gray-700">
                    <li>تنفيذ مناسب لنوع الخزان وحالته.</li>
                    <li>تنظيم الدخول والخروج لتقليل الإزعاج.</li>
                    <li>إمكانية تحديد موعد قريب حسب توفر الفريق.</li>
                  </ul>
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

        {locale === "ar" ? (
          <FaqAccordion
            headingLevel="h2"
            headingId="home-faq-heading"
            badge={
              <FaqSectionBadge>{t("faq.sectionTitle")}</FaqSectionBadge>
            }
            title="أسئلة شائعة عن خدمات التنظيف في مكة"
            lead="إجابات سريعة تساعدك قبل الحجز."
            items={HOMEPAGE_FAQ_AR}
          />
        ) : null}
      </main>
    </>
  );
}
