export type UserRole = 'admin' | 'parent' | 'faculty';

export type Language = 'en' | 'hi' | 'te' | 'ta' | 'ar';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  registrationNumber?: string;
  tid?: string;
  approved: boolean;
  createdAt: Date;
}

export interface Document {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  category: string;
  uploadedBy: string;
  uploadedAt: Date;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  createdBy: string;
  createdAt: Date;
}

export interface AIQuery {
  id: string;
  userId: string;
  query: string;
  response: string;
  language: Language;
  timestamp: Date;
}

export interface Translation {
  [key: string]: {
    en: string;
    hi: string;
    te: string;
    ta: string;
    ar: string;
  };
}
