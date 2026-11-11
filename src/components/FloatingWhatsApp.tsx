import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppLink, WHATSAPP_CONFIG } from '../data/tourData';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const directUrl = buildWhatsAppLink({
    daySelection: 'all',
    passengers: 2,
    experienceType: 'Escapada 3 Días Quebrada de Humahuaca',
  });

  return (
    <aside
      aria-label="Atención directa por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
    >
      {/* Gentle Floating Tooltip / Speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white text-[#292019] text-xs font-semibold shadow-lg border border-[#E8DDCC] animate-fadeIn">
          <span>¿Tenés dudas sobre la escapada? Escribinos</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-600 p-0.5"
            aria-label="Cerrar sugerencia"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <div className="relative group">
        <a
          href={directUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
          aria-label="Abrir chat de WhatsApp para reservar escapada"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap">
            Reservar por WhatsApp
          </span>
        </a>

        {/* Pulse ring */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-600"></span>
        </span>
      </div>
    </aside>
  );
};
