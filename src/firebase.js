// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp4UcNMEfHmUR7k6kYHIoJKNTJYG8WuTM",
  authDomain: "quora-clone-project-c1994.firebaseapp.com",
  projectId: "quora-clone-project-c1994",
  storageBucket: "quora-clone-project-c1994.appspot.com",
  messagingSenderId: "609405490031",
  appId: "1:609405490031:web:70a75e05124e8c5a320e9a",
  measurementId: "G-DE8GJQLS09"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);


export { auth, provider,db };
export default db;
