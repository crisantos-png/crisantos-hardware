
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart, Trash, Plus, Minus } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { products } from "../data/products";
import { toast } from "sonner";

interface CartItem {
  productId: number;
  quantity: number;
}

interface CartItemWithDetails extends CartItem {
  product: any; // Ideally, we'd use the Product type here
}

const CartPage = () => {
  const { isAuthenticated, user } = useAuth();
  const [cartItems, setCartItems] = useState<CartItemWithDetails[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Load cart from localStorage
  useEffect(() => {
    if (isAuthenticated && user) {
      const userId = user.id;
      const savedCart = localStorage.getItem(`cart_${userId}`);
      
      if (savedCart) {
        const parsedCart: CartItem[] = JSON.parse(savedCart);
        
        // Enrich cart items with product details
        const enrichedCart = parsedCart.map(item => ({
          ...item,
          product: products.find(p => p.id === item.productId)
        })).filter(item => item.product); // Filter out any items where product wasn't found
        
        setCartItems(enrichedCart);
      }
    } else {
      // For non-authenticated users, use a generic cart
      const savedCart = localStorage.getItem('guest_cart');
      
      if (savedCart) {
        const parsedCart: CartItem[] = JSON.parse(savedCart);
        
        // Enrich cart items with product details
        const enrichedCart = parsedCart.map(item => ({
          ...item,
          product: products.find(p => p.id === item.productId)
        })).filter(item => item.product); // Filter out any items where product wasn't found
        
        setCartItems(enrichedCart);
      }
    }
  }, [isAuthenticated, user]);
  
  // Calculate total price whenever cart items change
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => {
      const itemPrice = item.product.salePrice || item.product.price;
      return sum + (itemPrice * item.quantity);
    }, 0);
    
    setTotalPrice(total);
  }, [cartItems]);
  
  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => 
      item.product.id === productId ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedCart);
    
    // Save to localStorage
    const cartToSave = updatedCart.map(({ productId, quantity }) => ({ productId, quantity }));
    const storageKey = isAuthenticated && user ? `cart_${user.id}` : 'guest_cart';
    localStorage.setItem(storageKey, JSON.stringify(cartToSave));
  };
  
  const removeItem = (productId: number) => {
    const updatedCart = cartItems.filter(item => item.product.id !== productId);
    
    setCartItems(updatedCart);
    
    // Save to localStorage
    const cartToSave = updatedCart.map(({ productId, quantity }) => ({ productId, quantity }));
    const storageKey = isAuthenticated && user ? `cart_${user.id}` : 'guest_cart';
    localStorage.setItem(storageKey, JSON.stringify(cartToSave));
    
    toast.success("Item removed from cart");
  };
  
  const handleCheckout = () => {
    toast.success("Proceeding to checkout...");
    // In a real app, would navigate to a checkout page
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container-custom py-16">
        <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-4 px-6 text-left">Product</th>
                      <th className="py-4 px-6 text-left">Price</th>
                      <th className="py-4 px-6 text-left">Quantity</th>
                      <th className="py-4 px-6 text-left">Total</th>
                      <th className="py-4 px-6 text-left"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <tr key={item.product.id}>
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <div className="h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="ml-4">
                              <h3 className="text-sm font-medium">{item.product.name}</h3>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          {item.product.salePrice ? (
                            <div>
                              <span className="text-hw-gray-500 line-through mr-2">
                                ${item.product.price.toFixed(2)}
                              </span>
                              <span className="font-medium">${item.product.salePrice.toFixed(2)}</span>
                            </div>
                          ) : (
                            <span className="font-medium">${item.product.price.toFixed(2)}</span>
                          )}
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="text-hw-gray-500 hover:text-hw-gray-700 p-1"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="mx-2 w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="text-hw-gray-500 hover:text-hw-gray-700 p-1"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-6 font-medium">
                          ${((item.product.salePrice || item.product.price) * item.quantity).toFixed(2)}
                        </td>
                        <td className="py-4 px-6">
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-hw-gray-500 hover:text-hw-red p-1"
                          >
                            <Trash size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${(totalPrice * 0.07).toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${(totalPrice + (totalPrice * 0.07)).toFixed(2)}</span>
                  </div>
                </div>
                
                <button
                  onClick={handleCheckout}
                  className="w-full bg-hw-blue hover:bg-hw-blue-600 text-white font-medium mt-6 py-2 px-4 rounded-md"
                >
                  Checkout
                </button>
                
                <div className="mt-4">
                  <Link to="/shop" className="text-hw-blue hover:text-hw-blue-600 flex items-center justify-center">
                    <ArrowRight size={16} className="mr-2 rotate-180" />
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 max-w-md mx-auto">
            <ShoppingCart size={64} className="mx-auto text-hw-gray-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-hw-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet. Browse our products and find something you like!
            </p>
            <Link 
              to="/shop" 
              className="bg-hw-blue hover:bg-hw-blue-600 text-white font-medium px-6 py-3 rounded-md inline-flex items-center"
            >
              <span>Start Shopping</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
