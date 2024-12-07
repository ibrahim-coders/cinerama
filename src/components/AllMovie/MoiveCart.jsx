import { Link } from 'react-router-dom';

const MoiveCart = ({ movie }) => {
  const { duration, genre, poster, rating, releaseYear, summary, title, _id } =
    movie;

  return (
    <div className="mx-auto mt-10">
      <div className="w-full bg-base-200 shadow-xl p-6 mx-auto mb-6 rounded-md">
        <figure>
          <img
            src={poster}
            alt="movie"
            className="w-full h-64 mb-4 text-gray-300"
          />
        </figure>
        <div className="">
          <h2 className="card-title">{title}</h2>

          <div className="text-start text-sm ">
            <p className="text-sm text-gray-300 text-start py-2">{genre}</p>
            <span className="mt-4 space-x-1 text-gray-300 ">
              Duration:
              <span className="font-semibold">
                {Math.floor(duration / 60)} hr {duration % 60} min
              </span>
            </span>
          </div>

          <p className="text-sm text-gray-300 text-start">
            Release Year: <span>{releaseYear}</span>
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
                    index < rating ? 'bg-yellow-400' : ''
                  }`}
                  checked={index + 1 === rating}
                  readOnly
                />
              ))}
            </div>
          </div>

          <div className="card-actions mt-4">
            <Link to={`moviedetealis/${_id}`} className="btn btn-primary">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoiveCart;
