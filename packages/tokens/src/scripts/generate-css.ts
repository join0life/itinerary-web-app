// packages/tokens/src/scripts/generate-css.ts
/**
 * CSS 변수 자동 생성 스크립트.
 *
 * design-tokens.json을 기반으로:
 * 1. 의미론적 CSS 변수 (--color-semantic-*, --layout-semantic-*, --typography-semantic-*)
 * 2. shadcn 호환 CSS 변수 (--background, --foreground, --primary, ...)
 *
 * 출력: packages/tokens/styles/tokens.css
 */

import * as fs from "fs";
import * as path from "path";
import { Colors } from "../tokens/colors";
import { Layout } from "../tokens/layout";
import { Typography, FontFamily } from "../tokens/typography";
import { ThemeTokens } from "../tokens/theme";

const OUTPUT_PATH = path.join(__dirname, "../../styles/tokens.css");

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function toKebab(str: string): string {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
}

function extractTokens(
  obj: unknown,
  prefix: string[],
  out: { path: string; value: string; description?: string }[] = [],
  depth = 0,
): { path: string; value: string; description?: string }[] {
  if (depth > 15) return out;
  if (obj && typeof obj === "object" && "value" in obj && "type" in obj) {
    const token = obj as { value: string; type: string; description?: string };
    out.push({
      path: prefix.join("."),
      value: token.value,
      description: token.description,
    });
    return out;
  }
  if (obj && typeof obj === "object") {
    for (const [key, val] of Object.entries(obj)) {
      extractTokens(val, [...prefix, key], out, depth + 1);
    }
  }
  return out;
}

// ---------------------------------------------------------------------------
// Generate CSS
// ---------------------------------------------------------------------------

