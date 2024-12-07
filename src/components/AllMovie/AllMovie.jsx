import { Link, useLoaderData } from 'react-router-dom';

const AllMovie = () => {
  const allMovie = useLoaderData();
  console.log(allMovie);

  return (
    <div className="grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 mx-auto text-center items-center px-4">
      {allMovie.map(movie => (
        <div key={movie._id} className="mx-auto mt-10">
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={movie.poster} alt="movie" className="w-full h-64" />
            </figure>
            <div className="card-body">
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

              <div className="flex items-center space-x-1">
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
