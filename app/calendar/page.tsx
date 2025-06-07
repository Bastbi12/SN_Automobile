import appointments from '@/data/appointments.json';

export const metadata = { title: 'Kalender' };

const format = (iso: string) =>
  new Date(iso).toLocaleString('de-DE', { dateStyle: 'short', timeStyle: 'short' });

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Kalender</h1>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="py-2 text-left">Datum</th>
            <th className="py-2 text-left">Titel</th>
            <th className="py-2 text-left">Typ</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id} className="border-b last:border-0">
              <td className="py-1">{format(a.date)}</td>
              <td className="py-1">{a.title}</td>
              <td className="py-1 capitalize">{a.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
