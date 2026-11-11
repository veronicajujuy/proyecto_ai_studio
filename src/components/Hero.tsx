import React from 'react';
import { MessageCircle, MapPin, Calendar, Mountain, ShieldCheck, Sun } from 'lucide-react';
import heroCerroImg from '../assets/images/hero_cerro_siete_colores_1794435884621.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-4 pb-12 lg:pt-6 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Card with High-Impact Imagery */}
        <div className="relative rounded-3xl overflow-hidden border border-[#E8DDCC] shadow-lg bg-[#292019]">
          {/* Background Image of Cerro de los Siete Colores */}
          <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[640px]">
            <img
              src={heroCerroImg}
              alt="Panorámica del Cerro de los Siete Colores en Purmamarca, Quebrada de Humahuaca, Jujuy"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Graceful fallback to styled earthy gradient if asset fails
                e.currentTarget.style.display = 'none';
              }}
            />

            {/* Measured Scrim for contrast: luminous yet high legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#201712]/95 via-[#201712]/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#201712]/80 via-[#201712]/30 to-transparent" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-16">
              <div className="max-w-3xl space-y-4 sm:space-y-5">
                {/* Clean unboxed kicker with typographic separator */}
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium tracking-wide uppercase text-[#E8C5A8]">
                  <span>Jujuy · Noroeste Argentino</span>
                  <span aria-hidden="true">·</span>
                  <span>Patrimonio Mundial UNESCO</span>
                  <span aria-hidden="true">·</span>
                  <span>Escapada 3 Días / 2 Noches</span>
                </div>

                {/* Primary Hero Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FAF7F2] font-heading leading-[1.1] text-balance">
                  3 días en el corazón de la Quebrada de Humahuaca
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-[#E8DDCC] font-normal leading-relaxed max-w-2xl">
                  Recorré los minerales milenarios del Cerro de los Siete Colores,
                  el blanco infinito de Salinas Grandes, la fortaleza ancestral de Tilcara
                  y el impactante atardecer en los 14 Colores del Hornocal a 4.350 metros.
                </p>

                {/* Unboxed Metadata Strip */}
                <div className="pt-1 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#F4EFE6]/90 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#E69D43]" />
                    <span>Viernes a Domingo o días a elección</span>
                  </div>
                  <span aria-hidden="true" className="text-[#E8C5A8]/50">·</span>
                  <div className="flex items-center gap-1.5">
                    <Mountain className="w-4 h-4 text-[#E69D43]" />
                    <span>Altitud máx. 4.350 msnm</span>
                  </div>
                  <span aria-hidden="true" className="text-[#E8C5A8]/50">·</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#E69D43]" />
                    <span>Base en Purmamarca & Tilcara</span>
                  </div>
                </div>

                {/* Call to Actions */}
                <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-xl shadow-lg shadow-black/20 hover:shadow-black/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Reservar por WhatsApp</span>
                  </button>

                  <a
                    href="#itinerario"
                    className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-medium text-[#FAF7F2] bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl transition-all"
                  >
                    Ver Itinerario Completo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Proof & Highlights Strip directly adjacent to the hero */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F4EFE6] border border-[#E8DDCC] flex flex-col justify-between">
            <div className="flex items-center gap-2 text-[#B04823] mb-2">
              <Sun className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Luz & Paisajes</span>
            </div>
            <div className="text-sm font-semibold text-[#292019]">Cerro de 7 y 14 Colores</div>
            <div className="text-xs text-[#6E5E50] mt-1">Horarios curados para la mejor incidencia del sol</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#F4EFE6] border border-[#E8DDCC] flex flex-col justify-between">
            <div className="flex items-center gap-2 text-[#B04823] mb-2">
              <Mountain className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Aclimatación</span>
            </div>
            <div className="text-sm font-semibold text-[#292019]">Ruta progresiva sin apuro</div>
            <div className="text-xs text-[#6E5E50] mt-1">De 2.190m a 4.350m con guías experimentados</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#F4EFE6] border border-[#E8DDCC] flex flex-col justify-between">
            <div className="flex items-center gap-2 text-[#B04823] mb-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Confianza</span>
            </div>
            <div className="text-sm font-semibold text-[#292019]">Guías Locales Habilitados</div>
            <div className="text-xs text-[#6E5E50] mt-1">Baqueanos nativos de Jujuy y traslados seguros</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#F4EFE6] border border-[#E8DDCC] flex flex-col justify-between">
            <div className="flex items-center gap-2 text-[#B04823] mb-2">
              <MessageCircle className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Reserva Directa</span>
            </div>
            <div className="text-sm font-semibold text-[#292019]">Atención 1 a 1 por WhatsApp</div>
            <div className="text-xs text-[#6E5E50] mt-1">Sin comisiones, respuesta inmediata y tarifas claras</div>
          </div>
        </div>
      </div>
    </section>
  );
};
