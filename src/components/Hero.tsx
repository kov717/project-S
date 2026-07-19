import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/24974884/pexels-photo-24974884.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920"
          alt="Kazakhstan mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-56 sm:w-96 h-56 sm:h-96 bg-sky-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-0">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full mb-5 sm:mb-8 border border-white/20">
          <span className="text-amber-400 text-xs sm:text-sm font-semibold tracking-wide">🇰🇿 KAZAKHSTAN</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          {t('heroTitle')}
        </h1>

        <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          {t('heroSubtitle')}
        </p>

        <button
          onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30 text-base sm:text-lg"
        >
          {t('heroBtn')}
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/60" />
      </div>
    </section>
  );
}
