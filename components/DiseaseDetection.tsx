
import React, { useState, useRef } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { SpinnerIcon } from './icons/FeatureIcons';

const DiseaseDetection: React.FC = () => {
  const { t } = useLocalization();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ disease: string; recommendation: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setResult(null);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDetect = () => {
    if (!selectedFile) return;
    setIsLoading(true);
    setResult(null);

    // Simulate API call and CNN processing
    setTimeout(() => {
      const diseases = [
        { disease: 'Powdery Mildew', recommendation: 'Apply fungicide and improve air circulation.' },
        { disease: 'Black Spot', recommendation: 'Remove infected leaves and use a fungicide spray.' },
        { disease: 'Rust', recommendation: 'Avoid overhead watering and apply a copper-based fungicide.' },
      ];
      const randomResult = diseases[Math.floor(Math.random() * diseases.length)];
      setResult(randomResult);
      setIsLoading(false);
    }, 2500);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      {/* Add a placeholder for a feature-specific loading animation or video */}
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">{t('diseaseDetectionTitle')}</h2>
        <p className="text-center text-gray-600 mb-8">{t('diseaseDetectionDesc')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col items-center">
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 cursor-pointer hover:border-primary hover:text-primary transition-colors"
            >
              {preview ? (
                <img src={preview} alt="Flower preview" className="w-full h-full object-cover rounded-lg" />
              ) : (
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <p className="mt-2">{t('uploadImage')}</p>
                </div>
              )}
            </div>
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
            <span className="text-sm text-gray-500 mt-2">{selectedFile ? selectedFile.name : t('noFileSelected')}</span>
            <button
              onClick={handleDetect}
              disabled={!selectedFile || isLoading}
              className="mt-6 w-full py-3 px-6 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <SpinnerIcon />
                  <span className="ml-2">{t('analyzing')}</span>
                </>
              ) : (
                t('detectDisease')
              )}
            </button>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Analysis Result</h3>
            <div className="bg-base-200 rounded-lg p-6 min-h-[18rem] flex items-center justify-center">
              {isLoading ? (
                <p className="text-gray-500">{t('analyzing')}</p>
              ) : result ? (
                <div className="text-left animate-fade-in">
                  <p className="text-lg font-medium text-gray-800">
                    <span className="font-bold">Disease Detected:</span> 
                    <span className="ml-2 text-red-500">{result.disease}</span>
                  </p>
                  <p className="mt-4 text-lg font-medium text-gray-800">
                    <span className="font-bold">Recommendation:</span>
                    <span className="block mt-2 text-base text-gray-600">{result.recommendation}</span>
                  </p>
                </div>
              ) : (
                <p className="text-gray-500">Result will be displayed here.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetection;
