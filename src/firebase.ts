// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg715BwADfSAfhFQ6VpOSlCI9TTAWHAZ8",
  authDomain: "astro-d4e9b.firebaseapp.com",
  projectId: "astro-d4e9b",
  storageBucket: "astro-d4e9b.firebasestorage.app",
  messagingSenderId: "214302508294",
  appId: "1:214302508294:web:00d9d2b0892f4ff0cb0a87",
  measurementId: "G-QZZH07MTWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
