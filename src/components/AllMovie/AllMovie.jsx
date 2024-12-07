import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../AuthContext/AuthContext';

const AllMovie = () => {
  const allMovie = useLoaderData();
  const { loading } = useContext(AuthProvider);
  console.log(allMovie);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-t-4 border-red-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 mx-auto text-center items-center px-4 gap-6">
      {allMovie.map(movie => (
        <div key={movie._id} className="mx-auto mt-10">
          <div className="w-full bg-base-200 shadow-xl p-6 mx-auto mb-6 rounded-md">
            <figure>
              <img
                src={movie.poster}
                alt="movie"
                className="w-full h-64 mb-4 "
              />
            </figure>
            <div className="">
              <h2 className="card-title">{movie.title}</h2>

              <div className="text-start text-sm">
                <p className="text-sm text-gray-300 text-start py-2">
                  {movie.genre}
                </p>
                <span className="mt-4 space-x-1 text-gray-300">
                  Duration:
                  <span className="font-semibold">
                    {Math.floor(movie.duration / 60)} hr {movie.duration % 60}{' '}
                    min
                  </span>
                </span>
              </div>

              {/* Corrected Release Year */}
              <p className="text-sm text-gray-300 text-start">
                Release Year: {movie.releaseYear}
              </p>

              <div className="flex items-center ">
                {/* Star Rating */}
                <div className="rating">
                  {Array.from({ length: 5 }, (_, index) => (
                    <input
                      key={index}
                      type="radio"
                      name="rating-1"
                      className={`mask mask-star ${
                        index < movie.rating ? 'bg-yellow-400' : ''
                      }`}
                      checked={index + 1 === movie.rating}
                      readOnly
                    />
                  ))}
                </div>
              </div>

              <div className="card-actions mt-4">
                <Link
                  to={`/moviedetealis/${movie._id}`}
                  className="btn btn-primary"
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllMovie;
