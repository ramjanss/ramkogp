// Firebase SDK Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCJlZPUu7mPdYdfy44jzthU_QnYjMR0R2U",
  authDomain: "ramkogp.firebaseapp.com",
  projectId: "ramkogp",
  storageBucket: "ramkogp.firebasestorage.app",
  messagingSenderId: "557923265598",
  appId: "1:557923265598:web:b46e45bc863e9b411e356f",
  measurementId: "G-EMY24NLZN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
