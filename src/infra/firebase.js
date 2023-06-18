
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG2Os8jFx2vwe19lzCwIIX6cpyDA57NQs",
  authDomain: "ecommerce-project-26853.firebaseapp.com",
  projectId: "ecommerce-project-26853",
  storageBucket: "ecommerce-project-26853.appspot.com",
  messagingSenderId: "393497538642",
  appId: "1:393497538642:web:dc4c40f39ce625a1772f8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);