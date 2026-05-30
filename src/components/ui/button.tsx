import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-[var(--component-button-gap)] whitespace-nowrap rounded-[var(--component-button-radius)] text-[length:var(--font-size-sm)] font-[var(--font-weight-medium)] transition-all outline-none disabled:pointer-events-none disabled:border-[var(--component-button-disabled-border)] disabled:bg-[var(--component-button-disabled-bg)] disabled:text-[var(--component-button-disabled-text)] disabled:opacity-[var(--component-button-loading-opacity)] focus-visible:shadow-[var(--component-button-focus-ring)] aria-invalid:border-[var(--color-semantic-danger-default)] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-icon-sm",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--component-button-primary-bg)] text-[var(--component-button-primary-text)] hover:bg-[var(--component-button-primary-bg-hover)] active:bg-[var(--component-button-primary-bg-pressed)]",
        destructive:
          "bg-[var(--component-button-destructive-bg)] text-[var(--component-button-destructive-text)] hover:bg-[var(--component-button-destructive-bg-hover)]",
        outline:
          "border border-[var(--component-button-outline-border)] bg-[var(--component-button-outline-bg)] text-[var(--component-button-outline-text)] shadow-xs hover:bg-[var(--component-button-outline-bg-hover)]",
        secondary:
          "bg-[var(--component-button-secondary-bg)] text-[var(--component-button-secondary-text)] hover:bg-[var(--color-semantic-action-ghost-hover)]",
        ghost:
          "bg-[var(--component-button-ghost-bg)] text-[var(--component-button-ghost-text)] hover:bg-[var(--component-button-ghost-bg-hover)] hover:text-[var(--color-semantic-text-primary)]",
        link: "text-[var(--component-button-link-text)] underline-offset-[var(--spacing-1)] hover:text-[var(--component-button-link-text-hover)] hover:underline",
      },
      size: {
        default:
          "h-[var(--component-button-height-md)] px-[var(--component-button-padding-x-md)] has-[>svg]:px-[var(--component-button-padding-x-sm)]",
        sm: "h-[var(--component-button-height-sm)] px-[var(--component-button-padding-x-sm)]",
        lg: "h-[var(--component-button-height-lg)] px-[var(--component-button-padding-x-lg)]",
        icon: "size-[var(--component-button-height-icon)]",
        "icon-sm": "size-[var(--component-button-height-sm)]",
        "icon-lg": "size-[var(--component-button-height-lg)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
