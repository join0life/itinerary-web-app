export default function MoreEventBadge({
  count,
  top,
}: {
  count: number;
  top: number;
}) {
  return (
    <div
      className="bg-muted absolute right-2 z-20 rounded px-2 py-1 text-xs font-semibold"
      style={{ top }}
    >
      +{count}
    </div>
  );
}
