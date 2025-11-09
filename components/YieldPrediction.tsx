
import React, { useState } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { SpinnerIcon } from './icons/FeatureIcons';

const InputField: React.FC<{ label: string; placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string }> = 
({ label, placeholder, value, onChange, type = "number" }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
        />
    </div>
);

const YieldPrediction: React.FC = () => {
  const { t } = useLocalization();
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [inputs, setInputs] = useState({
    temperature: '25',
    humidity: '60',
    soilPH: '6.5',
    rainfall: '50',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  
  // Re-map state to work with InputField component
  const handleMappedInputChange = (fieldName: keyof typeof inputs) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [fieldName]: e.target.value });
  };


  const handlePredict = () => {
    setIsLoading(true);
    setPrediction(null);
    // Simulate API call
    setTimeout(() => {
      const baseYield = 5.0;
      const tempFactor = 1 - Math.abs(parseFloat(inputs.temperature) - 22) / 20;
      const humidityFactor = 1 - Math.abs(parseFloat(inputs.humidity) - 65) / 50;
      const phFactor = 1 - Math.abs(parseFloat(inputs.soilPH) - 6.5) / 2;
      
      const calculatedYield = (baseYield * tempFactor * humidityFactor * phFactor).toFixed(2);
      setPrediction(`${calculatedYield} tons/hectare`);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      {/* Add a placeholder for a feature-specific loading animation or video */}
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">{t('yieldPredictionTitle')}</h2>
        <p className="text-center text-gray-600 mb-8">{t('yieldPredictionDesc')}</p>

        <div className="space-y-6">
            <InputField label={t('temperature')} placeholder="e.g., 25" value={inputs.temperature} onChange={handleMappedInputChange('temperature')} />
            <InputField label={t('humidity')} placeholder="e.g., 60" value={inputs.humidity} onChange={handleMappedInputChange('humidity')} />
            <InputField label={t('soilPH')} placeholder="e.g., 6.5" value={inputs.soilPH} onChange={handleMappedInputChange('soilPH')} />
            <InputField label={t('rainfall')} placeholder="e.g., 50" value={inputs.rainfall} onChange={handleMappedInputChange('rainfall')} />
        </div>

        <button
          onClick={handlePredict}
          disabled={isLoading}
          className="mt-8 w-full py-3 px-6 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark disabled:bg-gray-400 transition-all duration-300 flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <SpinnerIcon />
              <span className="ml-2">{t('predicting')}</span>
            </>
          ) : (
            t('predictYield')
          )}
        </button>

        <div className="mt-8 text-center bg-base-200 rounded-lg p-6 min-h-[6rem] flex items-center justify-center">
            {prediction ? (
                <div className="animate-fade-in">
                    <p className="text-lg font-medium text-gray-600">Predicted Yield:</p>
                    <p className="text-3xl font-bold text-primary mt-1">{prediction}</p>
                </div>
            ) : (
                <p className="text-gray-500">Prediction will be shown here.</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default YieldPrediction;
