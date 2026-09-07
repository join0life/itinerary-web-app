/** Empty state: what's missing on line 1, the next step on line 2. */
export interface EmptyProps {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  /** optional image/illustration element */
  illustration?: React.ReactNode;
}
export declare function Empty(props: EmptyProps): JSX.Element;
