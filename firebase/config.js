// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDASue-c-SL8sVDQZTWO4yN9tVOEE1-vY",
  authDomain: "whatsappclone-f715d.firebaseapp.com",
  projectId: "whatsappclone-f715d",
  storageBucket: "whatsappclone-f715d.appspot.com",
  messagingSenderId: "46978202147",
  appId: "1:46978202147:web:741e1f6b061d5fb61b0f96",
  measurementId: "G-E6YLBDFHVT",
};

// databaseURL: "https://console.firebase.google.com/project/whatsappclone-f715d/database/whatsappclone-f715d-default-rtdb/data/~2F",
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;