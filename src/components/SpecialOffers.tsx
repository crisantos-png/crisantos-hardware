
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

const SpecialOffers = () => {
  const saleProducts = products.filter((product) => product.isOnSale).slice(0, 3);

  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-hw-blue to-hw-blue/80 rounded-2xl overflow-hidden shadow-xl">
          <div className="py-8 px-6 md:px-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Special Offers
                </h2>
                <p className="text-white/80 max-w-md">
                  Don't miss out on our limited-time deals on top-quality tools
                  and equipment.
                </p>
              </div>
              <Link
                to="/deals"
                className="bg-hw-orange hover:bg-hw-orange/90 text-white px-6 py-3 rounded-md font-medium flex items-center transition-colors"
              >
                <span>View all deals</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {saleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
