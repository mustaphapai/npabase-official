// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpuNG1tmfPkfUJZWRqef55v2hOJUhrrIU",
  authDomain: "npabase.firebaseapp.com",
  projectId: "npabase",
  storageBucket: "npabase.firebasestorage.app",
  messagingSenderId: "995406630846",
  appId: "1:995406630846:web:e3d0c916f25456c41f33ef",
  measurementId: "G-DBVMQRETDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Export the services you want to use
export { auth, db };