import React from "react";

export function Empty({ title, description, action, illustration }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      gap: "var(--space-3)", padding: "var(--space-10) var(--space-6)", textAlign: "center", color: "var(--text-muted)" }}>
      {illustration ? <div style={{ marginBottom: "var(--space-2)" }}>{illustration}</div> : null}
      <div style={{ fontSize: "var(--text-h5-size)", fontWeight: "var(--text-h5-weight)", color: "var(--text-secondary)" }}>{title}</div>
      {description ? <div style={{ fontSize: "var(--text-body-sm-size)" }}>{description}</div> : null}
      {action ? <div style={{ marginTop: "var(--space-2)" }}>{action}</div> : null}
    </div>
  );
}
