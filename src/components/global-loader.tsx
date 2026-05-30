import dog from "@/assets/dog.png";

export default function GlobalLoader() {
  return (
    <div className="flex h-dvh w-dvw flex-col items-center justify-center bg-muted">
      <div className="global-loader-mark animate-bounce">
        <img src={dog} alt="로고" className="brand-logo" />
        <div className="brand-title">단순여행</div>
      </div>
    </div>
  );
}
