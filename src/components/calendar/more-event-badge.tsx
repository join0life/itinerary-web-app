export default function MoreEventBadge({
  count,
  top,
}: {
  count: number;
  top: number;
}) {
  return (
    <div
      className="absolute right-[var(--spacing-2)] z-20 rounded-[var(--ds-radius-sm)] bg-muted px-[var(--spacing-2)] py-[var(--spacing-1)] text-[length:var(--font-size-xs)] font-[var(--font-weight-semibold)]"
      style={{ top }}
    >
      +{count}
    </div>
  );
}
