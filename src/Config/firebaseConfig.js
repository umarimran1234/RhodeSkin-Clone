import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDXmdVBUFFldBHOITFBevykQMJNXhK5I80",
  authDomain: "zalmar-6939b.firebaseapp.com",
  projectId: "zalmar-6939b",
  storageBucket: "zalmar-6939b.firebasestorage.app",
  messagingSenderId: "841819418237",
  appId: "1:841819418237:web:6743d4ad05a3ae1a840b14",
  measurementId: "G-LGF9Z3ZXL6",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
