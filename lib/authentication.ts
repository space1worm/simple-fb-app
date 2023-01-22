import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as signout,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";

import { firebaseAuth } from "../firebase";

const GoogleProvider = new GoogleAuthProvider();

export const signUp = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  return await createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export const signIn = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  return await signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const signInWithGooglePopup =
  async (): Promise<UserCredential | null> => {
    try {
      const userAuth = await signInWithPopup(firebaseAuth, GoogleProvider);
      // const credential = GoogleAuthProvider.credentialFromResult(userAuth);
      // const token = credential?.accessToken;
      // const user = userAuth.user;
      return userAuth;
    } catch {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // const email = error.customData.email;
      // const credential = GoogleAuthProvider.credentialFromError(error);

      return null;
    }
  };

export const signOut = async (): Promise<void> => {
  return await signout(firebaseAuth);
};
