import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';

import SignUp from '../Authentication/SignUp';
import Home from '../pages/Home';
import Login from '../Authentication/Login';
import MovieForm from '../pages/AddMovie/MovieForm';
import ErrorPage from '../ErrorPage/ErrorPage';

import AllMovie from '../AllMovie/AllMovie';
import MovieDetealis from '../AllMovie/MovieDetealis';
import FavoritesMovie from '../AllMovie/FavoritesMovie';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ContactPage from '../pages/ContactPage';
import UpdateMovie from '../AllMovie/UpdateMovie';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('https://cinerama-five.vercel.app/movie'),
      },
      {
        path: '/allMovie',
        element: <AllMovie />,
        loader: () => fetch('https://cinerama-five.vercel.app/movie'),
      },
      {
        path: '/addmovie',
        element: <MovieForm />,
      },
      {
        path: '/favoritesmovie',
        element: <FavoritesMovie />,
        loader: () =>
          fetch('https://cinerama-five.vercel.app/favorite-movie/add-favorite'),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/moviedetealis/:id',
        element: (
          <PrivateRoute>
            <MovieDetealis />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://cinerama-five.vercel.app/movie/${params.id}`),
      },
      {
        path: '/contactpage',
        element: <ContactPage />,
      },
      {
        path: '/updatemovie/:id',
        element: <UpdateMovie />,
        loader: ({ params }) =>
          fetch(`https://cinerama-five.vercel.app/movie/${params.id}`),
      },
    ],
  },
]);

export default router;
