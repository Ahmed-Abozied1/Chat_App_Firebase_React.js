
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE-f2YZqWZ-oeyhLZplxqD5MWEQD23Y_Q",
  authDomain: "react-chat-b2f18.firebaseapp.com",
  projectId: "react-chat-b2f18",
  storageBucket: "react-chat-b2f18.appspot.com",
  messagingSenderId: "491916613586",
  appId: "1:491916613586:web:b63b01f3d76991284d1a0b",
  measurementId: "G-44KG26Y11Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db =getFirestore(app);
const analytics = getAnalytics(app);