// Import the functions you need from the SDKs you need

import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbDP_rKTgFcjsIoINQIH2RqUCWgVbYdBU",
  authDomain: "prepai-91cfb.firebaseapp.com",
  projectId: "prepai-91cfb",
  storageBucket: "prepai-91cfb.firebasestorage.app",
  messagingSenderId: "649850377139",
  appId: "1:649850377139:web:7b88069e150e69acca71c6",
  measurementId: "G-H2NTZ7R6MC"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);