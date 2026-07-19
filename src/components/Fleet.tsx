import { Users, ChevronRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { vehicles } from '../data/tours';

const categoryLabelKey: Record<string, string> = {
  comfort: 'fleetComfort',
  suv: 'fleetSuv',
  budget: 'fleetBudget',
  luxury: 'fleetLuxury',
  group: 'fleetGroup',
};

const categoryColors: Record<string, string> = {
  comfort: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  suv: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  budget: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  luxury: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  group: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
};

export default function Fleet() {
  const { language, t } = useLanguage();

  const scrollTo = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="fleet" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-amber-500/10 rounded-full mb-3 sm:mb-4">
            <span className="text-2xl sm:text-3xl">🚗</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            {t('fleetTitle')}
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto">
            {t('fleetSubtitle')}
          </p>
          <div className="mt-4 sm:mt-6 w-20 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group bg-slate-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col"
            >
              {/* Vehicle Image / Placeholder */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                {vehicle.image ? (
                  <img
                    src={vehicle.image}
                    alt={vehicle.name[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 via-slate-700/60 to-slate-800 flex flex-col items-center justify-center gap-2">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/5 border-2 border-dashed border-white/15 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 text-white/25"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-white/30 text-xs sm:text-sm font-medium">
                      {vehicle.name[language]}
                    </span>
                    <span className="text-white/15 text-[10px] sm:text-xs">
                      ← {vehicle.id}.image
                    </span>
                  </div>
                )}

                {/* Category badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold border ${categoryColors[vehicle.category]}`}>
                    {t(categoryLabelKey[vehicle.category] as any)}
                  </span>
                </div>

                {/* Seats badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-900/70 backdrop-blur-sm rounded-full border border-white/10">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-white text-xs font-semibold">{vehicle.seats}</span>
                </div>

                {/* Emoji overlay on placeholder */}
                {!vehicle.image && (
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-4xl sm:text-5xl opacity-40">
                    {vehicle.emoji}
                  </div>
                )}
              </div>

              {/* Vehicle Info */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                  {vehicle.name[language]}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1">
                  {vehicle.description[language]}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="text-xs sm:text-sm text-gray-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-amber-400" />
                    {vehicle.seats} {t('fleetSeats')}
                  </span>
                  <button
                    onClick={scrollTo}
                    className="flex items-center gap-1 text-amber-400 text-xs sm:text-sm font-semibold hover:text-amber-300 transition-colors"
                  >
                    {t('tourDetails')}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-16">
          <button
            onClick={scrollTo}
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30 text-sm sm:text-lg"
          >
            {t('tourBookNow')}
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
