import React from "react";

export function Select({ options = [], value, onChange, placeholder, disabled, style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <span style={{ position: "relative", display: "inline-flex", alignItems: "center", ...style }}>
      <select value={value ?? ""} disabled={disabled} onChange={(e) => onChange && onChange(e.target.value)}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ appearance: "none", height: "var(--control-height-md)", padding: "0 34px 0 12px",
          font: "inherit", fontFamily: "var(--font-sans)", fontSize: "var(--text-body-size)",
          color: value ? "var(--text-primary)" : "var(--text-muted)",
          background: disabled ? "var(--surface-muted)" : "var(--surface-card)",
          border: "1px solid " + (focus ? "var(--border-focus)" : "var(--border-default)"),
          borderRadius: "var(--radius-input)", boxShadow: focus ? "var(--focus-ring)" : "none",
          outline: "none", cursor: disabled ? "not-allowed" : "pointer", transition: "var(--transition-control)" }}>
        {placeholder ? <option value="" disabled>{placeholder}</option> : null}
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        style={{ position: "absolute", right: 10, pointerEvents: "none", color: "var(--text-muted)" }}><path d="m6 9 6 6 6-6" /></svg>
    </span>
  );
}
