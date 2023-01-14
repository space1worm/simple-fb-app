import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { IPosts } from "./db.types";

const firebaseConfig = {
    apiKey: "AIzaSyChnDQ86UwE_fxB4c_uIa8Uepopr0HQOWA",
    authDomain: "fb-app-f64ed.firebaseapp.com",
    projectId: "fb-app-f64ed",
    storageBucket: "fb-app-f64ed.appspot.com",
    messagingSenderId: "652226919026",
    appId: "1:652226919026:web:a82c8391bef3f7a1d620eb",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseDB = getFirestore();

//code inside component
export const createPost = async (payload: IPosts) => {
    const postsCollectionRef = collection(firebaseDB, "posts");
    const responce = await addDoc(postsCollectionRef, payload);
    return responce;
};
