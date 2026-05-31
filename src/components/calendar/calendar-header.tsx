import { ChevronLeft, ChevronRight } from "lucide-react";
import { isSameDay } from "date-fns";
import { getWeekStart } from "@/lib/utils";
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
      <div className="flex items-center justify-between border-b px-4 pb-6 text-center">
        <ChevronLeft
          onClick={() => moveWeek(-7)}
          className="text-muted-foreground hover:text-foreground cursor-pointer"
        />
        <div className="text-xl font-semibold">{dateHeader}</div>
        <ChevronRight
          onClick={() => moveWeek(7)}
          className="text-muted-foreground hover:text-foreground cursor-pointer"
        />
      </div>

      {/** 2행 */}
      <div className="flex items-center justify-between">
        {DAYS.map((day, idx) => (
          <div
            key={day}
            className={`w-1/7 p-2 text-center text-sm ${idx === 0 ? "text-muted-foreground" : "border-l"} ${idx === 6 ? "text-muted-foreground" : ""}`}
          >
            {day}
          </div>
        ))}
      </div>

      {/** 3행 */}
      <div className="mb-1 flex items-center justify-between">
        {weekDates.map((date, idx) => {
          const isSelected = selectedDate && isSameDay(date, selectedDate);

          return (
            <div key={`${date}-${idx}`} className="relative w-1/7">
              {isSelected && (
                <div className="bg-brand absolute inset-0 m-auto flex aspect-square h-9 w-9 items-center justify-center rounded-full"></div>
              )}
              <div
                key={date.toISOString()}
                className={`relative flex h-full w-full items-center justify-center p-2 text-center font-semibold hover:cursor-pointer ${idx === 0 ? "text-muted-foreground" : "border-l"} ${idx === 6 ? "text-muted-foreground" : ""} ${isSelected ? "text-brand-foreground" : ""}`}
                onClick={() => onSelectDate(date)}
              >
                {date.getDate()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
