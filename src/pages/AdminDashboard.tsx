import React, { useState } from 'react';
import { Users, FileText, Upload, BarChart3, UserPlus, CheckCircle, XCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import KalamkariPattern from '../components/KalamkariPattern';

const AdminDashboard: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Parents', value: 156, icon: Users, color: 'blue' },
    { label: 'Total Faculty', value: 42, icon: Users, color: 'green' },
    { label: 'Documents', value: 89, icon: FileText, color: 'blue' },
    { label: 'AI Queries', value: 1247, icon: BarChart3, color: 'green' }
  ];

  const pendingApprovals = [
    { id: 1, name: 'Rajesh Kumar', regNo: 'P12456', email: 'rajesh@example.com' },
    { id: 2, name: 'Priya Sharma', regNo: 'P12457', email: 'priya@example.com' },
    { id: 3, name: 'Amit Patel', regNo: 'P12458', email: 'amit@example.com' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h2>
          <p className="text-gray-600">Manage users, documents, and system settings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 text-white p-6 rounded-xl shadow-lg border-4 border-${stat.color}-200 transform hover:scale-105 transition-all duration-200`}
            >
              <stat.icon className="w-12 h-12 mb-3" />
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className={`text-${stat.color}-100`}>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg border-2 border-blue-200 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-semibold ${
                activeTab === 'overview'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('approvals')}
              className={`px-6 py-3 font-semibold ${
                activeTab === 'approvals'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600'
              }`}
            >
              Pending Approvals
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`px-6 py-3 font-semibold ${
                activeTab === 'documents'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600'
              }`}
            >
              Documents
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">System Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Recent Activity</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 5 new parent registrations today</li>
                      <li>• 12 documents uploaded this week</li>
                      <li>• 234 AI queries processed today</li>
                      <li>• 3 new announcements published</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Quick Actions</h4>
                    <div className="space-y-2">
                      <button className="w-full text-left px-3 py-2 bg-white rounded hover:bg-gray-50 border border-gray-200">
                        <UserPlus className="inline w-4 h-4 mr-2" />
                        Create Parent Account
                      </button>
                      <button className="w-full text-left px-3 py-2 bg-white rounded hover:bg-gray-50 border border-gray-200">
                        <Upload className="inline w-4 h-4 mr-2" />
                        Upload Document
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'approvals' && (
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Pending Parent Approvals</h3>
                <div className="space-y-3">
                  {pendingApprovals.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-800">{user.name}</h4>
                        <p className="text-sm text-gray-600">
                          {user.regNo} - {user.email}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Approve
                        </button>
                        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-2">
                          <XCircle className="w-4 h-4" />
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Document Management</h3>
                <div className="mb-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-200">
                    <Upload className="w-5 h-5" />
                    Upload New Document
                  </button>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-gray-600">
                    Document upload functionality will be available here. Supports PDF, DOCX, and images.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 text-white mt-12">
        <KalamkariPattern />
        <div className="container mx-auto px-4 py-6 text-center">
          <p>© 2024 Parent Saathi - Admin Portal</p>
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboard;
