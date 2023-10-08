
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleLogin = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginbypass = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
     
    });

    return () => {
      unsubscribe();
    };
  }, []);


  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Handle successful sign out
      })
      .catch(() => {
        console.error("Sign out error");
      });
  };
 
  const authData = {
    googleLogin,
    createNewUser,
    user,
    logOut,
    loginbypass,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
