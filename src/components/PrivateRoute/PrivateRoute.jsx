import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthProvider } from '../AuthContext/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-t-4 border-red-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
