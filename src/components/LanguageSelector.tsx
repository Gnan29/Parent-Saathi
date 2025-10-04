import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'ar', name: 'العربية' }
  ];

  return (
    <div className="flex items-center gap-2">
      <Languages className="w-5 h-5 text-blue-600" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="px-3 py-1 border-2 border-blue-400 rounded-lg focus:outline-none focus:border-blue-600 bg-white text-gray-800"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
