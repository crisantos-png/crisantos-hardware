
import { Link } from "react-router-dom";
import { categories } from "../data/categories";
import { ArrowRight } from "lucide-react";

const CategoryGrid = () => {
  return (
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-hw-gray-800 mb-3">
          Shop by Category
        </h2>
        <p className="text-hw-gray-600 max-w-2xl mx-auto">
          Browse our extensive collection of tools and equipment for professionals and DIY enthusiasts
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/category/${category.slug}`}
            className="group relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-hw-blue/80 to-transparent opacity-70 z-10"></div>
            <img
              src={category.image || `https://images.unsplash.com/photo-${category.imageId}?w=600&auto=format&fit=crop&q=80`}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <h3 className="text-white font-medium text-lg mb-1">{category.name}</h3>
              <div className="flex items-center text-white/80 text-sm group-hover:text-hw-orange transition-colors">
                <span className="mr-1">View all</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
