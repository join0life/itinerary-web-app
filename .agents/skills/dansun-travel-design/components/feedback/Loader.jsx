import React from "react";

export function Loader({ label = "데이터를 불러오는 중입니다.", size = 24 }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "var(--space-5)", color: "var(--text-muted)" }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        style={{ animation: "dsSpin 1s linear infinite" }}><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
      {label ? <div style={{ fontSize: "var(--text-body-sm-size)" }}>{label}</div> : null}
      <style>{"@keyframes dsSpin{to{transform:rotate(360deg)}}"}</style>
    </div>
  );
}
