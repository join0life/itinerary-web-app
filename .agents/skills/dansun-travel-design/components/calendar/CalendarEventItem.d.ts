/** A timed event block on the weekly grid (60px per hour, 65px minimum height). */
export interface CalendarEventItemProps {
  title: string;
  startHour?: number;
  startMinute?: number;
  endHour?: number;
  endMinute?: number;
  /** 0 or 1 — second column offsets right for overlapping events */
  columnIndex?: number;
  onClick?: () => void;
}
export declare function CalendarEventItem(props: CalendarEventItemProps): JSX.Element;
