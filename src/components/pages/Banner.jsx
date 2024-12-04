import { useEffect, useState } from 'react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide % 3) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-screen-2xl mx-auto ">
      <div className="carousel w-full h-[400px] md:h-[600px]">
        {/* Slide 1 */}
        <div
          className={`carousel-item relative w-full ${
            currentSlide === 1 ? 'block' : 'hidden'
          }`}
        >
          <img
            src="https://i.ibb.co/WgYVqFk/slider-1-3.jpg"
            className="w-full h-full object-cover"
            alt="The Adventure Begins"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8">
            <h1 className="text-2xl md:text-5xl font-bold">
              Best Film Studio in New York
            </h1>
            <p className="mt-4 text-base md:text-lg">
              YEARS OF EXPERIENCE IN THE INDUSTRY
            </p>
            <p className="mt-2 italic text-sm md:text-base">
              Genre: Action, Adventure
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className={`carousel-item relative w-full ${
            currentSlide === 2 ? 'block' : 'hidden'
          }`}
        >
          <img
            src="https://i.ibb.co/Dbjtwjx/slider-1-1.jpg"
            className="w-full h-full object-cover"
            alt="A Love Beyond Time"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Outstanding Studios For Making Films
            </h1>
            <p className="mt-4 text-base md:text-lg">
              A timeless love story that transcends the barriers of time and
              space.
            </p>
            <p className="mt-2 italic text-sm md:text-base">
              Genre: Romance, Drama
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className={`carousel-item relative w-full ${
            currentSlide === 3 ? 'block' : 'hidden'
          }`}
        >
          <img
            src="https://i.ibb.co/LkNhNWf/slider-1-2.jpg"
            className="w-full h-full object-cover"
            alt="The Digital Frontier"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8">
            <h1 className="text-2xl md:text-5xl font-bold">
              Makes & Distribute Digital Content
            </h1>
            <p className="mt-4 text-base md:text-lg">Video Production</p>
            <p className="mt-2 italic text-sm md:text-base">
              Genre: Sci-Fi, Thriller
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button
          className="btn btn-circle bg-gray-800/50 hover:bg-gray-800 text-white"
          onClick={() =>
            setCurrentSlide(currentSlide === 1 ? 3 : currentSlide - 1)
          }
        >
          ❮
        </button>
        <button
          className="btn btn-circle bg-gray-800/50 hover:bg-gray-800 text-white"
          onClick={() => setCurrentSlide((currentSlide % 3) + 1)}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
