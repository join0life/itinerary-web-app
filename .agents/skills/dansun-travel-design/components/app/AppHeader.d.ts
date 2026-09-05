/**
 * 60px app bar. `global` shows the brand wordmark; `project` shows a back chevron + coral project name.
 */
export interface AppHeaderProps {
  variant?: "global" | "project";
  title?: string;
  avatarSrc?: string;
  theme?: "system" | "light" | "dark";
  onBack?: () => void;
  onThemeChange?: (theme: string) => void;
  onProfile?: () => void;
  onSignOut?: () => void;
}
export declare function AppHeader(props: AppHeaderProps): JSX.Element;
