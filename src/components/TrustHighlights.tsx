import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

import { HERO_ICON_HIGHLIGHTS, TRUST_STAT_ROWS } from "../constants/homeHero";
import { useLanguage } from "../context/useLanguage";
import { Card } from "./ui/card";

const cardEase = [0.22, 1, 0.36, 1] as const;

export default function TrustHighlights() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: cardEase, delay: 0.12 }}
      className="relative flex min-h-0 flex-col lg:min-h-112"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-linear-to-br from-white/80 via-sky-50/35 to-transparent" />

      <Card className="relative flex h-full flex-col gap-5 overflow-hidden rounded-[1.75rem] border border-gray-200/50 bg-white/70 p-5 shadow-[0_22px_70px_rgba(15,23,42,0.075)] backdrop-blur-xl md:p-6 lg:p-7 supports-backdrop-filter:bg-white/55">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white to-transparent opacity-95"
        />
        <div className="relative flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
          <ShieldCheck
            className="size-[18px] shrink-0 text-emerald-600"
            aria-hidden
            strokeWidth={2.25}
          />
          <h2
            id="hero-trust-heading"
            className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-[#0f172a] md:text-xs lg:text-start"
          >
            {t("hero.mosaicHeading")}
          </h2>
        </div>

        <ul
          className="relative m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 md:gap-4"
          aria-labelledby="hero-trust-heading"
        >
          {TRUST_STAT_ROWS.map(({ key, Icon, circle }, index) => (
            <motion.li
              key={key}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.38,
                ease: cardEase,
                delay: 0.06 * index,
              }}
            >
              <Card className="group flex h-full min-h-21 flex-col items-center justify-center gap-2.5 border-gray-100/90 bg-white/98 px-3 py-4 text-center shadow-[0_6px_22px_rgba(15,23,42,0.05)] ring-1 ring-gray-950/3 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-emerald-200/70 hover:shadow-[0_14px_38px_rgba(15,23,42,0.1)]">
                <span
                  className={`flex size-11 shrink-0 items-center justify-center rounded-full border ${circle}`}
                  aria-hidden
                >
                  <Icon className="size-[18px]" strokeWidth={2.25} />
                </span>
                <strong className="text-[13px] font-bold leading-snug text-[#0f172a] md:text-sm">
                  {t(`trustStats.${key}Label`)}
                </strong>
                <span className="text-[11px] font-medium leading-snug text-slate-500 md:text-xs">
                  {t(`trustStats.${key}Hint`)}
                </span>
              </Card>
            </motion.li>
          ))}
          {HERO_ICON_HIGHLIGHTS.map(({ key, msgKey, Icon, wrap }, hi, arr) => (
            <motion.li
              key={key}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.38,
                ease: cardEase,
                delay: 0.06 * (TRUST_STAT_ROWS.length + hi),
              }}
              className={
                hi === arr.length - 1
                  ? "col-span-2 flex justify-center sm:col-span-1 sm:col-start-2"
                  : undefined
              }
            >
              <Card className="group flex h-full min-h-21 w-full max-w-[min(100%,17rem)] flex-col items-center justify-center gap-2 border-gray-100/90 bg-white/98 px-3 py-4 text-center shadow-[0_6px_22px_rgba(15,23,42,0.05)] ring-1 ring-gray-950/3 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-emerald-200/70 hover:shadow-[0_14px_38px_rgba(15,23,42,0.1)] sm:max-w-none">
                <span
                  className={`flex size-11 shrink-0 items-center justify-center rounded-full border ${wrap}`}
                  aria-hidden
                >
                  <Icon className="size-[18px]" strokeWidth={2.25} />
                </span>
                <span className="text-[11px] font-semibold leading-snug text-[#0f172a] md:text-xs">
                  {t(msgKey)}
                </span>
              </Card>
            </motion.li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}
