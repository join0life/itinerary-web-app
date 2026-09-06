import React from "react";

export function Label({ children, htmlFor, muted, style }) {
  return (
    <label htmlFor={htmlFor} style={{ display: "flex", alignItems: "center", gap: 8,
      fontFamily: "var(--font-sans)", fontSize: "var(--text-body-sm-size)", fontWeight: 500, lineHeight: 1,
      color: muted ? "var(--text-muted)" : "var(--text-secondary)", userSelect: "none", ...style }}>
      {children}
    </label>
  );
}
