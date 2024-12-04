import { useState } from 'react';

const MovieForm = () => {
  const [formData, setFormData] = useState({
    poster: '',
    title: '',
    genre: '',
    duration: '',
  });

  const genres = ['Comedy', 'Drama', 'Horror', 'Action', 'Crime'];

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { poster, title, genre, duration } = formData;

    // Validation with alert messages
    if (!poster || !/^https?:\/\/\S+\.\S+$/.test(poster)) {
      alert('Please provide a valid image URL.');
      return;
    }

    if (!title || title.length < 2) {
      alert('Movie title must be at least 2 characters long.');
      return;
    }

    if (!genre) {
      alert('Please select a genre.');
      return;
    }

    if (!duration || duration <= 60) {
      alert('Duration must be greater than 60 minutes.');
      return;
    }

    alert('Form submitted successfully!');
    console.log('Form Data:', formData);
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 border rounded-lg shadow-lg  bg-slate-800">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg  p-6 rounded-lg shadow-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-s text-slate-300 text-center">
          Movie Add Form
        </h1>

        {/* Movie Poster */}
        <div>
          <label className="block text-sm font-medium text-slate-400">
            Movie Poster (URL)
          </label>
          <input
            type="url"
            id="poster"
            name="poster"
            value={formData.poster}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            required
          />
        </div>

        {/* Movie Title */}
        <div>
          <label className="block text-sm font-medium text-slate-400">
            Movie Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter movie title"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            required
          />
        </div>

        {/* Genre */}
        <div>
          <label className="block text-sm font-medium text-slate-400">
            Genre
          </label>
          <select
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            required
          >
            <option value="">Select a genre</option>
            {genres.map((g, index) => (
              <option key={index} value={g.toLowerCase()}>
                {g}
              </option>
            ))}
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-slate-400">
            Duration (in minutes)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Enter duration"
            min="61"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            required
          />
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
