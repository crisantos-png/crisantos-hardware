
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../data/products";
import { categories } from "../data/categories";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const category = categories.find(cat => cat.slug === slug);
  const categoryProducts = products.filter(product => product.categoryId === category?.id);
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container-custom py-16">
        {category ? (
          <>
            <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
            <p className="text-hw-gray-600 mb-8">{category.description}</p>
            
            {categoryProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-hw-gray-600">No products found in this category.</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
            <p className="text-xl text-hw-gray-600">The category you're looking for doesn't exist.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
