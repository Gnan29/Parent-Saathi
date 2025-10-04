// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration (copy from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDs_A0HrYOwAVRJYLUqNEwIG7zkd7bac8I",
  authDomain: "parent-saathi.firebaseapp.com",
  projectId: "parent-saathi",
  storageBucket: "parent-saathi.firebasestorage.app",
  messagingSenderId: "693068173001",
  appId: "1:693068173001:web:e5bbc4c265cda0e9bd0718"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
