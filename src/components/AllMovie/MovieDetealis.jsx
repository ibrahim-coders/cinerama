import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const MovieDetealis = () => {
  const movies = useLoaderData();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(movies);
  const handleUserDelete = id => {
    console.log(id);
    fetch(`http://localhost:5000/movie/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        const remaing = movie.filter(u => u._id !== id);
        setMovie(remaing);
        navigate('/');
      })
      .catch(error => console.error('Error deleting user:', error));
  };
  console.log(movie);
  return (
    <div className="container mx-auto my-10">
      <div className=" max-w-screen-md card bg-base-100 shadow-xl p-6 mx-auto">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-64 mb-4 text-gray-300"
        />
        <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
        <p className="text-gray-300 text-sm mb-2">
          <strong>Genre:</strong> {movie.genre}
        </p>
        <p className="text-gray-300 text-sm mb-2">
          <strong>Release Year:</strong> {movie.releaseYear}
        </p>
        <p className="text-gray-300 text-sm mb-2">
          <strong>Duration:</strong> {Math.floor(movie.duration / 60)} hr{' '}
          {movie.duration % 60} min
        </p>
        <p className="text-gray-300 text-sm mb-4">
          <strong>Summary:</strong> {movie.summary}
        </p>
        <div className="rating mb-4">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={`mask mask-star ${
                index < movie.rating ? 'bg-yellow-400' : ''
              }`}
            ></span>
          ))}
        </div>
        <div className="flex justify-center gap-4 text-center">
          <button
            onClick={() => handleUserDelete(movie._id)}
            className="btn bg-red-700 text-white"
          >
            Delete
          </button>
          <button className="btn bg-primary text-white">Add to Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetealis;
