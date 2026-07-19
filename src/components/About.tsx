import { Award, Users, Route, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, value: t('aboutStat1'), label: t('aboutStat1Label') },
    { icon: Users, value: t('aboutStat2'), label: t('aboutStat2Label') },
    { icon: Route, value: t('aboutStat3'), label: t('aboutStat3Label') },
    { icon: Star, value: t('aboutStat4'), label: t('aboutStat4Label') },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <img
                  src="https://images.pexels.com/photos/9992565/pexels-photo-9992565.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=350"
                  alt="Tien Shan"
                  className="w-full h-36 sm:h-52 object-cover rounded-xl sm:rounded-2xl"
                />
                <img
                  src="https://images.pexels.com/photos/18555412/pexels-photo-18555412.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=350&w=350"
                  alt="Astana Pyramid"
                  className="w-full h-28 sm:h-44 object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                <img
                  src="https://images.pexels.com/photos/9399135/pexels-photo-9399135.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=350&w=350"
                  alt="Almaty foggy mountains"
                  className="w-full h-28 sm:h-44 object-cover rounded-xl sm:rounded-2xl"
                />
                <img
                  src="https://images.pexels.com/photos/18554965/pexels-photo-18554965.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=350"
                  alt="Baiterek Tower"
                  className="w-full h-36 sm:h-52 object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-3 right-2 sm:-bottom-4 sm:-right-4 lg:-right-8 bg-amber-500 text-slate-900 px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl shadow-amber-500/30">
              <span className="text-2xl sm:text-3xl font-bold">10+</span>
              <p className="text-xs sm:text-sm font-semibold">{t('aboutStat1Label')}</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              {t('aboutTitle')}
            </h2>
            <div className="w-20 h-1 bg-amber-500 rounded-full mb-6 sm:mb-8" />
            <p className="text-gray-300 text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6">
              {t('aboutText1')}
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              {t('aboutText2')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 mx-auto mb-1.5 sm:mb-2" />
                  <div className="text-lg sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
