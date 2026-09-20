import type { ShipmentStatus } from "@/types/shipment";
const STYLES: Record<ShipmentStatus, string> = {
  dijemput: "bg-slate-100 text-slate-700",
  transit: "bg-sky-100 text-sky-800",
  "di-pelabuhan": "bg-indigo-100 text-indigo-800",
  dikirim: "bg-amber-100 text-amber-900",
  selesai: "bg-emerald-100 text-emerald-800",
  tertunda: "bg-rose-100 text-rose-800",
  dibatalkan: "bg-gray-100 text-gray-700",
};
export function StatusBadge({ status }: { status: ShipmentStatus }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${STYLES[status]}`}
    >
      {status}
    </span>
  );
}
