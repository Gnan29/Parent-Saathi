import React, { useState } from 'react';
import { Upload, FileText, Bell, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import KalamkariPattern from '../components/KalamkariPattern';

const FacultyDashboard: React.FC = () => {
  const { t } = useLanguage();
  const [dragActive, setDragActive] = useState(false);

  const myDocuments = [
    { id: 1, title: 'Lecture Notes - Week 1', date: '2024-02-20', downloads: 45 },
    { id: 2, title: 'Assignment Guidelines', date: '2024-02-18', downloads: 67 },
    { id: 3, title: 'Lab Manual', date: '2024-02-15', downloads: 89 }
  ];

  const pendingTasks = [
    { id: 1, task: 'Upload Mid-term Question Paper', deadline: '2024-03-01' },
    { id: 2, task: 'Submit Grade Sheet', deadline: '2024-03-05' },
    { id: 3, task: 'Review Student Projects', deadline: '2024-03-10' }
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    alert('File upload functionality will be implemented with backend integration.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Faculty Dashboard</h2>
          <p className="text-gray-600">Manage your documents and announcements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg border-4 border-blue-200">
            <FileText className="w-12 h-12 mb-3" />
            <h3 className="text-2xl font-bold">12</h3>
            <p className="text-blue-100">Documents Uploaded</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg border-4 border-green-200">
            <Bell className="w-12 h-12 mb-3" />
            <h3 className="text-2xl font-bold">5</h3>
            <p className="text-green-100">Announcements</p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-green-500 text-white p-6 rounded-xl shadow-lg border-4 border-blue-200">
            <Calendar className="w-12 h-12 mb-3" />
            <h3 className="text-2xl font-bold">3</h3>
            <p className="text-blue-100">Pending Tasks</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <Upload className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-800">Upload Document</h2>
            </div>

            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                dragActive
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-300 hover:border-blue-400'
              }`}
            >
              <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 mb-2">Drag and drop files here</p>
              <p className="text-sm text-gray-500 mb-4">or</p>
              <label className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold cursor-pointer hover:shadow-lg transition-all duration-200 inline-block">
                Browse Files
                <input type="file" className="hidden" multiple />
              </label>
              <p className="text-xs text-gray-500 mt-4">Supports PDF, DOCX, Images</p>
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 font-medium mb-2">Document Title</label>
              <input
                type="text"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter document title"
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 font-medium mb-2">Category</label>
              <select className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                <option>Academic</option>
                <option>Assignment</option>
                <option>Lecture Notes</option>
                <option>Lab Manual</option>
                <option>Other</option>
              </select>
            </div>

            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
              Upload Document
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-green-600" />
              <h2 className="text-xl font-bold text-gray-800">Pending Tasks</h2>
            </div>
            <div className="space-y-3">
              {pendingTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors"
                >
                  <h3 className="font-semibold text-gray-800">{task.task}</h3>
                  <p className="text-sm text-gray-600">Deadline: {task.deadline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-800">My Documents</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Title</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Upload Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Downloads</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myDocuments.map((doc) => (
                  <tr key={doc.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">{doc.title}</td>
                    <td className="py-3 px-4 text-gray-600">{doc.date}</td>
                    <td className="py-3 px-4 text-gray-600">{doc.downloads}</td>
                    <td className="py-3 px-4">
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <footer className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 text-white mt-12">
        <KalamkariPattern />
        <div className="container mx-auto px-4 py-6 text-center">
          <p>© 2024 Parent Saathi - Faculty Portal</p>
        </div>
      </footer>
    </div>
  );
};

export default FacultyDashboard;
