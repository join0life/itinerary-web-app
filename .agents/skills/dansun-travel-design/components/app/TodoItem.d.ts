/** One schedule row: confirm checkbox, title, edit + delete icons. */
export interface TodoItemProps {
  title: string;
  /** confirmed (확정) events show checked and struck through */
  confirmed?: boolean;
  onToggle?: (next: boolean) => void;
  onEdit?: () => void;
  onDelete?: () => void;
}
export declare function TodoItem(props: TodoItemProps): JSX.Element;
