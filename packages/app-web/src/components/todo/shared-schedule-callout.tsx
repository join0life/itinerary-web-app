import { InfoIcon } from "lucide-react";
import { cn } from "@itinerary/shared";

export default function SharedScheduleCallout({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-secondary/20 bg-secondary/10 flex items-start gap-3 rounded-xl border px-4 py-3",
        className,
      )}
    >
      <InfoIcon className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
      <p className="text-foreground flex-1 text-sm">
        내 일정뿐 아니라 팀원의 일정도 수정·삭제할 수 있어요.
      </p>
    </div>
  );
}
