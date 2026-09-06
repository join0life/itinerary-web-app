import React from "react";

const TONE_BG = { neutral: "var(--surface-muted)", brand: "var(--brand-subtle)", success: "var(--color-secondary-50)", outline: "transparent" };
const TONE_FG = { neutral: "var(--text-secondary)", brand: "var(--brand-strong)", success: "var(--status-success)", outline: "var(--text-secondary)" };

export function Badge({ tone = "neutral", children, style }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 8px",
      borderRadius: "var(--radius-sm)", background: TONE_BG[tone], color: TONE_FG[tone],
      border: tone === "outline" ? "1px solid var(--border-default)" : "1px solid transparent",
      fontSize: "var(--text-caption-size)", fontWeight: "var(--text-caption-weight)", lineHeight: "var(--text-caption-line)", ...style }}>
      {children}
    </span>
  );
}
