import React from 'react';
import { Category, FilterOptions, Language } from '../types';
import { TRANSLATIONS } from '../assets/data/translations';
import { Search, Sparkles, SlidersHorizontal, Building2, Palette, Coffee, Landmark, Store, X } from 'lucide-react';

interface FilterBarProps {
  language: Language;
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  resultCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  language,
  filters,
  onFilterChange,
  resultCount
}) => {
  const t = TRANSLATIONS[language];

  const categories: { id: Category; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: t.allCategories, icon: <SlidersHorizontal className="w-3.5 h-3.5" /> },
    { id: 'architecture', label: t.archCategory, icon: <Building2 className="w-3.5 h-3.5" /> },
    { id: 'craft', label: t.craftCategory, icon: <Palette className="w-3.5 h-3.5" /> },
    { id: 'tea', label: t.teaCategory, icon: <Coffee className="w-3.5 h-3.5" /> },
    { id: 'history', label: t.historyCategory, icon: <Landmark className="w-3.5 h-3.5" /> },
    { id: 'commercial', label: t.commercialCategory, icon: <Store className="w-3.5 h-3.5" /> }
  ];

  return (
    <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3 px-4 sm:px-6 sticky top-16 z-30">
      <div className="max-w-7xl mx-auto flex flex-col gap-3">
        
        {/* Top Row: Search input & Must-See Toggle & Min Rating Slider */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          
          {/* Search Box */}
          <div className="relative flex-1 min-w-[240px] max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => onFilterChange({ ...filters, searchQuery: e.target.value })}
              placeholder={t.searchPlaceholder}
              className="w-full pl-9 pr-8 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 text-slate-800 placeholder-slate-400 transition-all"
            />
            {filters.searchQuery && (
              <button
                onClick={() => onFilterChange({ ...filters, searchQuery: '' })}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Right Controls: Must-See Toggle & Min Rating */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            
            {/* Must-See Heritage Toggle */}
            <button
              onClick={() => onFilterChange({ ...filters, mustSeeOnly: !filters.mustSeeOnly })}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border font-medium transition-all ${
                filters.mustSeeOnly
                  ? 'bg-gradient-to-r from-amber-500 to-heritage-gold text-white border-amber-600 shadow-glow-gold'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-amber-400'
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${filters.mustSeeOnly ? 'text-amber-100 animate-spin-slow' : 'text-amber-500'}`} />
              <span>{t.filterMustSeeOnly}</span>
            </button>

            {/* Minimum Authenticity Score Filter */}
            <div className="flex items-center space-x-2 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200">
              <span className="text-slate-500 font-medium">{t.minAuthenticity}:</span>
              <span className="font-bold text-amber-600 w-7">{filters.minAuthenticityScore.toFixed(1)}⭐</span>
              <input
                type="range"
                min="1.0"
                max="4.8"
                step="0.2"
                value={filters.minAuthenticityScore}
                onChange={(e) => onFilterChange({ ...filters, minAuthenticityScore: parseFloat(e.target.value) })}
                className="w-20 accent-heritage-gold cursor-pointer"
              />
            </div>

            {/* Results Count pill */}
            <div className="text-slate-500 text-[11px] font-semibold bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
              {resultCount} {resultCount === 1 ? 'place' : 'places'}
            </div>

          </div>

        </div>

        {/* Bottom Row: Category Chips */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
          {categories.map((cat) => {
            const isActive = filters.category === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onFilterChange({ ...filters, category: cat.id })}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-heritage-navy text-amber-300 font-bold shadow-md ring-1 ring-amber-500/50'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/60'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
