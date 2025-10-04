import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import ParentDashboard from './pages/ParentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import FacultyDashboard from './pages/FacultyDashboard';

const DashboardRouter: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  switch (user.role) {
    case 'admin':
      return <AdminDashboard />;
    case 'parent':
      return <ParentDashboard />;
    case 'faculty':
      return <FacultyDashboard />;
    default:
      return <Navigate to="/login" replace />;
  }
};

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardRouter />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
