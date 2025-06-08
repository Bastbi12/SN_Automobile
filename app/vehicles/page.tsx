'use client'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

interface Vehicle {
  id: string
  make: string
  model: string
  year: number
}

async function fetchVehicles(): Promise<Vehicle[]> {
  const res = await axios.get('/api/vehicles')
  return res.data
}

export default function VehiclesPage() {
  const queryClient = useQueryClient()
  const { data, isLoading, error } = useQuery<Vehicle[], Error>({
    queryKey: ['vehicles'],
    queryFn: fetchVehicles,
  })

  const deleteMutation = useMutation({
    mutationFn: (id: string) => axios.delete(`/api/vehicles/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(['vehicles'])
    },
  })

  if (isLoading) return <p>Loading…</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Fahrzeuge</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse text-left">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">ID</th>
              <th className="border-b px-4 py-2">Hersteller</th>
              <th className="border-b px-4 py-2">Modell</th>
              <th className="border-b px-4 py-2">Baujahr</th>
              <th className="border-b px-4 py-2">Aktionen</th>
            </tr>
          </thead>
          <tbody>
            {data!.map((v) => (
              <tr key={v.id} className="odd:bg-gray-50 dark:odd:bg-gray-800">
                <td className="border-b px-4 py-2">{v.id}</td>
                <td className="border-b px-4 py-2">{v.make}</td>
                <td className="border-b px-4 py-2">{v.model}</td>
                <td className="border-b px-4 py-2">{v.year}</td>
                <td className="border-b px-4 py-2">
                  <button
                    onClick={() => deleteMutation.mutate(v.id)}
                    className="text-red-600 hover:underline"
                  >
                    Löschen
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
