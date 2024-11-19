// src/config/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC0LuOlefAlv3_oronYbC-bYSA_9qzb8as",
  authDomain: "bookitap-49ea7.firebaseapp.com",
  projectId: "bookitap-49ea7",
  storageBucket: "bookitap-49ea7.firebasestorage.app",
  messagingSenderId: "935643188782",
  appId: "1:935643188782:web:176c4f26efc13a4c46d9bf",
  measurementId: "G-C5HD2EY4F4"
};


// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account' // Forces account selection even if one account is available
});

export { auth, db, storage, googleProvider };
