const { Button, Input, Icon } = window.DesignSystem_2c1582;

function AuthScreen({ mode = "sign-in", onSignIn, onSwitch }) {
  const signUp = mode === "sign-up";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-10)" }}>
      <div style={{ fontSize: "var(--text-h3-size)", fontWeight: 700 }}>{signUp ? "회원가입" : "로그인"}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Input type="email" placeholder="Email" style={{ height: 52 }} />
        <Input type="password" placeholder="Password" style={{ height: 52 }} />
        {signUp ? <Input type="password" placeholder="Password 확인" style={{ height: 52 }} /> : null}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Button size="lg" fullWidth onClick={onSignIn}>{signUp ? "가입하기" : "로그인"}</Button>
        {!signUp ? (
          <Button variant="ghost" size="lg" fullWidth onClick={onSignIn}>
            <img src="../../assets/google-symbol.png" alt="구글 로고" style={{ width: 16, height: 16 }} />
            Google 계정으로 로그인
          </Button>
        ) : null}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", fontSize: "var(--text-body-size)", color: "var(--text-muted)" }}>
        <span style={{ cursor: "pointer" }} onClick={onSwitch}>{signUp ? "이미 계정이 있으신가요? 로그인" : "아직 계정이 없으신가요? 회원가입"}</span>
        {!signUp ? <span style={{ cursor: "pointer" }}>비밀번호를 잊어버렸나요?</span> : null}
      </div>
    </div>
  );
}
Object.assign(window, { AuthScreen });
