'use client';
import '../styles/globals.css';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import Link from 'next/link';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-surface-0 text-gray-900 antialiased dark:bg-surface-900 dark:text-gray-100',
          inter.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <QueryClientProvider client={queryClient}>
            <SiteHeader />
            <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">{children}</main>
            <Toaster />
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-700 dark:bg-surface-900/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
        {/* Firmenname / Logo */}
        <Link href="/" className="font-semibold">
          SN-Automobile
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm">
          <NavLink href="/vehicles">Fahrzeuge</NavLink>
          <NavLink href="/customers">Kunden</NavLink>
          <NavLink href="/calendar">Kalender</NavLink>
        </nav>

        {/* Dark-/Light-Toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
    >
      {children}
    </Link>
  );
}

// Einfache Toggle-Schaltfläche: wechselt zwischen hell & dunkel
function ThemeToggle() {
  return (
    <button
      onClick={() => {
        document.documentElement.classList.toggle('dark');
      }}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface-100 text-gray-600 shadow-card hover:bg-brand-50 dark:bg-surface-900 dark:text-gray-300 dark:hover:bg-surface-800"
      aria-label="Theme wechseln"
    >
      🌗
    </button>
  );
}
