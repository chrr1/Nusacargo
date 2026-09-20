export function getMinutesUntilETA(etaISO: string): number {
  const eta = new Date(etaISO).getTime();
  const now = Date.now();

  return Math.round((eta - now) / (1000 * 60));
}