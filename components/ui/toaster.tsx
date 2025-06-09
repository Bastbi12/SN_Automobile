'use client'

import * as Toast from '@radix-ui/react-toast'
import { useState } from 'react'

export default function Toaster() {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')

  // Exponiere eine globale Funktion zum Auslösen eines Toasts
  ;(globalThis as any).showToast = (msg: string) => {
    setTitle(msg)
    setOpen(true)
    // Toast nach 3 Sekunden automatisch schließen
    setTimeout(() => setOpen(false), 3000)
  }

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        className="fixed bottom-4 right-4 rounded-md bg-emerald-600 px-4 py-2 text-white shadow-lg"
      >
        <Toast.Title className="text-sm">{title}</Toast.Title>
      </Toast.Root>
      <Toast.Viewport />
    </Toast.Provider>
  )
}
