import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthProvider = createContext();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  //signup
  // console.log(user, loading);
  const creactNewUsers = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login
  const UserLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //updateProfile
  const updateUsersProfile = update => {
    return updateProfile(auth.currentUser, update);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    creactNewUsers,
    UserLogin,
    user,
    logOut,
    loading,
    updateUsersProfile,
  };
  return (
    <div>
      <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
    </div>
  );
};

export default AuthContext;
