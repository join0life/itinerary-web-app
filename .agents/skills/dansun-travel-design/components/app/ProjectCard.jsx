import React from "react";
import { Badge } from "../feedback/Badge.jsx";
import { Button } from "../forms/Button.jsx";

export function ProjectCard({ name, description, owner, joined, onJoin, onDelete, onClick }) {
  return (
    <article onClick={onClick} style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)",
      height: 160, boxSizing: "border-box", padding: "var(--space-6)", background: "var(--surface-muted)",
      borderRadius: "var(--radius-lg)", cursor: "pointer" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)" }}>
        <h3 style={{ margin: 0, fontSize: "var(--text-h4-size)", fontWeight: 600, color: "var(--text-primary)",
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</h3>
        <div style={{ flexShrink: 0 }}>
          {onDelete ? <Button variant="ghost" size="sm" onClick={onDelete}>삭제</Button>
            : <Button variant={joined ? "secondary" : "primary"} size="sm" onClick={onJoin}>{joined ? "입장" : "참여"}</Button>}
        </div>
      </header>
      <p style={{ margin: 0, flex: 1, fontSize: "var(--text-body-sm-size)", lineHeight: "var(--text-body-sm-line)", color: "var(--text-secondary)" }}>{description}</p>
      <footer><Badge tone="outline">{owner}</Badge></footer>
    </article>
  );
}
