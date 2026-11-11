import React, { useState } from 'react';
import { MessageCircle, Menu, X, Compass } from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppLink } from '../data/tourData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const directWhatsAppUrl = buildWhatsAppLink({
    daySelection: 'all',
    passengers: 2,
    experienceType: 'Escapada 3 Días Quebrada de Humahuaca',
  });

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DDCC] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-[#292019] group whitespace-nowrap shrink-0"
          >
            <div className="w-9 h-9 rounded-full bg-[#B04823] flex items-center justify-center text-white shadow-sm">
              <Compass className="w-5 h-5 text-[#FAF7F2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl tracking-tight text-[#292019] group-hover:text-[#B04823] transition-colors">
                Quebrada Andina
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-[#B04823] -mt-1">
                Jujuy · 3 Días
              </span>
            </div>
          </a>

          {/* Zone 2: Clean single-line text nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#574B3F]">
            <a
              href="#itinerario"
              className="hover:text-[#B04823] transition-colors whitespace-nowrap shrink-0"
            >
              Itinerario Día por Día
            </a>
            <a
              href="#mochila"
              className="hover:text-[#B04823] transition-colors whitespace-nowrap shrink-0"
            >
              Qué Llevar en la Mochila
            </a>
            <a
              href="#consejos"
              className="hover:text-[#B04823] transition-colors whitespace-nowrap shrink-0"
            >
              Puna & Clima
            </a>
            <a
              href="#preguntas"
              className="hover:text-[#B04823] transition-colors whitespace-nowrap shrink-0"
            >
              Preguntas Frecuentes
            </a>
          </nav>

          {/* Zone 3: 1 primary CTA button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#B04823] hover:bg-[#8E3615] rounded-lg transition-all shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Reservar por WhatsApp</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#292019] hover:bg-[#E8DDCC]/50 rounded-lg"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E8DDCC] space-y-3">
            <a
              href="#itinerario"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#292019] hover:bg-[#E8DDCC]/40 rounded-md"
            >
              Itinerario Día por Día
            </a>
            <a
              href="#mochila"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#292019] hover:bg-[#E8DDCC]/40 rounded-md"
            >
              Qué Llevar en la Mochila
            </a>
            <a
              href="#consejos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#292019] hover:bg-[#E8DDCC]/40 rounded-md"
            >
              Puna & Clima
            </a>
            <a
              href="#preguntas"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#292019] hover:bg-[#E8DDCC]/40 rounded-md"
            >
              Preguntas Frecuentes
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#B04823] rounded-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Reservar por WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
