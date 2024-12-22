// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth'

import { getDatabase } from 'firebase/database'

import page from '../lib/page.js';


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

export const auth= getAuth(app)
export const database=getDatabase(app)

setPersistence(auth,browserLocalPersistence)
.then(()=>{
    console.log('persistan');
// Refresh current page when persistonce is loaded
    page.redirect(location.pathname)
    
})
.catch(err =>{
    console.log('persistan error');
    
})

export default app