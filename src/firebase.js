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
 apiKey: "AIzaSyDNBk3zJd_7XbjWcsZxb5L241CS9t-14_M",
  authDomain: "my-project-833fa.firebaseapp.com",
  projectId: "my-project-833fa",
  storageBucket: "my-project-833fa.appspot.com",
  messagingSenderId: "924537350982",
  appId: "1:924537350982:web:4f55c7375912dcabb95347",
  measurementId: "G-P6VLL3P512"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);


export { auth, provider };
export default db;
