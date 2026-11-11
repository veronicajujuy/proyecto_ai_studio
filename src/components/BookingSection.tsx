import React, { useState } from 'react';
import { MessageCircle, Calendar, Users, Compass, Home, CheckCircle2, ShieldCheck, PhoneCall } from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppLink } from '../data/tourData';

interface BookingSectionProps {
  initialDay?: number | 'all';
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialDay = 'all' }) => {
  const [daySelection, setDaySelection] = useState<number | 'all'>(initialDay);
  const [date, setDate] = useState<string>('');
  const [passengers, setPassengers] = useState<number>(2);
  const [experienceType, setExperienceType] = useState<string>('Escapada Clásica con Traslados');
  const [lodging, setLodging] = useState<string>('Hostería boutique en Purmamarca o Tilcara');

  const waLink = buildWhatsAppLink({
    daySelection,
    date,
    passengers,
    experienceType,
    lodging,
  });

  return (
    <section id="reserva" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E8DDCC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E8DDCC] shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Column: Form & Selector */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#B04823] mb-2">
                Reserva Directa
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292019] font-heading tracking-tight">
                Personalizá tu Escapada a la Quebrada
              </h2>
              <p className="mt-2 text-sm text-[#6E5E50]">
                Elegí tus fechas estimadas y preferencias. Al presionar el botón se abrirá tu chat
                de WhatsApp con el mensaje ya configurado para coordinar con nuestro equipo local en Jujuy.
              </p>

              <div className="mt-8 space-y-6">
                {/* 1. Day Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#292019] mb-2.5">
                    1. Selección del Recorrido
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'all', label: '3 Días Completos' },
                      { id: 1, label: 'Día 1 · Salinas' },
                      { id: 2, label: 'Día 2 · Tilcara' },
                      { id: 3, label: 'Día 3 · Hornocal' },
                    ].map((opt) => (
                      <button
                        key={String(opt.id)}
                        type="button"
                        onClick={() => setDaySelection(opt.id as number | 'all')}
                        className={`px-3 py-2 text-xs font-semibold rounded-xl border text-center transition-all ${
                          daySelection === opt.id
                            ? 'bg-[#B04823] text-white border-[#B04823] shadow-sm'
                            : 'bg-white text-[#574B3F] border-[#E8DDCC] hover:bg-[#FAF7F2]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Date & Passengers in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#292019] mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B04823]" />
                      <span>2. Fecha Estimada de Salida</span>
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8DDCC] bg-[#FAF7F2] text-sm text-[#292019] focus:outline-none focus:ring-2 focus:ring-[#B04823]"
                    />
                  </div>

                  {/* Passengers */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#292019] mb-2 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#B04823]" />
                      <span>3. Cantidad de Pasajeros</span>
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 6].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setPassengers(num)}
                          className={`flex-1 py-2.5 text-xs font-bold rounded-xl border transition-all ${
                            passengers === num
                              ? 'bg-[#B04823] text-white border-[#B04823]'
                              : 'bg-white text-[#574B3F] border-[#E8DDCC] hover:bg-[#FAF7F2]'
                          }`}
                        >
                          {num} {num === 1 ? 'persona' : 'pax'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4. Experience Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#292019] mb-2 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#B04823]" />
                    <span>4. Modalidad Preferida</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      'Escapada Clásica con Traslados',
                      'Aventura & Trekking Activo',
                      'Boutique & Fotografía',
                    ].map((exp) => (
                      <button
                        key={exp}
                        type="button"
                        onClick={() => setExperienceType(exp)}
                        className={`p-3 text-xs font-medium rounded-xl border text-left transition-all ${
                          experienceType === exp
                            ? 'bg-[#FAF7F2] text-[#B04823] font-bold border-[#B04823]'
                            : 'bg-white text-[#6E5E50] border-[#E8DDCC] hover:bg-[#FAF7F2]'
                        }`}
                      >
                        {exp}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. Lodging */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#292019] mb-2 flex items-center gap-1.5">
                    <Home className="w-3.5 h-3.5 text-[#B04823]" />
                    <span>5. Alojamiento Sugerido</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Hostería boutique en Purmamarca o Tilcara',
                      'Ya cuento con alojamiento propio en Jujuy',
                    ].map((lodg) => (
                      <button
                        key={lodg}
                        type="button"
                        onClick={() => setLodging(lodg)}
                        className={`p-3 text-xs font-medium rounded-xl border text-left transition-all ${
                          lodging === lodg
                            ? 'bg-[#FAF7F2] text-[#B04823] font-bold border-[#B04823]'
                            : 'bg-white text-[#6E5E50] border-[#E8DDCC] hover:bg-[#FAF7F2]'
                        }`}
                      >
                        {lodg}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Preview & Primary WhatsApp Button */}
            <div className="lg:col-span-5 bg-[#F4EFE6] p-6 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-[#E8DDCC] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Guías en Línea en Jujuy
                    </span>
                  </div>
                  <span className="text-[11px] text-[#6E5E50] font-mono">
                    {WHATSAPP_CONFIG.displayNumber}
                  </span>
                </div>

                <div className="text-sm font-bold text-[#292019] mb-2">
                  Vista Previa del Mensaje para WhatsApp:
                </div>

                {/* Chat bubble preview */}
                <div className="p-4 rounded-2xl bg-white border border-[#E8DDCC] text-xs font-mono text-[#44372C] leading-relaxed whitespace-pre-line shadow-inner max-h-56 overflow-y-auto">
                  {`¡Hola ${WHATSAPP_CONFIG.agencyName}! 🏔️ Quiero consultar por la *Escapada de 3 Días por la Quebrada de Humahuaca*.
                  
• Programa: ${daySelection === 'all' ? 'Circuito Completo 3 Días' : `Día ${daySelection}`}
• Pasajeros: ${passengers} pax
${date ? `• Fecha: ${date}\n` : ''}• Modalidad: ${experienceType}
• Alojamiento: ${lodging}

¿Me podrían brindar disponibilidad y tarifas actualizadas?`}
                </div>

                {/* Trust bullets */}
                <div className="mt-6 space-y-2.5 text-xs text-[#574B3F]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Sin intermediarios: directo con guías matriculados de Jujuy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Flexibilidad de reprogramación por clima andino</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Vehículos habilitados por la Secretaría de Turismo</span>
                  </div>
                </div>
              </div>

              {/* Huge Primary WhatsApp Button */}
              <div className="mt-8 pt-6 border-t border-[#E8DDCC]">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-2xl shadow-lg shadow-emerald-900/10 hover:shadow-emerald-900/25 transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  <span>Enviar Consulta por WhatsApp</span>
                </a>
                <p className="text-center text-[11px] text-[#6E5E50] mt-2.5">
                  Respuesta habitual en menos de 15 minutos en horario comercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
