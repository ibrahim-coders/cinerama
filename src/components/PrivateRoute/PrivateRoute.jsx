// import { useContext } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { AuthProvider } from '../AuthContext/AuthContext';

// const PrivateRoute = ({ children }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { user } = useContext(AuthProvider);
//   console.log(location);
//   if (user && user?.email) {
//     return children;
//   }
//   return navigate(location?.state ? location.state : '/');
// };

// export default PrivateRoute;
