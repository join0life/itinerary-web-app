import { getThisWeekRange } from "@/lib/utils";
import { useOpenViewTodoModal } from "@/store/todo-editor-modal";
import type { CalendarEvent } from "@/types";

const DAY = 1000 * 60 * 60 * 24;

export default function Allday({
  events,
  baseDate,
}: {
  events: CalendarEvent[];
  baseDate: Date;
}) {
  const { start: weekStart, end: weekEnd } = getThisWeekRange(baseDate);
  const openTodoEditorModal = useOpenViewTodoModal();

  const weeklyAlldayEvents = events.filter((event) => {
    if (!event.allday || !event.startAt || !event.endAt) return false;

    return event.startAt < weekEnd && event.endAt > weekStart;
  });

  const sortedEvents = weeklyAlldayEvents.sort(
    (a, b) =>
      new Date(a.created_at!).getTime() - new Date(b.created_at!).getTime(),
  );

  return (
    <div className="flex w-full flex-col">
      {sortedEvents.map((event) => {
        if (!event.startAt || !event.endAt) return undefined;
        const start = event.startAt;
        const end = event.endAt;

        const clippedStart = start < weekStart ? weekStart : start;
        const clippedEnd = end > weekEnd ? weekEnd : end;

        const offsetDays = Math.floor(
          (clippedStart.getTime() - weekStart.getTime()) / DAY,
        );

        const spanDays =
          Math.floor((clippedEnd.getTime() - clippedStart.getTime()) / DAY) + 1;

        return (
          <div
            key={event.id}
            className="flex h-full"
            onClick={() =>
              openTodoEditorModal({
                id: event.id,
                projectId: event.projectId!,
                title: event.title,
                allday: event.allday,
                startAt: event.startAt!,
                endAt: event.endAt!,
                location: event.location!,
                memo: event.memo!,
                isConfirmed: event.isConfirmed!,
              })
            }
          >
            {Array.from({ length: offsetDays }).map((_, i) => (
              <div key={i} className="w-1/7 shrink-0" />
            ))}
            <div
              className="bg-brand text-brand-foreground mb-1 cursor-pointer rounded-sm px-2 py-1 text-xs font-semibold"
              style={{ width: `${(spanDays / 7) * 100}%` }}
            >
              {event.title}
            </div>
          </div>
        );
      })}
    </div>
  );
}
