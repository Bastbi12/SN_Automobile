import React from 'react';

export default function CalendarPage() {
  const events = [
    { date: '08.06.25, 10:00', title: 'Probefahrt BMW 320d', type: 'Probefahrt' },
    { date: '08.06.25, 14:30', title: 'Werkstatt: HU VW Golf',   type: 'Werkstatt' },
    { date: '09.06.25, 16:00', title: 'Fahrzeugübergabe Audi A4', type: 'Übergabe' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Kalender</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow">
          <thead>
            <tr>
              {['Datum', 'Titel', 'Typ'].map((h) => (
                <th
                  key={h}
                  className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300 border-b"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {events.map((e, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : ''}
              >
                <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100">{e.date}</td>
                <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100">{e.title}</td>
                <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100">{e.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
