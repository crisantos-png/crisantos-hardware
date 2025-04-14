
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const featuredProducts = products.filter((product) => product.isFeatured).slice(0, 4);

  return (
    <section className="bg-hw-gray-100 py-16">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-hw-gray-800">
            Featured Products
          </h2>
          <Link
            to="/products"
            className="flex items-center text-hw-blue hover:text-hw-orange transition-colors"
          >
            <span className="mr-1">View all</span>
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
