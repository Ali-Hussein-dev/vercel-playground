import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <h1 className="mb-4 uppercase">Vercel Playground</h1>
      <Link href="/vercel">Vercel Environment Variables</Link>
      </div>
    </main>
  );
}
