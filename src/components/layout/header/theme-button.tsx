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
      <PopoverTrigger className="header-icon-trigger">
        <SunIcon className="icon-md" />
      </PopoverTrigger>
      <PopoverContent className="theme-popover-menu">
        {THEMES.map((theme) => (
          <PopoverClose key={`theme-button-${theme}`} asChild>
            <div
              onClick={() => setTheme(theme)}
              className="theme-popover-item"
            >
              {theme}
              {currentTheme === theme && <CheckIcon className="icon-sm" />}
            </div>
          </PopoverClose>
        ))}
      </PopoverContent>
      <PopoverClose></PopoverClose>
    </Popover>
  );
}
