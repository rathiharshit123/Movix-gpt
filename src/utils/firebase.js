// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClhWBXnre7caqv4_eQI720mgw-InrkUdA",
  authDomain: "movix-b39a2.firebaseapp.com",
  projectId: "movix-b39a2",
  storageBucket: "movix-b39a2.appspot.com",
  messagingSenderId: "852993630038",
  appId: "1:852993630038:web:1ee828ffff5434548f00f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();