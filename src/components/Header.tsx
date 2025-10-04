import React from 'react';
import { LogOut, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';
import KalamkariPattern from './KalamkariPattern';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { t } = useLanguage();

  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 text-white shadow-lg">
      <KalamkariPattern />
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/d.png" alt="Logo" className="w-12 h-12" />
            <div>
              <h1 className="text-2xl font-bold">{t('appName')}</h1>
              <p className="text-sm text-blue-100">Empowering Parents Through Knowledge</p>
            </div>
          </div>

          {user && (
            <div className="flex items-center gap-4">
              <LanguageSelector />
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <User className="w-5 h-5" />
                <span className="font-medium">{user.name}</span>
              </div>
              <button
                onClick={logout}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                <LogOut className="w-5 h-5" />
                {t('logout')}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
