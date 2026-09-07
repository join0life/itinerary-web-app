/**
 * Primary action control. One primary Button per screen.
 */
export interface ButtonProps {
  /** primary = coral CTA, secondary = mint confirm, ghost = low-intensity, brand/destructive/link as needed */
  variant?: "primary" | "secondary" | "ghost" | "brand" | "destructive" | "link";
  /** sm 32px (inline) / md 44px (default, touch) / lg 52px (fixed bottom CTA) */
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  /** square button sized to its height, for a lone icon */
  iconOnly?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
