import React, { useEffect, useState } from "react";
import { Authcontext } from "./Authcontext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebase.config";

const googleProvider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [jobInfo, setJobInfo] = useState({});

  const createuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignInuser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignInGoogleUser = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const SignOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser), setLoading(false);

      console.log("current user ", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createuser,
    user,
    loading,
    SignInuser,
    SignInGoogleUser,
    SignOutUser,
    setJobInfo,
    jobInfo,
  };
  return <Authcontext value={authInfo}>{children}</Authcontext>;
};

export default Authprovider;
