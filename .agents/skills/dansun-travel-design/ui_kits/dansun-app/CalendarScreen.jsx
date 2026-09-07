const { WeekStrip, WeeklyCalendar, CalendarEventItem, AlldayEventBar, Dialog, Button, Label, Switch, Input, Textarea, Badge } = window.DesignSystem_2c1582;

function CalendarScreen({ events }) {
  const [sel, setSel] = React.useState(2);
  const [viewing, setViewing] = React.useState(null);
  return (
    <div style={{ position: "relative" }}>
      <div style={{ paddingTop: "var(--space-4)" }}>
        <WeekStrip monthLabel="2026년 9월" dates={[6, 7, 8, 9, 10, 11, 12]} selectedIndex={sel} onSelect={setSel} />
      </div>
      <div style={{ background: "var(--surface-muted)", borderBottom: "1px dashed var(--border-default)", padding: "4px 0", minHeight: 30 }}>
        <AlldayEventBar title="제주 여행" offsetDays={1} spanDays={4} onClick={() => setViewing({ title: "제주 여행", allday: true })} />
      </div>
      <WeeklyCalendar height="var(--calendar-viewport-sm)" startHour={6}>
        {events.map((e, i) => (
          <CalendarEventItem key={e.id} title={e.title} startHour={e.startHour} endHour={e.endHour}
            columnIndex={0} onClick={() => setViewing(e)} />
        ))}
      </WeeklyCalendar>
      {viewing ? (
        <Dialog title="일정 상세" onClose={() => setViewing(null)} footer={<Button fullWidth onClick={() => setViewing(null)}>확인</Button>}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label>제목</Label>
            <div style={{ fontSize: "var(--text-body-size)" }}>{viewing.title}</div></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label>하루종일</Label>
            <Switch checked={!!viewing.allday} /></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label>시작</Label>
            <div className="tabular" style={{ fontSize: "var(--text-body-size)" }}>
              {viewing.allday ? "2026. 09. 07" : `2026. 09. 08 ${String(viewing.startHour).padStart(2, "0")}:00`}</div></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label>종료</Label>
            <div className="tabular" style={{ fontSize: "var(--text-body-size)" }}>
              {viewing.allday ? "2026. 09. 10" : `2026. 09. 08 ${String(viewing.endHour).padStart(2, "0")}:00`}</div></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label>위치</Label><Input readOnly defaultValue="제주 서귀포시" /></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label>메모</Label><Textarea readOnly rows={2} defaultValue="" /></div>
        </Dialog>
      ) : null}
    </div>
  );
}
Object.assign(window, { CalendarScreen });
