// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA12spUJR4tFQax_XJ0936UnDcOpA8jVM",
  authDomain: "email-password-auth-fb38a.firebaseapp.com",
  projectId: "email-password-auth-fb38a",
  storageBucket: "email-password-auth-fb38a.firebasestorage.app",
  messagingSenderId: "648511339434",
  appId: "1:648511339434:web:ca7adad584c6bbb2ee09d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;