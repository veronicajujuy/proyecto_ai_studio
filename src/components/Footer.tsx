import React from 'react';
import { Compass, Heart } from 'lucide-react';
import { WHATSAPP_CONFIG } from '../data/tourData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#292019] text-[#E8DDCC] pt-16 pb-12 border-t border-[#3B2E24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3B2E24]">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#B04823] flex items-center justify-center text-white">
                <Compass className="w-4 h-4 text-[#FAF7F2]" />
              </div>
              <span className="font-heading font-bold text-xl text-[#FAF7F2] tracking-tight">
                Quebrada Andina
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#BDB0A3] leading-relaxed max-w-sm">
              Expediciones y escapadas curadas por la Quebrada de Humahuaca y la Puna Jujeña.
              Viajes respetuosos con las comunidades originarias y el patrimonio natural milenario.
            </p>
            <div className="text-xs text-[#8C7A6B]">
              Purmamarca · Tilcara · Humahuaca, Jujuy, Argentina
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FAF7F2]">
              Secciones
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#BDB0A3]">
              <li>
                <a href="#itinerario" className="hover:text-white transition-colors">
                  Itinerario Día por Día
                </a>
              </li>
              <li>
                <a href="#mochila" className="hover:text-white transition-colors">
                  Lista de Mochila & Checklist
                </a>
              </li>
              <li>
                <a href="#consejos" className="hover:text-white transition-colors">
                  Aclimatación & Puna
                </a>
              </li>
              <li>
                <a href="#reserva" className="hover:text-white transition-colors">
                  Cotización por WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Heritage & Values */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FAF7F2]">
              Patrimonio Mundial UNESCO
            </div>
            <p className="text-xs text-[#BDB0A3] leading-relaxed">
              La Quebrada de Humahuaca fue declarada Itinerario Cultural de la Humanidad por la UNESCO
              en 2003, reconociendo 10.000 años de asentamiento humano y respeto sagrado a la Pachamama.
            </p>
            <div className="text-xs text-[#B04823] font-semibold">
              Contacto directo: {WHATSAPP_CONFIG.displayNumber}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7A6B]">
          <div>
            © {new Date().getFullYear()} Quebrada Andina Expediciones. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-1">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-[#B04823] fill-current" />
            <span>en el Noroeste Argentino</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
