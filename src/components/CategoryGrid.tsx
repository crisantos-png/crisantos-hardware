
import { Link } from "react-router-dom";
import { categories } from "../data/categories";

const CategoryGrid = () => {
  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-hw-gray-800 mb-8 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group"
            >
              <div className="bg-hw-gray-100 rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:shadow-lg group-hover:scale-[1.02]">
                <div className="h-40 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-hw-gray-800 group-hover:text-hw-blue transition-colors">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
