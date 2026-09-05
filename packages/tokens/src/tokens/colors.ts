// packages/tokens/src/tokens/colors.ts
/**
 * Semantic color tokens.
 *
 * 토큰 구조:
 * - surface: 배경면 (default, muted, elevated, inverse, subtle)
 * - text: 텍스트 컬러 (primary, secondary, muted, disabled, inverse)
 * - border: 테두리 (default, subtle, focus, danger)
 * - action: 액션 컬러 (primary, primaryHover, primaryPressed, secondary, ghostHover, disabled)
 * - status: 상태 컬러 (danger, dangerHover, success)
 * - brand: 브랜드 컬러 (default, hover, strong, subtle, foreground)
 * - calendar: 캘린더 전용 (today, event, eventForeground, eventBorder)
 *
 * 라이트/다크 모드는 design-system.css의 .dark 클래스로 오버라이드됩니다.
 */

export interface ColorValue {
  value: string; // CSS var() 참조 또는 직접 값
  type: "color";
  description?: string;
}

export interface ColorToken {
  [key: string]: ColorValue | ColorToken;
}

export type ColorName =
  | "surface"
  | "text"
  | "border"
  | "action"
  | "status"
  | "brand"
  | "calendar";

/**
 * Semantic color token map.
 * Values reference Tailwind CSS variables (var(--color-*)).
 */
export const Colors: Record<ColorName, ColorToken> = {
  surface: {
    default: { value: "var(--color-white)", type: "color", description: "Default application surface." },
    muted: { value: "var(--color-neutral-100)", type: "color", description: "Muted section or control surface." },
    elevated: { value: "var(--color-white)", type: "color", description: "Elevated card, popover, and dialog surface." },
    inverse: { value: "var(--color-neutral-900)", type: "color", description: "Inverse surface." },
  },
  text: {
    primary: { value: "var(--color-neutral-900)", type: "color", description: "High-emphasis text." },
    secondary: { value: "var(--color-neutral-600)", type: "color", description: "Secondary text." },
    muted: { value: "var(--color-neutral-500)", type: "color", description: "Low-emphasis text." },
    disabled: { value: "var(--color-neutral-400)", type: "color", description: "Disabled text." },
    inverse: { value: "var(--color-white)", type: "color", description: "Text displayed on a strong or inverse surface." },
  },
  border: {
    default: { value: "var(--color-neutral-200)", type: "color", description: "Default border." },
    subtle: { value: "var(--color-neutral-100)", type: "color", description: "Low-emphasis divider." },
    focus: { value: "{color.semantic.action.primary}", type: "color", description: "Focused control border." },
    danger: { value: "{color.semantic.status.danger}", type: "color", description: "Invalid control border." },
  },
  action: {
    primary: { value: "var(--color-orange-500)", type: "color", description: "Primary action." },
    primaryHover: { value: "var(--color-orange-400)", type: "color", description: "Primary action hover." },
    primaryPressed: { value: "var(--color-orange-600)", type: "color", description: "Primary action pressed." },
    secondary: { value: "var(--color-neutral-100)", type: "color", description: "Secondary action surface." },
    ghostHover: { value: "var(--color-neutral-100)", type: "color", description: "Ghost action hover surface." },
    disabled: { value: "var(--color-neutral-100)", type: "color", description: "Disabled action surface." },
  },
  status: {
    danger: { value: "var(--color-red-500)", type: "color", description: "Danger and destructive state." },
    dangerHover: { value: "var(--color-red-600)", type: "color", description: "Danger hover state." },
    success: { value: "var(--color-teal-600)", type: "color", description: "Success and confirmed state." },
  },
  brand: {
    default: { value: "var(--color-orange-400)", type: "color", description: "Brand surface." },
    hover: { value: "var(--color-orange-300)", type: "color", description: "Brand surface hover." },
    strong: { value: "var(--color-orange-500)", type: "color", description: "Strong brand text and border." },
    subtle: { value: "var(--color-orange-50)", type: "color", description: "Subtle brand surface." },
    foreground: { value: "var(--color-white)", type: "color", description: "Text displayed on a brand surface." },
  },
  calendar: {
    today: { value: "var(--color-sky-50)", type: "color", description: "Today marker surface." },
    event: { value: "{color.semantic.brand.subtle}", type: "color", description: "Calendar event surface." },
    eventForeground: { value: "{color.semantic.brand.strong}", type: "color", description: "Calendar event text and border." },
    eventBorder: { value: "{color.semantic.brand.strong}", type: "color", description: "Calendar event border." },
  },
} as const satisfies Record<ColorName, ColorToken>;
