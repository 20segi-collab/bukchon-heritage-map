import React from 'react';
import { Language, FilterOptions } from '../types';
import { TRANSLATIONS } from '../assets/data/translations';
import { Compass, Map, List, Globe, ShieldCheck, Star } from 'lucide-react';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  viewMode: 'map' | 'list';
  onViewModeChange: (mode: 'map' | 'list') => void;
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  stats: {
    total: number;
    avgScore: number;
    mustSeeCount: number;
  };
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  viewMode,
  onViewModeChange,
  filters,
  onFilterChange,
  stats
}) => {
  const t = TRANSLATIONS[language];

  return (
    <header className="bg-heritage-navy text-white shadow-lg sticky top-0 z-40 border-b border-amber-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand Logo & Title */}
          <div className="flex items-center space-x-3 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-heritage-gold flex items-center justify-center shadow-glow-gold ring-2 ring-amber-300/40">
              <span className="font-serif font-bold text-white text-xl">韓</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="font-serif font-bold text-base sm:text-lg tracking-wide text-amber-100">
                  {t.appTitle}
                </h1>
                <span className="hidden md:inline-flex items-center text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  Must-See Curation
                </span>
              </div>
              <p className="text-[11px] text-slate-300 hidden sm:block">
                {t.appSubtitle}
              </p>
            </div>
          </div>

          {/* Quick Stats Banner (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6 text-xs bg-slate-800/80 px-4 py-1.5 rounded-full border border-slate-700">
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-300">{t.totalPlaces}:</span>
              <span className="font-bold text-white">{stats.total}</span>
            </div>
            <div className="w-px h-3 bg-slate-700" />
            <div className="flex items-center space-x-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-slate-300">{t.avgAuthenticity}:</span>
              <span className="font-bold text-amber-300">{stats.avgScore}</span>
            </div>
            <div className="w-px h-3 bg-slate-700" />
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-slate-300">{t.mustSeeCount}:</span>
              <span className="font-bold text-amber-400">{stats.mustSeeCount}</span>
            </div>
          </div>

          {/* Right Controls: View Switcher & Language selector */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* View Mode Switcher */}
            <div className="bg-slate-800 p-1 rounded-lg flex items-center border border-slate-700">
              <button
                onClick={() => onViewModeChange('map')}
                className={`flex items-center space-x-1 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  viewMode === 'map'
                    ? 'bg-heritage-gold text-white shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Map className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Map</span>
              </button>
              <button
                onClick={() => onViewModeChange('list')}
                className={`flex items-center space-x-1 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  viewMode === 'list'
                    ? 'bg-heritage-gold text-white shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">List</span>
              </button>
            </div>

            {/* Language Selector */}
            <div className="relative group">
              <div className="flex items-center space-x-1 bg-slate-800 hover:bg-slate-700 px-2.5 py-1.5 rounded-lg border border-slate-700 text-xs text-amber-200 cursor-pointer transition-colors">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold uppercase">{language}</span>
              </div>
              <div className="absolute right-0 mt-1 w-32 bg-slate-900 border border-slate-700 rounded-lg shadow-xl py-1 hidden group-hover:block z-50">
                <button
                  onClick={() => onLanguageChange('ko')}
                  className={`w-full text-left px-3 py-1.5 text-xs hover:bg-slate-800 flex items-center justify-between ${
                    language === 'ko' ? 'text-amber-400 font-bold' : 'text-slate-300'
                  }`}
                >
                  <span>한국어</span>
                  <span className="text-[10px] text-slate-500">KO</span>
                </button>
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`w-full text-left px-3 py-1.5 text-xs hover:bg-slate-800 flex items-center justify-between ${
                    language === 'en' ? 'text-amber-400 font-bold' : 'text-slate-300'
                  }`}
                >
                  <span>English</span>
                  <span className="text-[10px] text-slate-500">EN</span>
                </button>
                <button
                  onClick={() => onLanguageChange('ja')}
                  className={`w-full text-left px-3 py-1.5 text-xs hover:bg-slate-800 flex items-center justify-between ${
                    language === 'ja' ? 'text-amber-400 font-bold' : 'text-slate-300'
                  }`}
                >
                  <span>日本語</span>
                  <span className="text-[10px] text-slate-500">JA</span>
                </button>
                <button
                  onClick={() => onLanguageChange('zh')}
                  className={`w-full text-left px-3 py-1.5 text-xs hover:bg-slate-800 flex items-center justify-between ${
                    language === 'zh' ? 'text-amber-400 font-bold' : 'text-slate-300'
                  }`}
                >
                  <span>中文 (简体)</span>
                  <span className="text-[10px] text-slate-500">ZH</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};
