export default function MoreEventBadge({
  count,
  top,
}: {
  count: number;
  top: number;
}) {
  return (
    <div className="more-event-badge" style={{ top }}>
      +{count}
    </div>
  );
}
