const { ProfileSummary, ProjectCard, Dialog, Input, Label, Button } = window.DesignSystem_2c1582;

function ProfileScreen({ me, projects, onOpenProject }) {
  const [editing, setEditing] = React.useState(false);
  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "var(--space-10)" }}>
      <ProfileSummary avatarSrc={me.avatar} nickname={me.nickname} bio={me.bio} editable onEdit={() => setEditing(true)} />
      <div style={{ borderBottom: "1px solid var(--border-default)" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        <div style={{ fontSize: "var(--text-h3-size)", fontWeight: 600 }}>내 프로젝트</div>
        {projects.map((p) => (
          <ProjectCard key={p.id} name={p.name} description={p.description} owner={p.owner}
            onDelete={() => {}} onClick={() => onOpenProject(p)} />
        ))}
      </div>
      {editing ? (
        <Dialog title="프로필 수정" onClose={() => setEditing(false)} width={420}
          footer={<><Button variant="ghost" fullWidth onClick={() => setEditing(false)}>취소</Button>
            <Button fullWidth onClick={() => setEditing(false)}>확인</Button></>}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={me.avatar} alt="" style={{ width: 88, height: 88, borderRadius: "var(--radius-full)", objectFit: "cover" }} /></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label htmlFor="nn">닉네임</Label>
            <Input id="nn" defaultValue={me.nickname} /></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label htmlFor="bi">한 줄 소개</Label>
            <Input id="bi" defaultValue={me.bio} /></div>
        </Dialog>
      ) : null}
    </div>
  );
}
Object.assign(window, { ProfileScreen });
