import React from 'react';
import { AuthenticityGrade, Language } from '../types';
import { TRANSLATIONS } from '../assets/data/translations';
import { getGradeBadgeColor } from '../utils/scoreCalculator';
import { Sparkles, ShieldCheck, Store, Star } from 'lucide-react';

interface AuthenticityScoreBadgeProps {
  grade: AuthenticityGrade;
  score: number;
  language: Language;
  showScoreText?: boolean;
}

export const AuthenticityScoreBadge: React.FC<AuthenticityScoreBadgeProps> = ({
  grade,
  score,
  language,
  showScoreText = true
}) => {
  const t = TRANSLATIONS[language];
  const style = getGradeBadgeColor(grade);

  const getLabel = () => {
    switch (grade) {
      case 'must-see': return t.mustSeeBadge;
      case 'high': return t.highAuthBadge;
      case 'commercial': return t.commercialBadge;
      default: return t.highAuthBadge;
    }
  };

  const getIcon = () => {
    switch (grade) {
      case 'must-see': return <Sparkles className="w-3 h-3 text-amber-100" />;
      case 'high': return <ShieldCheck className="w-3 h-3 text-teal-100" />;
      case 'commercial': return <Store className="w-3 h-3 text-slate-500" />;
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${style.bg} ${style.shadow || ''}`}>
        {getIcon()}
        <span>{getLabel()}</span>
      </span>

      {showScoreText && (
        <div className="flex items-center space-x-1 font-bold text-xs">
          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span className="text-slate-900">{score.toFixed(2)}</span>
          <span className="text-[10px] text-slate-400 font-normal">/ 5.0</span>
        </div>
      )}
    </div>
  );
};
