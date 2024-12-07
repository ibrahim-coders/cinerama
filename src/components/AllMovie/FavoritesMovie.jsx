import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../AuthContext/AuthContext';

const FavoritesMovie = () => {
  const { loading } = useContext(AuthProvider);
  const FavoriteMovies = useLoaderData();

  if (!FavoriteMovies || FavoriteMovies.length === 0) {
    return (
      <div className="container mx-auto my-10">
        <h2>No favorite movies found.</h2>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-t-4 border-red-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <section className="max-w-screen-2xl mx-auto my-10 ">
      <div className="ml-10 my-4">
        <h2 className="text-3xl md:text-5xl text-orange-700 font-bold ">
          Favorite Movies
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FavoriteMovies.map((movie, index) => (
          <div
            key={index}
            className="w-full bg-base-200 shadow-xl p-6 mx-auto mb-6 rounded-md"
          >
            <img
              src={movie.movieDetails.poster}
              alt={movie.movieDetails.title}
              className="w-full h-64 mb-4 text-gray-300"
            />
            <h2 className="text-2xl font-bold mb-4">
              {movie.movieDetails.title}
            </h2>
            <p className="text-gray-300 text-sm mb-2">
              <strong>Genre:</strong> {movie.movieDetails.genre}
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong>Release Year:</strong> {movie.movieDetails.releaseYear}
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong>Duration:</strong>{' '}
              {Math.floor(movie.movieDetails.duration / 60)} hr{' '}
              {movie.movieDetails.duration % 60} min
            </p>

            <div className="rating mb-4">
              {Array.from({ length: 5 }, (_, index) => (
                <label key={index} className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked={index === 0}
                  />
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FavoritesMovie;
