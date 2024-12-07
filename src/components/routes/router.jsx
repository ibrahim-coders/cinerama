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

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/movie'),
      },
      {
        path: '/allMovie',
        element: <AllMovie />,
        loader: () => fetch('http://localhost:5000/movie'),
      },
      {
        path: '/addmovie',
        element: <MovieForm />,
      },
      {
        path: '/favoritesmovie',
        element: <FavoritesMovie />,
        loader: () =>
          fetch('http://localhost:5000/favorite-movie/add-favorite'),
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
        element: <MovieDetealis />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/movie/${params.id}`),
      },
    ],
  },
]);

export default router;
