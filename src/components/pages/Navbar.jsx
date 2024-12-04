import { useState } from 'react';
import { RiMovie2Fill } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      <header className="relative  lg:backdrop-blur-sm bg-blue-900">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/* Brand logo */}
            <div className="w-full  gap-2 my-2">
              {/* Logo */}
              <div className="flex items-center ">
                <RiMovie2Fill className="text-yellow-500 text-4xl ml-14" />
              </div>
              {/* Title */}
              <h2 className="text-3xl font-bold text-white">CINERAMA</h2>
            </div>

            {/* Mobile trigger */}
            <button
              className={`relative text-white  order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? 'visible  opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 '
                  : ''
              }`}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? 'true' : 'false'}
              aria-label="Toggle navigation"
            >
              <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
                ></span>
              </div>
            </button>
            {/* Navigation links */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg- px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible  lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? 'visible opacity-100 backdrop-blur-sm'
                  : 'invisible opacity-0'
              }`}
            >
              <li role="none" className="flex items-stretch">
                <NavLink
                  to="/"
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center text-white gap-2 py-4 font-bold transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 lg:px-8 whitespace-nowrap"
                >
                  <span>Home</span>
                </NavLink>
              </li>
              <li role="none" className="flex items-stretch">
                <NavLink
                  to="/"
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center text-white gap-2 py-4 font-bold transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8 whitespace-nowrap"
                >
                  <span>All Movies</span>
                </NavLink>
              </li>
              <li role="none" className="flex items-stretch">
                <NavLink
                  to="/addmovie"
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center text-white gap-2 py-4 font-bold transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8 whitespace-nowrap"
                >
                  <span>Add Movie</span>
                </NavLink>
              </li>
              <li role="none" className="flex items-stretch">
                <NavLink
                  to="/"
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center text-white gap-2 py-4 font-bold transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8 whitespace-nowrap"
                >
                  <span>My Favorite</span>
                </NavLink>
              </li>
              <li role="none" className="flex items-stretch">
                <NavLink
                  to="/"
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center text-white gap-2 py-4 font-bold transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-10 whitespace-nowrap"
                >
                  <span>About Us</span>
                </NavLink>
              </li>
            </ul>
            <div className="flex items-center px-6 ml-auto lg:ml-0 lg:p-0">
              <Link to="/login" className="btn bg-blue-500 text-white">
                Login
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;
