
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryGrid from "../components/CategoryGrid";
import FeaturedProducts from "../components/FeaturedProducts";
import SpecialOffers from "../components/SpecialOffers";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="py-16 md:py-24 bg-white">
          <CategoryGrid />
        </div>
        <FeaturedProducts />
        <SpecialOffers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
