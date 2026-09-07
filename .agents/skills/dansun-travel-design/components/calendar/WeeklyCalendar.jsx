import React from "react";

export function WeeklyCalendar({ children, height = "var(--calendar-viewport-md)", startHour = 7 }) {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const ref = React.useRef(null);
  React.useEffect(() => { if (ref.current) ref.current.scrollTop = startHour * 60; }, [startHour]);
  return (
    <div ref={ref} style={{ position: "relative", width: "100%", height, overflowY: "auto", background: "var(--surface-card)" }}>
      <div style={{ position: "relative", height: "var(--calendar-canvas-height)" }}>
        {hours.map((h) => (
          <div key={h} style={{ display: "flex", height: "var(--calendar-hour-height)", width: "100%", borderBottom: "1px solid var(--calendar-grid-line)", boxSizing: "border-box" }}>
            <div className="tabular" style={{ width: "14.2857%", fontSize: "var(--text-caption-size)", color: "var(--text-muted)", padding: "2px 6px" }}>{String(h).padStart(2, "0")}:00</div>
            <div style={{ width: "85.7143%" }} />
          </div>
        ))}
        <div style={{ position: "absolute", inset: 0, marginLeft: "14.2857%" }}>{children}</div>
      </div>
    </div>
  );
}
