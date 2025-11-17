import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";



 const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
 const [user, setUser] = useState()
 const [loading, SetLoading] = useState()

  const registerUser = (email, password) => {
    SetLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    SetLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInGoogle = () => {
    SetLoading(true)
    return signInWithPopup(auth, googleProvider);
  };
  const LogOut = () =>{
    SetLoading(true)
    return signOut(auth)
  }
  const updateUser = (profile) =>{
    return updateProfile(auth.currentUser, profile)
  }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUsers) =>{
        setUser(currentUsers)
        SetLoading(false)
    })
    return () => {
        unSubscribe()
    }
  },[])

  const authInfo = {
    registerUser,
    signInUser,
    signInGoogle,
    user,
    loading,
    LogOut,
    updateUser
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
