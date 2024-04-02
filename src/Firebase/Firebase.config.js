// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLYXwOAHoIkLRFntQPCmq-YiA2OSNnXJ4",
  authDomain: "simple-firebase-auth-15865.firebaseapp.com",
  projectId: "simple-firebase-auth-15865",
  storageBucket: "simple-firebase-auth-15865.appspot.com",
  messagingSenderId: "344631381071",
  appId: "1:344631381071:web:822a03b00f1c8ec218ae3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
