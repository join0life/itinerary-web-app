/** Multi-line field for memos and descriptions. */
export interface TextareaProps {
  placeholder?: string;
  value?: string;
  rows?: number;
  invalid?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
