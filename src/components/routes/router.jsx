import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';

import SignUp from '../Authentication/SignUp';
import Home from '../pages/Home';
import Login from '../Authentication/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
