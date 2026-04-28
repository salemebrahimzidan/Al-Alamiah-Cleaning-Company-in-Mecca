import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import {
  PHONE_TEL_HREF,
  WHATSAPP_HREF_AR,
  WHATSAPP_HREF_EN,
} from "../constants/contact";
import { TRUST_STAT_KEYS, TRUST_STRIP_ICONS } from "../constants/homeHero";
import { useLanguage } from "../context/useLanguage";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const fadeEase = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const { t, locale } = useLanguage();
  const wa = locale === "ar" ? WHATSAPP_HREF_AR : WHATSAPP_HREF_EN;
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <div className="relative flex flex-col gap-7 text-center lg:gap-8 lg:text-start">
      <motion.div {...fadeUp} transition={{ duration: 0.45, ease: fadeEase }}>
        <div className="mx-auto inline-flex max-w-full items-center gap-2.5 rounded-full border border-gray-200/90 bg-white/95 px-4 py-2.5 shadow-[0_4px_24px_rgba(15,23,42,0.06)] backdrop-blur-sm lg:mx-0">
          <span
            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100"
            aria-hidden
          >
            <MapPin className="size-4" strokeWidth={2.25} />
          </span>
          <span className="text-left text-[11px] font-bold uppercase leading-snug tracking-[0.14em] text-[#1a202c] sm:text-xs">
            {t("hero.kicker")}
          </span>
        </div>
      </motion.div>

      <motion.h1
        id="hero-heading"
        {...fadeUp}
        transition={{ duration: 0.48, ease: fadeEase, delay: 0.05 }}
        className="text-balance text-3xl font-extrabold tracking-[-0.02em] text-[#1a202c] sm:text-[2.125rem] sm:leading-[1.12] md:text-[2.5rem] md:leading-[1.1] lg:text-[2.65rem] xl:text-[2.95rem]"
      >
        {t("hero.headline")}
      </motion.h1>

      <motion.div
        {...fadeUp}
        transition={{ duration: 0.48, ease: fadeEase, delay: 0.1 }}
        className="flex flex-col gap-4"
      >
        <p className="mx-auto max-w-xl text-base font-semibold leading-relaxed text-slate-600 md:text-[1.0625rem] lg:mx-0">
          {t("hero.bodyLead")}
        </p>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-500 md:text-[0.9375rem] lg:mx-0">
          {t("hero.bodyDetail")}
        </p>
      </motion.div>

      <motion.ul
        {...fadeUp}
        transition={{ duration: 0.48, ease: fadeEase, delay: 0.14 }}
        className="flex flex-wrap justify-center gap-2 lg:justify-start"
        aria-label={t("trustStrip.ariaListLabel")}
      >
        {TRUST_STAT_KEYS.map((k, i) => {
          const StripIcon = TRUST_STRIP_ICONS[i];
          return (
            <motion.li
              key={k}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{
                duration: 0.35,
                ease: fadeEase,
                delay: 0.18 + i * 0.04,
              }}
            >
              <Badge
                variant="outline"
                className="inline-flex items-center gap-1.5 border-gray-200/95 bg-white/90 py-1.5 ps-2 pe-3 normal-case tracking-normal shadow-sm"
              >
                <StripIcon
                  className="size-3.5 shrink-0 text-emerald-600"
                  aria-hidden
                  strokeWidth={2.25}
                />
                <span className="text-[12px] font-semibold text-slate-700 sm:text-[13px]">
                  {t(`trustStrip.${k}`)}
                </span>
              </Badge>
            </motion.li>
          );
        })}
      </motion.ul>

      <motion.div
        {...fadeUp}
        transition={{ duration: 0.48, ease: fadeEase, delay: 0.2 }}
        className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
      >
        <Button variant="whatsapp" size="lg" className="gap-2" asChild>
          <a href={wa} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="size-5 shrink-0" aria-hidden />
            {t("hero.ctaChatWhatsapp")}
          </a>
        </Button>
        <Button variant="outline" size="lg" className="gap-2 bg-white/90" asChild>
          <a href={PHONE_TEL_HREF}>
            <Phone className="size-5 shrink-0 text-slate-700" aria-hidden strokeWidth={2.25} />
            {t("hero.ctaCall")}
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
