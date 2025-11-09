import React from 'react';
import { motion } from 'framer-motion';
import { useLocalization } from '../hooks/useLocalization';
import { ChatIcon, DiseaseIcon, PriceIcon, TrainingIcon, YieldIcon } from './icons/FeatureIcons';
import type { View } from '../types';
// Import local development video asset placed at components/public/hero.mp4
// If you move your file to the project-level /public folder, you can remove this import
// and keep the fallback source below with src="/hero.mp4".
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - asset module type is declared in types/assets.d.ts
import heroVideo from './public/hero.mp4';

interface HeroSectionProps {
  setView: (view: View) => void;
}

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  buttonText: string;
}> = ({ icon, title, description, onClick, buttonText }) => (
  <motion.div
    whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.95)' }}
    className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center cursor-pointer h-full transition-all"
    onClick={onClick}
  >
    <div className="text-accent mb-4 text-4xl">{icon}</div>
    <h3 className="text-lg font-bold text-black-800 mb-2">{title}</h3>
    <p className="text-black-600 flex-grow mb-4">{description}</p>
    <button className="mt-auto w-full py-2 bg-secondary text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300">
      {buttonText}
    </button>
  </motion.div>
);

const HeroSection: React.FC<HeroSectionProps> = ({ setView }) => {
  const { t } = useLocalization();

  const features = [
    { icon: <DiseaseIcon />, titleKey: 'diseaseDetectionTitle', descriptionKey: 'diseaseDetectionDesc', view: 'disease-detection' as View },
    { icon: <YieldIcon />, titleKey: 'yieldPredictionTitle', descriptionKey: 'yieldPredictionDesc', view: 'yield-prediction' as View },
    { icon: <PriceIcon />, titleKey: 'marketPriceTitle', descriptionKey: 'marketPriceDesc', view: 'market-price' as View },
    { icon: <TrainingIcon />, titleKey: 'trainingTitle', descriptionKey: 'trainingDesc', view: 'training' as View },
    { icon: <ChatIcon />, titleKey: 'chatbotTitle', descriptionKey: 'chatbotDesc', view: 'chatbot' as View },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* 🌿 HERO SECTION WITH BACKGROUND VIDEO */}
  <section className="relative flex flex-col justify-center items-center text-center h-[90vh] md:h-screen overflow-hidden">

        {/* ✅ Keep this video tag */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
        >
          <source src={heroVideo} type="video/mp4" />
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video.
        </video>

        {/* ❌ REMOVE or COMMENT OUT this overlay if you want the video fully visible */}
         <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" /> 

        {/* ⚠️ This hero text container overlays the video visually.
            Keep it only if you want text on top.
            If you want *only the video playing* in hero section, comment out this entire block. */}
         <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          >
            {t('welcomeMessage')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-lg md:text-xl text-white/90"
          >
            {t('welcomeSubtitle')}
          </motion.p>
        </div> 
      </section>

      {/* 🌸 FEATURES BELOW HERO */}
      {/* ✅ Keep this, it’s outside the hero video */}
      <section className="bg-base-100 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            {t('exploreFeatures')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.view}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={t(feature.titleKey as any)}
                  description={t(feature.descriptionKey as any)}
                  onClick={() => setView(feature.view)}
                  buttonText={t('launch')}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
