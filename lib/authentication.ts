import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { firebaseAuth } from "../firebase";

const Gprovider = new GoogleAuthProvider();

export const signUp = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export const logIn = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const logOut = async () => {
  await signOut(firebaseAuth);
};

export const signInWithGooglePopup = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, Gprovider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    return { user, token };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);

    return {
      errorCode,
      errorMessage,
      email,
      credential,
    };
  }
};
