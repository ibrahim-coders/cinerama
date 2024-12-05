import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createContext } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthProvider = createContext();
const AuthContext = ({ children }) => {
  //signup
  const creactNewUsers = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    creactNewUsers,
  };
  return (
    <div>
      <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
    </div>
  );
};

export default AuthContext;
