import { useState } from 'react';
import { MapPin, Clock, Star, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { Tour } from '../data/tours';

type Props = {
  tour: Tour;
  onSelect: (tourId: number) => void;
};

const difficultyColors = {
  Easy: 'bg-emerald-500/20 text-emerald-400',
  Moderate: 'bg-amber-500/20 text-amber-400',
  Challenging: 'bg-rose-500/20 text-rose-400',
};

export default function TourCard({ tour, onSelect }: Props) {
  const { language, t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col">
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name[language]}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex gap-2">
          <span className={`px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold ${difficultyColors[tour.difficulty]}`}>
            {tour.difficulty}
          </span>
        </div>
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1 px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full">
          <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 fill-amber-400" />
          <span className="text-white text-[11px] sm:text-xs font-semibold">{tour.rating}</span>
        </div>

        {/* Bottom info overlay */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
          <h3 className="text-base sm:text-xl font-bold text-white mb-1 leading-snug">{tour.name[language]}</h3>
          <div className="flex items-center gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              {tour.location[language]}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              {tour.days} {t('tourDays')}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1">
          {tour.description[language]}
        </p>

        {/* Expandable Highlights */}
        <div className="mb-3 sm:mb-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-amber-400 text-xs sm:text-sm font-semibold hover:text-amber-300 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {t('tourHighlights')}
            {expanded ? <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          </button>
          {expanded && (
            <ul className="mt-2 sm:mt-3 space-y-1 sm:space-y-1.5">
              {tour.highlights[language].map((h, i) => (
                <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA */}
        <div className="pt-3 sm:pt-4 border-t border-white/10">
          <button
            onClick={() => onSelect(tour.id)}
            className="w-full py-2.5 sm:py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] text-sm"
          >
            {t('tourBookNow')}
          </button>
        </div>
      </div>
    </div>
  );
}
