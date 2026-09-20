import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ awb: string }>;
};

export default async function TrackPage({ params }: Props) {
  const { awb } = await params;

  const shipmentExists = awb === "NC-2026-000481";

  if (!shipmentExists) {
    notFound();
  }

  return (
    <section aria-labelledby="judul">
      <h1 id="judul">Detail Pengiriman</h1>
      <p>Nomor resi: {awb}</p>
    </section>
  );
}