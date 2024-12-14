// Import the functions you need from the SDKs you need
import { initializeApp } from "../../node_modules/firebase/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBJXX8eKTXGOQJBRmJqWFz1ngdUoo8drc",
  authDomain: "softuni-hood-shop.firebaseapp.com",
  projectId: "softuni-hood-shop",
  storageBucket: "softuni-hood-shop.firebasestorage.app",
  messagingSenderId: "165554981765",
  appId: "1:165554981765:web:fa228da4d21d6d81c9d2ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app