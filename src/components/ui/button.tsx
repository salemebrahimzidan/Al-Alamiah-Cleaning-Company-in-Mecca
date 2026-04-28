/* eslint-disable react-refresh/only-export-components -- CVA variants exported for reuse */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold tracking-tight transition-[colors,transform,box-shadow] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-emerald-500 text-white shadow-md shadow-emerald-500/25 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 active:translate-y-px focus-visible:outline-emerald-500/60",
        whatsapp:
          "bg-[#25D366] text-white shadow-[0_8px_26px_rgba(37,211,102,0.42)] hover:bg-[#1ebe57] hover:shadow-[0_12px_32px_rgba(37,211,102,0.48)] active:translate-y-px focus-visible:outline-[#34d399]/70",
        outline:
          "border border-gray-200 bg-white text-[#0f172a] shadow-sm hover:border-gray-300 hover:bg-gray-50 active:translate-y-px focus-visible:outline-sky-400/80",
        ghost:
          "text-[#0f172a] hover:bg-gray-100/90 active:translate-y-px focus-visible:outline-sky-400/80",
        secondary:
          "bg-[#e0f2fe] text-[#0f172a] hover:bg-[#bae6fd]/90 active:translate-y-px focus-visible:outline-sky-400/80",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-xl px-7 text-base",
        icon: "size-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
