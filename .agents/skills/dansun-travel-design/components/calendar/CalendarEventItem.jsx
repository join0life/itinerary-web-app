import React from "react";

const HOUR_HEIGHT = 60;

export function CalendarEventItem({ title, startHour = 9, startMinute = 0, endHour = 11, endMinute = 0, columnIndex = 0, onClick }) {
  const startMinutes = startHour * 60 + startMinute;
  const endMinutes = endHour * 60 + endMinute;
  const overlap = columnIndex === 0 ? { left: "15%", zIndex: 1 } : { left: "50%", zIndex: 2 };
  const pad = (n) => String(n).padStart(2, "0");
  return (
    <div onClick={onClick} style={{ position: "absolute", right: 0, width: "100%", ...overlap,
      top: startMinutes * (HOUR_HEIGHT / 60), height: (endMinutes - startMinutes) * (HOUR_HEIGHT / 60),
      minHeight: "var(--calendar-event-min-height)", boxSizing: "border-box",
      background: "var(--calendar-event)", borderLeft: "3px solid var(--calendar-event-foreground)",
      borderRadius: "var(--radius-sm)", padding: "12px 8px", cursor: "pointer" }}>
      <p style={{ margin: 0, fontSize: "var(--text-body-sm-size)", fontWeight: 600, color: "var(--calendar-event-foreground)",
        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</p>
      <span className="tabular" style={{ fontSize: "var(--text-caption-size)", color: "var(--calendar-event-foreground)" }}>
        {pad(startHour)}:{pad(startMinute)} ~ {pad(endHour)}:{pad(endMinute)}
      </span>
    </div>
  );
}
