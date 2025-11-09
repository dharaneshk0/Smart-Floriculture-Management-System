import React from 'react';
import { useLocalization } from '../hooks/useLocalization';

// Recharts is loaded from CDN, so we declare it globally.
declare const Recharts: any;

const MarketPrice: React.FC = () => {
    const { t } = useLocalization();

    // Defer access to Recharts until render time to ensure the CDN script has loaded.
    if (typeof Recharts === 'undefined') {
        return (
            <div className="container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">{t('marketPriceHeader')}</h2>
                    <div className="flex items-center justify-center h-[300px]">
                        <p className="text-gray-500">Loading charts...</p>
                    </div>
                </div>
            </div>
        );
    }

    const { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = Recharts;
    
    const monthKeys: ('jan'|'feb'|'mar'|'apr'|'may'|'jun'|'jul'|'aug'|'sep'|'oct'|'nov'|'dec')[] = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    
    const priceData = monthKeys.map((key, i) => ({
      name: t(key),
      price: 100 + Math.sin(i) * 30 + Math.random() * 20,
    }));

    const profitLossData = monthKeys.map((key, i) => ({
      name: t(key),
      profit: Math.max(0, (Math.cos(i) * 40 + Math.random() * 15 + 20) * 1000),
      loss: Math.max(0, (Math.sin(i+2) * 20 + Math.random() * 10 + 5) * 1000),
    }));

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{t('marketPriceHeader')}</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="animate-slide-in-up">
                        <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">{t('priceChartTitle')}</h3>
                        <div style={{ width: '100%', height: 300 }}>
                            <ResponsiveContainer>
                                <LineChart data={priceData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="price" name={t('price')} stroke="#22c55e" activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="animate-slide-in-up" style={{animationDelay: '0.2s'}}>
                        <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">{t('profitLossChartTitle')}</h3>
                        <div style={{ width: '100%', height: 300 }}>
                            <ResponsiveContainer>
                                <BarChart data={profitLossData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="profit" name={t('profit')} fill="#22c55e" />
                                    <Bar dataKey="loss" name={t('loss')} fill="#ef4444" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketPrice;