import React from 'react';
import { FileText, Bell, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import AIChatbot from '../components/AIChatbot';
import VoiceAssistant from '../components/VoiceAssistant';
import KalamkariPattern from '../components/KalamkariPattern';

const ParentDashboard: React.FC = () => {
  const { t } = useLanguage();

  const documents = [
    { id: 1, title: 'Academic Calendar 2024-25', category: 'Academic', date: '2024-01-15' },
    { id: 2, title: 'University Policies', category: 'Policy', date: '2024-01-10' },
    { id: 3, title: 'Fee Structure', category: 'Finance', date: '2024-01-05' },
    { id: 4, title: 'Campus Map', category: 'General', date: '2024-01-01' }
  ];

  const announcements = [
    { id: 1, title: 'Mid-term Examinations Schedule', date: '2024-03-01' },
    { id: 2, title: 'Parent-Teacher Meeting', date: '2024-02-28' },
    { id: 3, title: 'Sports Day Event', date: '2024-02-25' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('dashboard')}</h2>
          <p className="text-gray-600">Welcome to Parent Saathi - Your AI-powered assistant</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg border-4 border-blue-200">
            <FileText className="w-12 h-12 mb-3" />
            <h3 className="text-2xl font-bold">24</h3>
            <p className="text-blue-100">{t('documents')}</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg border-4 border-green-200">
            <Bell className="w-12 h-12 mb-3" />
            <h3 className="text-2xl font-bold">8</h3>
            <p className="text-green-100">{t('announcements')}</p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-green-500 text-white p-6 rounded-xl shadow-lg border-4 border-blue-200">
            <img src="/bot.png" alt="AI" className="w-12 h-12 mb-3" />
            <h3 className="text-2xl font-bold">AI Ready</h3>
            <p className="text-blue-100">Ask me anything!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <AIChatbot />
          <VoiceAssistant />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-800">{t('documents')}</h2>
            </div>
            <div className="space-y-3">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
                >
                  <div>
                    <h3 className="font-semibold text-gray-800">{doc.title}</h3>
                    <p className="text-sm text-gray-600">
                      {doc.category} - {doc.date}
                    </p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="w-6 h-6 text-green-600" />
              <h2 className="text-xl font-bold text-gray-800">{t('announcements')}</h2>
            </div>
            <div className="space-y-3">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="p-3 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors"
                >
                  <h3 className="font-semibold text-gray-800">{announcement.title}</h3>
                  <p className="text-sm text-gray-600">{announcement.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 text-white mt-12">
        <KalamkariPattern />
        <div className="container mx-auto px-4 py-6 text-center">
          <p>© 2025 Parent Saathi - Empowering Parents Through Knowledge</p>
        </div>
      </footer>
    </div>
  );
};

export default ParentDashboard;
