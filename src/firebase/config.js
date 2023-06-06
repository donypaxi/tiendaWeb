import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app"; 

const firebaseConfig = {
  apiKey: "AIzaSyDY_a6j3qaKU0khyYLQwI21H1Y6NUVKVZo",
  authDomain: "tiendita-51ad8.firebaseapp.com",
  projectId: "tiendita-51ad8",
  storageBucket: "tiendita-51ad8.appspot.com",
  messagingSenderId: "221280069183",
  appId: "1:221280069183:web:795ff100f55931491dba8a",
  measurementId: "G-GHEE1YH6QR"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore( FirebaseApp)
