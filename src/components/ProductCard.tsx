
import { Star } from "lucide-react";
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
    <Link
      to={`/product/${product.slug}`}
      className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full"
    >
      <div className="relative overflow-hidden">
        {product.isOnSale && (
          <div className="absolute top-2 left-2 bg-hw-orange text-white text-xs font-bold px-2 py-1 rounded-md z-10">
            SALE
          </div>
        )}
        <div className="h-48 md:h-60 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-medium text-hw-gray-800 mb-1 group-hover:text-hw-blue transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-hw-gray-600 line-clamp-2 mb-3 flex-grow">
          {product.description}
        </p>

        <div className="mt-auto">
          <div className="mb-2">{renderRating(product.rating)}</div>
          <div className="flex items-center">
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
    </Link>
  );
};

export default ProductCard;
