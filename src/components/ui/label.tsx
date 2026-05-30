import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-[var(--spacing-2)] text-[length:var(--font-size-sm)] leading-none font-[var(--font-weight-medium)] select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:text-[var(--component-button-disabled-text)] peer-disabled:cursor-not-allowed peer-disabled:text-[var(--component-button-disabled-text)]",
        className
      )}
      {...props}
    />
  )
}

export { Label }
