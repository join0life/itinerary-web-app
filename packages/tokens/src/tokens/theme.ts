// packages/tokens/src/tokens/theme.ts
/**
 * shadcn/pandaCSS 호환 테마 토큰.
 *
 * design-tokens.json의 theme.light / theme.dark 섹션을 그대로 TypeScript 객체로 변환.
 * - shadcn UI 컴포넌트가 기대하는 CSS 변수명 (background, foreground, card, primary, etc.)을 매핑
 * - 라이트/다크 모드 각각의 의미론적 값을 제공
 */

export interface ThemeColorValue {
  value: string;
  type: "color";
  description?: string;
}

export interface ThemeToken {
  [key: string]: ThemeColorValue;
}

export type ThemeKey = "light" | "dark";

/**
 * 라이트 모드 테마 토큰 (shadcn 호환).
 */
export const ThemeTokens: Record<ThemeKey, ThemeToken> = {
  light: {
    background: { value: "{color.semantic.surface.default}", type: "color", description: "shadcn background." },
    foreground: { value: "{color.semantic.text.primary}", type: "color", description: "shadcn foreground." },
    card: { value: "{color.semantic.surface.elevated}", type: "color", description: "shadcn card." },
    "card-foreground": { value: "{color.semantic.text.primary}", type: "color", description: "shadcn card foreground." },
    popover: { value: "{color.semantic.surface.elevated}", type: "color", description: "shadcn popover." },
    "popover-foreground": { value: "{color.semantic.text.primary}", type: "color", description: "shadcn popover foreground." },
    primary: { value: "{color.semantic.action.primary}", type: "color", description: "shadcn primary." },
    "primary-foreground": { value: "{color.semantic.text.inverse}", type: "color", description: "shadcn primary foreground." },
    secondary: { value: "{color.semantic.action.secondary}", type: "color", description: "shadcn secondary." },
    "secondary-foreground": { value: "{color.semantic.text.primary}", type: "color", description: "shadcn secondary foreground." },
    muted: { value: "{color.semantic.surface.muted}", type: "color", description: "shadcn muted." },
    "muted-foreground": { value: "{color.semantic.text.muted}", type: "color", description: "shadcn muted foreground." },
    accent: { value: "var(--color-teal-50)", type: "color", description: "shadcn accent." },
    "accent-foreground": { value: "{color.semantic.text.primary}", type: "color", description: "shadcn accent foreground." },
    destructive: { value: "{color.semantic.status.danger}", type: "color", description: "shadcn destructive." },
    "destructive-foreground": { value: "{color.semantic.text.inverse}", type: "color", description: "shadcn destructive foreground." },
    border: { value: "{color.semantic.border.default}", type: "color", description: "shadcn border." },
    input: { value: "{color.semantic.border.default}", type: "color", description: "shadcn input border." },
    ring: { value: "{color.semantic.border.focus}", type: "color", description: "shadcn focus ring." },
  },
  dark: {
    background: { value: "{theme.dark.semantic.surface.default}", type: "color", description: "Dark shadcn background." },
    foreground: { value: "{theme.dark.semantic.text.primary}", type: "color", description: "Dark shadcn foreground." },
    card: { value: "{theme.dark.semantic.surface.elevated}", type: "color", description: "Dark shadcn card." },
    "card-foreground": { value: "{theme.dark.semantic.text.primary}", type: "color", description: "Dark shadcn card foreground." },
    popover: { value: "{theme.dark.semantic.surface.elevated}", type: "color", description: "Dark shadcn popover." },
    "popover-foreground": { value: "{theme.dark.semantic.text.primary}", type: "color", description: "Dark shadcn popover foreground." },
    primary: { value: "{color.semantic.action.primary}", type: "color", description: "Dark shadcn primary." },
    "primary-foreground": { value: "{theme.dark.semantic.text.inverse}", type: "color", description: "Dark shadcn primary foreground." },
    secondary: { value: "{theme.dark.semantic.action.secondary}", type: "color", description: "Dark shadcn secondary." },
    "secondary-foreground": { value: "{theme.dark.semantic.text.primary}", type: "color", description: "Dark shadcn secondary foreground." },
    muted: { value: "{theme.dark.semantic.surface.muted}", type: "color", description: "Dark shadcn muted." },
    "muted-foreground": { value: "{theme.dark.semantic.text.muted}", type: "color", description: "Dark shadcn muted foreground." },
    accent: { value: "rgb(20 184 166 / 0.14)", type: "color", description: "Dark shadcn accent." },
    "accent-foreground": { value: "{theme.dark.semantic.text.primary}", type: "color", description: "Dark shadcn accent foreground." },
    destructive: { value: "{color.semantic.status.danger}", type: "color", description: "Dark shadcn destructive." },
    "destructive-foreground": { value: "{theme.dark.semantic.text.inverse}", type: "color", description: "Dark shadcn destructive foreground." },
    border: { value: "{theme.dark.semantic.border.default}", type: "color", description: "Dark shadcn border." },
    input: { value: "{theme.dark.semantic.border.default}", type: "color", description: "Dark shadcn input border." },
    ring: { value: "{color.semantic.border.focus}", type: "color", description: "Dark shadcn focus ring." },
  },
} as const satisfies Record<ThemeKey, ThemeToken>;
