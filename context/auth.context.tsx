import React, { createContext, useEffect, useState, useContext } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { firebaseAuth } from "../firebase";

import { signOut, signIn, signUp, signInWithGooglePopup } from "../lib/authentication";
import { TChildren } from "../types/app/app.types";

interface Props {
  children: TChildren
}

interface IuserAuth {
  user: User | null;
  signin: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signout: () => Promise<void>;
}

export const authcontext = createContext<IuserAuth>({} as IuserAuth);

export const AuthProvider = ({ children }: Props) => {
  const auth = useProvideAuth();

  return <authcontext.Provider value={auth}>
    {children}
  </authcontext.Provider>;
};

export const useAuth = () => useContext(authcontext);

function useProvideAuth(): IuserAuth {
  const [user, setUser] = useState<null | User>(null);

  const signin = async (email: string, password: string): Promise<void> =>
    signIn(email, password).then((res) => setUser(res.user));

  const signup = async (email: string, password: string): Promise<void> =>
    signUp(email, password).then((res) => setUser(res.user));

  const signInWithGoogle = async (): Promise<void> =>
    signInWithGooglePopup().then((res) => {
      if (res) setUser(res.user)
      // Naive yes will change it 
      else throw new Error('Something went wrong...');
    });

  const signout = async (): Promise<void> =>
    signOut().then(() => setUser(null));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      user ? setUser(user) : setUser(null);
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signup,
    signInWithGoogle,
    signout
  }
}
