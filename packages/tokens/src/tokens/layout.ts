// packages/tokens/src/tokens/layout.ts
/**
 * Semantic layout tokens.
 *
 * 앱 셸, 프로젝트 생성 액션, 캘린더 뷰포트 등 레이아웃 관련 의미론적 토큰.
 * 값은 직접 rem 단위로 지정되며, 반응형 브레이크포인트는 캘린더 뷰포트에 적용.
 */

export interface LayoutValue {
  value: string; // rem 또는 px 단위 문자열
  type: "sizing";
  description?: string;
}

export interface LayoutToken {
  [key: string]: LayoutValue | LayoutToken | Record<string, LayoutValue>;
}

export type LayoutName = "appShell" | "projectCreateAction" | "calendar";

export const Layout: Record<LayoutName, LayoutToken> = {
  appShell: {
    maxWidth: {
      value: "37.5rem",
      type: "sizing",
      description: "Maximum width of the centered mobile application shell.",
    },
  },
  projectCreateAction: {
    maxWidth: {
      value: "35.5rem",
      type: "sizing",
      description: "Maximum width of the floating create-project action.",
    },
  },
  calendar: {
    weekCanvasHeight: {
      value: "90rem",
      type: "sizing",
      description: "Scrollable weekly calendar canvas height.",
    },
    viewportHeight: {
      sm: {
        value: "32.5rem",
        type: "sizing",
        description: "Weekly calendar viewport at the small breakpoint.",
      },
      md: {
        value: "37.5rem",
        type: "sizing",
        description: "Weekly calendar viewport at the medium breakpoint.",
      },
      lg: {
        value: "42.5rem",
        type: "sizing",
        description: "Weekly calendar viewport at the large breakpoint.",
      },
    },
  },
} as const satisfies Record<LayoutName, LayoutToken>;
