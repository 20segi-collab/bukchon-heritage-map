import React from 'react';
import { HeritagePlace, Language } from '../types';
import { TRANSLATIONS } from '../assets/data/translations';
import { AuthenticityScoreBadge } from './AuthenticityScoreBadge';
import { MapPin, Clock, Award, Star, ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react';

interface ListViewProps {
  places: HeritagePlace[];
  language: Language;
  onSelectPlace: (place: HeritagePlace) => void;
}

export const ListView: React.FC<ListViewProps> = ({
  places,
  language,
  onSelectPlace
}) => {
  const t = TRANSLATIONS[language];

  if (places.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h3 className="font-serif font-bold text-lg text-slate-800">
          {t.noPlacesFound}
        </h3>
        <p className="text-xs text-slate-500 max-w-sm mx-auto">
          Try resetting category filters or lowering the minimum authenticity score requirement.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place) => {
          const isCommercial = place.grade === 'commercial';
          return (
            <div
              key={place.id}
              onClick={() => onSelectPlace(place)}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={place.image}
                    alt={place.name[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Top Left Badge */}
                  <div className="absolute top-3 left-3">
                    <AuthenticityScoreBadge grade={place.grade} score={place.authenticityScore} language={language} />
                  </div>

                  {/* Certified Authority Tag */}
                  {place.certifiedBy && (
                    <div className="absolute bottom-3 left-3 right-3 flex items-center space-x-1 text-[10px] font-bold text-amber-200 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-500/40 truncate">
                      <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{place.certifiedBy}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-1">
                    {place.name[language]}
                  </h3>

                  <div className="flex items-center space-x-2 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="line-clamp-1">{place.address[language]}</span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-serif">
                    {place.docentSummary[language]}
                  </p>

                  {/* Multi-metric mini progress bars */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 font-semibold">{t.authenticityScore}:</span>
                      <span className="font-bold text-amber-600">{place.authenticityScore.toFixed(2)} / 5.0</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-amber-500 to-heritage-gold h-full"
                        style={{ width: `${(place.authenticityScore / 5.0) * 100}%` }}
                      />
                    </div>

                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-500">{t.commercialityRatio}:</span>
                      <span className={`font-bold ${isCommercial ? 'text-rose-600' : 'text-emerald-600'}`}>
                        {place.commercialityRatio}%
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {place.positiveTags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-medium bg-amber-50 text-amber-900 border border-amber-200/80 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                    {place.commercialWarningTags && place.commercialWarningTags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-medium bg-rose-50 text-rose-700 border border-rose-200 px-2 py-0.5 rounded-full flex items-center space-x-0.5">
                        <AlertTriangle className="w-2.5 h-2.5 text-rose-500" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:bg-amber-50/50 transition-colors">
                <span>{t.listenDocent}</span>
                <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
