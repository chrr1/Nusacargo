export default async function TrackPage({
  params,
}: {
  params: Promise<{ awb: string }>;
}) {
  const { awb } = await params;

  return <div>Tracking: {awb}</div>;
}
