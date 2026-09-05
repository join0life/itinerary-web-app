/** 18px square check used to confirm (확정) a todo row. */
export interface CheckboxProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  /** optional inline text label */
  label?: string;
  id?: string;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
