/** Single-line text field, 44px tall with a coral focus ring. */
export interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  invalid?: boolean;
  disabled?: boolean;
  /** icon element rendered inside, before the field */
  leadingIcon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare function Input(props: InputProps): JSX.Element;
