import React from "react";

export function Popover({ trigger, items = [], align = "end", width = 160 }) {
  const [open, setOpen] = React.useState(false);
  return (
    <span style={{ position: "relative", display: "inline-flex" }}>
      <span onClick={() => setOpen(!open)} style={{ display: "inline-flex", cursor: "pointer" }}>{trigger}</span>
      {open ? (
        <div style={{ position: "absolute", top: "calc(100% + 6px)", right: align === "end" ? 0 : undefined, left: align === "start" ? 0 : undefined,
          width, background: "var(--surface-elevated)", border: "1px solid var(--border-default)",
          borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-popover)", overflow: "hidden", zIndex: 40 }}>
          {items.map((it) => (
            <div key={it.label} onClick={() => { setOpen(false); it.onSelect && it.onSelect(); }}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "12px 16px", fontSize: "var(--text-body-sm-size)", color: "var(--text-primary)", cursor: "pointer" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface-muted)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
              <span>{it.label}</span>
              {it.selected ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </span>
  );
}
