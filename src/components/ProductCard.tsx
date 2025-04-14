
import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < Math.floor(rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-hw-gray-600">{rating}</span>
      </div>
    );
  };

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
      <div className="relative overflow-hidden">
        {product.isOnSale && (
          <div className="absolute top-3 left-3 bg-hw-orange text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
            SALE
          </div>
        )}
        <div className="h-52 md:h-64 overflow-hidden">
          <Link to={`/product/${product.slug}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </Link>
        </div>
        <div className="absolute right-3 bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            className="bg-hw-blue text-white p-2.5 rounded-full shadow-lg hover:bg-hw-orange transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <Link to={`/product/${product.slug}`}>
          <h3 className="text-lg font-medium text-hw-gray-800 mb-1 group-hover:text-hw-blue transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-hw-gray-600 line-clamp-2 mb-3 flex-grow">
          {product.description}
        </p>

        <div className="mt-auto">
          <div className="mb-2">{renderRating(product.rating)}</div>
          <div className="flex items-center justify-between">
            <div>
              {product.isOnSale && product.salePrice ? (
                <>
                  <span className="text-hw-orange font-bold text-lg">
                    ${product.salePrice.toFixed(2)}
                  </span>
                  <span className="ml-2 text-hw-gray-500 line-through text-sm">
                    ${product.price.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-hw-blue font-bold text-lg">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
