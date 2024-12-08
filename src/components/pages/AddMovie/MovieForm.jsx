import { useState } from 'react';
import Swal from 'sweetalert2';

const MovieForm = () => {
  const [formData, setFormData] = useState({
    poster: '',
    title: '',
    genre: '',
    duration: '',
    releaseYear: '',
    rating: 0,
    summary: '',
  });

  const [errors, setErrors] = useState({});
  const genres = ['Comedy', 'Drama', 'Horror', 'Action', 'Romantic'];
  const yearOptions = [2024, 2023, 2022, 2021, 2020];
  const ratingArray = [1, 2, 3, 4, 5];

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRating = value => {
    setFormData({ ...formData, rating: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { poster, title, genre, duration, releaseYear, rating, summary } =
      formData;

    const newErrors = {};

    // Validation
    if (!poster || !/^https?:\/\/\S+\.\S+$/.test(poster)) {
      newErrors.poster = 'Please provide a valid image URL.';
    }

    if (!title || title.length < 2) {
      newErrors.title = 'Movie title must be at least 2 characters long.';
    }

    if (!genre) {
      newErrors.genre = 'Please select a genre.';
    }

    if (!duration || duration <= 59) {
      newErrors.duration = 'Duration must be greater than 60 minutes.';
    }

    if (!releaseYear) {
      newErrors.releaseYear = 'Please select a release year.';
    }

    if (rating <= 0 || rating > 5) {
      newErrors.rating = 'Please provide a rating between 1 and 5.';
    }

    if (!summary || summary.length < 10) {
      newErrors.summary = 'Summary must be at least 10 characters long.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Show Swal Alert
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Movie submitted successfully!',
      showConfirmButton: false,
      timer: 1500,
    });

    console.log('Form Data:', formData);

    setFormData({
      poster: '',
      title: '',
      genre: '',
      duration: '',
      releaseYear: '',
      rating: 0,
      summary: '',
    });
    setErrors({});
    fetch('http://localhost:5000/movie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Server Response:', data);
      });
  };

  return (
    <div className="w-[700px] mx-auto my-10 p-6 border rounded-lg shadow-lg bg-slate-800">
      <form
        onSubmit={handleSubmit}
        className="w-full p-6 rounded-lg shadow-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-slate-300 text-center">
          Movie Add Form
        </h1>

        <div className="w-full flex justify-between gap-4">
          <div className="w-full">
            {/* Movie Poster */}
            <div>
              <label className="text-sm font-medium text-slate-400">
                Movie Poster (URL)
              </label>
              {errors.poster && (
                <p className="text-red-600 text-sm">{errors.poster}</p>
              )}
              <input
                type="url"
                id="poster"
                name="poster"
                value={formData.poster}
                onChange={handleChange}
                placeholder="Enter image URL"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              />
            </div>

            {/* Movie Title */}
            <div>
              <label className="block text-sm font-medium text-slate-400">
                Movie Title
              </label>
              {errors.title && (
                <p className="text-red-600 text-sm">{errors.title}</p>
              )}
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter movie title"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              />
            </div>

            {/* Genre */}
            <div>
              <label className="block text-sm font-medium text-slate-400">
                Genre
              </label>
              {errors.genre && (
                <p className="text-red-600 text-sm">{errors.genre}</p>
              )}
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
            </div>
          </div>

          <div className="w-full">
            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-slate-400">
                Duration (in minutes)
              </label>
              {errors.duration && (
                <p className="text-red-600 text-sm">{errors.duration}</p>
              )}
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="Enter duration"
                min="60"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              />
            </div>

            {/* Release Year */}
            <div>
              <label className="block text-sm font-medium text-slate-400">
                Release Year
              </label>
              {errors.releaseYear && (
                <p className="text-red-600 text-sm">{errors.releaseYear}</p>
              )}
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
            </div>

            {/* Rating */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-400">
                Rating
              </label>
              <div className="flex gap-1">
                {ratingArray.map((raati, index) => (
                  <label key={index} className="cursor-pointer">
                    <input
                      type="radio"
                      name="rating"
                      value={raati}
                      checked={formData.rating === raati}
                      onChange={() => handleRating(raati)}
                      className={`mask mask-star-2${
                        formData.rating >= raati
                          ? 'bg-yellow-400'
                          : 'bg-gray-400'
                      }`}
                    />
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
          <label className="block text-sm font-medium text-slate-400">
            Summary
          </label>
          {errors.summary && (
            <p className="text-red-600 text-sm">{errors.summary}</p>
          )}
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            placeholder="Enter a short summary"
            className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
