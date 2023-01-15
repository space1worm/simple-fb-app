import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyChnDQ86UwE_fxB4c_uIa8Uepopr0HQOWA",
    authDomain: "fb-app-f64ed.firebaseapp.com",
    projectId: "fb-app-f64ed",
    storageBucket: "fb-app-f64ed.appspot.com",
    messagingSenderId: "652226919026",
    appId: "1:652226919026:web:a82c8391bef3f7a1d620eb",
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore();
export const firebaseStorage = getStorage(firebaseApp);
export const firebaseAuth = getAuth();
