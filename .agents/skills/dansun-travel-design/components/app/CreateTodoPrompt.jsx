import React from "react";
import { Icon } from "../icons/Icon.jsx";

export function CreateTodoPrompt({ label = "어떤 일정을 만들까요?", onClick }) {
  return (
    <div onClick={onClick} style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "var(--space-4)", background: "var(--surface-muted)", color: "var(--text-muted)",
      borderRadius: "var(--radius-lg)", cursor: "pointer", fontSize: "var(--text-body-size)" }}>
      <div>{label}</div>
      <Icon name="plus-circle" size={24} />
    </div>
  );
}
