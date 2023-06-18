import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
 

const firebaseConfig = {
  apiKey: "AIzaSyBIIAiZMWx5VaNKkZSwKJbHPd1fN8QkilU",
  authDomain: "fir-tutorial-ef272.firebaseapp.com",
  projectId: "fir-tutorial-ef272",
  storageBucket: "fir-tutorial-ef272.appspot.com",
  messagingSenderId: "555339308321",
  appId: "1:555339308321:web:fb9a47730da2dd2c68b260",
  measurementId: "G-6MYGYDJBBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
