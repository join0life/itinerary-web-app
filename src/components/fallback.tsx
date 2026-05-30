import { TriangleAlert } from "lucide-react";

export default function Fallback() {
  return (
    <div className="stack-xs items-center justify-center text-muted-foreground">
      <TriangleAlert className="icon-lg" />
      <div>오류가 발생했습니다. 잠시 후 다시 시도해주세요.</div>
    </div>
  );
}
