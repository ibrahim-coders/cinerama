import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import Home from '../pages/Home';

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Navbar />
      </header>

      <main className="max-w-screen-2xl mx-auto">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
