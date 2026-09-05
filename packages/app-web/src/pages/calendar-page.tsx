import Allday from "@/components/calendar/allday";
import CalendarHeader from "@/components/calendar/calendar-header";
import WeeklyCalendar from "@/components/calendar/weekly-calendar";
import Fallback from "@/components/fallback";
import { useConfirmedEventData } from "@/hooks/queries/use-confirmed-event-data";
import { getThisWeekDates } from "@itinerary/shared";
import {
  useRecentProjectId,
  useRecentProjectIdActions,
} from "@/store/recent-project-id";
import type { CalendarEvent } from "@itinerary/shared";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";

export default function CalendarPage() {
  const params = useParams();
  const paramProjectId = params.projectId ? Number(params.projectId) : null;

  const setRecentProjectId = useRecentProjectIdActions();
  const recentProjectId = useRecentProjectId();
  const projectId = paramProjectId ?? recentProjectId;

  if (!projectId) return <Navigate to="/project" replace />;

  const [baseDate, setBaseDate] = useState(new Date());
  const weekDates = getThisWeekDates(baseDate);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const { data: confirmedEvents, error } = useConfirmedEventData(projectId);

  const isEventOnDate = (
    eventStart: Date,
    eventEnd: Date,
    targetDate: Date,
  ) => {
    const dayStart = new Date(targetDate);
    dayStart.setHours(0, 0, 0, 0);

    const dayEnd = new Date(targetDate);
    dayEnd.setHours(23, 59, 59, 999);

    return eventStart <= dayEnd && eventEnd >= dayStart;
  };

  const calendarEvents: CalendarEvent[] = (confirmedEvents ?? []).map((e) => ({
    id: e.id,
    title: e.title,
    allday: e.allday,
    startAt: e.start_at ? new Date(e.start_at) : undefined,
    endAt: e.end_at ? new Date(e.end_at) : undefined,
  }));

  const filteredCalendarEvents = selectedDate
    ? calendarEvents.filter(
        (event) =>
          event.startAt &&
          event.endAt &&
          isEventOnDate(event.startAt, event.endAt, selectedDate),
      )
    : calendarEvents;

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  useEffect(() => {
    if (projectId) {
      setRecentProjectId(projectId);
    }
  }, [projectId, setRecentProjectId]);

  if (error) return <Fallback />;

  return (
    <div className="min-h-dvh">
      <CalendarHeader
        baseDate={baseDate}
        onChangeBaseDate={setBaseDate}
        weekDates={weekDates}
        onSelectDate={setSelectedDate}
        selectedDate={selectedDate}
      />

      <div className="bg-muted h-15 overflow-x-hidden overflow-y-scroll border-b border-dashed [&::-webkit-scrollbar]:hidden">
        <Allday baseDate={baseDate} events={calendarEvents} />
      </div>

      <div className="sm:h-calendar-viewport-sm md:h-calendar-viewport-md lg:h-calendar-viewport-lg flex flex-col">
        <WeeklyCalendar
          events={filteredCalendarEvents}
          baseDate={baseDate}
          selectedDate={selectedDate}
        />
      </div>
    </div>
  );
}
