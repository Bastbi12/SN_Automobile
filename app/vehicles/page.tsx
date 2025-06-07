import vehicles from '@/data/vehicles.json';

export const metadata = { title: 'Fahrzeuge' };

export default function VehicleList() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Fahrzeuge</h1>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="py-2 text-left">Marke</th>
            <th className="py-2 text-left">Modell</th>
            <th className="py-2 text-left">Status</th>
            <th className="py-2 text-right">Marge</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v) => (
            <tr key={v.id} className="border-b last:border-0">
              <td className="py-1">{v.brand}</td>
              <td className="py-1">{v.model}</td>
              <td className="py-1 capitalize">{v.status.replace('_', ' ')}</td>
              <td className="py-1 text-right">€ {v.margin.toLocaleString('de-DE')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
