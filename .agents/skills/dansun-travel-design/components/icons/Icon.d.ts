/**
 * Lucide icon by name, rendered as a CSS mask so it takes currentColor.
 */
export interface IconProps {
  /** kebab-case Lucide name, e.g. "calendar", "list-todo", "plus-circle" */
  name: string;
  /** px, default 20 */
  size?: number;
  /** any CSS colour; defaults to currentColor */
  color?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
