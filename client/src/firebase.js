// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d4206.firebaseapp.com",
  projectId: "mern-estate-d4206",
  storageBucket: "mern-estate-d4206.appspot.com",
  messagingSenderId: "536488225972",
  appId: "1:536488225972:web:b7484c521e3661ef1efbe1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);