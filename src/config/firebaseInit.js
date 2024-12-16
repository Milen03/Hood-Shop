// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js';
//import { getAuth, browserLocalPersistence } from '../../node_modules/firebase/firebase-auth.js';
import { getAuth, setPersistence, browserLocalPersistence } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js'
import page from '../lib/page.js';
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

export const auth= getAuth(app)

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