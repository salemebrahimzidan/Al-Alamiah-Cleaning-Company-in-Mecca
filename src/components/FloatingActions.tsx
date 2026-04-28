import { MessageCircle, Phone } from "lucide-react";

import {
  PHONE_TEL_HREF,
  WHATSAPP_HREF_AR,
  WHATSAPP_HREF_EN,
} from "../constants/contact";
import { useLanguage } from "../context/useLanguage";

export default function FloatingActions() {
  const { t, locale } = useLanguage();
  const wa = locale === "ar" ? WHATSAPP_HREF_AR : WHATSAPP_HREF_EN;

  return (
    <div className="fixed bottom-5 inset-e-5 z-50 flex flex-col items-end gap-3">
      <a
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(37,211,102,0.45)] transition hover:bg-[#1ebe57] hover:shadow-[0_10px_32px_rgba(37,211,102,0.5)]"
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("contact.ariaBookWhatsapp")}
      >
        <MessageCircle className="size-5 shrink-0 text-white" aria-hidden />
        <span>{locale === "ar" ? "واتساب" : t("nav.whatsapp")}</span>
      </a>
      <a
        className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-4 py-3 ps-3 text-sm font-semibold text-white shadow-lg shadow-[#0f172a]/25 transition hover:bg-[#1e293b]"
        href={PHONE_TEL_HREF}
        aria-label={t("contact.ariaPhone")}
      >
        <Phone className="size-5 shrink-0 text-white" aria-hidden />
        {t("hero.ctaCall")}
      </a>
    </div>
  );
}
