import React, { useState } from 'react';
import { GENERAL_TIPS, FAQS } from '../data/tourData';
import { ChevronDown, ChevronUp, HelpCircle, SunMedium, Compass } from 'lucide-react';

export const AdviceAndFaqSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section id="consejos" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E8DDCC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Practical Advice */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-[#B04823] mb-2">
              Claves de la Tierra Quebradeña
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#292019] font-heading tracking-tight">
              Puna, Clima & Buenas Prácticas
            </h2>
            <p className="mt-3 text-base text-[#6E5E50]">
              Información fundamental para disfrutar plenamente de tu viaje sin contratiempos por la altura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GENERAL_TIPS.map((tip, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E8DDCC] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] border border-[#E8DDCC] flex items-center justify-center text-[#B04823] font-bold text-xs mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#292019] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E5E50] leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: FAQs */}
        <div id="preguntas" className="pt-8 border-t border-[#E8DDCC]">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold uppercase tracking-widest text-[#B04823] mb-2">
              Dudas Resueltas
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292019] font-heading tracking-tight">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E8DDCC] overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF7F2] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#292019]">
                      {faq.question}
                    </span>
                    <span className="text-[#B04823] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-[#6E5E50] leading-relaxed border-t border-[#FAF7F2]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
