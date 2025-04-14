
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart, Trash } from "lucide-react";

const CartPage = () => {
  // In a real application, this would be fetched from a global state or context
  const [cartItems, setCartItems] = useState([]);
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container-custom py-16">
        <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
        
        {cartItems.length > 0 ? (
          <div>
            {/* Cart content would go here */}
            <p>Your cart has items</p>
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
