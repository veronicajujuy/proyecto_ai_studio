import React, { useState } from 'react';
import { ITINERARY, ItineraryDay, buildWhatsAppLink } from '../data/tourData';
import { Clock, MapPin, Compass, Sparkles, Utensils, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface ItinerarySectionProps {
  onOpenBookingForDay: (day: number) => void;
}

export const ItinerarySection: React.FC<ItinerarySectionProps> = ({ onOpenBookingForDay }) => {
  const [selectedDayFilter, setSelectedDayFilter] = useState<'all' | 1 | 2 | 3>('all');
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const displayedDays = selectedDayFilter === 'all'
    ? ITINERARY
    : ITINERARY.filter((d) => d.dayNumber === selectedDayFilter);

  return (
    <section id="itinerario" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E8DDCC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#B04823] mb-2">
              Hoja de Ruta Andina
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#292019] font-heading tracking-tight">
              Itinerario Día por Día
            </h2>
            <p className="mt-3 text-base text-[#6E5E50]">
              Diseñado minuciosamente con aclimatación progresiva a la altitud, tiempos holgados
              para contemplar la inmensidad y los mejores horarios de luz solar para fotografía.
            </p>
          </div>

          {/* Interactive Day Filter Controls */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#F4EFE6] rounded-xl border border-[#E8DDCC] self-start md:self-auto">
            <button
              onClick={() => setSelectedDayFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedDayFilter === 'all'
                  ? 'bg-[#B04823] text-white shadow-sm'
                  : 'text-[#6E5E50] hover:text-[#292019]'
              }`}
            >
              Todos (3 Días)
            </button>
            <button
              onClick={() => setSelectedDayFilter(1)}
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedDayFilter === 1
                  ? 'bg-[#B04823] text-white shadow-sm'
                  : 'text-[#6E5E50] hover:text-[#292019]'
              }`}
            >
              Día 1 · Salinas
            </button>
            <button
              onClick={() => setSelectedDayFilter(2)}
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedDayFilter === 2
                  ? 'bg-[#B04823] text-white shadow-sm'
                  : 'text-[#6E5E50] hover:text-[#292019]'
              }`}
            >
              Día 2 · Tilcara
            </button>
            <button
              onClick={() => setSelectedDayFilter(3)}
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedDayFilter === 3
                  ? 'bg-[#B04823] text-white shadow-sm'
                  : 'text-[#6E5E50] hover:text-[#292019]'
              }`}
            >
              Día 3 · Hornocal
            </button>
          </div>
        </div>

        {/* Days List */}
        <div className="space-y-16">
          {displayedDays.map((day) => {
            const isDetailedOpen = expandedDay === day.dayNumber;
            const waDayLink = buildWhatsAppLink({
              daySelection: day.dayNumber,
              passengers: 2,
            });

            return (
              <article
                key={day.dayNumber}
                className="bg-[#FFFFFF] rounded-3xl border border-[#E8DDCC] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Day Header & Visual Banner */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Visual Image Column */}
                  <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
                    <img
                      src={day.heroImage}
                      alt={day.imageAlt}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-lg bg-[#292019]/85 text-[#FAF7F2] text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
                        Día 0{day.dayNumber}
                      </span>
                    </div>
                  </div>

                  {/* Day Overview Content Column */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      {/* Quiet unboxed metadata */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#B04823] mb-2">
                        <span>{day.altitudeRange}</span>
                        <span aria-hidden="true">·</span>
                        <span>{day.totalDistance}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-[#292019] font-heading leading-tight">
                        {day.title}
                      </h3>

                      <p className="mt-2 text-sm sm:text-base text-[#6E5E50] leading-relaxed">
                        {day.subtitle}
                      </p>

                      {/* Highlights */}
                      <div className="mt-5 pt-4 border-t border-[#F4EFE6]">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#292019] mb-3">
                          Puntos Destacados
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {day.highlights.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#44372C]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D2812A] mt-1.5 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Best Light Recommendation */}
                      <div className="mt-5 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DDCC] flex items-center gap-3 text-xs text-[#574B3F]">
                        <Clock className="w-4 h-4 text-[#B04823] shrink-0" />
                        <div>
                          <strong className="text-[#292019]">Mejor hora de luz: </strong>
                          {day.bestHour}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="mt-8 pt-5 border-t border-[#E8DDCC] flex flex-wrap items-center justify-between gap-4">
                      <button
                        onClick={() => setExpandedDay(isDetailedOpen ? null : day.dayNumber)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#B04823] hover:text-[#8E3615] transition-colors"
                      >
                        {isDetailedOpen ? (
                          <>
                            <span>Ocultar cronograma hora a hora</span>
                            <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            <span>Ver cronograma hora a hora & tips</span>
                            <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onOpenBookingForDay(day.dayNumber)}
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-lg shadow-sm transition-all"
                        >
                          <MessageCircle className="w-4 h-4 fill-current" />
                          <span>Consultar Día {day.dayNumber}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Collapsible Detailed Timeline & Insider Tips */}
                {isDetailedOpen && (
                  <div className="p-6 sm:p-8 lg:p-10 bg-[#FAF7F2] border-t border-[#E8DDCC] animate-fadeIn">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                      {/* Timeline */}
                      <div className="lg:col-span-7">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-[#292019] mb-6 flex items-center gap-2">
                          <Compass className="w-4 h-4 text-[#B04823]" />
                          <span>Cronograma Horario Detallado</span>
                        </h4>

                        <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-[#E8DDCC]">
                          {day.timeline.map((item, idx) => (
                            <div key={idx} className="relative pl-8">
                              <span className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#B04823] border-2 border-[#FAF7F2] -translate-x-1/2" />
                              <div className="flex items-baseline gap-2 mb-1">
                                <span className="font-mono text-xs font-bold text-[#B04823]">
                                  {item.time}
                                </span>
                                <span className="text-sm font-bold text-[#292019]">
                                  {item.activity}
                                </span>
                                {item.badge && (
                                  <span className="text-[10px] uppercase font-bold text-[#D2812A] tracking-wider ml-auto">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs sm:text-sm text-[#6E5E50] leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Insider Tips & Gastronomy Sidebox */}
                      <div className="lg:col-span-5 space-y-5">
                        {/* Insider Tip */}
                        <div className="p-5 rounded-2xl bg-white border border-[#E8DDCC] shadow-sm">
                          <div className="flex items-center gap-2 text-[#D2812A] mb-2.5">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wider">
                              Consejo de Guía Local
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-[#44372C] leading-relaxed">
                            {day.insiderTip}
                          </p>
                        </div>

                        {/* Dining Recommendation */}
                        <div className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#E8DDCC]">
                          <div className="flex items-center gap-2 text-[#B04823] mb-2.5">
                            <Utensils className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wider">
                              Dónde Comer & Qué Pedir
                            </span>
                          </div>
                          <div className="text-sm font-bold text-[#292019]">
                            {day.diningRecommendation.dish}
                          </div>
                          <div className="text-xs text-[#6E5E50] mt-1">
                            Sugerido en {day.diningRecommendation.place}
                          </div>
                        </div>

                        {/* Quick CTA */}
                        <a
                          href={waDayLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2.5 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#B04823] hover:bg-[#8E3615] rounded-xl transition-all shadow-sm"
                        >
                          <MessageCircle className="w-4 h-4 fill-current" />
                          <span>Solicitar Presupuesto para el Día {day.dayNumber}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
