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
  apiKey: "AIzaSyAPIxEBYWSO93cNNGW1rVKyNPZ2EBXngOQ",
  authDomain: "quora-clone-project-521cb.firebaseapp.com",
  projectId: "quora-clone-project-521cb",
  storageBucket: "quora-clone-project-521cb.appspot.com",
  messagingSenderId: "915361851234",
  appId: "1:915361851234:web:ecba756b30b9284de22e3b",
  measurementId: "G-YTYE8JMWNG"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);


export { auth, provider,db };
export default db;
