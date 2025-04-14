
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../data/products";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ShoppingCart, Package, Truck, Shield, Star } from "lucide-react";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, you would fetch the product data from an API
    const foundProduct = products.find((p) => p.id === Number(id) || p.slug === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow py-16 md:py-24">
          <div className="container-custom text-center">
            <p className="text-lg">Product not found</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img 
                src={product.image || "https://placehold.co/600x400?text=Product+Image"} 
                alt={product.name} 
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
            
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    fill={i < Math.floor(product.rating) ? "gold" : "none"} 
                    color={i < Math.floor(product.rating) ? "gold" : "gray"} 
                    size={20} 
                  />
                ))}
                <span className="ml-2 text-gray-500">({product.rating})</span>
              </div>
              
              <div className="mb-6">
                {product.isOnSale ? (
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-hw-blue mr-3">
                      ${product.salePrice?.toFixed(2)}
                    </span>
                    <span className="text-xl text-gray-500 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="ml-3 bg-hw-orange text-white px-2 py-1 rounded text-sm">
                      SALE
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-hw-blue">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="border border-gray-300 rounded px-3 py-2 w-24"
                />
              </div>
              
              <button
                onClick={handleAddToCart}
                className="bg-hw-blue hover:bg-hw-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center w-full mb-6"
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
              
              <div className="space-y-4 border-t border-gray-200 pt-6">
                <div className="flex items-center">
                  <Package size={20} className="text-hw-blue mr-3" />
                  <span>In stock - Ready to ship</span>
                </div>
                <div className="flex items-center">
                  <Truck size={20} className="text-hw-blue mr-3" />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center">
                  <Shield size={20} className="text-hw-blue mr-3" />
                  <span>2-year warranty included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
