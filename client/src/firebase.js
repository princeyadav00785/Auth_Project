// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-44d35.firebaseapp.com",
  projectId: "mern-auth-44d35",
  storageBucket: "mern-auth-44d35.appspot.com",
  messagingSenderId: "143768031388",
  appId: "1:143768031388:web:24bd51139a59dbad14dd59"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);