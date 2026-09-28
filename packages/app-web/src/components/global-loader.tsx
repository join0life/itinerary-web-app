import airplane from "@/assets/airplane.png";

export default function GlobalLoader() {
  return (
    <div className="bg-muted flex h-dvh w-dvw flex-col items-center justify-center">
      <div className="mb-15 flex animate-bounce items-center gap-4">
        <img src={airplane} alt="로고" className="h-10 w-10" />
        <div className="font-brand text-2xl">단순여행</div>
      </div>
    </div>
  );
}
