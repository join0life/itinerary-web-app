import React from "react";
import { Button } from "../forms/Button.jsx";

export function ProfileSummary({ avatarSrc, nickname, bio, editable, onEdit }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-5)" }}>
      <img src={avatarSrc} alt="프로필 이미지" style={{ width: 120, height: 120, borderRadius: "var(--radius-full)", objectFit: "cover", background: "var(--surface-muted)" }} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-2)" }}>
        <div style={{ fontSize: "var(--text-h3-size)", fontWeight: 700, color: "var(--text-primary)" }}>{nickname}</div>
        {bio ? <div style={{ fontSize: "var(--text-body-size)", color: "var(--text-muted)" }}>{bio}</div> : null}
      </div>
      {editable ? <Button variant="ghost" size="sm" onClick={onEdit}>프로필 수정</Button> : null}
    </div>
  );
}
