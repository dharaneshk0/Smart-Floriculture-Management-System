import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageProvider } from './hooks/useLocalization';
import LanguageModal from './components/LanguageModal';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import DiseaseDetection from './components/DiseaseDetection';
import YieldPrediction from './components/YieldPrediction';
import MarketPrice from './components/MarketPrice';
import Training from './components/Training';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import type { Language, View } from './types';

const App: React.FC = () => {
  const [isLangModalOpen, setIsLangModalOpen] = useState(true);
  const [language, setLanguage] = useState<Language>('en');
  const [currentView, setCurrentView] = useState<View>('home');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('app-lang') as Language | null;
    if (savedLang) {
      setLanguage(savedLang);
      setIsLangModalOpen(false);
    }
  }, []);

  useEffect(() => {
    if (!isLangModalOpen) {
      const timer = setTimeout(() => setIsReady(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isLangModalOpen]);

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('app-lang', lang);
    setIsLangModalOpen(false);
  };

  const renderView = () => {
    switch (currentView) {
      case 'disease-detection': return <DiseaseDetection />;
      case 'yield-prediction': return <YieldPrediction />;
      case 'market-price': return <MarketPrice />;
      case 'training': return <Training />;
      case 'chatbot': return <Chatbot />;
      default: return <HeroSection setView={setCurrentView} />;
    }
  };

  if (!isReady && !isLangModalOpen) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-base-200">
        <svg className="animate-spin h-10 w-10 text-primary mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="mt-4 text-xl font-semibold text-gray-700">Loading Smart System...</p>
      </div>
    );
  }

  return (
    <LanguageProvider language={language} setLanguage={handleLanguageSelect}>
      <AnimatePresence>
        {isLangModalOpen && <LanguageModal onSelect={handleLanguageSelect} />}
      </AnimatePresence>

      {!isLangModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen bg-base-200 font-sans text-gray-800"
        >
          <Navigation currentView={currentView} setView={setCurrentView} />
          <main className="pt-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentView}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {renderView()}
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
        </motion.div>
      )}
    </LanguageProvider>
  );
};

export default App;
