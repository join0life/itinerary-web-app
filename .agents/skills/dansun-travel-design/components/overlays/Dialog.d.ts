/** Centered modal (480px max) for creating/editing a project or an event. */
export interface DialogProps {
  open?: boolean;
  title?: string;
  onClose?: () => void;
  /** action row, usually [ghost 취소, primary 확인] */
  footer?: React.ReactNode;
  width?: number;
  children?: React.ReactNode;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
