/** Small anchored menu — theme picker and profile menu in the header. */
export interface PopoverProps {
  trigger: React.ReactNode;
  items: { label: string; selected?: boolean; onSelect?: () => void }[];
  align?: "start" | "end";
  width?: number;
}
export declare function Popover(props: PopoverProps): JSX.Element;
