import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import FilemsImage from './filemsImage';
import UpcominMovie from './UpcominMovie';
import MoiveCart from '../AllMovie/MoiveCart';
import { useState } from 'react';

const Home = () => {
  const movies = useLoaderData();
  const [sortedMovies, setSortedMovies] = useState(movies);

  const handleSort = () => {
    const sorted = [...sortedMovies].sort((a, b) => b.rating - a.rating);
    setSortedMovies(sorted);
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Banner />
      <div className="flex justify-end">
        <button onClick={handleSort} className="btn btn-primary">
          Sort
        </button>
      </div>
      <div className="grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 mx-auto text-center items-center px-4">
        {sortedMovies.map(movie => (
          <MoiveCart key={movie._id} movie={movie}></MoiveCart>
        ))}
      </div>
      <FilemsImage></FilemsImage>
      <UpcominMovie />
    </div>
  );
};

export default Home;
