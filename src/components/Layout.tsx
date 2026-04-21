import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";
import GoogleAnalytics from "./GoogleAnalytics";
import {
  PHONE_TEL_HREF,
  WHATSAPP_HREF_AR,
  WHATSAPP_HREF_EN,
} from "../constants/contact";
import { useLanguage } from "../context/useLanguage";

export default function Layout() {
  const { t, locale } = useLanguage();
  const wa = locale === "ar" ? WHATSAPP_HREF_AR : WHATSAPP_HREF_EN;
  const location = useLocation();

  /** Scroll to top on route change for predictable multi-page navigation. */
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <GoogleAnalytics />
      <Navbar />
      <Outlet />
      <SiteFooter />
      <div className="fixed bottom-5 inset-e-5 z-50 flex flex-col items-end gap-3">
        <a
          className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-900/20 transition hover:bg-[#1ebb55]"
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("contact.ariaBookWhatsapp")}
        >
          واتساب
        </a>
        <a
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
          href={PHONE_TEL_HREF}
          aria-label={t("contact.ariaPhone")}
        >
          {t("hero.ctaCall")}
        </a>
      </div>
    </>
  );
}
