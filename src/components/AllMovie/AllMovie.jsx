import { useLoaderData } from 'react-router-dom';

const AllMovie = () => {
  const allMovie = useLoaderData();
  console.log(allMovie);
  return <div>alll movie: {allMovie.length}</div>;
};

export default AllMovie;
