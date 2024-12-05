import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import Home from '../pages/Home';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <ToastContainer position="top-center" autoClose={3000} />
      <header className="z-20 w-full border-b shadow-lg sticky top-0">
        <Navbar />
      </header>

      <main className="max-w-screen-2xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
