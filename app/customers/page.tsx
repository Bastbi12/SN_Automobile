import customers from '@/data/customers.json';

export const metadata = { title: 'Kunden' };

export default function CustomerList() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Kunden</h1>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="py-2 text-left">Name</th>
            <th className="py-2 text-left">Ort</th>
            <th className="py-2 text-left">Typ</th>
            <th className="py-2 text-left">Telefon</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id} className="border-b last:border-0">
              <td className="py-1">{c.firstName} {c.lastName}</td>
              <td className="py-1">{c.city}</td>
              <td className="py-1 capitalize">{c.type}</td>
              <td className="py-1">{c.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
