import { useState } from 'react';
import { Menu, X, ChevronDown, Globe, Mountain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { languageNames, languageFlags, type Language } from '../i18n/translations';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const languages = Object.keys(languageNames) as Language[];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18">
          {/* Logo */}
          <div className="flex items-center gap-1.5 sm:gap-2 cursor-pointer flex-shrink-0" onClick={() => scrollTo('hero')}>
            <Mountain className="w-5 h-5 sm:w-7 sm:h-7 text-amber-400" />
            <span className="text-base sm:text-xl font-bold text-white tracking-tight">{t('brand')}</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <button onClick={() => scrollTo('tours')} className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium">
              {t('navTours')}
            </button>
            <button onClick={() => scrollTo('fleet')} className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium">
              {t('navFleet')}
            </button>
            <button onClick={() => scrollTo('calculator')} className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium">
              {t('navCalculator')}
            </button>
            <button onClick={() => scrollTo('about')} className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium">
              {t('navAbout')}
            </button>
            <button onClick={() => scrollTo('contact')} className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium">
              {t('navContact')}
            </button>
          </nav>

          {/* Language + Mobile */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-xs sm:text-sm text-white"
              >
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{languageFlags[language]}</span>
                <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <div className="absolute right-0 mt-2 w-40 sm:w-44 bg-slate-800 border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => { setLanguage(lang); setLangOpen(false); }}
                        className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm transition-colors ${
                          language === lang
                            ? 'bg-amber-500/20 text-amber-400'
                            : 'text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        <span className="text-base sm:text-lg">{languageFlags[lang]}</span>
                        <span>{languageNames[lang]}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 sm:p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              {mobileOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10">
          <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-1">
            {[
              { id: 'tours', label: t('navTours') },
              { id: 'fleet', label: t('navFleet') },
              { id: 'calculator', label: t('navCalculator') },
              { id: 'about', label: t('navAbout') },
              { id: 'contact', label: t('navContact') },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-amber-400 transition-colors text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
