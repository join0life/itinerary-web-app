import type { CalendarEvent } from "@/types";
import CalendarEventItem from "./calendar-event-item";
import MoreEventBadge from "./more-event-badge";
import { useMemo } from "react";
import { getThisWeekRange, isSameDay } from "@/lib/utils";

const MAX_VISIBLE_COLUMNS = 2;
const HOUR_HEIGHT = 60;

export default function WeeklyCalendar({
  events,
  baseDate,
  selectedDate,
}: {
  events: CalendarEvent[];
  baseDate: Date;
  selectedDate: Date;
}) {
  const hours = Array.from({ length: 24 }, (_, idx) => idx);

  /**
   * baseDate가 포함된 주의 일요일 00:00:00.000부터
   * 토요일 23:59:59:999까지의 Date 객체를 반환
   */
  const { start: startOfWeek, end: endOfWeek } = useMemo(
    () => getThisWeekRange(baseDate),
    [baseDate],
  );
  /**
   * 이벤트가 겹치는지 여부 반환
   * @param a: CalendarEvent
   * @param b: CalendarEvent
   * @returns boolean
   */
  const isOverlapping = (a: CalendarEvent, b: CalendarEvent) => {
    return (
      a.startAt!.getTime() < b.endAt!.getTime() &&
      b.startAt!.getTime() < a.endAt!.getTime()
    );
  };
  /**
   * 날짜 넘어가는 이벤트 분할
   * @param event: CalendarEvent
   * @returns results: CalendarEvent[]
   */
  const splitEventByDay = (event: CalendarEvent): CalendarEvent[] => {
    const { startAt, endAt } = event;
    if (!startAt || !endAt) return [];

    const results: CalendarEvent[] = [];
    let currentStart = new Date(startAt);

    while (currentStart < endAt) {
      const dayEnd = new Date(currentStart);
      dayEnd.setHours(23, 59, 59, 999);

      const segmentEnd = endAt < dayEnd ? endAt : dayEnd;

      results.push({
        ...event,
        startAt: new Date(currentStart),
        endAt: new Date(segmentEnd),
      });

      currentStart = new Date(segmentEnd);
      currentStart.setDate(currentStart.getDate() + 1);
      currentStart.setHours(0, 0, 0, 0);
    }

    return results;
  };

  /**
   * 시간이 겹치는 이벤트를 배열로 묶어서 반환
   * - 시간 기준 정렬
   * @param events: CalendarEvent[]
   * @returns groups: CalendarEvent[][]
   */
  const groupOverlappingEvents = (events: CalendarEvent[]) => {
    const sorted = [...events].sort(
      (a, b) => a.startAt!.getTime() - b.startAt!.getTime(),
    );

    const groups: CalendarEvent[][] = [];

    sorted.forEach((event) => {
      let placed = false;

      for (const group of groups) {
        if (group.some((e) => isOverlapping(e, event))) {
          group.push(event);
          placed = true;
          break;
        }
      }

      if (!placed) groups.push([event]);
    });

    return groups;
  };

  /**
   * 겹치는 이벤트 그룹의 타임라인 시작 Y좌표 반환
   * @param group: CalendarEvent[]
   * @returns
   */
  const getGroupTop = (group: CalendarEvent[]) => {
    const earliestStart = Math.min(...group.map((e) => e.startAt!.getTime()));
    const date = new Date(earliestStart);
    const minutes = date.getHours() * 60 + date.getMinutes();

    return minutes * (HOUR_HEIGHT / 60);
  };

  /**
   * 보이는 이벤트 & 숨긴 이벤트 수 반환
   * @param group: CalendarEvent[]
   * @returns { visible, hiddenCount }
   */
  const prepareRenderEvents = (group: CalendarEvent[]) => {
    const sorted = [...group].sort(
      (a, b) =>
        new Date(a.created_at!).getTime() - new Date(b.created_at!).getTime(),
    );

    return {
      visible: sorted.slice(0, MAX_VISIBLE_COLUMNS),
      hiddenCount: Math.max(0, sorted.length - MAX_VISIBLE_COLUMNS),
    };
  };

  /* =========================
   * main pipeline
   ========================= */

  const groups = useMemo(() => {
    // 1️. 이번 주에 걸치는 이벤트만 필터
    const inWeekEvents = events.filter((event) => {
      if (event.allday) return false;
      if (!event.startAt || !event.endAt) return false;

      return event.startAt < endOfWeek && event.endAt > startOfWeek;
    });

    // 2️. 날짜 넘어가는 이벤트 분할
    const splitEvents = inWeekEvents.flatMap(splitEventByDay);

    // 3️. 날짜별로 묶기
    const eventsByDay = new Map<string, CalendarEvent[]>();

    splitEvents.forEach((event) => {
      const key = event.startAt!.toDateString();
      if (!eventsByDay.has(key)) {
        eventsByDay.set(key, []);
      }
      eventsByDay.get(key)!.push(event);
    });

    // 4️. 날짜 안에서 겹침 그룹화
    const allGroups: CalendarEvent[][] = [];

    eventsByDay.forEach((dayEvents) => {
      const dayGroups = groupOverlappingEvents(dayEvents);
      allGroups.push(...dayGroups);
    });

    // 5️. 선택된 날짜만 반환
    return allGroups.filter((group) =>
      group.every((event) => isSameDay(event.startAt!, selectedDate)),
    );
  }, [events, startOfWeek, endOfWeek, selectedDate]);

  return (
    <div
      className="relative h-[calc(var(--size-15)*24)] w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden"
      style={{ scrollbarWidth: "none" }}
    >
      {/* 시간 그리드 */}
      {hours.map((hour) => {
        const time = hour.toString().padStart(2, "0");

        return (
          <div
            key={hour}
            className="flex h-[var(--size-15)] w-full border-b"
          >
            <div className="w-1/7 text-[length:var(--font-size-xs)] text-muted-foreground">
              {time}:00
            </div>
            <div className="w-6/7" />
          </div>
        );
      })}

      {/* 이벤트 */}
      <div className="absolute inset-0">
        {groups.map((group, groupIndex) => {
          const { visible, hiddenCount } = prepareRenderEvents(group);
          const top = getGroupTop(group);

          return (
            <div key={groupIndex}>
              {visible.map((event, index) => (
                <CalendarEventItem
                  key={event.id}
                  event={event}
                  columnIndex={index}
                />
              ))}

              {hiddenCount > 0 && (
                <MoreEventBadge count={hiddenCount} top={top + 4} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
