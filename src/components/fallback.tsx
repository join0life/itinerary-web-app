import { TriangleAlert } from "lucide-react";

export default function Fallback() {
  return (
    <div className="flex flex-col items-center justify-center gap-[var(--spacing-2)] text-muted-foreground">
      <TriangleAlert className="size-[var(--size-icon-lg)]" />
      <div>오류가 발생했습니다. 잠시 후 다시 시도해주세요.</div>
    </div>
  );
}
