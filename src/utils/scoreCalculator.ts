import { AuthenticityGrade, HeritagePlace } from '../types';

export function calculateAuthenticityIndex(
  authenticityRating: number,
  culturalValueRating: number,
  commercialityRating: number
): number {
  // Commerciality is inverted (1 = pure traditional, 5 = heavy commercial)
  const invertedCommerciality = Math.max(1, 5.0 - (commercialityRating - 1.0));
  
  const score = (authenticityRating * 0.55) + (culturalValueRating * 0.30) + (invertedCommerciality * 0.15);
  return Math.min(5.0, Math.max(1.0, parseFloat(score.toFixed(2))));
}

export function getGradeBadgeColor(grade: AuthenticityGrade): {
  bg: string;
  text: string;
  border: string;
  shadow?: string;
} {
  switch (grade) {
    case 'must-see':
      return {
        bg: 'bg-gradient-to-r from-amber-500 via-amber-600 to-heritage-gold text-white',
        text: 'text-amber-700',
        border: 'border-amber-400',
        shadow: 'shadow-glow-gold'
      };
    case 'high':
      return {
        bg: 'bg-heritage-celadon text-white',
        text: 'text-teal-700',
        border: 'border-teal-500'
      };
    case 'moderate':
      return {
        bg: 'bg-blue-600 text-white',
        text: 'text-blue-700',
        border: 'border-blue-400'
      };
    case 'commercial':
    default:
      return {
        bg: 'bg-slate-200 text-slate-700',
        text: 'text-slate-600',
        border: 'border-slate-300'
      };
  }
}

export function getAuthenticityScoreColor(score: number): string {
  if (score >= 4.7) return 'text-amber-600 font-bold';
  if (score >= 4.2) return 'text-teal-600 font-bold';
  if (score >= 3.5) return 'text-blue-600 font-bold';
  return 'text-slate-500 font-medium';
}
