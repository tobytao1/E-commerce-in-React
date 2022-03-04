import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJY1kINwurZxQYx_NJNpj3bezu2CMJNyo",
  authDomain: "crwn-db-ce23e.firebaseapp.com",
  projectId: "crwn-db-ce23e",
  storageBucket: "crwn-db-ce23e.appspot.com",
  messagingSenderId: "295029023858",
  appId: "1:295029023858:web:c9c8fae5c36508bb960eeb",
  measurementId: "G-2H13XVBQV1",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
