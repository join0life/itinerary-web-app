import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "group/calendar bg-background p-[var(--spacing-3)] [--cell-size:var(--size-8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-[var(--spacing-4)] md:flex-row",
          defaultClassNames.months
        ),
        month: cn(
          "flex w-full flex-col gap-[var(--spacing-4)]",
          defaultClassNames.month
        ),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-[var(--spacing-1)]",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-[var(--spacing-0)] select-none aria-disabled:text-[var(--component-button-disabled-text)]",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-[var(--spacing-0)] select-none aria-disabled:text-[var(--component-button-disabled-text)]",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-[calc(var(--spacing-1)*1.5)] text-[length:var(--font-size-sm)] font-[var(--font-weight-medium)]",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative rounded-[var(--component-input-radius)] border border-[var(--component-input-border)] shadow-xs has-focus:border-[var(--component-input-border-focus)] has-focus:shadow-[var(--component-input-focus-ring)]",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute bg-popover inset-0 opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-[var(--font-weight-medium)]",
          captionLayout === "label"
            ? "text-[length:var(--font-size-sm)]"
            : "flex h-[var(--size-8)] items-center gap-[var(--spacing-1)] rounded-[var(--component-button-radius)] pr-[var(--spacing-1)] pl-[var(--spacing-2)] text-[length:var(--font-size-sm)] [&>svg]:size-[var(--size-icon-sm)] [&>svg]:text-muted-foreground",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 rounded-[var(--component-button-radius)] text-[length:var(--font-size-xs)] font-[var(--font-weight-regular)] text-muted-foreground select-none",
          defaultClassNames.weekday
        ),
        week: cn("mt-[var(--spacing-2)] flex w-full", defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[length:var(--font-size-xs)] text-muted-foreground select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative h-full w-full aspect-square p-[var(--spacing-0)] text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-[var(--component-button-radius)]",
          props.showWeekNumber
            ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-[var(--component-button-radius)]"
            : "[&:first-child[data-selected=true]_button]:rounded-l-[var(--component-button-radius)]",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-[var(--component-button-radius)] bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn(
          "rounded-[var(--radius-none)]",
          defaultClassNames.range_middle
        ),
        range_end: cn(
          "rounded-r-[var(--component-button-radius)] bg-accent",
          defaultClassNames.range_end
        ),
        today: cn(
          "rounded-[var(--component-button-radius)] bg-[var(--component-calendar-today-bg)] text-accent-foreground data-[selected=true]:rounded-[var(--radius-none)]",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon
                className={cn("size-[var(--size-icon-sm)]", className)}
                {...props}
              />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-[var(--size-icon-sm)]", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon
              className={cn("size-[var(--size-icon-sm)]", className)}
              {...props}
            />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "flex size-auto w-full min-w-(--cell-size) flex-col gap-[var(--spacing-1)] aspect-square font-[var(--font-weight-regular)] leading-none data-[range-end=true]:rounded-[var(--component-button-radius)] data-[range-end=true]:rounded-r-[var(--component-button-radius)] data-[range-middle=true]:rounded-[var(--radius-none)] data-[range-start=true]:rounded-[var(--component-button-radius)] data-[range-start=true]:rounded-l-[var(--component-button-radius)] data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:shadow-[var(--component-button-focus-ring)] dark:hover:text-accent-foreground [&>span]:text-[length:var(--font-size-xs)] [&>span]:opacity-[var(--component-button-loading-opacity)]",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
