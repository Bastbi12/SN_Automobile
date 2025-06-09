'use client'
import React from 'react'
export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Fahrzeug #{params.id}</h1>
      <div className="bg-surface-0 dark:bg-surface-800 rounded-lg shadow-card p-6 flex space-x-6">
        <img src="/placeholder-car.jpg" alt="Auto" className="w-48 h-32 object-cover rounded" />
        <div>
          <p className="text-lg font-semibold">VW Golf VIII</p>
          {/* Tabs & Details */}
        </div>
      </div>
    </main>
  )
}
