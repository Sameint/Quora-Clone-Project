// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// For Firebase JS SDK v7.20.0 and later, measurementId is optiona
const firebaseConfig = {
  apiKey: "AIzaSyBirVrHIXWjA918tevTMhZpFiOTxhqjrbk",
  authDomain: "quora-clone-2c604.firebaseapp.com",
  projectId: "quora-clone-2c604",
  storageBucket: "quora-clone-2c604.appspot.com",
  messagingSenderId: "774639993879",
  appId: "1:774639993879:web:a79e5b0b5e4e40d8258852",
  measurementId: "G-EG1B923QPG"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);


export { auth, provider,db };
export default db;
