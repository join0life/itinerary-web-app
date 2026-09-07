/** Transient message, shown top-center in the product (sonner). */
export interface ToastProps { tone?: "success" | "error" | "warning" | "info"; message?: string }
export declare function Toast(props: ToastProps): JSX.Element;
