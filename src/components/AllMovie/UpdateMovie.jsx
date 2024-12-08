import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const UpdateMovie = () => {
  const movieData = useLoaderData();
  const [formData, setFormData] = useState(movieData);
  const [errors, setErrors] = useState({});
  const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi']; // Example genres
  const yearOptions = Array.from(
    { length: 30 },
    (_, i) => new Date().getFullYear() - i
  ); // Last 30 years
  const ratingArray = [1, 2, 3, 4, 5]; // Example ratings

  const validateForm = () => {
    const newErrors = {};
    if (!formData.poster) newErrors.poster = 'Poster URL is required';
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.genre) newErrors.genre = 'Genre is required';
    if (!formData.duration) newErrors.duration = 'Duration is required';
    if (!formData.releaseYear)
      newErrors.releaseYear = 'Release year is required';
    if (!formData.rating) newErrors.rating = 'Rating is required';
    if (!formData.summary) newErrors.summary = 'Summary is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRating = rating => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validateForm()) return;

    fetch(`http://localhost:5000/movie/${formData._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Movie updated successfully:', data);
        alert('Movie updated successfully!');
      })
      .catch(err => {
        console.error('Error updating movie:', err);
      });
  };

  return (
    <div>
      <h2 className="text-3xl md:text-5xl text-orange-700 font-bold mt-10">
        Update Movie: {formData.title}
      </h2>
      <div className="w-[700px] mx-auto my-10 p-6 border rounded-lg shadow-lg bg-slate-800">
        <form
          onSubmit={handleSubmit}
          className="w-full p-6 rounded-lg shadow-md space-y-4"
        >
          <h1 className="text-2xl font-bold text-slate-300 text-center">
            Movie Update Form
          </h1>

          <div className="w-full flex justify-between gap-4">
            <div className="w-full">
              {/* Movie Poster */}
              <div>
                <label className="text-sm font-medium text-slate-400">
                  Movie Poster (URL)
                </label>
                <input
                  type="url"
                  name="poster"
                  value={formData.poster}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                />
                {errors.poster && (
                  <p className="text-red-600 text-sm">{errors.poster}</p>
                )}
              </div>

              {/* Title */}
              <div>
                <label className="text-sm font-medium text-slate-400">
                  Movie Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                />
                {errors.title && (
                  <p className="text-red-600 text-sm">{errors.title}</p>
                )}
              </div>

              {/* Genre */}
              <div>
                <label className="text-sm font-medium text-slate-400">
                  Genre
                </label>
                <select
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                >
                  <option value="">Select a genre</option>
                  {genres.map((g, index) => (
                    <option key={index} value={g.toLowerCase()}>
                      {g}
                    </option>
                  ))}
                </select>
                {errors.genre && (
                  <p className="text-red-600 text-sm">{errors.genre}</p>
                )}
              </div>
            </div>

            <div className="w-full">
              {/* Duration */}
              <div>
                <label className="text-sm font-medium text-slate-400">
                  Duration (in minutes)
                </label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                />
                {errors.duration && (
                  <p className="text-red-600 text-sm">{errors.duration}</p>
                )}
              </div>

              {/* Release Year */}
              <div>
                <label className="text-sm font-medium text-slate-400">
                  Release Year
                </label>
                <select
                  name="releaseYear"
                  value={formData.releaseYear}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                >
                  <option value="">Select Year</option>
                  {yearOptions.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                {errors.releaseYear && (
                  <p className="text-red-600 text-sm">{errors.releaseYear}</p>
                )}
              </div>

              {/* Rating */}
              <div>
                <label className="text-sm font-medium text-slate-400">
                  Rating
                </label>
                <div className="flex gap-1">
                  {ratingArray.map((rate, index) => (
                    <label key={index} className="cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        value={rate}
                        checked={formData.rating === rate}
                        onChange={() => handleRating(rate)}
                        className="cursor-pointer"
                      />
                      <span>{rate}</span>
                    </label>
                  ))}
                </div>
                {errors.rating && (
                  <p className="text-red-600 text-sm">{errors.rating}</p>
                )}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <label className="text-sm font-medium text-slate-400">
              Summary
            </label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
            ></textarea>
            {errors.summary && (
              <p className="text-red-600 text-sm">{errors.summary}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded font-medium hover:bg-blue-600"
          >
            Update Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;
