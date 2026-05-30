import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-[var(--component-input-height)] w-full min-w-0 rounded-[var(--component-input-radius)] border border-[var(--component-input-border)] bg-[var(--component-input-bg)] px-[var(--component-input-padding-x)] text-[length:var(--font-size-md)] text-[var(--component-input-text)] shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-[var(--component-input-placeholder)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-[var(--component-input-disabled-bg)] disabled:text-[var(--component-input-disabled-text)] md:text-[length:var(--font-size-sm)]",
        "file:inline-flex file:h-[var(--size-8)] file:border-0 file:bg-transparent file:text-[length:var(--font-size-sm)] file:font-[var(--font-weight-medium)] file:text-foreground",
        "focus-visible:border-[var(--component-input-border-focus)] focus-visible:shadow-[var(--component-input-focus-ring)]",
        "aria-invalid:border-[var(--component-input-border-invalid)] aria-invalid:shadow-[var(--component-input-focus-ring)]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
