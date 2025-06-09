'use client'

import '../styles/globals.css'
import { ReactNode } from 'react'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from '@/components/ui/toaster'
import ThemeToggle from '@/components/ui/theme-toggle'
import { usePathname } from 'next/navigation'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
const queryClient = new QueryClient()

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-surface-0 text-gray-900 dark:bg-surface-900 dark:text-gray-100 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <QueryClientProvider client={queryClient}>
            <SiteHeader />
            <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
              {children}
            </main>
            <Toaster />
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur dark:bg-gray-900/80 dark:border-gray-700">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
        <Link href="/" className="font-semibold text-xl">
          SN-Automobile
        </Link>
        <nav className="flex flex-col space-y-2 px-4">
          <Link href="/Dashboard" className="hover:underline">Dashboard</Link>
          <nav className="flex flex-col space-y-2 px-4">
  <Link
    href="/vehicles"
    className={`
      py-2 px-3 rounded-lg
      ${pathname === '/vehicles'
        ? 'bg-emerald-100 dark:bg-surface-800'
        : 'hover:bg-emerald-100 dark:hover:bg-surface-800'}
    `}
  >
    Fahrzeuge
  </Link>

  <Link
    href="/customers"
    className={`
      py-2 px-3 rounded-lg
      ${pathname === '/customers'
        ? 'bg-emerald-100 dark:bg-surface-800'
        : 'hover:bg-emerald-100 dark:hover:bg-surface-800'}
    `}
  >
    Kunden
  </Link>

  <Link
    href="/calendar"
    className={`
      py-2 px-3 rounded-lg
      ${pathname === '/calendar'
        ? 'bg-emerald-100 dark:bg-surface-800'
        : 'hover:bg-emerald-100 dark:hover:bg-surface-800'}
    `}
  >
    Kalender
  </Link>
</nav>
       <ThemeToggle />
      </div>
    </header>
  )
}


