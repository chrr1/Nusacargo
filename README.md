# Shipment Tracking Dashboard

## Ringkasan Studi Kasus

Proyek ini merupakan aplikasi pelacakan pengiriman yang terdiri dari
halaman publik untuk melacak status pengiriman berdasarkan nomor resi
dan dashboard internal untuk mengelola serta memantau data pengiriman.

Aplikasi memiliki dua bagian utama. Bagian publik digunakan pengguna
untuk melihat informasi perjalanan paket berdasarkan nomor AWB.
Bagian dashboard digunakan untuk menampilkan daftar pengiriman dan
analitik berupa tren data pengiriman.

## Teknologi

- Next.js
- TypeScript
- Tailwind CSS
- Zod
- Vitest

## Struktur Utama

- `app/(public)` untuk halaman publik
- `app/(dashboard)` untuk halaman dashboard
- `app/api` untuk endpoint API
- `components` untuk komponen antarmuka
- `lib` untuk utilitas dan akses data
- `types` untuk definisi tipe TypeScript

## Menjalankan Project

```bash
npm install
npm run dev
```
