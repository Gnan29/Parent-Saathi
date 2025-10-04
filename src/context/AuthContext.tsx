import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    if (username === 'admin' && password === 'admin123') {
      const adminUser: User = {
        id: '1',
        name: 'Admin',
        email: 'admin@parentsaathi.com',
        role: 'admin',
        approved: true,
        createdAt: new Date()
      };
      setUser(adminUser);
      localStorage.setItem('user', JSON.stringify(adminUser));
      return true;
    }

    if (username.startsWith('P') && password === 'parent123') {
      const parentUser: User = {
        id: '2',
        name: 'Parent User',
        email: 'parent@example.com',
        role: 'parent',
        registrationNumber: username,
        approved: true,
        createdAt: new Date()
      };
      setUser(parentUser);
      localStorage.setItem('user', JSON.stringify(parentUser));
      return true;
    }

    if (username.startsWith('F') && password === 'faculty123') {
      const facultyUser: User = {
        id: '3',
        name: 'Faculty User',
        email: 'faculty@example.com',
        role: 'faculty',
        tid: username,
        approved: true,
        createdAt: new Date()
      };
      setUser(facultyUser);
      localStorage.setItem('user', JSON.stringify(facultyUser));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
