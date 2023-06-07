// import { useEffect } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmUOWoD1FV47BRWjVCqydqOC8VlZpJdTs",
  authDomain: "tattoos-46114.firebaseapp.com",
  projectId: "tattoos-46114",
  storageBucket: "tattoos-46114.appspot.com",
  messagingSenderId: "44114097672",
  appId: "1:44114097672:web:ba73b6149acac44132c3bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);