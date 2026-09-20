export default function DashboardLoading() {
  return (
    <div className="space-y-6" aria-busy="true">
      <div className="h-8 w-48 animate-pulse rounded-md bg-gray-200" />

      <div className="grid gap-4 md:grid-cols-3">
        <div className="h-28 animate-pulse rounded-lg bg-gray-200" />
        <div className="h-28 animate-pulse rounded-lg bg-gray-200" />
        <div className="h-28 animate-pulse rounded-lg bg-gray-200" />
      </div>

      <div className="h-64 animate-pulse rounded-lg bg-gray-200" />
    </div>
  );
}