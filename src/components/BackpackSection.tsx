import React, { useState, useEffect } from 'react';
import { PACKING_ITEMS, PackingItem } from '../data/tourData';
import { CheckSquare, Square, RotateCcw, Check, Sparkles, Thermometer, Wind, AlertCircle, Copy } from 'lucide-react';

const STORAGE_KEY = 'humahuaca_backpack_checklist_v1';

export const BackpackSection: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copiedNotification, setCopiedNotification] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedIds));
    } catch {
      // Ignore local storage error
    }
  }, [checkedIds]);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const markAll = () => {
    setCheckedIds(PACKING_ITEMS.map((i) => i.id));
  };

  const resetAll = () => {
    setCheckedIds([]);
  };

  const copyChecklist = () => {
    const textList = PACKING_ITEMS.map((item) => {
      const isDone = checkedIds.includes(item.id) ? '[X]' : '[ ]';
      return `${isDone} ${item.name} (${item.note})`;
    }).join('\n');

    navigator.clipboard.writeText(`🎒 Mochila para Quebrada de Humahuaca (3 Días):\n\n${textList}`);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const filteredItems = activeCategory === 'all'
    ? PACKING_ITEMS
    : PACKING_ITEMS.filter((i) => i.category === activeCategory);

  const totalCount = PACKING_ITEMS.length;
  const packedCount = checkedIds.length;
  const progressPercent = Math.round((packedCount / totalCount) * 100);

  return (
    <section id="mochila" className="py-16 sm:py-24 bg-[#F4EFE6] border-t border-[#E8DDCC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#B04823] mb-2">
              Equipamiento & Preparativos
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#292019] font-heading tracking-tight">
              Qué Llevar en la Mochila
            </h2>
            <p className="mt-3 text-base text-[#6E5E50]">
              El clima andino de la Quebrada combina radiación solar intensa, vientos secos y un brusco
              descenso térmico nocturno. Marcá los elementos a medida que los guardes.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto">
            <button
              onClick={copyChecklist}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-white border border-[#E8DDCC] text-[#44372C] hover:bg-[#FAF7F2] transition-colors shadow-sm"
              title="Copiar lista de texto para WhatsApp o notas"
            >
              <Copy className="w-3.5 h-3.5 text-[#B04823]" />
              <span>{copiedNotification ? '¡Copiado!' : 'Copiar Lista'}</span>
            </button>
            <button
              onClick={markAll}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-white border border-[#E8DDCC] text-[#44372C] hover:bg-[#FAF7F2] transition-colors shadow-sm"
            >
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Marcar Todos</span>
            </button>
            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-white border border-[#E8DDCC] text-[#44372C] hover:bg-[#FAF7F2] transition-colors shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5 text-stone-500" />
              <span>Reiniciar</span>
            </button>
          </div>
        </div>

        {/* Packing Progress Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DDCC] shadow-sm mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#B04823]">
                Estado de Preparación
              </div>
              <div className="text-lg font-bold text-[#292019] mt-0.5">
                {progressPercent === 100
                  ? '¡Mochila 100% lista para partir a la Quebrada!'
                  : `${packedCount} de ${totalCount} elementos indispensables guardados`}
              </div>
            </div>
            <div className="font-mono text-2xl font-extrabold text-[#B04823] tabular-nums self-start sm:self-auto">
              {progressPercent}%
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-[#FAF7F2] rounded-full overflow-hidden border border-[#E8DDCC]">
            <div
              className="h-full bg-gradient-to-r from-[#D2812A] to-[#B04823] transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'all', label: 'Todos los elementos' },
            { id: 'capas', label: 'Capas & Ropa Térmica' },
            { id: 'solar', label: 'Protección Solar & Clima' },
            { id: 'puna', label: 'Puna & Salud Andina' },
            { id: 'equipo', label: 'Calzado & Logística' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#B04823] text-white shadow-sm'
                  : 'bg-white text-[#6E5E50] border border-[#E8DDCC] hover:bg-[#FAF7F2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item) => {
            const isChecked = checkedIds.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                  isChecked
                    ? 'bg-[#FAF7F2] border-[#D2812A]/40 text-[#6E5E50]'
                    : 'bg-white border-[#E8DDCC] hover:border-[#B04823]/50 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  className="mt-0.5 shrink-0 text-[#B04823]"
                  aria-label={isChecked ? `Desmarcar ${item.name}` : `Marcar ${item.name}`}
                >
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-[#B04823] fill-current" />
                  ) : (
                    <Square className="w-5 h-5 text-stone-300 hover:text-stone-400" />
                  )}
                </button>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-sm font-bold ${
                        isChecked ? 'line-through text-[#8C7A6B]' : 'text-[#292019]'
                      }`}
                    >
                      {item.name}
                    </span>
                    {item.priority === 'indispensable' && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#B04823] shrink-0">
                        Indispensable
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#6E5E50] leading-relaxed">
                    {item.note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Practical Puna & Climate Advice Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E8DDCC]">
            <div className="flex items-center gap-2 text-[#D2812A] mb-3">
              <Thermometer className="w-5 h-5" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#292019]">
                El Método Cebolla
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#6E5E50] leading-relaxed">
              En la Quebrada conviven las cuatro estaciones en un solo día. Vestirse en 3 capas
              (remera transpirable + abrigo térmico + campera cortaviento) te permite adaptarte en
              segundos sin cargar bultos innecesarios.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8DDCC]">
            <div className="flex items-center gap-2 text-[#D2812A] mb-3">
              <Wind className="w-5 h-5" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#292019]">
                Hojas de Coca & Acullico
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#6E5E50] leading-relaxed">
              El acullico (mascado suave de hojas de coca contra el carrillo sin masticar) es la práctica
              ancestral más efectiva para oxigenar el cuerpo al ascender a los 4.170m del Paso de Lipán o
              los 4.350m del Hornocal.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8DDCC]">
            <div className="flex items-center gap-2 text-[#D2812A] mb-3">
              <AlertCircle className="w-5 h-5" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#292019]">
                Efectivo & Conectividad
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#6E5E50] leading-relaxed">
              Llevá billetes de baja denominación. Las comunidades que custodian el Hornocal, los artesanos
              salineros y las ferias de Uquía frecuentemente no cuentan con señal para posnet o transferencias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
