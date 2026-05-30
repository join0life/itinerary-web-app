import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-[var(--spacing-16)] w-full rounded-[var(--component-input-radius)] border border-[var(--component-input-border)] bg-[var(--component-input-bg)] px-[var(--component-input-padding-x)] py-[var(--spacing-2)] text-[length:var(--font-size-md)] text-[var(--component-input-text)] shadow-xs transition-[color,box-shadow] outline-none placeholder:text-[var(--component-input-placeholder)] focus-visible:border-[var(--component-input-border-focus)] focus-visible:shadow-[var(--component-input-focus-ring)] aria-invalid:border-[var(--component-input-border-invalid)] disabled:cursor-not-allowed disabled:bg-[var(--component-input-disabled-bg)] disabled:text-[var(--component-input-disabled-text)] md:text-[length:var(--font-size-sm)]",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
