const { InputGroup, InputGroupAddon, InputGroupInput, Icon, ProjectCard, Button, Empty, Dialog, Input, Label, AlertModal } = window.DesignSystem_2c1582;

function ProjectScreen({ projects, onOpenProject, onCreate }) {
  const [q, setQ] = React.useState("");
  const list = projects.filter((p) => p.name.includes(q) || (p.description || "").includes(q));
  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
      <InputGroup>
        <InputGroupAddon><Icon name="search" size={16} /></InputGroupAddon>
        <InputGroupInput placeholder="키워드 입력..." value={q} onChange={(e) => setQ(e.target.value)} />
      </InputGroup>
      {list.length === 0 ? (
        <Empty title="등록된 프로젝트가 없습니다." description="첫 번째 프로젝트를 등록해 보세요." />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", paddingBottom: 80 }}>
          {list.map((p) => (
            <ProjectCard key={p.id} name={p.name} description={p.description} owner={p.owner} joined={p.joined}
              onClick={() => onOpenProject(p)} onJoin={() => onOpenProject(p)} />
          ))}
        </div>
      )}
      <div style={{ position: "sticky", bottom: 16, display: "flex", justifyContent: "center" }}>
        <Button size="lg" fullWidth onClick={onCreate} style={{ maxWidth: "var(--project-create-action-max-width)" }}>
          <Icon name="plus-circle" size={20} />새 프로젝트 추가
        </Button>
      </div>
    </div>
  );
}

function ProjectCreateDialog({ onClose, onSubmit }) {
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [confirmClose, setConfirmClose] = React.useState(false);
  const tryClose = () => (name || pw ? setConfirmClose(true) : onClose());
  return (
    <>
      <Dialog title="새 프로젝트 만들기" onClose={tryClose}
        footer={<><Button variant="ghost" fullWidth onClick={tryClose}>취소</Button>
          <Button fullWidth onClick={() => name.trim() && onSubmit({ name, description: desc || "설명이 없습니다." })}>확인</Button></>}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label htmlFor="pn">프로젝트 이름</Label>
          <Input id="pn" value={name} onChange={(e) => setName(e.target.value)} placeholder="어디로 떠날까요?" /></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label htmlFor="pd">자세한 설명</Label>
          <Input id="pd" value={desc} onChange={(e) => setDesc(e.target.value)} /></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label htmlFor="pp">비밀번호</Label>
          <Input id="pp" type="password" value={pw} onChange={(e) => setPw(e.target.value)} /></div>
      </Dialog>
      {confirmClose ? (
        <AlertModal title="게시글 작성이 마무리되지 않았습니다." description="이 화면에서 나가면 작성 중이던 내용이 사라집니다."
          onCancel={() => setConfirmClose(false)} onConfirm={onClose} />
      ) : null}
    </>
  );
}
Object.assign(window, { ProjectScreen, ProjectCreateDialog });
