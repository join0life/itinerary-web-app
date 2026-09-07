import React from "react";
import { Checkbox } from "../forms/Checkbox.jsx";
import { Icon } from "../icons/Icon.jsx";

export function TodoItem({ title, confirmed, onToggle, onEdit, onDelete }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", minWidth: 0 }}>
        <Checkbox checked={confirmed} onChange={onToggle} />
        <span style={{ fontSize: "var(--text-body-size)", color: confirmed ? "var(--text-muted)" : "var(--text-primary)",
          textDecoration: confirmed ? "line-through" : "none", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</span>
      </div>
      <div style={{ display: "flex", gap: "var(--space-2)", color: "var(--text-muted)", flexShrink: 0 }}>
        <span onClick={onEdit} style={{ display: "flex", cursor: "pointer" }}><Icon name="pencil" size={16} /></span>
        <span onClick={onDelete} style={{ display: "flex", cursor: "pointer" }}><Icon name="trash-2" size={16} /></span>
      </div>
    </div>
  );
}
