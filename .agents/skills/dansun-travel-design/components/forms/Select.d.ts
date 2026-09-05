/** Single-choice dropdown matching Input's 44px shell. */
export interface SelectProps {
  options: { value: string; label: string }[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}
export declare function Select(props: SelectProps): JSX.Element;
