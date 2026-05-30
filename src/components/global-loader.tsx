import dog from "@/assets/dog.png";

export default function GlobalLoader() {
  return (
    <div className="flex h-dvh w-dvw flex-col items-center justify-center bg-muted">
      <div className="mb-[var(--size-15)] flex animate-bounce items-center gap-[var(--spacing-4)]">
        <img src={dog} alt="로고" className="size-[var(--size-10)]" />
        <div className="text-[length:var(--font-size-2xl)] font-[var(--font-weight-bold)]">
          단순여행
        </div>
      </div>
    </div>
  );
}
