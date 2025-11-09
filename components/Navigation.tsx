import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocalization } from '../hooks/useLocalization';
import type { View, Language } from '../types';

interface NavigationProps {
  currentView: View;
  setView: (view: View) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const { t, language, setLanguage } = useLocalization();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems: { view: View; labelKey: 'navHome' | 'navDiseaseDetection' | 'navYieldPrediction' | 'navMarketPrice' | 'navTraining' | 'navChatbot' }[] = [
    { view: 'home', labelKey: 'navHome' },
    { view: 'disease-detection', labelKey: 'navDiseaseDetection' },
    { view: 'yield-prediction', labelKey: 'navYieldPrediction' },
    { view: 'market-price', labelKey: 'navMarketPrice' },
    { view: 'training', labelKey: 'navTraining' },
    { view: 'chatbot', labelKey: 'navChatbot' },
  ];

  const languages: { code: Language; nameKey: 'english' | 'hindi' | 'telugu' }[] = [
    { code: 'en', nameKey: 'english' },
    { code: 'hi', nameKey: 'hindi' },
    { code: 'te', nameKey: 'telugu' },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* ✅ Transparent white nav bar with blur */}
      <header className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-md shadow-md z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Top row: App title and language selector */}
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => setView('home')}>
              <span className="text-2xl font-extrabold text-emerald-600 drop-shadow-[0_0_8px_rgba(16,185,129,0.45)]">
                {t('appName')}
              </span>
            </div>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-md hover:bg-white/80 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h-6.112a2.25 2.25 0 01-2.248-2.05c.03-1.122.38-2.18.95-3.085m12.42-3.39a2.25 2.25 0 00-3.182-3.182 2.25 2.25 0 00-3.182 3.182m3.182-3.182l-3.182 3.182" />
                </svg>
                <span className="text-gray-800 font-medium uppercase">{language}</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white/80 backdrop-blur-md rounded-lg shadow-xl py-1 border border-white/30">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-white/60 transition-colors"
                    >
                      {t(lang.nameKey)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ✅ Neon Section Boxes with Transparent White Background */}
          <div className="mt-4">
            <div className="flex flex-wrap items-center gap-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.view}
                  onClick={() => setView(item.view)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  aria-current={currentView === item.view ? 'page' : undefined}
                  className={
                    `px-4 py-2 rounded-xl font-semibold tracking-wide 
                     bg-white/60 backdrop-blur-md text-emerald-800 border border-emerald-400/40 
                     shadow-[0_0_12px_rgba(16,185,129,0.45)] hover:shadow-[0_0_24px_rgba(16,185,129,0.8)] 
                     transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 ` +
                    (currentView === item.view
                      ? ' ring-2 ring-emerald-400 shadow-[0_0_28px_rgba(16,185,129,0.9)]'
                      : ' ring-1 ring-emerald-300/40')
                  }
                >
                  {t(item.labelKey)}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Spacer below fixed header to prevent content overlap */}
      <div className="h-32 md:h-28" />
    </>
  );
};

export default Navigation;
