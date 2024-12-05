import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';

import SignUp from '../Authentication/SignUp';
import Home from '../pages/Home';
import Login from '../Authentication/Login';
import MovieForm from '../pages/AddMovie/MovieForm';
import ErrorPage from '../ErrorPage/ErrorPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/addmovie',
        element: (
          <PrivateRoute>
            <MovieForm />
          </PrivateRoute>
        ),
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
