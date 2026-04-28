import { motion, useReducedMotion } from "framer-motion";
import {
  Bug,
  Building2,
  Home,
  Sparkles,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Card } from "./ui/card";
import { useLanguage } from "../context/useLanguage";

type StatRow = {
  icon: LucideIcon;
  labelKey: string;
  valueKey?: string;
};

export default function ServiceStatsBar() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const items: StatRow[] = [
    { icon: Home, labelKey: "serviceStats.homes" },
    { icon: Building2, labelKey: "serviceStats.offices" },
    { icon: Sparkles, labelKey: "serviceStats.deepCleaning" },
    { icon: Bug, labelKey: "serviceStats.pestControl" },
    {
      icon: Star,
      labelKey: "serviceStats.ratingLabel",
      valueKey: "serviceStats.ratingValue",
    },
    {
      icon: Users,
      labelKey: "serviceStats.happyCustomers",
      valueKey: "serviceStats.happyCustomersValue",
    },
  ];

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-20 mx-auto mt-10 w-full min-w-0 max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8 md:mt-12 lg:mt-14"
    >
      <Card className="overflow-hidden border-gray-100/85 bg-white/92 shadow-[0_20px_56px_rgba(15,23,42,0.075)] ring-1 ring-gray-950/3 backdrop-blur-md supports-backdrop-filter:bg-white/78">
        <div
          className="grid grid-cols-2 gap-x-3 gap-y-5 px-4 py-6 text-center sm:gap-x-4 md:grid-cols-3 md:gap-x-5 md:gap-y-6 md:px-6 md:py-7 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6 xl:grid-cols-6 xl:gap-x-4 xl:gap-y-5 xl:text-start"
          role="list"
        >
          {items.map(({ icon: Icon, labelKey, valueKey }) => (
            <div
              key={labelKey}
              role="listitem"
              className="flex min-w-0 flex-col items-center justify-center gap-1.5 xl:flex-row xl:items-start xl:justify-start xl:gap-3"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-slate-50 to-slate-100 text-[#0f172a] shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] ring-1 ring-gray-200/85 md:size-12">
                <Icon
                  className="size-5 shrink-0 md:size-[1.35rem]"
                  aria-hidden
                  strokeWidth={2.1}
                />
              </span>
              <div className="min-w-0 max-w-full xl:text-start">
                <p className="text-[13px] font-semibold leading-snug text-[#0f172a] md:text-sm">
                  {t(labelKey)}
                </p>
                {valueKey ? (
                  <p className="text-xs font-semibold text-[#059669] md:text-[13px]">
                    {t(valueKey)}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
