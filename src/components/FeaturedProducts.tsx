
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const featuredProducts = products.filter((product) => product.isFeatured).slice(0, 4);

  return (
    <section className="bg-gradient-to-b from-hw-gray-100 to-white py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-hw-gray-800 mb-2">
              Featured Products
            </h2>
            <p className="text-hw-gray-600 max-w-lg">
              Hand-picked quality tools and supplies that our customers love
            </p>
          </div>
          <Link
            to="/products"
            className="flex items-center text-hw-blue hover:text-hw-orange transition-colors mt-4 sm:mt-0 group"
          >
            <span className="mr-2 font-medium">View all products</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
