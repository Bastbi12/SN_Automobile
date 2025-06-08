'use client'
import React from 'react'
import axios from 'axios'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

// 1) Interface für unser Fahrzeug-Datenobjekt
interface Vehicle {
  id:     string;
  make:   string;
  model:  string;
  year:   number;
}

// 2) Fetch-Funktion: ruft /api/vehicles ab und liefert das Array
async function fetchVehicles(): Promise<Vehicle[]> {
  const res = await axios.get('/api/vehicles');
  return res.data;
}

export default function VehiclesPage() {
  const queryClient = useQueryClient();
 const { data, isLoading, error } = useQuery<Vehicle[], Error>(
   ['vehicles'],
   fetchVehicles,
   {
     // Data gilt für 5 Minuten als frisch → kein automatisches Nachladen
     staleTime: 1000 * 60 * 5,
     // auch beim Wechseln des Tabs nicht nachladen
     refetchOnWindowFocus: false,
     refetchOnMount: false,
   }
 )

  const deleteMutation = useMutation({
  mutationFn: (id: string) => axios.delete(`/api/vehicles?id=${id}`),

  // 1) Optimistic Update: sofort aus Cache löschen
  onMutate: async (id: string) => {
    await queryClient.cancelQueries(['vehicles'])
    const previous = queryClient.getQueryData<Vehicle[]>(['vehicles'])
    queryClient.setQueryData<Vehicle[]>(
      ['vehicles'],
      old => old?.filter(v => v.id !== id) ?? []
    )
    return { previous }
  },

  // 2) falls was schiefgeht → restore
  onError: (_err, _id, context: any) => {
    if (context?.previous) {
      queryClient.setQueryData(['vehicles'], context.previous)
    }
  },

  // 3) kein InvalidateQueries mehr! Wir wollen nicht direkt neu laden.
})

 if (isLoading) return <p>Loading Fahrzeuge…</p>;
 if (error)     return <p>Fehler: {error.message}</p>;

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
