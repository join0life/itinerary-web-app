import { ChevronLeft, ChevronRight } from "lucide-react";
import { isSameDay } from "date-fns";
import { cn, getWeekStart } from "@/lib/utils";
import { DAYS } from "@/lib/constants";

type Props = {
  baseDate: Date;
  onChangeBaseDate: React.Dispatch<React.SetStateAction<Date>>;
  weekDates: Date[];
  onSelectDate: (date: Date) => void;
  selectedDate: Date | null;
};

export default function CalendarHeader({
  baseDate,
  onChangeBaseDate,
  weekDates,
  onSelectDate,
  selectedDate,
}: Props) {
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth() + 1;
  const dateHeader = `${year}년 ${month}월`;

  const moveWeek = (diff: number) => {
    onChangeBaseDate((prev) => {
      const next = new Date(prev);
      next.setDate(prev.getDate() + diff);

      const weekStart = getWeekStart(next);

      if (diff < 0) {
        const saturday = new Date(weekStart);
        saturday.setDate(weekStart.getDate() + 6);
        onSelectDate(saturday);
      }

      if (diff > 0) {
        onSelectDate(weekStart);
      }

      return next;
    });
  };

  return (
    <div>
      {/** 1행 */}
      <div className="flex items-center justify-between border-b px-page-x pb-[var(--spacing-6)] text-center">
        <button
          type="button"
          onClick={() => moveWeek(-7)}
          className="cursor-pointer rounded-[var(--component-button-radius)] p-[var(--spacing-1)] text-muted-foreground outline-none hover:bg-[var(--component-button-ghost-bg-hover)] hover:text-foreground focus-visible:shadow-[var(--component-button-focus-ring)]"
          aria-label="이전 주"
        >
          <ChevronLeft className="size-[var(--size-icon-md)]" />
        </button>
        <div className="text-[length:var(--font-size-xl)] font-[var(--font-weight-semibold)]">
          {dateHeader}
        </div>
        <button
          type="button"
          onClick={() => moveWeek(7)}
          className="cursor-pointer rounded-[var(--component-button-radius)] p-[var(--spacing-1)] text-muted-foreground outline-none hover:bg-[var(--component-button-ghost-bg-hover)] hover:text-foreground focus-visible:shadow-[var(--component-button-focus-ring)]"
          aria-label="다음 주"
        >
          <ChevronRight className="size-[var(--size-icon-md)]" />
        </button>
      </div>

      {/** 2행 */}
      <div className="flex items-center justify-between">
        {DAYS.map((day, idx) => (
          <div
            key={day}
            className={cn(
              "w-1/7 p-[var(--spacing-2)] text-center text-[length:var(--font-size-sm)]",
              idx === 0 ? "text-muted-foreground" : "border-l",
              idx === 6 && "text-muted-foreground",
            )}
          >
            {day}
          </div>
        ))}
      </div>

      {/** 3행 */}
      <div className="mb-[var(--spacing-1)] flex items-center justify-between">
        {weekDates.map((date, idx) => {
          const isSelected = selectedDate && isSameDay(date, selectedDate);

          return (
            <div key={`${date}-${idx}`} className="relative w-1/7">
              {isSelected && (
                <div className="absolute inset-0 m-auto flex aspect-square size-[var(--size-9)] items-center justify-center rounded-[var(--radius-full)] bg-[var(--component-calendar-selected-bg)]"></div>
              )}
              <button
                type="button"
                key={date.toISOString()}
                className={cn(
                  "relative flex h-full w-full items-center justify-center p-[var(--spacing-2)] text-center font-[var(--font-weight-semibold)] outline-none hover:cursor-pointer focus-visible:shadow-[var(--component-button-focus-ring)]",
                  idx === 0 ? "text-muted-foreground" : "border-l",
                  idx === 6 && "text-muted-foreground",
                  isSelected && "text-[var(--color-semantic-text-primary)]",
                )}
                onClick={() => onSelectDate(date)}
              >
                {date.getDate()}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
