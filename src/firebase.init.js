// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7s2s7fOvayzKKtvWwXwdv7jcAXi79JkM",
    authDomain: "user-authentication-2a240.firebaseapp.com",
    projectId: "user-authentication-2a240",
    storageBucket: "user-authentication-2a240.appspot.com",
    messagingSenderId: "225061984187",
    appId: "1:225061984187:web:6fb532e804a789178a969e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;