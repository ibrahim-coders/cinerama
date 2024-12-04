import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Edge</h2>
            <p className="text-sm text-gray-400">
              Edge Studios is a creative powerhouse that specializes in bringing
              bold and innovative ideas to life. From captivating films to
              groundbreaking projects, we strive to push the boundaries of
              storytelling and technology.
            </p>
          </div>
          {/* Latest Videos Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Movies</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Action
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Adventure
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Animation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Comedy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Crime
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Tour Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Studio Tour</h2>
            <p className="text-sm text-gray-400">
              Explore behind the scenes and see where the magic happens.
            </p>
          </div>
          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest updates directly to your inbox.
            </p>
            <input
              type="email"
              placeholder="Your email"
              className="p-2 w-full mb-4 text-gray-900"
            />
            <button className="bg-blue-600 text-white py-2 px-4 w-full">
              Subscribe
            </button>
            <div className="mt-4">
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>

        {/* News & Film Updates Section */}
        <div className="mt-12 w-94">
          <h3 className="text-xl font-semibold mb-4">News & Film Updates</h3>
          <li className="">
            <strong>November 2024 - "Studio Expansion Tour":</strong> Our team
            recently took a tour of our newly expanded studios, showcasing our
            state-of-the-art equipment and creative spaces. Check out the
            highlights!
          </li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
