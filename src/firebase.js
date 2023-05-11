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
  apiKey: "AIzaSyBZvAQubY3g_JxCnb10zCc4BwrWlmXvBME",
  authDomain: "quora-clone-project-f6928.firebaseapp.com",
  projectId: "quora-clone-project-f6928",
  storageBucket: "quora-clone-project-f6928.appspot.com",
  messagingSenderId: "1042959096129",
  appId: "1:1042959096129:web:8662ce0d98491d9e4ba9c0",
  measurementId: "G-T80HXZRPYD"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);


export { auth, provider };
export default db;
