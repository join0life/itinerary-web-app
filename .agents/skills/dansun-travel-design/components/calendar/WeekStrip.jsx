import React from "react";
import { Icon } from "../icons/Icon.jsx";

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];

export function WeekStrip({ monthLabel, dates = [], selectedIndex = 0, onSelect, onPrev, onNext }) {
  return (
    <div style={{ background: "var(--surface-card)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 var(--space-4) var(--space-6)", borderBottom: "1px solid var(--border-default)" }}>
        <span onClick={onPrev} style={{ cursor: "pointer", color: "var(--text-muted)", display: "flex" }}><Icon name="chevron-left" size={22} /></span>
        <div style={{ fontSize: "var(--text-h3-size)", fontWeight: "var(--text-h3-weight)", color: "var(--text-primary)" }}>{monthLabel}</div>
        <span onClick={onNext} style={{ cursor: "pointer", color: "var(--text-muted)", display: "flex" }}><Icon name="chevron-right" size={22} /></span>
      </div>
      <div style={{ display: "flex" }}>
        {DAYS.map((d, i) => (
          <div key={d} style={{ width: "14.2857%", padding: "var(--space-2)", textAlign: "center",
            fontSize: "var(--text-body-sm-size)", color: i === 0 || i === 6 ? "var(--text-muted)" : "var(--text-secondary)",
            borderLeft: i === 0 ? "none" : "1px solid var(--border-subtle)", boxSizing: "border-box" }}>{d}</div>
        ))}
      </div>
      <div style={{ display: "flex", marginBottom: 4 }}>
        {dates.map((n, i) => {
          const selected = i === selectedIndex;
          return (
            <div key={i} onClick={() => onSelect && onSelect(i)}
              style={{ width: "14.2857%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
                padding: "var(--space-2)", cursor: "pointer", boxSizing: "border-box",
                borderLeft: i === 0 ? "none" : "1px solid var(--border-subtle)" }}>
              {selected ? <span style={{ position: "absolute", width: 36, height: 36, borderRadius: "var(--radius-full)", background: "var(--brand)" }} /> : null}
              <span className="tabular" style={{ position: "relative", fontWeight: 600,
                color: selected ? "var(--brand-foreground)" : i === 0 || i === 6 ? "var(--text-muted)" : "var(--text-primary)" }}>{n}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
