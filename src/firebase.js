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
  apiKey: "AIzaSyDzQPhILziQ6MqV4reYgZaCO-IHUN8qPTI",
  authDomain: "quora-clone-site-a26be.firebaseapp.com",
  projectId: "quora-clone-site-a26be",
  storageBucket: "quora-clone-site-a26be.appspot.com",
  messagingSenderId: "588139672361",
  appId: "1:588139672361:web:5f19f2b309426a8f5d7d38",
  measurementId: "G-5F76JR1GCR"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);


export { auth, provider,db };
export default db;
