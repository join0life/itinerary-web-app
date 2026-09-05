// packages/tokens/src/types.ts
/**
 * Design token type definitions.
 * Based on W3C Design Tokens Community Group (DTCG) format.
 */

export interface DesignToken {
  value: string;
  type: TokenType;
  description?: string;
}

export type TokenType =
  | "color"
  | "fontFamily"
  | "fontSize"
  | "fontWeight"
  | "lineHeight"
  | "letterSpacing"
  | "sizing"
  | "spacing"
  | "borderRadius"
  | "borderWidth"
  | "shadow"
  | "opacity"
  | "duration"
  | "number"
  | "string";

export interface DesignTokens {
  meta?: {
    name: string;
    version: string;
    description: string;
    primitiveSource?: string;
  };
  color?: Record<string, unknown>;
  layout?: Record<string, unknown>;
  typography?: Record<string, unknown>;
  theme?: Record<string, unknown>;
  [key: string]: unknown;
}

/** A dot-notation path to a token, e.g. "color.semantic.action.primary" */
export type TokenPath = string;
