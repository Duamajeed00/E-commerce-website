
import Hero from './components/HeroSection';
import Stats from './components/Stats';
import NewArrivals from "./components/NewArrivals";
import TopSelling from './components/TopSelling';
import BrowseByDressStyle from './components/Dressing';
import Testimonials from './components/Testimonials';



export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <NewArrivals />
      <TopSelling />
      <BrowseByDressStyle />
     <Testimonials />
    </div>
  );
}
