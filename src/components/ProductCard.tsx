
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";

interface Product {
  id: number;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  description: string;
  category: number;
  isOnSale?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { isAuthenticated, user } = useAuth();

  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to product detail
    e.stopPropagation(); // Stop event propagation
    
    const cartKey = isAuthenticated && user 
      ? `cart_${user.id}` 
      : 'guest_cart';
    
    // Get existing cart or initialize empty array
    const existingCart = localStorage.getItem(cartKey);
    const cart = existingCart ? JSON.parse(existingCart) : [];
    
    // Check if product is already in cart
    const existingItem = cart.find((item: any) => item.productId === product.id);
    
    if (existingItem) {
      // Increment quantity
      existingItem.quantity += 1;
    } else {
      // Add new item
      cart.push({
        productId: product.id,
        quantity: 1
      });
    }
    
    // Save updated cart
    localStorage.setItem(cartKey, JSON.stringify(cart));
    
    toast.success(`${product.name} added to cart`);
  };

  const addToWishlist = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    e.stopPropagation(); // Stop event propagation
    
    if (!isAuthenticated) {
      toast.error("Please log in to add items to your wishlist");
      return;
    }
    
    toast.success(`${product.name} added to wishlist`);
  };

  return (
    <div className="group relative bg-white border border-hw-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <Link to={`/product/${product.id}`}>
        <div className="relative pb-[75%] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.isOnSale && (
            <div className="absolute top-2 right-2 bg-hw-red text-white text-xs font-bold px-2 py-1 rounded">
              SALE
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-hw-gray-800 font-semibold text-lg truncate">{product.name}</h3>
          
          <div className="mt-2">
            {product.salePrice ? (
              <div className="flex items-center">
                <span className="text-hw-red font-bold text-lg">
                  ${product.salePrice.toFixed(2)}
                </span>
                <span className="ml-2 text-hw-gray-500 text-sm line-through">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-hw-gray-800 font-bold text-lg">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <p className="mt-2 text-hw-gray-600 text-sm line-clamp-2">
            {product.description}
          </p>
        </div>
      </Link>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <div className="flex justify-between">
          <button
            onClick={addToCart}
            className="flex-1 mr-2 flex justify-center items-center bg-hw-blue text-white py-2 px-3 rounded-md hover:bg-hw-blue-600 transition-colors text-sm"
          >
            <ShoppingCart size={16} className="mr-1" />
            <span>Add to Cart</span>
          </button>
          
          <button
            onClick={addToWishlist}
            className="flex items-center justify-center bg-hw-gray-200 text-hw-gray-700 p-2 rounded-md hover:bg-hw-gray-300 transition-colors"
          >
            <Heart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
