
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [lodding , setLodding] = useState(true)
  const googleLogin = () => {
    setLodding(true)
    return signInWithPopup(auth, GoogleProvider);
  };

  const createNewUser = (email, password) => {
    setLodding(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginbypass = (email, password) =>{
    setLodding(true)
    return signInWithEmailAndPassword(auth, email, password)
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLodding(false)
     
    });

    return () => {
      unsubscribe();
    };
  }, []);


  const logOut = () => {
    setLodding(true)
    return signOut(auth)
      
  };
 
  const authData = {
    googleLogin,
    createNewUser,
    user,
    logOut,
    loginbypass,
    lodding,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
