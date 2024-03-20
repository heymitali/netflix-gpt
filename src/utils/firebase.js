// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQt8XaqM6-eXB71fXZRUTU-LYWtt_mIZM",
  authDomain: "netflix-gpt-6aa7f.firebaseapp.com",
  projectId: "netflix-gpt-6aa7f",
  storageBucket: "netflix-gpt-6aa7f.appspot.com",
  messagingSenderId: "729742629929",
  appId: "1:729742629929:web:e9d380de64b4a3e5595038",
  measurementId: "G-9KSRX7F1HP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
