import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body className={cn('min-h-screen bg-surface-0 text-gray-900 antialiased dark:bg-surface-900 dark:text-gray-100', inter.className)}>
        <header className="p-4 shadow-card bg-white dark:bg-surface-900">
          <h1 className="text-xl font-semibold">Autohaus Cockpit</h1>
        </header>
        <main className="mx-auto max-w-5xl p-4">{children}</main>
      </body>
    </html>
  );
}
