// packages/tokens/src/utils.ts
/**
 * 유틸리티 함수: 디자인 토큰 참조 해석 및 값 조회.
 *
 * 지원하는 참조 형식:
 * - "{color.semantic.action.primary}"  → 내부 참조 (다른 토큰의 value)
 * - "var(--color-orange-500)"          → CSS 변수 (그대로 반환)
 * - "rgb(255 255 255 / 0.12)"          → 직접 값 (그대로 반환)
 */

import type { TokenPath } from "./types";
import { Colors } from "./tokens/colors";
import { Layout } from "./tokens/layout";
import { Typography, FontFamily } from "./tokens/typography";
import { ThemeTokens } from "./tokens/theme";

type TokenTree = Record<string, unknown>;

/** 전체 토큰 트리 */
const tokenTrees: Record<string, TokenTree> = {
  color: Colors,
  layout: Layout,
  typography: { fontFamily: FontFamily, ...Typography },
  theme: ThemeTokens,
};

/**
 * 토큰 참조 해석.
 * - "{path.to.token}" 형식: 내부 참조를 재귀적으로 해석
 * - "var(--name)": CSS 변수, 그대로 반환
 * - 그 외: 직접 값, 그대로 반환
 */
export function resolveToken(tokenValue: string, depth = 0): string {
  if (depth > 10) return tokenValue; // 순환 참조 방지

  // 내부 참조: {color.semantic.action.primary}
  const refMatch = tokenValue.match(/^\{(.+)\}$/);
  if (refMatch) {
    const referenced = getSemanticToken(refMatch[1] as TokenPath);
    if (referenced !== undefined) {
      return resolveToken(referenced, depth + 1);
    }
  }

  return tokenValue;
}

/**
 * 의미론적 토큰 경로로부터 값 조회.
 * @example getSemanticToken("color.semantic.action.primary")
 */
export function getSemanticToken(path: TokenPath): string | undefined {
  const parts = path.split(".");
  let current: unknown = tokenTrees;

  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      const obj = current as Record<string, unknown>;
      const next = obj[part];
      if (next && typeof next === "object" && "value" in next) {
        return (next as { value: string }).value as string;
      }
      current = next;
    } else {
      return undefined;
    }
  }

  return undefined;
}

/**
 * 특정 카테고리의 모든 토큰을 평면화(flake)하여 반환.
 * @example flattenTokens("color") → { "color.semantic.action.primary": "var(--color-orange-500)", ... }
 */
export function flattenTokens(category: string): Record<string, string> {
  const result: Record<string, string> = {};
  const tree = tokenTrees[category];
  if (!tree) return result;

  function walk(obj: Record<string, unknown>, prefix: string) {
    for (const [key, val] of Object.entries(obj)) {
      if (val && typeof val === "object" && "value" in val && "type" in val) {
        const token = val as { value: string };
        result[`${prefix}.${key}`] = resolveToken(token.value);
      } else if (val && typeof val === "object") {
        walk(val as Record<string, unknown>, `${prefix}.${key}`);
      }
    }
  }

  walk(tree, category);
  return result;
}
