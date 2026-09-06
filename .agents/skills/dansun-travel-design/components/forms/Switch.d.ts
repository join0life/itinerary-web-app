/** 56x32 toggle — used for 하루종일 (all-day) in the event modal. */
export interface SwitchProps { checked?: boolean; onChange?: (next: boolean) => void; disabled?: boolean; id?: string }
export declare function Switch(props: SwitchProps): JSX.Element;
