'use client'

import { usePathname } from 'next/navigation'
import '../styles/globals.css'
import { ReactNode } from 'react'
import Link from 'next/link'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Toaster from '@/components/ui/toaster'
import ThemeToggle from '@/components/ui/theme-toggle'
import { ThemeProvider } from 'next-themes'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export default function RootLayout({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient
  const pathname = usePathname()


  return (
    <html lang="de" suppressHydrationWarning>
      <body className={cn(inter.className, 'min-h-screen bg-surface-0 text-gray-900 dark:bg-surface-900 dark:text-gray-100 antialiased')}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <QueryClientProvider client={queryClient}>
            <SiteHeader pathname={pathname} />
            <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">{children}</main>
            <Toaster />
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

interface HeaderLinkProps {
  href: string
  label: string
  pathname: string
}

function HeaderLink({ href, label, pathname }: HeaderLinkProps) {
  const active = pathname === href
  return (
    <Link
      href={href}
      className={cn(
        'block py-2 px-3 rounded-lg hover:underline transition-colors',
        active
          ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-800 dark:text-emerald-200'
          : 'text-gray-700 dark:text-gray-400'
      )}
    >
      {label}
    </Link>
  )
}

function SiteHeader({ pathname }: { pathname: string }) {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur dark:bg-surface-900/80 dark:border-gray-700">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
        <Link href="/" className="font-semibold text-xl">
          SN-Automobile
        </Link>
        <nav className="flex flex-col space-y-2 px-4">
  <Link
    href="/dashboard"
    className={`px-3 py-2 rounded-lg ${
      pathname === '/dashboard'
        ? 'bg-emerald-100 dark:bg-emerald-800 font-semibold'
        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
    }`}
  >
    Dashboard
  </Link>

  <Link
    href="/vehicles"
    className={`px-3 py-2 rounded-lg ${
      pathname === '/vehicles'
        ? 'bg-emerald-100 dark:bg-emerald-800 font-semibold'
        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
    }`}
  >
    Fahrzeuge
  </Link>

  <Link
    href="/customers"
    className={`px-3 py-2 rounded-lg ${
      pathname === '/customers'
        ? 'bg-emerald-100 dark:bg-emerald-800 font-semibold'
        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
    }`}
  >
    Kunden
  </Link>

  <Link
    href="/calendar"
    className={`px-3 py-2 rounded-lg ${
      pathname === '/calendar'
        ? 'bg-emerald-100 dark:bg-emerald-800 font-semibold'
        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
    }`}
  >
    Kalender
  </Link>
</nav>
        <ThemeToggle />
      </div>
    </header>
  )
}

