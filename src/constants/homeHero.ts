import {
  Bug,
  Building2,
  Clock,
  HeartHandshake,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/** Keys used with `trustStats.${key}Label` / `trustStats.${key}Hint` */
export const TRUST_STAT_KEYS = ["a", "b", "c", "d"] as const;

export type TrustStatKey = (typeof TRUST_STAT_KEYS)[number];

/** Icons for hero trust-strip pills (same order as TRUST_STAT_KEYS). */
export const TRUST_STRIP_ICONS = [
  MapPin,
  ShieldCheck,
  Clock,
  HeartHandshake,
] as const;

/** Lucide-backed circles for the four stat tiles (library icons only — no custom SVG). */
export const TRUST_STAT_ROWS = [
  {
    key: "a" as const,
    Icon: Building2,
    circle:
      "border-sky-200/90 bg-linear-to-br from-sky-50 to-sky-100/80 text-sky-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]",
  },
  {
    key: "b" as const,
    Icon: MessageCircle,
    circle:
      "border-emerald-200/90 bg-linear-to-br from-emerald-50 to-emerald-100/70 text-emerald-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]",
  },
  {
    key: "c" as const,
    Icon: MapPin,
    circle:
      "border-indigo-200/90 bg-linear-to-br from-indigo-50 to-indigo-100/70 text-indigo-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]",
  },
  {
    key: "d" as const,
    Icon: ShieldCheck,
    circle:
      "border-amber-200/90 bg-linear-to-br from-amber-50 to-amber-100/70 text-amber-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]",
  },
] as const;

export const HERO_ICON_HIGHLIGHTS = [
  {
    key: "steam",
    msgKey: "hero.highlightSteam" as const,
    Icon: Sparkles,
    wrap: "border-sky-200 bg-linear-to-br from-sky-50 to-sky-100/90 text-sky-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]",
  },
  {
    key: "pest",
    msgKey: "hero.highlightPest" as const,
    Icon: Bug,
    wrap: "border-emerald-200 bg-linear-to-br from-emerald-50 to-emerald-100/90 text-emerald-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]",
  },
  {
    key: "fast",
    msgKey: "hero.highlightFast" as const,
    Icon: Clock,
    wrap: "border-amber-200 bg-linear-to-br from-amber-50 to-amber-100/90 text-amber-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]",
  },
] as const;
