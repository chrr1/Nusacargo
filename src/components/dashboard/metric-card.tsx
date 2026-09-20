type MetricCardProps = {
  label: string;
  value: string;
  description: string;
};

export function MetricCard({
  label,
  value,
  description,
}: MetricCardProps) {
  return (
    <article className="rounded-lg border border-border bg-surface p-5">
      <p className="text-sm text-foreground">{label}</p>

      <p className="mt-2 text-3xl font-semibold text-foreground">
        {value}
      </p>

      <p className="mt-2 text-sm text-foreground/70">{description}</p>
    </article>
  );
}