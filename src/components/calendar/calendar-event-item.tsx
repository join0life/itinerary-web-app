import { useOpenViewTodoModal } from "@/store/todo-editor-modal";
import type { CalendarEvent } from "@/types";

const HOUR_HEIGHT = 60;
const MIN_EVENT_HEIGHT = 65;

export default function CalendarEventItem({
  event,
  columnIndex,
}: {
  event: CalendarEvent;
  columnIndex: number;
}) {
  const openTodoEditorModal = useOpenViewTodoModal();

  const handleOpenModalClick = () => {
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
    });
  };

  const formatTime = (date: Date) => {
    const d = new Date(date);
    let hour = d.getHours();
    let minute = d.getMinutes();

    return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
  };

  const getOverlapStyle = (index: number) => {
    if (index === 0) {
      return {
        width: "100%",
        left: "15%",
        zIndex: 1,
      };
    }

    if (index === 1) {
      return {
        width: "100%",
        left: "50%",
        zIndex: 2,
      };
    }

    return null;
  };

  if (!event.startAt || !event.endAt) return undefined;
  const start = event.startAt;
  const end = event.endAt;

  const startMinutes = start.getHours() * 60 + start.getMinutes();
  const endMinutes = end.getHours() * 60 + end.getMinutes();

  const overlapStyle = getOverlapStyle(columnIndex!);

  const style: React.CSSProperties = {
    top: startMinutes * (HOUR_HEIGHT / 60),
    height: (endMinutes - startMinutes) * (HOUR_HEIGHT / 60),
    minHeight: MIN_EVENT_HEIGHT,
    ...overlapStyle,
  };

  return (
    <div
      onClick={handleOpenModalClick}
      className="border-l-calendar-event-border bg-calendar-event absolute right-0 left-1/7 w-full cursor-pointer rounded-sm border-l-3 px-2 py-3"
      style={style}
      draggable={true}
    >
      <p className="text-calendar-event-foreground line-clamp-1 text-sm font-semibold">
        {event.title}
      </p>
      <span className="text-calendar-event-foreground text-xs">
        {event.startAt === event.endAt
          ? `${formatTime(event.startAt!)}`
          : `${formatTime(event.startAt!)} ~ ${formatTime(event.endAt!)}`}
      </span>
    </div>
  );
}
