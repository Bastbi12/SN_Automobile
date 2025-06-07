'use client';
import { useState } from 'react';
import Link from 'next/link';

const emptyVehicle = {
  brand: '',
  model: '',
  vin: '',
  status: 'auf_lager',
  margin: 0,
};

export default function NewVehicleForm() {
  const [vehicle, setVehicle] = useState(emptyVehicle);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const list = JSON.parse(localStorage.getItem('newVehicles') || '[]');
    list.push({ ...vehicle, id: Date.now().toString() });
    localStorage.setItem('newVehicles', JSON.stringify(list));
    alert('Fahrzeug zwischengespeichert!');
    setVehicle(emptyVehicle);
  };

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <h1 className="text-2xl font-semibold">Neues Fahrzeug anlegen</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Marke */}
        <div>
          <label className="block text-sm font-medium mb-1">Marke</label>
          <input name="brand" value={vehicle.brand} onChange={handleChange} required className="w-full rounded border px-3 py-2" />
        </div>
        {/* Modell */}
        <div>
          <label className="block text-sm font-medium mb-1">Modell</label>
          <input name="model" value={vehicle.model} onChange={handleChange} required className="w-full rounded border px-3 py-2" />
        </div>
        {/* VIN */}
        <div>
          <label className="block text-sm font-medium mb-1">FIN / VIN</label>
          <input name="vin" value={vehicle.vin} onChange={handleChange} required className="w-full rounded border px-3 py-2" />
        </div>
        {/* Status */}
        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select name="status" value={vehicle.status} onChange={handleChange} className="w-full rounded border px-3 py-2">
            <option value="auf_lager">Auf Lager</option>
            <option value="im_vorlauf">Im Vorlauf</option>
            <option value="in_aufbereitung">In Aufbereitung</option>
            <option value="reserviert">Reserviert</option>
            <option value="verkauft">Verkauft</option>
          </select>
        </div>
        {/* Marge */}
        <div>
          <label className="block text-sm font-medium mb-1">Marge (€)</label>
          <input type="number" name="margin" value={vehicle.margin} onChange={handleChange} className="w-full rounded border px-3 py-2" />
        </div>

        <button type="submit" className="rounded-md bg-brand-600 px-4 py-2 text-white hover:bg-brand-700">Speichern</button>
        <Link href="/vehicles" className="ml-4 text-sm text-gray-600 hover:underline">Zurück</Link>
      </form>
    </div>
  );
}
