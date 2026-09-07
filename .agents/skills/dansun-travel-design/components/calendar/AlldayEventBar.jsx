import React from "react";

export function AlldayEventBar({ title, offsetDays = 0, spanDays = 1, onClick }) {
  return (
    <div style={{ display: "flex", width: "100%" }} onClick={onClick}>
      {Array.from({ length: offsetDays }).map((_, i) => <div key={i} style={{ width: "14.2857%", flexShrink: 0 }} />)}
      <div style={{ width: (spanDays / 7) * 100 + "%", background: "var(--brand)", color: "var(--brand-foreground)",
        borderRadius: "var(--radius-sm)", padding: "4px 8px", marginBottom: 4, fontSize: "var(--text-caption-size)",
        fontWeight: 600, cursor: "pointer", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</div>
    </div>
  );
}
