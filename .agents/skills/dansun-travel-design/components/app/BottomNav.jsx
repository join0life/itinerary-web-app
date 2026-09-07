import React from "react";
import { Icon } from "../icons/Icon.jsx";

const ITEMS = [
  { key: "home", icon: "home", label: "소개" },
  { key: "project", icon: "folder", label: "프로젝트" },
  { key: "todo", icon: "list-todo", label: "일정" },
  { key: "calendar", icon: "calendar", label: "캘린더" },
];

export function BottomNav({ active = "project", onChange }) {
  return (
    <nav style={{ display: "flex", alignItems: "center", justifyContent: "center",
      height: "var(--bottom-nav-height)", padding: "8px 4px", background: "var(--surface-card)",
      borderTop: "1px solid var(--border-default)", boxSizing: "border-box" }}>
      {ITEMS.map((it) => {
        const on = it.key === active;
        return (
          <div key={it.key} onClick={() => onChange && onChange(it.key)}
            style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, cursor: "pointer",
              color: on ? "var(--text-primary)" : "var(--text-muted)" }}>
            <Icon name={it.icon} size={20} />
            <div style={{ fontSize: "var(--text-caption-size)" }}>{it.label}</div>
          </div>
        );
      })}
    </nav>
  );
}
