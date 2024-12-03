import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import Home from '../pages/Home';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
