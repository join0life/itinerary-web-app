import React from "react";

export function Card({ accentColor, muted, padding = "var(--space-4)", children, style, ...rest }) {
  return (
    <div style={{ background: muted ? "var(--surface-muted)" : "var(--surface-card)",
      borderRadius: "var(--radius-card)", padding,
      border: "1px solid var(--border-subtle)", boxShadow: muted ? "none" : "var(--shadow-card)",
      borderLeft: accentColor ? "4px solid " + accentColor : undefined,
      boxSizing: "border-box", ...style }} {...rest}>{children}</div>
  );
}

export function CardTitle({ children, style }) {
  return <div style={{ fontSize: "var(--text-h4-size)", fontWeight: "var(--text-h4-weight)", lineHeight: "var(--text-h4-line)", color: "var(--text-primary)", ...style }}>{children}</div>;
}

export function CardDescription({ children, style }) {
  return <div style={{ fontSize: "var(--text-body-sm-size)", lineHeight: "var(--text-body-sm-line)", color: "var(--text-muted)", ...style }}>{children}</div>;
}
