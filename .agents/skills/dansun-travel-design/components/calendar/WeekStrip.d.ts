/**
 * Month header + one week of dates; the selected date sits in a coral circle.
 */
export interface WeekStripProps {
  /** e.g. "2026년 9월" */
  monthLabel: string;
  /** seven day-of-month numbers, Sunday first */
  dates: number[];
  selectedIndex?: number;
  onSelect?: (index: number) => void;
  onPrev?: () => void;
  onNext?: () => void;
}
export declare function WeekStrip(props: WeekStripProps): JSX.Element;
