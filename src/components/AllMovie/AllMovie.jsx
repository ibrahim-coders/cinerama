import { useContext, useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../AuthContext/AuthContext';

const AllMovie = () => {
  const allMovie = useLoaderData();
  const { loading } = useContext(AuthProvider);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-t-4 border-red-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  const [movies, setMovies] = useState(allMovie || []);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!allMovie || allMovie.length === 0) {
      fetch('https://cinerama-five.vercel.app/movie')
        .then(res => res.json())
        .then(data => setMovies(data));
    }
  }, [allMovie]);

  const handleSearch = () => {
    const filteredMovies = allMovie.filter(movie =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  return (
    <section className="mb-4">
      <div className="ml-10 my-4">
        <h2 className="text-3xl md:text-5xl text-orange-700 font-bold mt-10">
          All Movies
        </h2>
      </div>

      {/* Search Input */}
      <div className="mb-4 w-96 mx-auto">
        <div className="gap-4 flex justify-center text-center">
          <input
            type="text"
            placeholder="Search by Movie Title"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
          />
          <button onClick={handleSearch} className="btn btn-primary">
            Search
          </button>
        </div>
      </div>

      {/* Show Movies */}
      <div className="movie-list">
        {movies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto text-center items-center px-4 gap-6">
            {movies.map(movie => (
              <div key={movie._id} className="mx-auto mt-10 w-[400px]">
                <div className="w-full bg-base-200 shadow-xl p-6 mx-auto  rounded-md">
                  <figure>
                    <img
                      src={movie.poster}
                      alt="movie"
                      className="w-full h-64 mb-4 bg-cover bg-center"
                    />
                  </figure>
                  <div>
                    <h2 className="card-title">{movie.title}</h2>
                    <div className="text-start text-sm">
                      <p className="text-sm text-gray-300 text-start py-2">
                        {movie.genre}
                      </p>
                      <span className="mt-4 space-x-1 text-gray-300">
                        Duration:
                        <span className="font-semibold">
                          {Math.floor(movie.duration / 60)} hr{' '}
                          {movie.duration % 60} min
                        </span>
                      </span>
                    </div>

                    <p className="text-sm text-gray-300 text-start">
                      Release Year: {movie.releaseYear}
                    </p>

                    <div className="flex items-center">
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
        ) : (
          <div className="w-96 mx-auto">
            <p className=" text-white pb-4 pt-2 text-start">No movies found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllMovie;
