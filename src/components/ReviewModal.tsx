import React, { useState } from 'react';
import { HeritagePlace, Language, Review } from '../types';
import { TRANSLATIONS } from '../assets/data/translations';
import { calculateAuthenticityIndex } from '../utils/scoreCalculator';
import { X, Star, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';

interface ReviewModalProps {
  place: HeritagePlace | null;
  language: Language;
  onClose: () => void;
  onSubmitReview: (placeId: string, review: Review) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  place,
  language,
  onClose,
  onSubmitReview
}) => {
  if (!place) return null;

  const t = TRANSLATIONS[language];

  const [userName, setUserName] = useState('');
  const [authenticityRating, setAuthenticityRating] = useState<number>(4.8);
  const [culturalValueRating, setCulturalValueRating] = useState<number>(4.8);
  const [commercialityRating, setCommercialityRating] = useState<number>(1.5);
  const [comment, setComment] = useState('');
  const [verifiedVisit, setVerifiedVisit] = useState(true);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const availableTags = [
    '#국가무형문화재', '#역사적가치', '#정통한옥', '#장인도슨트', '#원본보존',
    '#공장형체험', '#단순포토존', '#상업적퓨전', '#과도한가격', '#나일론의상'
  ];

  const calculatedIndex = calculateAuthenticityIndex(
    authenticityRating,
    culturalValueRating,
    commercialityRating
  );

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      user: userName.trim() || 'Global Traveler',
      date: new Date().toISOString().split('T')[0],
      authenticityRating,
      culturalValueRating,
      commercialityRating,
      comment: comment.trim(),
      tags: selectedTags,
      verifiedVisit,
      language
    };

    onSubmitReview(place.id, newReview);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-heritage-navy text-white p-4 flex items-center justify-between border-b border-amber-600/30">
          <div>
            <h3 className="font-serif font-bold text-lg text-amber-200">
              {t.reviewModalTitle}
            </h3>
            <p className="text-xs text-slate-300">
              {place.name[language]}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center hover:text-white hover:bg-slate-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 max-h-[80vh] overflow-y-auto">
          
          <p className="text-xs text-slate-600 bg-amber-50 p-3 rounded-lg border border-amber-200">
            {t.reviewModalDesc}
          </p>

          {/* User Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Your Name / Title (이름 또는 칭호)
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="e.g. Cultural Historian, Heritage Lover"
              className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          {/* Calculated Authenticity Score Box */}
          <div className="bg-gradient-to-r from-amber-500 to-heritage-gold text-white p-3 rounded-xl flex items-center justify-between shadow-md">
            <div>
              <span className="text-[11px] font-semibold text-amber-100 uppercase tracking-wider block">
                Calculated Authenticity Index
              </span>
              <span className="text-xs text-amber-100 font-serif">
                Based on your 3-axis input ratings below:
              </span>
            </div>
            <div className="text-right">
              <span className="font-bold text-2xl text-white font-serif">{calculatedIndex.toFixed(2)}</span>
              <span className="text-xs text-amber-200"> / 5.0</span>
            </div>
          </div>

          {/* 3 Metric Sliders */}
          <div className="space-y-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
            
            {/* Metric 1: Authenticity */}
            <div>
              <div className="flex justify-between font-bold text-slate-800 mb-1">
                <span>{t.ratingAuthenticity}</span>
                <span className="text-amber-600 font-extrabold">{authenticityRating.toFixed(1)}⭐</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="5.0"
                step="0.1"
                value={authenticityRating}
                onChange={(e) => setAuthenticityRating(parseFloat(e.target.value))}
                className="w-full accent-heritage-gold cursor-pointer"
              />
            </div>

            {/* Metric 2: Cultural Value */}
            <div>
              <div className="flex justify-between font-bold text-slate-800 mb-1">
                <span>{t.ratingCultural}</span>
                <span className="text-teal-600 font-extrabold">{culturalValueRating.toFixed(1)}⭐</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="5.0"
                step="0.1"
                value={culturalValueRating}
                onChange={(e) => setCulturalValueRating(parseFloat(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer"
              />
            </div>

            {/* Metric 3: Commerciality Rating */}
            <div>
              <div className="flex justify-between font-bold text-slate-800 mb-1">
                <span>{t.ratingCommercial}</span>
                <span className="text-rose-600 font-extrabold">
                  {commercialityRating.toFixed(1)} {commercialityRating >= 3.5 ? '(High Commercial)' : '(Low Commercial)'}
                </span>
              </div>
              <input
                type="range"
                min="1.0"
                max="5.0"
                step="0.1"
                value={commercialityRating}
                onChange={(e) => setCommercialityRating(parseFloat(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer"
              />
            </div>

          </div>

          {/* Tag Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1">
              <Tag className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.selectTags}</span>
            </label>
            <div className="flex flex-wrap gap-1.5">
              {availableTags.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <button
                    type="button"
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`text-[11px] px-2.5 py-1 rounded-full border transition-all ${
                      isSelected
                        ? 'bg-heritage-navy text-amber-300 border-heritage-navy font-bold'
                        : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Comment Text Area */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.reviewComment}
            </label>
            <textarea
              required
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={t.reviewCommentPlaceholder}
              className="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          {/* GPS / Receipt Check-in Toggle */}
          <div className="flex items-center space-x-2 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200 text-xs">
            <input
              type="checkbox"
              id="gpsProof"
              checked={verifiedVisit}
              onChange={(e) => setVerifiedVisit(e.target.checked)}
              className="accent-emerald-600 w-4 h-4 rounded"
            />
            <label htmlFor="gpsProof" className="text-emerald-900 font-semibold cursor-pointer flex items-center space-x-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t.uploadProof}</span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              {t.cancel}
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold bg-gradient-to-r from-amber-500 to-heritage-gold text-white rounded-lg shadow-glow-gold hover:brightness-110"
            >
              {t.submitReview}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
