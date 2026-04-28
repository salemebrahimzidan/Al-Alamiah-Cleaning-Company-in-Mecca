import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

import { useLanguage } from "../context/useLanguage";
import { cn } from "../lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";

export type FaqEntry = { q: string; a: string };

/** Stable unique Radix Accordion item value per row (scoped section + index + content hash). */
function faqAccordionItemValue(
  headingId: string,
  index: number,
  entry: FaqEntry,
): string {
  const scope = headingId.replace(/[^a-zA-Z0-9_-]/g, "_");
  const payload = `${scope}|${index}|${entry.q}|${entry.a}`;
  let h = 5381;
  for (let i = 0; i < payload.length; i++) {
    h = Math.imul(h, 33) ^ payload.charCodeAt(i);
  }
  return `faq-${scope}-${index}-${(h >>> 0).toString(36)}`;
}

export type FaqAccordionProps = {
  items: readonly FaqEntry[];
  title: ReactNode;
  lead?: ReactNode;
  /** Optional pill above title (e.g. localized “FAQ”). */
  badge?: ReactNode;
  headingLevel?: "h1" | "h2";
  headingId: string;
  sectionClassName?: string;
};

export default function FaqAccordion({
  items,
  title,
  lead,
  badge,
  headingLevel = "h2",
  headingId,
  sectionClassName,
}: FaqAccordionProps) {
  const { dir } = useLanguage();
  const HeadingTag = headingLevel === "h1" ? "h1" : "h2";

  return (
    <section
      className={cn(
        "section section--alt scroll-mt-20 relative overflow-hidden border-b border-gray-100/70 bg-linear-to-b from-[#eef8ff]/45 via-[#fafdff] to-[#f9fafb]",
        sectionClassName,
      )}
      aria-labelledby={headingId}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-linear-to-b from-sky-100/55 to-transparent md:h-44"
        aria-hidden
      />

      <div className="container relative">
        <div className="mx-auto max-w-5xl">
          <header className="section__intro mx-auto mb-10 max-w-3xl md:mb-14">
            {badge ? (
              <div className="mb-5 flex justify-center">{badge}</div>
            ) : null}
            <HeadingTag id={headingId} className="section__title">
              {title}
            </HeadingTag>
            {lead ? (
              <p className="section__lead mx-auto max-w-2xl">{lead}</p>
            ) : null}
          </header>

          <Accordion
            dir={dir}
            type="single"
            collapsible
            className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:gap-6"
          >
            {items.map((item, i) => {
              const itemValue = faqAccordionItemValue(headingId, i, item);
              return (
                <AccordionItem
                  key={itemValue}
                  value={itemValue}
                  className="overflow-hidden rounded-2xl border border-gray-200/85 bg-white/90 shadow-[0_10px_38px_rgba(15,23,42,0.055)] backdrop-blur-md transition-[border-color,box-shadow,transform] duration-300 ease-out hover:border-gray-300/95 hover:shadow-[0_18px_52px_rgba(15,23,42,0.085)] hover:-translate-y-px supports-backdrop-filter:bg-white/78 data-[state=open]:border-emerald-200/85 data-[state=open]:shadow-[0_22px_56px_rgba(16,185,129,0.14)] supports-backdrop-filter:data-[state=open]:bg-white/92"
                >
                  <AccordionTrigger className="gap-3 rounded-2xl py-4.5 ps-5 pe-4 md:py-5 md:ps-6 md:pe-5 data-[state=open]:rounded-b-none data-[state=open]:pb-4">
                    <span className="min-w-0 flex-1 text-start text-[15px] font-semibold leading-snug text-[#0f172a] md:text-[0.97rem]">
                      {item.q}
                    </span>
                    <ChevronDown
                      className="size-5 shrink-0 text-emerald-600 transition-transform duration-300 ease-out group-data-[state=open]/trigger:rotate-180 motion-reduce:transition-none"
                      strokeWidth={2.25}
                      aria-hidden
                    />
                  </AccordionTrigger>
                  <AccordionContent className="rounded-b-2xl bg-transparent">
                    <p className="m-0 border-t border-gray-100/90 pt-4 text-[13px] font-medium leading-relaxed text-slate-600 md:text-[0.9375rem]">
                      {item.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/** Default homepage FAQ badge styling — uses existing copy via caller (`faq.sectionTitle`). */
export function FaqSectionBadge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "border-emerald-200/85 bg-white/95 px-4 py-1.5 text-[13px] font-bold tracking-normal shadow-[0_4px_18px_rgba(15,23,42,0.05)] backdrop-blur-sm normal-case text-emerald-950 supports-backdrop-filter:bg-white/85",
        className,
      )}
    >
      {children}
    </Badge>
  );
}
