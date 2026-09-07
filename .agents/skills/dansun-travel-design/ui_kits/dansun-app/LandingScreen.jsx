const { Button } = window.DesignSystem_2c1582;

function LandingScreen({ onStart }) {
  return (
    <section style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      gap: "var(--space-5)", background: "var(--brand)", padding: "var(--space-12) var(--space-6)", textAlign: "center" }}>
      <h3 style={{ margin: 0, fontFamily: "var(--font-brand)", fontSize: "1.75rem", fontWeight: 400, color: "var(--brand-foreground)" }}>여행을 단순하게</h3>
      <h1 style={{ margin: 0, fontFamily: "var(--font-brand)", fontSize: "3.5rem", lineHeight: 1.1, fontWeight: 400, color: "var(--brand-foreground)" }}>단순여행</h1>
      <div style={{ marginTop: "var(--space-4)" }}>
        <Button variant="ghost" size="lg" onClick={onStart}
          style={{ background: "var(--surface-card)", borderColor: "transparent", color: "var(--brand-strong)", padding: "0 32px" }}>시작하기</Button>
      </div>
    </section>
  );
}
Object.assign(window, { LandingScreen });
