import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-[var(--size-icon-sm)]" />,
        info: <InfoIcon className="size-[var(--size-icon-sm)]" />,
        warning: <TriangleAlertIcon className="size-[var(--size-icon-sm)]" />,
        error: <OctagonXIcon className="size-[var(--size-icon-sm)]" />,
        loading: (
          <Loader2Icon className="size-[var(--size-icon-sm)] animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
