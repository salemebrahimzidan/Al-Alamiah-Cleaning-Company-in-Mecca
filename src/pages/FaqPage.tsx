import { Helmet } from "react-helmet-async";

import FaqJsonLd from "../components/FaqJsonLd";
import FaqAccordion from "../components/FaqAccordion";
import { absoluteAppUrl } from "../constants/site";
import { useLanguage } from "../context/useLanguage";
import "../App.css";
import ar from "../locales/ar.json";
import en from "../locales/en.json";

const messages = { ar, en };

export default function FaqPage() {
  const { t, locale } = useLanguage();
  const canonical = absoluteAppUrl("faq");
  const title = `${t("faq.sectionTitle")} — ${t("nav.brandName")}`;
  const faqItems = messages[locale].faq.items;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={t("faq.sectionLead")} />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <FaqJsonLd />
      <main className="site-main">
        <FaqAccordion
          headingLevel="h1"
          headingId="faq-heading"
          items={faqItems}
          title={t("faq.sectionTitle")}
          lead={t("faq.sectionLead")}
        />
      </main>
    </>
  );
}
