/** Confirmation dialog for destructive or discard-work decisions. */
export interface AlertModalProps {
  open?: boolean;
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}
export declare function AlertModal(props: AlertModalProps): JSX.Element | null;
