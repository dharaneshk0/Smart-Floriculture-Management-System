import React, { createContext, useContext } from 'react';
import { translations } from '../lib/localization';
import type { Language, TranslationKey } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ language: Language; setLanguage: (lang: Language) => void; children: React.ReactNode }> = ({ language, setLanguage, children }) => {
  const t = (key: TranslationKey): string => {
    return translations[key]?.[language] || key;
  };

  // Fix: Replaced JSX with React.createElement to be compatible with a .ts file extension.
  // The original JSX was causing parsing errors because the file is not a .tsx file.
  return React.createElement(LanguageContext.Provider, { value: { language, setLanguage, t } }, children);
};

export const useLocalization = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LanguageProvider');
  }
  return context;
};
