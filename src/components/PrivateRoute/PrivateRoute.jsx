import { useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);
  return <div>{children}</div>;
};

export default PrivateRoute;
