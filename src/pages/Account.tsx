
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { User, ShoppingBag, Heart, CreditCard, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const AccountPage = () => {
  // In a real app, you would check authentication status
  const isAuthenticated = false;
  
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow container-custom py-16">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Sign In</h1>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-hw-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 border border-hw-gray-300 rounded-md"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-hw-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full p-2 border border-hw-gray-300 rounded-md"
                  placeholder="••••••••"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-hw-blue focus:ring-hw-blue border-hw-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-hw-gray-700">
                    Remember me
                  </label>
                </div>
                
                <a href="#" className="text-sm text-hw-blue hover:text-hw-blue-700">
                  Forgot password?
                </a>
              </div>
              
              <button
                type="submit"
                className="w-full bg-hw-blue text-white p-2 rounded-md hover:bg-hw-blue-600 transition-colors"
              >
                Sign In
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-hw-gray-600">
                Don't have an account?{" "}
                <a href="#" className="text-hw-blue hover:text-hw-blue-700">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // This section would be shown if the user is authenticated
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container-custom py-16">
        <h1 className="text-4xl font-bold mb-8">My Account</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white shadow-md rounded-lg p-6 sticky top-8">
              <div className="flex items-center space-x-3 pb-6 border-b">
                <div className="w-12 h-12 rounded-full bg-hw-blue-100 flex items-center justify-center">
                  <User className="text-hw-blue" />
                </div>
                <div>
                  <h3 className="font-medium">John Doe</h3>
                  <p className="text-sm text-hw-gray-600">john@example.com</p>
                </div>
              </div>
              
              <nav className="mt-6 space-y-2">
                <a href="#" className="flex items-center space-x-2 p-2 bg-hw-blue/10 text-hw-blue rounded-md">
                  <User size={18} />
                  <span>Account Details</span>
                </a>
                <a href="#" className="flex items-center space-x-2 p-2 hover:bg-hw-gray-100 rounded-md">
                  <ShoppingBag size={18} />
                  <span>Orders</span>
                </a>
                <a href="#" className="flex items-center space-x-2 p-2 hover:bg-hw-gray-100 rounded-md">
                  <Heart size={18} />
                  <span>Wishlist</span>
                </a>
                <a href="#" className="flex items-center space-x-2 p-2 hover:bg-hw-gray-100 rounded-md">
                  <CreditCard size={18} />
                  <span>Payment Methods</span>
                </a>
                <a href="#" className="flex items-center space-x-2 p-2 text-hw-gray-600 hover:bg-hw-gray-100 rounded-md mt-12">
                  <LogOut size={18} />
                  <span>Sign Out</span>
                </a>
              </nav>
            </div>
          </div>
          
          <div className="lg:w-3/4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Account Details</h2>
              <p>Account content would go here</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccountPage;
