import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCz4_9dCaDppHNToi-1LJPPam5s1VZ3Ia0",
  authDomain: "crwn-clothing-db-bae72.firebaseapp.com",
  projectId: "crwn-clothing-db-bae72",
  storageBucket: "crwn-clothing-db-bae72.appspot.com",
  messagingSenderId: "479893626205",
  appId: "1:479893626205:web:4cfb67a4c3a160a4389cb4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = await doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error");
    }
  }
  return userDocRef;
};
