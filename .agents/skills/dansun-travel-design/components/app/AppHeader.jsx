import React from "react";
import { Icon } from "../icons/Icon.jsx";
import { Popover } from "../overlays/Popover.jsx";

export function AppHeader({ variant = "global", title = "단순여행", avatarSrc, onBack, theme = "light", onThemeChange, onProfile, onSignOut }) {
  return (
    <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)",
      height: "var(--header-height)", padding: "0 var(--space-4)", background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-default)", boxSizing: "border-box" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 4, minWidth: 0 }}>
        {variant === "project" ? (
          <span onClick={onBack} style={{ display: "flex", cursor: "pointer", color: "var(--text-muted)" }}><Icon name="chevron-left" size={22} /></span>
        ) : null}
        <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          fontFamily: variant === "global" ? "var(--font-brand)" : "var(--font-sans)",
          fontSize: variant === "global" ? "1.25rem" : "1rem", fontWeight: 700, letterSpacing: variant === "global" ? "0.01em" : 0,
          color: variant === "project" ? "var(--brand-strong)" : "var(--text-primary)" }}>{title}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", flexShrink: 0 }}>
        <Popover align="end" width={140}
          trigger={<span style={{ display: "flex", padding: 8, borderRadius: "var(--radius-full)", color: "var(--text-secondary)" }}><Icon name="sun" size={20} /></span>}
          items={["system", "light", "dark"].map((t) => ({ label: t, selected: t === theme, onSelect: () => onThemeChange && onThemeChange(t) }))} />
        {avatarSrc ? (
          <Popover align="end" width={160}
            trigger={<img src={avatarSrc} alt="프로필 이미지" style={{ width: 26, height: 26, borderRadius: "var(--radius-full)", objectFit: "cover", cursor: "pointer" }} />}
            items={[{ label: "프로필", onSelect: onProfile }, { label: "로그아웃", onSelect: onSignOut }]} />
        ) : null}
      </div>
    </header>
  );
}
