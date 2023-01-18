import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { firebaseAuth } from "../firebase";

import { TChildren } from "../types/app.types";
import { IUserContext } from "../types/app.interfaces";

export const AuthContext = createContext<IUserContext>({
  userAuth: null,
});

export const AuthContextProvider = ({ children }: { children: TChildren }) => {
  const [userAuth, setUserAuth] = useState<null | User>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      user ? setUserAuth(user) : setUserAuth(null);
    });
    return () => unsubscribe();
  }, [userAuth]);

  const values = {
    userAuth,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
