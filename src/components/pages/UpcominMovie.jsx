import { RiMovie2Fill } from 'react-icons/ri';

const UpcominMovie = () => {
  return (
    <div className="bg-slate-700 py-4">
      <div className="flex flex-col justify-center text-center items-center">
        <RiMovie2Fill className="text-center text-yellow-500 text-4xl my-4" />
        <p className="text-gray-200 text-xl font-bold">Watch New Movies</p>
        <h2 className="text-2xl md:text-4xl font-bold text-white py-4">
          {' '}
          Coming Soon Movies
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 gap-4 my-8">
        <a href="#" className="group relative block">
          <div className="relative h-[350px] sm:h-[450px]">
            <img
              src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-12-768x513.jpg"
              alt=""
              className="i h-full w-full object-cover opacity-100 "
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <p className="text-xl pb-2">Comedy</p>
            <h3 className="text-xl font-medium text-white">Thw Fifth Day</h3>

            <button className="btn btn-warning mt-2">Get Ticket</button>
          </div>
        </a>
        <a href="#" className="group relative block">
          <div className="relative h-[350px] sm:h-[450px]">
            <img
              src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/banner-10-768x660.jpg"
              alt=""
              className="i h-full w-full object-cover opacity-100 "
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <p className="text-xl pb-2">Animation,Comedy</p>
            <h3 className="text-xl font-medium text-white">
              Black and White Twins
            </h3>

            <button className="btn btn-warning mt-2">Get Ticket</button>
          </div>
        </a>
        <a href="#" className="group relative block">
          <div className="relative h-[350px] sm:h-[450px]">
            <img
              src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-09-768x513.jpg"
              alt=""
              className="i h-full w-full object-cover opacity-100 "
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <p className="text-xl pb-2">Thriller</p>
            <h3 className="text-xl font-medium text-white">
              The Scariest Dream
            </h3>

            <button className="btn btn-warning mt-2">Get Ticket</button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default UpcominMovie;
