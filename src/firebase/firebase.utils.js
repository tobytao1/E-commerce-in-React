import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// update these imports
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJY1kINwurZxQYx_NJNpj3bezu2CMJNyo",
  authDomain: "crwn-db-ce23e.firebaseapp.com",
  projectId: "crwn-db-ce23e",
  storageBucket: "crwn-db-ce23e.appspot.com",
  messagingSenderId: "295029023858",
  appId: "1:295029023858:web:c9c8fae5c36508bb960eeb",
  measurementId: "G-2H13XVBQV1",
};
// Initialize Firebase app
initializeApp(firebaseConfig);

// Initialize Auth provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// Firestore
export const firestore = getFirestore();

// Auth
export const auth = getAuth();

// Sign in with Google
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).catch((error) => {
    // Handle errors here
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used
    const email = error.email;
    // The AuthCredential type that was used
    const credential = GoogleAuthProvider.credentialFromError(error);
    // Do whatever to handle error
    console.log({
      errorCode,
      errorMessage,
      email,
      credential,
    });
  });
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Now calls the `doc` function; reference to Firestore database is
  // passed as first argument
  const userRef = doc(firestore, `users/${userAuth.uid}`);
  // Now calls the `getDoc` function; DocumentReference is now passed as the argument
  const userSnapshot = await getDoc(userRef);

  // `.exists` is now a function on the snapshot, not a property
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // Now calls `setDoc` function; DocumentReference passed as first argument
      // and data to set is second argument
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
