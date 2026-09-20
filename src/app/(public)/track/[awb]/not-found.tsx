import Link from "next/link";

export default function TrackingNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <section className="max-w-md space-y-4 text-center">
        <p className="text-sm font-medium text-gray-500">404</p>

        <h1 className="text-2xl font-semibold">
          Resi tidak ditemukan
        </h1>

        <p className="text-gray-600">
          Kami tidak menemukan pengiriman dengan nomor resi tersebut.
          Silakan periksa kembali nomor resi atau coba resi lainnya.
        </p>

        <Link
          href="/"
          className="inline-flex rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
        >
          Coba resi lain
        </Link>
      </section>
    </main>
  );
}