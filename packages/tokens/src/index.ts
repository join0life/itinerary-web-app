// packages/tokens/src/index.ts
import type { Theme } from "@/types";

// ---------------------------------------------------------------------------
// Design Tokens
// ---------------------------------------------------------------------------

export type { DesignTokens } from "./types";

// Semantic color tokens
export { Colors } from "./tokens/colors";
export type { ColorName, ColorToken, ColorValue } from "./tokens/colors";

// Layout tokens
export { Layout } from "./tokens/layout";
export type { LayoutName, LayoutToken, LayoutValue } from "./tokens/layout";

// Typography tokens
export { Typography } from "./tokens/typography";
export type {
  FontFamilyName,
  FontFamilyToken,
  TypographyName,
  TypographyToken,
  TypographyValue,
} from "./tokens/typography";

// Theme tokens (shadcn-compatible)
export { ThemeTokens } from "./tokens/theme";
export type { ThemeKey, ThemeToken } from "./tokens/theme";

// Utils
export { getSemanticToken, resolveToken } from "./utils";
export type { TokenPath } from "./utils";
