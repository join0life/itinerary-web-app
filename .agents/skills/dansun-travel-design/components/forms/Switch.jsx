import React from "react";

export function Switch({ checked, onChange, disabled, id }) {
  return (
    <button type="button" id={id} role="switch" aria-checked={!!checked} disabled={disabled}
      onClick={() => onChange && onChange(!checked)}
      style={{ width: 56, height: 32, flexShrink: 0, padding: 2, borderRadius: "var(--radius-full)", border: "1px solid transparent",
        background: checked ? "var(--action-primary)" : "var(--border-default)",
        cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1,
        transition: "var(--transition-control)", display: "flex", alignItems: "center" }}>
      <span style={{ width: 28, height: 28, borderRadius: "var(--radius-full)", background: "var(--surface-card)",
        transform: checked ? "translateX(24px)" : "translateX(0)", transition: "transform var(--duration-fast) var(--ease-out)" }} />
    </button>
  );
}
