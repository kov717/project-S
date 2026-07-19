import { useLanguage } from '../context/LanguageContext';
import { tours } from '../data/tours';
import TourCard from './TourCard';

type Props = {
  onSelectTour: (tourId: number) => void;
};

export default function Tours({ onSelectTour }: Props) {
  const { t } = useLanguage();

  return (
    <section id="tours" className="py-16 sm:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            {t('toursTitle')}
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto">
            {t('toursSubtitle')}
          </p>
          <div className="mt-4 sm:mt-6 w-20 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* Tour Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} onSelect={onSelectTour} />
          ))}
        </div>
      </div>
    </section>
  );
}
