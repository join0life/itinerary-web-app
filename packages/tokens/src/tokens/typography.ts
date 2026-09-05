// packages/tokens/src/tokens/typography.ts
/**
 * Semantic typography tokens.
 *
 * 폰트 패밀리, 캘린더 레이블 폰트 사이즈 등 타이포그래피 의미론적 토큰.
 * - sans: 한글 친화적 기본 폰트 (Noto Sans KR)
 * - brand: 디스플레이용 브랜드 폰트 (JejuStoneWall)
 */

export interface FontFamilyValue {
  value: string;
  type: "fontFamily";
  description?: string;
}

export interface FontToken {
  [key: string]: FontFamilyValue | number;
}

export type FontFamilyName = "sans" | "brand";

export interface TypographyValue {
  value: string;
  type: "fontSize";
  description?: string;
}

export type TypographyName = "calendarLabel";

/**
 * Font family tokens.
 */
export const FontFamily: Record<FontFamilyName, FontFamilyValue> = {
  sans: {
    value: '"Noto Sans KR", system-ui, sans-serif',
    type: "fontFamily",
    description: "Default Korean-friendly sans font.",
  },
  brand: {
    value: '"JejuStoneWall", "Noto Sans KR", sans-serif',
    type: "fontFamily",
    description: "Brand display font.",
  },
} as const satisfies Record<FontFamilyName, FontFamilyValue>;

/**
 * Typography semantic tokens.
 */
export const Typography: Record<TypographyName, TypographyValue> = {
  calendarLabel: {
    value: "0.8rem",
    type: "fontSize",
    description: "Compact calendar label size without an exact Tailwind utility.",
  },
} as const satisfies Record<TypographyName, TypographyValue>;
