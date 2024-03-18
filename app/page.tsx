import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next.js Playground</h1>
      <Link href="/vercel">Vercel Environment Variables</Link>
    </main>
  );
}