function generateCSS(): string {
  const lines: string[] = [];

  lines.push("/*");
  lines.push(" * Auto-generated design token CSS variables.");
  lines.push(" * Source: design-tokens.json (packages/tokens/src/design-tokens.json)");
  lines.push(" * Do not edit manually — run `pnpm --filter @dansun/travel-tokens gen:css`");
  lines.push(" */");
  lines.push("");

  // ---- Semantic color tokens (라이트 모드 기본값) ----
  lines.push("/* ============= Semantic Color Tokens (Light) ============= */");
  const colorTokens = extractTokens(Colors, ["color", "semantic"]);
  for (const t of colorTokens) {
    const varName = `--${t.path.replace(/\./g, "-")}`;
    lines.push(`  ${varName}: ${t.value};`);
  }
  lines.push("");

  // ---- Layout tokens ----
  lines.push("/* ============= Layout Tokens ============= */");
  const layoutTokens = extractTokens(Layout, ["layout", "semantic"]);
  for (const t of layoutTokens) {
    const varName = `--${t.path.replace(/\./g, "-")}`;
    lines.push(`  ${varName}: ${t.value};`);
  }
  lines.push("");

  // ---- Typography tokens ----
  lines.push("/* ============= Typography Tokens ============= */");
  lines.push(`  --typography-semantic-font-family-sans: ${FontFamily.sans.value};`);
  lines.push(`  --typography-semantic-font-family-brand: ${FontFamily.brand.value};`);
  lines.push(`  --typography-semantic-calendar-label-font-size: ${Typography.calendarLabel.value};`);
  lines.push("");

  // ---- Dark mode overrides ----
  lines.push("/* ============= Dark Mode Semantic Overrides ============= */");
  lines.push(".dark {");

  const darkTokens: Record<string, string> = {
    "--color-semantic-surface-default": "var(--color-neutral-950)",
    "--color-semantic-surface-muted": "var(--color-neutral-900)",
    "--color-semantic-surface-elevated": "var(--color-neutral-800)",
    "--color-semantic-text-primary": "var(--color-neutral-50)",
    "--color-semantic-text-secondary": "var(--color-neutral-300)",
    "--color-semantic-text-muted": "var(--color-neutral-400)",
    "--color-semantic-text-disabled": "var(--color-neutral-500)",
    "--color-semantic-text-inverse": "var(--color-neutral-950)",
    "--color-semantic-border-default": "rgb(255 255 255 / 0.12)",
    "--color-semantic-border-subtle": "rgb(255 255 255 / 0.08)",
    "--color-semantic-action-secondary": "var(--color-neutral-900)",
    "--color-semantic-action-ghost-hover": "rgb(255 255 255 / 0.08)",
    "--color-semantic-action-disabled": "var(--color-neutral-900)",
    "--color-semantic-status-success": "var(--color-teal-500)",
  };

  for (const [k, v] of Object.entries(darkTokens)) {
    lines.push(`  ${k}: ${v};`);
  }

  // Dark mode accent (shadcn)
  lines.push(`  --accent: rgb(20 184 166 / 0.14);`);

  lines.push("}");
  lines.push("");

  // ---- shadcn 호환 변수 매핑 ----
  lines.push("/* ============= Shadcn/PandaCSS Theme Mapping ============= */");
  lines.push(":root {");

  const light = ThemeTokens.light;
  const darkTheme = ThemeTokens.dark;

  for (const [key, token] of Object.entries(light)) {
    lines.push(`  --${key}: ${token.value};`);
  }
  lines.push("}");

  lines.push("");

  // ---- Tailwind CSS 변수 매핑 (@theme inline) ----
  lines.push("/* ============= Tailwind CSS @theme Inline Mapping ============= */");
  lines.push("@theme inline {");

  // Font families
  lines.push(`  --font-sans: ${FontFamily.sans.value};`);
  lines.push(`  --font-brand: ${FontFamily.brand.value};`);

  // shadcn 호환 변수
  for (const key of Object.keys(light)) {
    lines.push(`  --color-${key}: var(--${key});`);
  }

  // Semantic action/layout/calendar 변수
  lines.push(`  --color-action-primary-hover: var(--color-semantic-action-primary-hover);`);
  lines.push(`  --color-action-primary-pressed: var(--color-semantic-action-primary-pressed);`);
  lines.push(`  --color-disabled: var(--color-semantic-action-disabled);`);
  lines.push(`  --color-disabled-foreground: var(--color-semantic-text-disabled);`);
  lines.push(`  --color-status-danger-hover: var(--color-semantic-status-danger-hover);`);
  lines.push(`  --color-brand: var(--color-semantic-brand-default);`);
  lines.push(`  --color-brand-hover: var(--color-semantic-brand-hover);`);
  lines.push(`  --color-brand-strong: var(--color-semantic-brand-strong);`);
  lines.push(`  --color-brand-subtle: var(--color-semantic-brand-subtle);`);
  lines.push(`  --color-brand-foreground: var(--color-semantic-brand-foreground);`);
  lines.push(`  --color-calendar-today: var(--color-semantic-calendar-today);`);
  lines.push(`  --color-calendar-event: var(--color-semantic-calendar-event);`);
  lines.push(`  --color-calendar-event-foreground: var(--color-semantic-calendar-event-foreground);`);
  lines.push(`  --color-calendar-event-border: var(--color-semantic-calendar-event-foreground);`);
  lines.push(`  --container-app-shell: var(--layout-semantic-app-shell-max-width);`);
  lines.push(`  --container-project-create: var(--layout-semantic-project-create-action-max-width);`);
  lines.push(`  --spacing-calendar-canvas-height: var(--layout-semantic-calendar-week-canvas-height);`);
  lines.push(`  --spacing-calendar-viewport-sm: var(--layout-semantic-calendar-viewport-height-sm);`);
  lines.push(`  --spacing-calendar-viewport-md: var(--layout-semantic-calendar-viewport-height-md);`);
  lines.push(`  --spacing-calendar-viewport-lg: var(--layout-semantic-calendar-viewport-height-lg);`);
  lines.push(`  --text-calendar-label: var(--typography-semantic-calendar-label-font-size);`);

  lines.push("}");
  lines.push("");

  // ---- Base styles ----
  lines.push("/* ============= Base Styles ============= */");
  lines.push("@layer base {");
  lines.push("  * {");
  lines.push("    @apply border-border outline-ring/50;");
  lines.push("  }");
  lines.push("");
  lines.push("  body {");
  lines.push("    @apply bg-background text-foreground font-sans;");
  lines.push("  }");
  lines.push("}");
  lines.push("");

  // ---- Custom variant for dark ----
  lines.push("@custom-variant dark (&:where(.dark, .dark *));");
  lines.push("");

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const css = generateCSS();
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, css, "utf-8");
  console.log(`✅ Generated ${OUTPUT_PATH} (${css.length} bytes)`);
}

main();
