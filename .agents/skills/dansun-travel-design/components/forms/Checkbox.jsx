import React from "react";

export function Checkbox({ checked, onChange, disabled, label, id }) {
  const box = {
    width: 18, height: 18, flexShrink: 0, borderRadius: 5, display: "grid", placeItems: "center",
    border: "1px solid " + (checked ? "var(--action-primary)" : "var(--border-default)"),
    background: checked ? "var(--action-primary)" : "var(--surface-card)",
    color: "var(--action-primary-foreground)", transition: "var(--transition-control)",
  };
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1 }}
      onClick={() => !disabled && onChange && onChange(!checked)}>
      <span id={id} role="checkbox" aria-checked={!!checked} style={box}>
        {checked ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        ) : null}
      </span>
      {label ? <span style={{ fontSize: "var(--text-body-size)", color: "var(--text-primary)" }}>{label}</span> : null}
    </span>
  );
}
