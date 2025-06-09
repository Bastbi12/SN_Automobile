'use client'
import React from 'react'
import axios, { AxiosResponse } from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

interface Customer {
  id:      string
  name:    string
  email:   string
  phone:   string
}

async function fetchCustomers(): Promise<Customer[]> {
  const res = await axios.get('/api/customers')
  return res.data
}

export default function CustomersPage() {
  const queryClient = useQueryClient()
  const { data, isLoading, error } = useQuery<Customer[], Error>({
    queryKey: ['customers'],
    queryFn: fetchCustomers,
  })
const delMut = useMutation<
  AxiosResponse<any>,   // 1. Typ des Rückgabewerts von axios.delete
  Error,                // 2. Typ des Fehlers
  string                // 3. Typ der Variablen (hier die ID)
>(
  (id: string) => axios.delete(`/api/customers?id=${id}`),
  {
    onMutate: async (id) => {
      await queryClient.cancelQueries(['customers'])
      const previous = queryClient.getQueryData<Customer[]>(['customers'])
      queryClient.setQueryData<Customer[]>(
        ['customers'],
        old => old?.filter(c => c.id !== id) ?? []
      )
      return { previous }
    },
    onError: (_err, _id, context) => {
      if (context?.previous) {
        queryClient.setQueryData(['customers'], context.previous)
      }
    },
  }
)
  if (isLoading) return <p>Loading Kunden…</p>
  if (error)     return <p>Fehler: {error.message}</p>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Kunden</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse text-left">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">ID</th>
              <th className="border-b px-4 py-2">Name</th>
              <th className="border-b px-4 py-2">E-Mail</th>
              <th className="border-b px-4 py-2">Telefon</th>
              <th className="border-b px-4 py-2">Aktionen</th>
            </tr>
          </thead>
          <tbody>
            {data!.map(c => (
              <tr key={c.id} className="odd:bg-gray-50 dark:odd:bg-gray-800">
                <td className="border-b px-4 py-2">{c.id}</td>
                <td className="border-b px-4 py-2">{c.name}</td>
                <td className="border-b px-4 py-2">{c.email}</td>
                <td className="border-b px-4 py-2">{c.phone}</td>
                <td className="border-b px-4 py-2">
                  <button
                    onClick={() => delMut.mutate(c.id)}
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
