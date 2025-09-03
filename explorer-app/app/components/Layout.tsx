import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-animated">
      <header className="sticky top-0 z-50 glass-header">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-gradient hover:scale-105 transition-transform duration-300"
          >
            Eventure
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-6">
            <Link
              href="/"
              className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 p-0.5">
              <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:py-16">{children}</main>

      <footer className="glass-header mt-20">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <p className="text-sm font-medium text-foreground/70">
                &copy; {new Date().getFullYear()} Eventure
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors duration-300 group"
              >
                <span>Built with</span>
                <span className="font-semibold text-gradient group-hover:scale-105 transition-transform duration-300">
                  Next.js
                </span>
                <svg
                  className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm-.541 4.93l8.34 14.517H12zm0 7.07v7.07c3.71-.002 6.96-2.116 8.571-5.5L11.459 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
