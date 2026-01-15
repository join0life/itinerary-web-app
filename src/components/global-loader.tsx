import dog from "@/assets/dog.png";

export default function GlobalLoader() {
  return (
    <div className="bg-muted flex h-dvh w-dvw flex-col items-center justify-center">
      <div className="mb-15 flex animate-bounce items-center gap-4">
        <img src={dog} alt="로고" className="h-10 w-10" />
        <div className="text-2xl font-bold">단순여행</div>
      </div>
    </div>
  );
}
