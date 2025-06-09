'use client'

import '../styles/globals.css'
import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Toaster from '@/components/ui/toaster'
import ThemeToggle from '@/components/ui/theme-toggle'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export default function RootLayout({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient()
  const pathname = usePathname()

  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-surface-0 text-gray-900 dark:bg-surface-900 dark:text-gray-100 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <QueryClientProvider client={queryClient}>
            {/* Sidebar + Header */}
            <div className="flex">
              <aside className="w-60 h-screen border-r border-gray-200 dark:border-gray-800 bg-surface-50 dark:bg-surface-900 p-6">
                <h1 className="text-2xl font-bold mb-8">SN-Automobile</h1>
                <nav className="flex flex-col space-y-2">
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
              </aside>

              {/* Main Content Area */}
              <main className="flex-1 p-8">
                <div className="flex justify-end mb-4">
                  <ThemeToggle />
                </div>
                {children}
              </main>
            </div>

            <Toaster />
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
