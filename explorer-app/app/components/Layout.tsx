import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-white to-gray-50 text-gray-900 dark:from-neutral-900 dark:to-neutral-950 dark:text-white">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-base font-semibold tracking-tight">
            Events Explorer
          </Link>
          <nav
            aria-label="Primary"
            className="text-sm text-gray-600 dark:text-gray-300"
          >
            <Link href="/" className="hover:underline underline-offset-4">
              Home
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:py-10">{children}</main>
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600 dark:text-gray-300 flex items-center justify-between">
          <p>&copy; {new Date().getFullYear()} Events Explorer</p>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noreferrer"
            className="hover:underline underline-offset-4"
          >
            Built with Next.js
          </a>
        </div>
      </footer>
    </div>
  );
}
