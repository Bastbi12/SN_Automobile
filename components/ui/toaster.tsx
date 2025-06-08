'use client';
import * as Toast from '@radix-ui/react-toast';
import { useState } from 'react';

// Einfacher globaler Toast
export function Toaster() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('Gespeichert!');

  (globalThis as any).showToast = (msg: string) => {
    setTitle(msg);
    setOpen(false);
    setTimeout(() => setOpen(true), 0);
  };

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        className="fixed bottom-4 right-4 rounded-md bg-brand-600 px-4 py-2 text-white shadow-lg"
      >
        <Toast.Title className="text-sm">{title}</Toast.Title>
      </Toast.Root>
      <Toast.Viewport />
    </Toast.Provider>
  );
}
