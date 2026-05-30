import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSetTheme, useTheme } from "@/store/theme";
import type { Theme } from "@/types";
import { PopoverClose } from "@radix-ui/react-popover";
import { CheckIcon, SunIcon } from "lucide-react";

const THEMES: Theme[] = ["system", "light", "dark"];

export default function ThemeButton() {
  const currentTheme = useTheme();
  const setTheme = useSetTheme();

  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer rounded-[var(--radius-full)] p-[var(--spacing-2)] outline-none hover:bg-muted focus-visible:shadow-[var(--component-button-focus-ring)]">
        <SunIcon className="size-[var(--size-icon-md)]" />
      </PopoverTrigger>
      <PopoverContent className="w-[calc(var(--size-15)*2.333)] p-[var(--spacing-0)]">
        {THEMES.map((theme) => (
          <PopoverClose key={`theme-button-${theme}`} asChild>
            <div
              onClick={() => setTheme(theme)}
              className="flex cursor-pointer items-center justify-between p-[var(--spacing-3)] hover:bg-muted"
            >
              {theme}
              {currentTheme === theme && (
                <CheckIcon className="size-[var(--size-icon-sm)]" />
              )}
            </div>
          </PopoverClose>
        ))}
      </PopoverContent>
      <PopoverClose></PopoverClose>
    </Popover>
  );
}
