import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        "group/input-group relative flex w-full items-center rounded-[var(--component-input-radius)] border border-[var(--component-input-border)] shadow-xs transition-[color,box-shadow] outline-none",
        "h-[var(--component-input-height)] min-w-0 has-[>textarea]:h-auto",

        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-[var(--spacing-2)]",
        "has-[>[data-align=inline-end]]:[&>input]:pr-[var(--spacing-2)]",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-[var(--spacing-3)]",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-[var(--spacing-3)]",

        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-[var(--component-input-border-focus)] has-[[data-slot=input-group-control]:focus-visible]:shadow-[var(--component-input-focus-ring)]",

        // Error state.
        "has-[[data-slot][aria-invalid=true]]:border-[var(--component-input-border-invalid)]",

        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "flex h-auto cursor-text items-center justify-center gap-[var(--spacing-2)] py-[calc(var(--spacing-1)*1.5)] text-[length:var(--font-size-sm)] font-[var(--font-weight-medium)] text-muted-foreground select-none [&>svg:not([class*='size-'])]:size-[var(--size-icon-sm)] [&>kbd]:rounded-[var(--ds-radius-sm)] group-data-[disabled=true]/input-group:text-[var(--component-button-disabled-text)]",
  {
    variants: {
      align: {
        "inline-start":
          "order-first pl-[var(--spacing-3)] has-[>button]:ml-[calc(var(--spacing-2)*-0.9)] has-[>kbd]:ml-[calc(var(--spacing-2)*-0.7)]",
        "inline-end":
          "order-last pr-[var(--spacing-3)] has-[>button]:mr-[calc(var(--spacing-2)*-0.9)] has-[>kbd]:mr-[calc(var(--spacing-2)*-0.7)]",
        "block-start":
          "order-first w-full justify-start px-[var(--spacing-3)] pt-[var(--spacing-3)] [.border-b]:pb-[var(--spacing-3)] group-has-[>input]/input-group:pt-[calc(var(--spacing-2)+var(--spacing-1)/2)]",
        "block-end":
          "order-last w-full justify-start px-[var(--spacing-3)] pb-[var(--spacing-3)] [.border-t]:pt-[var(--spacing-3)] group-has-[>input]/input-group:pb-[calc(var(--spacing-2)+var(--spacing-1)/2)]",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  "flex items-center gap-[var(--spacing-2)] text-[length:var(--font-size-sm)] shadow-none",
  {
    variants: {
      size: {
        xs: "h-[var(--size-6)] gap-[var(--spacing-1)] rounded-[var(--ds-radius-sm)] px-[var(--spacing-2)] [&>svg:not([class*='size-'])]:size-[var(--size-icon-sm)] has-[>svg]:px-[var(--spacing-2)]",
        sm: "h-[var(--size-8)] gap-[calc(var(--spacing-1)*1.5)] rounded-[var(--component-button-radius)] px-[calc(var(--spacing-2)+var(--spacing-1)/2)] has-[>svg]:px-[calc(var(--spacing-2)+var(--spacing-1)/2)]",
        "icon-xs":
          "size-[var(--size-6)] rounded-[var(--ds-radius-sm)] p-[var(--spacing-0)] has-[>svg]:p-[var(--spacing-0)]",
        "icon-sm": "size-[var(--size-8)] p-[var(--spacing-0)] has-[>svg]:p-[var(--spacing-0)]",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
)

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "flex items-center gap-[var(--spacing-2)] text-[length:var(--font-size-sm)] text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-[var(--size-icon-sm)]",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "flex-1 rounded-[var(--radius-none)] border-0 bg-transparent shadow-none focus-visible:shadow-none",
        className
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 resize-none rounded-[var(--radius-none)] border-0 bg-transparent py-[var(--spacing-3)] shadow-none focus-visible:shadow-none",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}
