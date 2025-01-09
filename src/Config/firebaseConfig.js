// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDXmdVBUFFldBHOITFBevykQMJNXhK5I80",
  authDomain: "zalmar-6939b.firebaseapp.com",
  projectId: "zalmar-6939b",
  storageBucket: "zalmar-6939b.firebasestorage.app",
  messagingSenderId: "841819418237",
  appId: "1:841819418237:web:6743d4ad05a3ae1a840b14",
  measurementId: "G-LGF9Z3ZXL6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
