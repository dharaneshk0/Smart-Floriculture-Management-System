
import React from 'react';
import { motion } from 'framer-motion';
import { useLocalization } from '../hooks/useLocalization';
import type { Language } from '../types';

interface LanguageModalProps {
  onSelect: (language: Language) => void;
}

const LanguageModal: React.FC<LanguageModalProps> = ({ onSelect }) => {
  const { t } = useLocalization();

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'te', name: 'తెలుగు' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('selectLanguage')}</h2>
        <p className="text-gray-600 mb-8">Please choose your preferred language to continue.</p>
        <div className="flex flex-col space-y-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onSelect(lang.code)}
              className="px-6 py-3 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {lang.name}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LanguageModal;
