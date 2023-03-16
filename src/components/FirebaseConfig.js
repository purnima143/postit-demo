// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDrCd3AZvhmagozxGRe4ayFbQrlB5wy5RI",
  authDomain: "chess-neurons.firebaseapp.com",
  projectId: "chess-neurons",
  storageBucket: "chess-neurons.appspot.com",
  messagingSenderId: "65550014345",
  appId: "1:65550014345:web:3f845f504f490e2bc77358",
  measurementId: "G-Z32EZ6SY9Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
