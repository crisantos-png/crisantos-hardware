
import { ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

const SpecialOffers = () => {
  const saleProducts = products.filter((product) => product.isOnSale).slice(0, 3);

  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-hw-blue to-hw-blue/90 rounded-2xl overflow-hidden shadow-xl relative">
          {/* Decorative elements */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-hw-orange/20 rounded-full blur-3xl"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-hw-orange/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 py-10 px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <div className="flex items-center mb-3 justify-center md:justify-start">
                  <Tag className="text-hw-orange mr-2" size={24} />
                  <span className="text-hw-orange font-semibold">Limited Time</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Special Offers
                </h2>
                <p className="text-white/80 max-w-md">
                  Don't miss out on our limited-time deals on top-quality tools
                  and equipment. Sale ends this weekend!
                </p>
              </div>
              <Link
                to="/deals"
                className="bg-hw-orange hover:bg-hw-orange/90 text-white px-8 py-4 rounded-lg font-medium flex items-center transition-colors shadow-lg group"
              >
                <span>View all deals</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {saleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link
            to="/deals"
            className="inline-flex items-center text-hw-blue hover:text-hw-orange transition-colors font-medium group"
          >
            <span>See more deals</span>
            <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
