/**
 * Scrollable 24-hour day canvas (60px/hour) that positions CalendarEventItem children.
 */
export interface WeeklyCalendarProps {
  /** CalendarEventItem elements */
  children?: React.ReactNode;
  /** viewport height token, default --calendar-viewport-md */
  height?: string;
  /** hour scrolled into view on mount */
  startHour?: number;
}
export declare function WeeklyCalendar(props: WeeklyCalendarProps): JSX.Element;
