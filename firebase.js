// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCbaN-CE5FTmBuBNEfyQqc_42s-LKiDBLE",
    authDomain: "postify-ff3a7.firebaseapp.com",
    projectId: "postify-ff3a7",
    storageBucket: "postify-ff3a7.firebasestorage.app",
    messagingSenderId: "89252338771",
    appId: "1:89252338771:web:d4fb2e0dbbfb95f4fffaa6",
    measurementId: "G-BDQ5LMVLGM"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
