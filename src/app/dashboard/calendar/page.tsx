'use client';

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [date2, setDate2] = useState<Date | undefined>(new Date());
  const [date3, setDate3] = useState<Date | undefined>(new Date());
  const [multiple, setMultiple] = useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString('es-ES', { // 'dd/mm/yy'
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  });

  const mediumDate = date2?.toLocaleDateString('es-ES', { // 'dd de mmmm de yyyy'
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const multipleDates = multiple?.map(d => d.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  })).join(', ');

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4">
      <div className="flex flex-col">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg border"
        />
        <div>
          <h1 className="text-1xl font-bold" >Selección con fecha corta</h1>
          <div className="border-b">{`${smallDate}`}</div>
        </div>
      </div>

      <div className="flex flex-col">
        <Calendar
          mode="single"
          selected={date2}
          onSelect={setDate2}
          className="rounded-lg border"
        />
        <div>
          <h1 className="text-1xl font-bold" >Selección con fecha larga</h1>
          <div className="border-b">{`${mediumDate}`}</div>
        </div>
      </div>

      <div className="flex flex-col">
        <Calendar
          mode="single"
          selected={date3}
          onSelect={setDate3}
          className="rounded-lg border"
          disabled={(date) => date.getDay() === 0 || date.getDay() === 6} // Disable weekends
        />
        <div>
          <h1 className="text-1xl font-bold" >Calendario con Dias deshabilitados</h1>
          <div className="border-b">{`${smallDate}`}</div>
        </div>
      </div>

      <div className="flex flex-col">
        <Calendar
          mode="multiple"
          selected={multiple}
          onSelect={setMultiple}
          className="rounded-lg border"
          disabled={(date) => date.getDay() === 0 || date.getDay() === 6} // Disable weekends
        />
        <div>
          <h1 className="text-1xl font-bold" >Multiples fechas</h1>
          <div className="border-b">{`${multipleDates}`}</div>
        </div>
      </div>

    </div>
  );
}
