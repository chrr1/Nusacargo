import { MetricCard } from "@/components/dashboard/metric-card";

export default function AnalyticsPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">
          Analitik
        </h1>

        <p className="mt-2 text-foreground/70">
          Ringkasan performa pengiriman NusaCargo.
        </p>z
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Total Pengiriman"
          value="1.248"
          description="Pengiriman bulan ini"
        />

        <MetricCard
          label="Ketepatan Waktu"
          value="94,2%"
          description="Pengiriman sesuai ETA"
        />

        <MetricCard
          label="Jumlah Tertunda"
          value="37"
          description="Pengiriman yang mengalami keterlambatan"
        />
      </div>
    </section>
  );
}