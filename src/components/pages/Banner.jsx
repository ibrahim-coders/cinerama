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
    <div className="relative max-w-screen-2xl mx-auto">
      <div className="carousel w-full h-[600px]">
        {/* Slide 1 */}
        <div
          id="slide1"
          className={`carousel-item relative w-full ${
            currentSlide === 1 ? 'block' : 'hidden'
          }`}
        >
          <img
            src="https://i.ibb.co/QbVJJDC/home-8-img-4.jpg"
            className="w-full object-cover"
            alt="The Adventure Begins"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold">The Adventure Begins</h1>
            <p className="mt-4 text-lg">
              Follow a group of explorers as they unravel the mysteries of an
              ancient world.
            </p>
            <p className="mt-2 italic">Genre: Action, Adventure</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          id="slide2"
          className={`carousel-item relative w-full ${
            currentSlide === 2 ? 'block' : 'hidden'
          }`}
        >
          <img
            src="https://i.ibb.co/c633c0Q/portfolio-single-img-7.jpg"
            className="w-full object-cover"
            alt="A Love Beyond Time"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold">A Love Beyond Time</h1>
            <p className="mt-4 text-lg">
              A timeless love story that transcends the barriers of time and
              space.
            </p>
            <p className="mt-2 italic">Genre: Romance, Drama</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          id="slide3"
          className={`carousel-item relative w-full ${
            currentSlide === 3 ? 'block' : 'hidden'
          }`}
        >
          <img
            src="https://i.ibb.co/nPZy3FV/Blog-standard-img-4.jpg"
            className="w-full object-cover"
            alt="The Digital Frontier"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold">The Digital Frontier</h1>
            <p className="mt-4 text-lg">
              Dive into a high-tech thriller where AI and humanity collide in an
              epic battle.
            </p>
            <p className="mt-2 italic">Genre: Sci-Fi, Thriller</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button
          className="btn btn-circle"
          onClick={() =>
            setCurrentSlide(currentSlide === 1 ? 3 : currentSlide - 1)
          }
        >
          ❮
        </button>
        <button
          className="btn btn-circle"
          onClick={() => setCurrentSlide((currentSlide % 3) + 1)}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
