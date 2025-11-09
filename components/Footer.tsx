
import React from 'react';
import { useLocalization } from '../hooks/useLocalization';

const Footer: React.FC = () => {
    const { t } = useLocalization();

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p>{t('footerText')}</p>
            </div>
        </footer>
    );
};

export default Footer;
