import { createContext } from 'react';

export const AuthProvider = createContext();
const AuthContext = ({ children }) => {
  const parson = {
    name: 'rakib',
    age: 23,
  };
  const authInfo = {
    parson,
  };
  return (
    <div>
      <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
    </div>
  );
};

export default AuthContext;
