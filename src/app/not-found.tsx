import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg">
      <h1 className="text-gradient text-6xl font-bold">404</h1>
      <p className="text-fg-muted">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg"
      >
        Back home
      </Link>
    </main>
  );
}
