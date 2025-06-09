'use client'
import React from 'react'
export default function DashboardPage() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-surface-0 dark:bg-surface-800 shadow-card rounded-lg p-6">
          <h2 className="text-xl font-semibold">Gesamtfahrzeuge</h2>
          <p className="text-4xl mt-2">42</p>
        </div>
        {/* zwei weitere Cards analog */}
      </div>
    </main>
  )
}
