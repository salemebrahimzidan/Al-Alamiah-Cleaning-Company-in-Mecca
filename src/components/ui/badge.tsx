/* eslint-disable react-refresh/only-export-components -- CVA variants exported for reuse */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400/70",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#e0f2fe] text-sky-800 hover:bg-[#dbeafe]",
        outline:
          "border-gray-200/90 bg-[#f8fafc] text-slate-700 hover:bg-[#f1f5f9]",
        muted:
          "border-transparent bg-gray-100 text-slate-700 hover:bg-gray-200/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
