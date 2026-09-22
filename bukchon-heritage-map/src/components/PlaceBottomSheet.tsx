import React, { useState, useEffect } from 'react';
import { HeritagePlace, Language } from '../types';
import { TRANSLATIONS } from '../assets/data/translations';
import { AuthenticityScoreBadge } from './AuthenticityScoreBadge';
import { 
  X, Volume2, VolumeX, Sparkles, ShieldCheck, AlertTriangle, 
  MapPin, Clock, Award, MessageSquarePlus, ChevronRight, CheckCircle2 
} from 'lucide-react';

interface PlaceBottomSheetProps {
  place: HeritagePlace | null;
  language: Language;
  onClose: () => void;
  onOpenReviewModal: (place: HeritagePlace) => void;
}

export const PlaceBottomSheet: React.FC<PlaceBottomSheetProps> = ({
  place,
  language,
  onClose,
  onOpenReviewModal
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);

  useEffect(() => {
    let interval: any;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            return 0;
          }
          return prev + 2;
        });
      }, 200);
    } else {
      setAudioProgress(0);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio]);

  // Reset audio state when place changes
  useEffect(() => {
    setIsPlayingAudio(false);
    setAudioProgress(0);
  }, [place?.id]);

  if (!place) return null;

  const t = TRANSLATIONS[language];
  const isCommercial = place.grade === 'commercial';

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-4 max-w-4xl mx-auto animate-in slide-in-from-bottom duration-300 pointer-events-none">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden pointer-events-auto max-h-[85vh] overflow-y-auto">
        
        {/* Top Header Card */}
        <div className="relative">
          <div className="h-44 sm:h-52 w-full overflow-hidden bg-slate-900">
            <img
              src={place.image}
              alt={place.name[language]}
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/70 text-white flex items-center justify-center backdrop-blur-md hover:bg-slate-900 transition-colors z-10"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Place Title Overlay */}
          <div className="absolute bottom-3 left-4 right-4 text-white">
            <div className="mb-1">
              <AuthenticityScoreBadge grade={place.grade} score={place.authenticityScore} language={language} />
            </div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-white tracking-tight drop-shadow-md">
              {place.name[language]}
            </h2>
            <div className="flex items-center space-x-3 text-xs text-slate-300 mt-1">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{place.address[language]}</span>
              </span>
              <span className="flex items-center space-x-1 hidden sm:inline-flex">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{place.hours[language]}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 space-y-5">
          
          {/* Multi-Dimensional Ratings Dashboard */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
            
            {/* Metric 1: Authenticity Score */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600 font-semibold">{t.authenticityScore}</span>
                <span className="font-bold text-amber-600">{place.authenticityScore.toFixed(2)} / 5.0</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-amber-500 to-heritage-gold h-full rounded-full transition-all duration-500"
                  style={{ width: `${(place.authenticityScore / 5.0) * 100}%` }}
                />
              </div>
            </div>

            {/* Metric 2: Cultural Value */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600 font-semibold">{t.culturalValue}</span>
                <span className="font-bold text-teal-600">{place.culturalValueScore.toFixed(2)} / 5.0</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-heritage-celadon h-full rounded-full transition-all duration-500"
                  style={{ width: `${(place.culturalValueScore / 5.0) * 100}%` }}
                />
              </div>
            </div>

            {/* Metric 3: Commerciality Ratio */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600 font-semibold">{t.commercialityRatio}</span>
                <span className={`font-bold ${isCommercial ? 'text-rose-600' : 'text-emerald-600'}`}>
                  {place.commercialityRatio}% {isCommercial ? '(High Commercial)' : '(Pure Heritage)'}
                </span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${isCommercial ? 'bg-rose-500' : 'bg-emerald-500'}`}
                  style={{ width: `${place.commercialityRatio}%` }}
                />
              </div>
            </div>

          </div>

          {/* Certification Badge if certified */}
          {place.certifiedBy && (
            <div className="flex items-center space-x-2 text-xs bg-amber-50 text-amber-900 p-2.5 rounded-lg border border-amber-200">
              <Award className="w-4 h-4 text-amber-600 shrink-0" />
              <div>
                <span className="font-bold">{t.certifiedBy}: </span>
                <span className="text-amber-800">{place.certifiedBy}</span>
              </div>
            </div>
          )}

          {/* Multilingual Audio Docent Guide */}
          <div className="bg-heritage-navy text-white p-4 rounded-xl space-y-3 relative overflow-hidden border border-amber-600/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                <h3 className="font-serif font-bold text-sm text-amber-200">
                  {t.docentGuideTitle}
                </h3>
              </div>
              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isPlayingAudio
                    ? 'bg-rose-600 text-white animate-pulse'
                    : 'bg-gradient-to-r from-amber-500 to-heritage-gold text-white hover:brightness-110 shadow-glow-gold'
                }`}
              >
                {isPlayingAudio ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5" />
                    <span>{t.stopDocent}</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{t.listenDocent}</span>
                  </>
                )}
              </button>
            </div>

            {/* Audio Visualizer Bar */}
            {isPlayingAudio && (
              <div className="space-y-1">
                <div className="flex items-center justify-center space-x-1 h-6">
                  {[40, 80, 50, 95, 30, 70, 100, 60, 40, 85, 35, 75, 90, 45].map((val, idx) => (
                    <div
                      key={idx}
                      className="w-1 bg-amber-400 rounded-full animate-bounce"
                      style={{
                        height: `${(val * (audioProgress % 20 + 10)) / 30}px`,
                        animationDelay: `${idx * 0.08}s`
                      }}
                    />
                  ))}
                </div>
                <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full transition-all duration-200" style={{ width: `${audioProgress}%` }} />
                </div>
              </div>
            )}

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-serif italic border-l-2 border-amber-500 pl-3 py-1">
              "{place.docentAudioScript[language]}"
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              {place.docentSummary[language]}
            </p>
          </div>

          {/* Tags Section */}
          <div className="space-y-2">
            {/* Positive Heritage Tags */}
            <div className="flex flex-wrap gap-1.5">
              {place.positiveTags.map((tag, idx) => (
                <span key={idx} className="text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Commercial Warning Tags if any */}
            {place.commercialWarningTags && place.commercialWarningTags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {place.commercialWarningTags.map((tag, idx) => (
                  <span key={idx} className="text-[11px] font-medium bg-rose-50 text-rose-700 border border-rose-200 px-2.5 py-0.5 rounded-full flex items-center space-x-1">
                    <AlertTriangle className="w-3 h-3 text-rose-500" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Visitor Reviews List */}
          <div className="space-y-3 pt-2 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                {t.reviewsTitle} ({place.reviews.length})
              </h4>
              <button
                onClick={() => onOpenReviewModal(place)}
                className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center space-x-1"
              >
                <MessageSquarePlus className="w-3.5 h-3.5" />
                <span>{t.writeReviewBtn}</span>
              </button>
            </div>

            {place.reviews.length > 0 ? (
              <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                {place.reviews.map((rev) => (
                  <div key={rev.id} className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">{rev.user}</span>
                      <span className="text-[10px] text-slate-400">{rev.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-amber-600">Authenticity: {rev.authenticityRating}⭐</span>
                      {rev.verifiedVisit && (
                        <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 flex items-center space-x-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>{t.verifiedVisitBadge}</span>
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600">{rev.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic">No reviews yet for this spot. Be the first visitor to evaluate its authenticity!</p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
