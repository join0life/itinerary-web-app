import React from "react";

export function Textarea({ invalid, disabled, rows = 3, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <textarea rows={rows} disabled={disabled} aria-invalid={invalid || undefined}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{ width: "100%", minHeight: 64, padding: "10px 12px", boxSizing: "border-box", resize: "vertical",
        font: "inherit", fontFamily: "var(--font-sans)", fontSize: "var(--text-body-size)",
        lineHeight: "var(--text-body-line)", color: disabled ? "var(--text-disabled)" : "var(--text-primary)",
        background: disabled ? "var(--surface-muted)" : "var(--surface-card)",
        border: "1px solid " + (invalid ? "var(--border-danger)" : focus ? "var(--border-focus)" : "var(--border-default)"),
        borderRadius: "var(--radius-input)", outline: "none",
        boxShadow: focus ? "var(--focus-ring)" : "none", transition: "var(--transition-control)", ...style }}
      {...rest} />
  );
}
