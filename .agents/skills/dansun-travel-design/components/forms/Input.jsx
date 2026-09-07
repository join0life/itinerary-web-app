import React from "react";

export function Input({ invalid, disabled, leadingIcon, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const wrap = { display: "flex", alignItems: "center", gap: 8, height: "var(--control-height-md)", padding: "0 12px",
    background: disabled ? "var(--surface-muted)" : "var(--surface-card)",
    border: "1px solid " + (invalid ? "var(--border-danger)" : focus ? "var(--border-focus)" : "var(--border-default)"),
    borderRadius: "var(--radius-input)", boxShadow: focus ? "var(--focus-ring)" : "none",
    transition: "var(--transition-control)", ...style };
  const field = { flex: 1, minWidth: 0, border: 0, outline: "none", background: "transparent",
    font: "inherit", fontSize: "var(--text-body-size)", color: disabled ? "var(--text-disabled)" : "var(--text-primary)" };
  return (
    <div style={wrap}>
      {leadingIcon ? <span style={{ display: "flex", color: "var(--text-muted)" }}>{leadingIcon}</span> : null}
      <input disabled={disabled} aria-invalid={invalid || undefined} style={field}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest} />
    </div>
  );
}
