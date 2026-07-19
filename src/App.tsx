import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Tours from './components/Tours';
import Fleet from './components/Fleet';
import Calculator from './components/Calculator';
import About from './components/About';
import Footer from './components/Footer';

function AppContent() {
  const [selectedTourId, setSelectedTourId] = useState<number | null>(null);

  const handleSelectTour = (tourId: number) => {
    setSelectedTourId(tourId);
    setTimeout(() => {
      document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Header />
      <Hero />
      <Tours onSelectTour={handleSelectTour} />
      <Fleet />
      <Calculator selectedTourId={selectedTourId} />
      <About />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
