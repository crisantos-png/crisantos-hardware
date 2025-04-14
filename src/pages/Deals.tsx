
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const DealsPage = () => {
  const saleProducts = products.filter(product => product.isOnSale);
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container-custom py-16">
        <div className="bg-gradient-to-r from-hw-blue to-hw-blue/90 rounded-2xl mb-12 overflow-hidden shadow-xl">
          <div className="py-10 px-6 md:px-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Special Deals & Offers</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Take advantage of our limited-time offers on high-quality tools and equipment.
              These deals won't last forever!
            </p>
          </div>
        </div>
        
        {saleProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-hw-gray-600">No deals are currently available. Please check back soon!</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default DealsPage;
