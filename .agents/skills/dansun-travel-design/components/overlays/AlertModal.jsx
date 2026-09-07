import React from "react";
import { Button } from "../forms/Button.jsx";

export function AlertModal({ open = true, title, description, confirmLabel = "확인", cancelLabel = "취소", onConfirm, onCancel }) {
  if (!open) return null;
  return (
    <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "var(--overlay)", padding: "var(--space-4)", zIndex: 60 }}>
      <div role="alertdialog" style={{ width: "100%", maxWidth: 420, boxSizing: "border-box", background: "var(--surface-elevated)",
        borderRadius: "var(--radius-modal)", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-modal)",
        padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          <div style={{ fontSize: "var(--text-h4-size)", fontWeight: "var(--text-h4-weight)", color: "var(--text-primary)" }}>{title}</div>
          {description ? <div style={{ fontSize: "var(--text-body-sm-size)", lineHeight: "var(--text-body-sm-line)", color: "var(--text-muted)" }}>{description}</div> : null}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "var(--space-2)" }}>
          <Button variant="ghost" onClick={onCancel}>{cancelLabel}</Button>
          <Button onClick={onConfirm}>{confirmLabel}</Button>
        </div>
      </div>
    </div>
  );
}
