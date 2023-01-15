import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth';

import { User } from "firebase/auth";
import { firebaseAuth } from "../firebase";

type Children = React.ReactNode | React.ReactNode[];

interface UserContext {
    userAuth: null | User;
}

const AuthContext = createContext<UserContext>({
    userAuth: null
});
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: Children }) => {
    const [userAuth, setUserAuth] = useState<null | User>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            user ? setUserAuth(user) : setUserAuth(null);
        });
        return () => unsubscribe();
    }, [userAuth])

    const values = {
        userAuth
    }

    return <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>

}