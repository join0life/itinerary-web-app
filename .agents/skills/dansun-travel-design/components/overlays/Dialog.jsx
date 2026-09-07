import React from "react";

export function Dialog({ open = true, title, onClose, footer, children, width = 480, style }) {
  if (!open) return null;
  return (
    <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center",
      background: "var(--overlay)", padding: "var(--space-4)", zIndex: 50 }}>
      <div role="dialog" aria-label={title} style={{ width: "100%", maxWidth: width, boxSizing: "border-box",
        background: "var(--surface-elevated)", borderRadius: "var(--radius-modal)",
        border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-modal)",
        padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-5)", ...style }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-3)" }}>
          <div style={{ fontSize: "var(--text-h4-size)", fontWeight: "var(--text-h4-weight)", lineHeight: 1.3, color: "var(--text-primary)" }}>{title}</div>
          {onClose ? (
            <button type="button" onClick={onClose} aria-label="닫기"
              style={{ border: 0, background: "transparent", cursor: "pointer", color: "var(--text-muted)", padding: 4, lineHeight: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>
          ) : null}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>{children}</div>
        {footer ? <div style={{ display: "flex", gap: "var(--space-2)" }}>{footer}</div> : null}
      </div>
    </div>
  );
}
