import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> & {
  readOnly?: boolean;
};

function Switch({
  className,
  checked,
  onCheckedChange,
  readOnly,
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      checked={checked}
      onCheckedChange={readOnly ? undefined : onCheckedChange}
      aria-readonly={readOnly}
      data-slot="switch"
      className={cn(
        "peer inline-flex h-[var(--size-8)] w-[calc(var(--size-8)+var(--size-6))] shrink-0 items-center rounded-[var(--radius-full)] border border-transparent shadow-xs transition-all outline-none data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:shadow-[var(--component-button-focus-ring)] disabled:cursor-not-allowed disabled:bg-[var(--component-button-disabled-bg)] disabled:opacity-[var(--component-button-loading-opacity)]",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-[calc(var(--size-8)-var(--spacing-1))] rounded-[var(--radius-full)] bg-background ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-[var(--spacing-0)] dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
