// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAZrjJvhEutSFYDRR8l_axh_pU_IiPX1vA",
  authDomain: "authdemo-c89c5.firebaseapp.com",
  projectId: "authdemo-c89c5",
  storageBucket: "authdemo-c89c5.appspot.com",
  messagingSenderId: "579800144188",
  appId: "1:579800144188:web:9c62d60d1c8c95b1442639",
  measurementId: "G-JVHRBC2HHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app,auth}
