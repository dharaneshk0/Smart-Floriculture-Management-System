import React, { useState, useEffect } from 'react';
import { useLocalization } from '../hooks/useLocalization';

const Training: React.FC = () => {
  const { t } = useLocalization();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isTraining, setIsTraining] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Fix: Replaced NodeJS.Timeout with ReturnType<typeof setInterval> for browser compatibility.
    // The NodeJS namespace is not available in the browser environment.
    let timer: ReturnType<typeof setInterval>;
    if (isTraining) {
      const statuses = [
        "Preprocessing data...", "Initializing model...", "Starting Epoch 1/100...", 
        "Epoch 25/100...", "Epoch 50/100...", "Epoch 75/100...", "Finalizing...", "Training complete!"
      ];
      let statusIndex = 0;
      setStatus(statuses[0]);

      timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setIsTraining(false);
            setStatus("Training complete! Model is now more accurate.");
            return 100;
          }
          const newProgress = prev + 1;
          if (newProgress % 12 === 0 && statusIndex < statuses.length - 1) {
            statusIndex++;
            setStatus(statuses[statusIndex]);
          }
          return newProgress;
        });
      }, 150);
    }
    return () => clearInterval(timer);
  }, [isTraining]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleStartTraining = () => {
    if (!selectedFile) return;
    setIsTraining(true);
    setProgress(0);
    setStatus('');
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('trainModelHeader')}</h2>
        <p className="text-gray-600 mb-8">{t('trainingDesc')}</p>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
            <label htmlFor="dataset-upload" className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-4-4V6a4 4 0 014-4h4a4 4 0 014 4v6m-4-3h4m0 0l-3 3m3-3l-3-3" /></svg>
                <p className="mt-2 font-semibold text-primary">{t('uploadDataset')}</p>
                <p className="text-sm text-gray-500 mt-1">{t('supportedFormats')}</p>
                {selectedFile && <p className="mt-4 text-green-600">Selected: {selectedFile.name}</p>}
            </label>
            <input id="dataset-upload" type="file" accept=".csv, .pdf, .zip, image/*" onChange={handleFileChange} className="hidden" />
        </div>
        
        <button
          onClick={handleStartTraining}
          disabled={!selectedFile || isTraining}
          className="mt-8 w-full py-3 px-6 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 disabled:bg-gray-400 transition-all duration-300"
        >
          {t('startTraining')}
        </button>

        {isTraining || progress === 100 ? (
          <div className="mt-8 text-left animate-fade-in">
            <h3 className="font-semibold text-lg">{t('trainingProgress')}</h3>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                <div className="bg-primary h-4 rounded-full transition-all duration-500 ease-linear" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-center mt-2 font-medium text-gray-700">{status}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Training;