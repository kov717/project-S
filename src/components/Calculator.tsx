import { useState, useEffect } from 'react';
import { Settings, Users, Home, UserCheck, UtensilsCrossed, MapPin, Clock, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { tours } from '../data/tours';
import BookingModal from './BookingModal';

type Props = {
  selectedTourId: number | null;
};

export default function Calculator({ selectedTourId }: Props) {
  const { language, t } = useLanguage();
  const [tourId, setTourId] = useState(1);
  const [guests, setGuests] = useState(2);
  const [showBooking, setShowBooking] = useState(false);
  const [accommodation, setAccommodation] = useState<'budget' | 'standard' | 'premium' | 'luxury'>('standard');
  const [guide, setGuide] = useState<'none' | 'group' | 'private'>('group');
  const [meals, setMeals] = useState<'none' | 'breakfast' | 'half' | 'full'>('breakfast');

  useEffect(() => {
    if (selectedTourId) {
      setTourId(selectedTourId);
    }
  }, [selectedTourId]);

  const selectedTour = tours.find((t) => t.id === tourId) || tours[0];

  const accomLabels: Record<string, string> = {
    budget: t('calcBudget'),
    standard: t('calcStandard'),
    premium: t('calcPremium'),
    luxury: t('calcLuxury'),
  };

  const guideLabels: Record<string, string> = {
    none: t('calcNoGuide'),
    group: t('calcGroupGuide'),
    private: t('calcPrivateGuide'),
  };

  const mealLabels: Record<string, string> = {
    none: t('calcNoMeals'),
    breakfast: t('calcBreakfast'),
    half: t('calcHalfBoard'),
    full: t('calcFullBoard'),
  };

  const RadioGroup = ({
    options,
    value,
    onChange,
    cols = 2,
  }: {
    options: { value: string; label: string; sub?: string }[];
    value: string;
    onChange: (v: any) => void;
    cols?: number;
  }) => (
    <div className={`grid gap-2 ${cols === 1 ? 'grid-cols-1' : cols === 3 ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-2'}`}>
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border text-left ${
            value === opt.value
              ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
              : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-gray-200'
          }`}
        >
          {opt.label}
          {opt.sub && <span className="block text-[10px] sm:text-xs text-gray-500 mt-0.5">{opt.sub}</span>}
        </button>
      ))}
    </div>
  );

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-amber-500/10 rounded-full mb-3 sm:mb-4">
            <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            <span className="text-amber-400 text-xs sm:text-sm font-semibold">{t('calcTitle')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            {t('calcTitle')}
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto">
            {t('calcSubtitle')}
          </p>
          <div className="mt-4 sm:mt-6 w-20 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-3 bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-white/10 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
            {/* Tour Selection */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                <Settings className="w-4 h-4 text-amber-400" />
                {t('calcSelectTour')}
              </label>
              <select
                value={tourId}
                onChange={(e) => setTourId(Number(e.target.value))}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 appearance-none"
              >
                {tours.map((tour) => (
                  <option key={tour.id} value={tour.id} className="bg-slate-800">
                    {tour.name[language]} — {tour.days} {t('tourDays')}
                  </option>
                ))}
              </select>
            </div>

            {/* Guests */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                <Users className="w-4 h-4 text-amber-400" />
                {t('calcGuests')}: <span className="text-amber-400">{guests}</span>
              </label>
              <input
                type="range"
                min={1}
                max={8}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mt-1">
                <span>1</span>
                <span>8</span>
              </div>
            </div>

            {/* Accommodation */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                <Home className="w-4 h-4 text-amber-400" />
                {t('calcAccommodation')}
              </label>
              <RadioGroup
                options={[
                  { value: 'budget', label: t('calcBudget') },
                  { value: 'standard', label: t('calcStandard') },
                  { value: 'premium', label: t('calcPremium') },
                  { value: 'luxury', label: t('calcLuxury') },
                ]}
                value={accommodation}
                onChange={setAccommodation}
              />
            </div>

            {/* Guide */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                <UserCheck className="w-4 h-4 text-amber-400" />
                {t('calcGuide')}
              </label>
              <RadioGroup
                options={[
                  { value: 'none', label: t('calcNoGuide') },
                  { value: 'group', label: t('calcGroupGuide') },
                  { value: 'private', label: t('calcPrivateGuide') },
                ]}
                value={guide}
                onChange={setGuide}
              />
            </div>

            {/* Meals */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                <UtensilsCrossed className="w-4 h-4 text-amber-400" />
                {t('calcMeals')}
              </label>
              <RadioGroup
                options={[
                  { value: 'none', label: t('calcNoMeals') },
                  { value: 'breakfast', label: t('calcBreakfast') },
                  { value: 'half', label: t('calcHalfBoard') },
                  { value: 'full', label: t('calcFullBoard') },
                ]}
                value={meals}
                onChange={setMeals}
              />
            </div>
          </div>

          {/* Summary Panel */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Selected Tour Preview */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              <img
                src={selectedTour.image}
                alt={selectedTour.name[language]}
                className="w-full h-36 sm:h-40 object-cover"
              />
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">{selectedTour.name[language]}</h3>
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {selectedTour.location[language]}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {selectedTour.days} {t('tourDays')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    {selectedTour.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Tour Summary */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-white/10 p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-5 flex items-center gap-2">
                <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                {t('calcSummary')}
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-400">{t('calcGuests')}</span>
                  <span className="text-white font-medium">{guests}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-400">{t('calcAccommodation')}</span>
                  <span className="text-white font-medium">{accomLabels[accommodation]}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-400">{t('calcGuide')}</span>
                  <span className="text-white font-medium">{guideLabels[guide]}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-400">{t('calcMeals')}</span>
                  <span className="text-white font-medium">{mealLabels[meals]}</span>
                </div>
              </div>

              <button
                onClick={() => setShowBooking(true)}
                className="w-full mt-5 sm:mt-6 px-6 py-3.5 sm:py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/30 text-sm sm:text-lg"
              >
                {t('calcBookNow')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBooking && (
        <BookingModal
          tour={selectedTour}
          guests={guests}
          accommodation={accomLabels[accommodation]}
          guideService={guideLabels[guide]}
          mealPlan={mealLabels[meals]}
          onClose={() => setShowBooking(false)}
        />
      )}
    </section>
  );
}
