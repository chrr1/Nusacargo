import type { Driver } from "@/types/driver";
import type { Vehicle } from "@/types/vehicle";

export const SHIPMENT_STATUS = [
  "dijemput",
  "transit",
  "di-pelabuhan",
  "dikirim",
  "selesai",
  "tertunda",
  "dibatalkan",
] as const;

export type ShipmentStatus = (typeof SHIPMENT_STATUS)[number];

export interface Shipment {
  awb: string;
  origin: string;
  destination: string;
  status: ShipmentStatus;
  weightKg: number;
  etaISO: string;
  delayedMinutes: number;
  client: {
    id: string;
    name: string;
  };
  vehicle?: Vehicle;
  driver?: Driver;
}

export type ShipmentSummary = Pick<
  Shipment,
  "awb" | "status" | "etaISO"
>;