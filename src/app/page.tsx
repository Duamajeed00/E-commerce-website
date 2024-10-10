
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Stats from './components/Stats';
import Brands from './components/Brands';
import NewArrivals from "./components/NewArrivals";
import TopSelling from './components/TopSelling';
import BrowseByDressStyle from './components/Dressing';
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <BrowseByDressStyle />
      <Footer />
    </div>
  );
}
