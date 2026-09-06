/**
 * Content container: 16px radius, 16px padding, soft shadow (border-only in dark).
 */
export interface CardProps {
  /** left 4px colour bar marking project/category */
  accentColor?: string;
  /** flat --surface-muted card, no shadow (used for tappable rows) */
  muted?: boolean;
  padding?: string;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
export declare function CardTitle(props: { children?: React.ReactNode }): JSX.Element;
export declare function CardDescription(props: { children?: React.ReactNode }): JSX.Element;
