/** All-day event spanning whole day columns above the hour grid. */
export interface AlldayEventBarProps {
  title: string;
  /** days from Sunday before the bar starts (0-6) */
  offsetDays?: number;
  /** number of days the bar covers */
  spanDays?: number;
  onClick?: () => void;
}
export declare function AlldayEventBar(props: AlldayEventBarProps): JSX.Element;
