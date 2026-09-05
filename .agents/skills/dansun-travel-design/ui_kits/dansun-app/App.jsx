const { AppHeader, BottomNav, Toast } = window.DesignSystem_2c1582;

const DATA = {
  me: { id: "u1", nickname: "지민", bio: "계획은 단순하게", avatar: "../../assets/avatar-dog-yellow.png" },
  projects: [
    { id: 1, name: "제주 3박 4일", description: "친구 5명 · 11월 12일 출발", owner: "지민", joined: true },
    { id: 2, name: "속초 주말 워케이션", description: "노트북 챙기고 바다 보면서 일하기", owner: "현우", joined: false },
    { id: 3, name: "부산 먹방 원정대", description: "돼지국밥부터 밀면까지 코스 정리", owner: "예린", joined: false }
  ],
  todos: [
    { owner: "지민", avatar: "../../assets/avatar-dog-yellow.png", items: [
      { id: 11, title: "성산일출봉 일출 보기", confirmed: true },
      { id: 12, title: "렌터카 예약", confirmed: true },
      { id: 13, title: "흑돼지 저녁 예약", confirmed: false }] },
    { owner: "현우", avatar: "../../assets/avatar-dog.png", items: [
      { id: 21, title: "숙소 최종 확정", confirmed: false },
      { id: 22, title: "카페 리스트 정리", confirmed: false }] }
  ],
  events: [
    { id: 11, title: "성산일출봉 일출", startHour: 6, endHour: 8 },
    { id: 12, title: "우도 자전거", startHour: 10, endHour: 12 },
    { id: 13, title: "흑돼지 저녁", startHour: 18, endHour: 20 }
  ]
};

function App() {
  const [theme, setTheme] = React.useState("light");
  const [route, setRoute] = React.useState("landing");
  const [authMode, setAuthMode] = React.useState("sign-in");
  const [projects, setProjects] = React.useState(DATA.projects);
  const [groups, setGroups] = React.useState(DATA.todos);
  const [project, setProject] = React.useState(DATA.projects[0]);
  const [dialog, setDialog] = React.useState(null);
  const [toast, setToast] = React.useState(null);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const flash = (message) => { setToast(message); setTimeout(() => setToast(null), 2200); };

  const openProject = (p) => { setProject(p); setRoute("todo"); };
  const toggleTodo = (owner, id) => setGroups((gs) => gs.map((g) => g.owner !== owner ? g
    : { ...g, items: g.items.map((it) => it.id === id ? { ...it, confirmed: !it.confirmed } : it) }));

  const isProjectRoute = route === "todo" || route === "calendar";
  const bare = route === "landing" || route === "auth";
  const activeTab = route === "profile" ? "project" : route === "landing" ? "home" : route;

  let body = null;
  if (route === "landing") body = <LandingScreen onStart={() => setRoute("auth")} />;
  else if (route === "auth") body = <AuthScreen mode={authMode} onSignIn={() => { setRoute("project"); flash("환영해요! 프로젝트를 만들어 보세요."); }}
    onSwitch={() => setAuthMode(authMode === "sign-in" ? "sign-up" : "sign-in")} />;
  else if (route === "project") body = <ProjectScreen projects={projects} onOpenProject={openProject} onCreate={() => setDialog("project")} />;
  else if (route === "todo") body = <TodoScreen groups={groups} onToggle={toggleTodo} onCreate={() => setDialog("todo")} />;
  else if (route === "calendar") body = <CalendarScreen events={DATA.events} />;
  else if (route === "profile") body = <ProfileScreen me={DATA.me} projects={projects.filter((p) => p.owner === "지민")} onOpenProject={openProject} />;

  const padded = !(route === "landing" || route === "calendar");

  return (
    <div style={{ position: "relative", maxWidth: "var(--app-shell-max-width)", margin: "0 auto", minHeight: "100vh",
      display: "flex", flexDirection: "column", background: "var(--surface-card)", boxShadow: "0 0 40px rgba(0,0,0,0.10)" }}>
      {!bare ? (
        <AppHeader variant={isProjectRoute ? "project" : "global"} title={isProjectRoute ? project.name : "단순여행"}
          avatarSrc={DATA.me.avatar} theme={theme} onThemeChange={setTheme}
          onBack={() => setRoute("project")} onProfile={() => setRoute("profile")} onSignOut={() => setRoute("landing")} />
      ) : null}

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: padded ? "var(--space-6) var(--space-4)" : 0 }}>{body}</div>

      {route === "landing" ? (
        <footer style={{ padding: "var(--space-10) 0", textAlign: "center", color: "var(--text-muted)",
          borderTop: "1px solid var(--border-default)", fontSize: "var(--text-body-sm-size)" }}>@join0life</footer>
      ) : null}

      <div style={{ position: "sticky", bottom: 0, zIndex: 30 }}>
        <BottomNav active={activeTab} onChange={(k) => setRoute(k === "home" ? "landing" : k)} />
      </div>

      {dialog === "project" ? (
        <ProjectCreateDialog onClose={() => setDialog(null)}
          onSubmit={(p) => { setProjects([{ id: Date.now(), owner: "지민", joined: true, ...p }, ...projects]); setDialog(null); flash("프로젝트를 만들었어요."); }} />
      ) : null}
      {dialog === "todo" ? (
        <TodoEditorDialog onClose={() => setDialog(null)}
          onSubmit={(title) => { setGroups((gs) => gs.map((g, i) => i === 0 ? { ...g, items: [...g.items, { id: Date.now(), title, confirmed: false }] } : g)); setDialog(null); flash("일정이 저장되었습니다."); }} />
      ) : null}

      {toast ? (
        <div style={{ position: "fixed", top: 16, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 80 }}>
          <Toast tone="success" message={toast} />
        </div>
      ) : null}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
