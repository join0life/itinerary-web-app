import React from "react";

const TONES = {
  success: { color: "var(--status-success)", path: "M21.801 10A10 10 0 1 1 17 3.335" },
  error: { color: "var(--status-danger)", path: "m15 9-6 6M9 9l6 6" },
  warning: { color: "var(--status-warning)", path: "M12 9v4M12 17h.01" },
  info: { color: "var(--status-info)", path: "M12 16v-4M12 8h.01" },
};

export function Toast({ tone = "success", message, style }) {
  const t = TONES[tone] || TONES.success;
  return (
    <div role="status" style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)",
      padding: "12px 16px", background: "var(--surface-elevated)", border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-popover)",
      fontSize: "var(--text-body-sm-size)", color: "var(--text-primary)", ...style }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d={t.path} />
      </svg>
      <span>{message}</span>
    </div>
  );
}
