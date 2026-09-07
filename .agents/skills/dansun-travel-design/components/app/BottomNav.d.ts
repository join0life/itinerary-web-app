/** Sticky four-tab bar: 소개 / 프로젝트 / 일정 / 캘린더. */
export interface BottomNavProps {
  active?: "home" | "project" | "todo" | "calendar";
  onChange?: (key: string) => void;
}
export declare function BottomNav(props: BottomNavProps): JSX.Element;
