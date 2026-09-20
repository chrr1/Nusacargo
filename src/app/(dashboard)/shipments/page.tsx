import { getMinutesUntilETA } from "@/lib/eta";

export default function ShipmentsPage() {
  const minutes = getMinutesUntilETA("2026-09-20T10:00:00Z");

  return (
    <main>
      <h1>Shipments</h1>
      <p>{minutes} menit menuju ETA</p>
    </main>
  );
}