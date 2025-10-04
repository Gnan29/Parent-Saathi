import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Lock, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';
import KalamkariPattern from '../components/KalamkariPattern';
import LoadingFan from '../components/LoadingFan';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(async () => {
      const success = await login(username, password);
      setLoading(false);

      if (success) {
        navigate('/dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    }, 1500);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <LoadingFan size={120} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="absolute top-0 left-0 w-full">
        <KalamkariPattern />
      </div>

      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-blue-200">
            <div className="bg-gradient-to-r from-blue-600 to-green-500 p-6 text-center">

              <h1 className="text-3xl font-bold text-white">{t('appName')}</h1>
              <p className="text-blue-100 mt-2">Empowering Parents Through Knowledge</p>
            </div>

            <div className="p-8">
              <div className="flex justify-end mb-4">
                <LanguageSelector />
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('login')}</h2>

              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {t('username')}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Enter username or reg no"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {t('password')}
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">
                    {t('forgotPassword')}
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  <LogIn className="w-5 h-5" />
                  {t('login')}
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700 font-semibold mb-2">Demo Credentials:</p>
                <p className="text-xs text-gray-600">Admin: admin / admin123</p>
                <p className="text-xs text-gray-600">Parent: P12345 / parent123</p>
                <p className="text-xs text-gray-600">Faculty: F001 / faculty123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
