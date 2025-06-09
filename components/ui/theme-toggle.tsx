'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Warte, bis der Client geladen hat, sonst mismatches zwischen SSR und Client
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const nextTheme = theme === 'light' ? 'dark' : 'light'
  const Icon = theme === 'light' ? Moon : Sun

  return (
    <button
      onClick={() => setTheme(nextTheme)}
      aria-label="Theme wechseln"
      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition"
    >
      <Icon size={16} />
    </button>
  )
}
