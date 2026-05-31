import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-button-gap whitespace-nowrap rounded-button border border-transparent text-button font-button transition-all outline-none disabled:pointer-events-none disabled:border-button-disabled-border disabled:bg-button-disabled disabled:text-button-disabled-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      variant: {
        default:
          "bg-button-primary text-button-primary-foreground hover:bg-button-primary-hover active:bg-button-primary-pressed",
        primary:
          "bg-button-primary text-button-primary-foreground hover:bg-button-primary-hover active:bg-button-primary-pressed",
        destructive:
          "bg-button-destructive text-button-destructive-foreground hover:bg-button-destructive-hover focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border-button-outline-border bg-button-outline text-button-outline-foreground shadow-xs hover:bg-button-outline-hover",
        secondary:
          "bg-button-secondary text-button-secondary-foreground hover:bg-button-outline-hover",
        ghost:
          "bg-button-ghost text-button-ghost-foreground hover:bg-button-ghost-hover",
        link: "text-button-link underline-offset-4 hover:text-button-link-hover hover:underline",
      },
      size: {
        default:
          "h-button-height-md px-button-x-md has-[>svg]:px-button-icon-x-md",
        sm: "h-button-height-sm px-button-x-sm has-[>svg]:px-button-icon-x-sm",
        lg: "h-button-height-lg px-button-x-lg has-[>svg]:px-button-icon-x-lg",
        icon: "size-button-height-icon",
        "icon-sm": "size-button-height-sm",
        "icon-lg": "size-button-height-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
