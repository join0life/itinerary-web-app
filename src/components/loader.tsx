import { LoaderCircleIcon } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-[var(--spacing-5)] text-muted-foreground">
      <LoaderCircleIcon className="size-[var(--size-icon-md)] animate-spin" />
      <div className="text-[length:var(--font-size-sm)]">
        데이터를 불러오는 중입니다.
      </div>
    </div>
  );
}
