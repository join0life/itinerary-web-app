import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer size-[var(--component-checkbox-size)] shrink-0 rounded-[var(--component-checkbox-radius)] border border-[var(--component-checkbox-border)] shadow-xs transition-shadow outline-none data-[state=checked]:border-[var(--component-checkbox-bg-checked)] data-[state=checked]:bg-[var(--component-checkbox-bg-checked)] data-[state=checked]:text-[var(--component-checkbox-icon-checked)] focus-visible:border-[var(--component-input-border-focus)] focus-visible:shadow-[var(--component-checkbox-focus-ring)] aria-invalid:border-[var(--component-input-border-invalid)] disabled:cursor-not-allowed disabled:border-[var(--component-checkbox-disabled-border)] disabled:bg-[var(--component-checkbox-disabled-bg)] disabled:opacity-[var(--component-button-loading-opacity)]",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-[calc(var(--component-checkbox-size)-var(--spacing-0))]" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
