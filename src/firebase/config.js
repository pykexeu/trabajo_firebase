import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBMABVWxGe2dP37yqEitHPhrCROp-ydHCw",
  authDomain: "gimnasio-907df.firebaseapp.com",
  projectId: "gimnasio-907df",
  storageBucket: "gimnasio-907df.appspot.com",
  messagingSenderId: "153620653890",
  appId: "1:153620653890:web:23c97c62ae8acdfa168adb",
  measurementId: "G-T9FQ308KN8"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);