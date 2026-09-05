const { CreateTodoPrompt, TodoItem, Dialog, Input, Textarea, Label, Switch, Button, Empty, Toast } = window.DesignSystem_2c1582;

function TodoScreen({ groups, onToggle, onCreate }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
      <CreateTodoPrompt onClick={onCreate} />
      {groups.length === 0 ? (
        <Empty title="등록된 일정이 없습니다." description="첫 번째 일정을 등록해 보세요." />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
          {groups.map((g) => (
            <div key={g.owner} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <img src={g.avatar} alt="" style={{ width: 24, height: 24, borderRadius: "var(--radius-full)", objectFit: "cover" }} />
                <div style={{ fontSize: "var(--text-body-sm-size)", fontWeight: 600 }}>{g.owner}</div>
              </div>
              {g.items.map((it) => (
                <TodoItem key={it.id} title={it.title} confirmed={it.confirmed} onToggle={() => onToggle(g.owner, it.id)} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TodoEditorDialog({ onClose, onSubmit }) {
  const [title, setTitle] = React.useState("");
  const [allday, setAllday] = React.useState(false);
  const [location, setLocation] = React.useState("");
  const [memo, setMemo] = React.useState("");
  return (
    <Dialog title="새 일정 만들기" onClose={onClose}
      footer={<><Button variant="ghost" fullWidth onClick={onClose}>취소</Button>
        <Button fullWidth onClick={() => title.trim() && onSubmit(title)}>확인</Button></>}>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label htmlFor="tt">제목</Label>
        <Input id="tt" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="무엇을 할까요?" /></div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Label htmlFor="ta">하루종일</Label><Switch id="ta" checked={allday} onChange={setAllday} /></div>
      <div style={{ display: "flex", gap: "var(--space-3)" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}><Label>시작</Label>
          <Input defaultValue={allday ? "2026. 09. 08" : "2026. 09. 08 09:00"} /></div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}><Label>종료</Label>
          <Input defaultValue={allday ? "2026. 09. 08" : "2026. 09. 08 11:00"} /></div></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label htmlFor="tl">위치</Label>
        <Input id="tl" value={location} onChange={(e) => setLocation(e.target.value)} /></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label htmlFor="tm">메모</Label>
        <Textarea id="tm" rows={2} value={memo} onChange={(e) => setMemo(e.target.value)} /></div>
    </Dialog>
  );
}
Object.assign(window, { TodoScreen, TodoEditorDialog });
