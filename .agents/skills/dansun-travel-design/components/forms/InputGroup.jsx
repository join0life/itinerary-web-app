import React from "react";

export function InputGroup({ children, style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div role="group" onFocusCapture={() => setFocus(true)} onBlurCapture={() => setFocus(false)}
      style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", height: "var(--control-height-md)",
        padding: "0 12px", boxSizing: "border-box", background: "var(--surface-card)",
        border: "1px solid " + (focus ? "var(--border-focus)" : "var(--border-default)"),
        borderRadius: "var(--radius-input)", boxShadow: focus ? "var(--focus-ring)" : "none",
        transition: "var(--transition-control)", ...style }}>
      {children}
    </div>
  );
}

export function InputGroupAddon({ children, align = "start" }) {
  return <span style={{ display: "flex", alignItems: "center", color: "var(--text-muted)", order: align === "end" ? 2 : 0 }}>{children}</span>;
}

export function InputGroupInput({ style, ...rest }) {
  return <input style={{ flex: 1, order: 1, minWidth: 0, border: 0, outline: "none", background: "transparent",
    font: "inherit", fontFamily: "var(--font-sans)", fontSize: "var(--text-body-size)", color: "var(--text-primary)", ...style }} {...rest} />;
}
