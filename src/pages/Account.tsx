
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { Navigate, Link } from "react-router-dom";
import { User, ShoppingBag, Heart, CreditCard, LogOut, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const AccountPage = () => {
  const { user, isAuthenticated, logout } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container-custom py-16">
        <h1 className="text-4xl font-bold mb-8">My Account</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white shadow-md rounded-lg p-6 sticky top-8">
              <div className="flex items-center space-x-3 pb-6 border-b">
                <div className="w-12 h-12 rounded-full bg-ch-blue-100 flex items-center justify-center">
                  <User className="text-ch-blue" />
                </div>
                <div>
                  <h3 className="font-medium">{user?.firstName} {user?.lastName}</h3>
                  <p className="text-sm text-ch-gray-600">{user?.email}</p>
                </div>
              </div>
              
              <nav className="mt-6 space-y-2">
                <Link to="/account" className="flex items-center space-x-2 p-2 bg-ch-blue/10 text-ch-blue rounded-md">
                  <User size={18} />
                  <span>Account Details</span>
                </Link>
                <Link to="/account/orders" className="flex items-center space-x-2 p-2 hover:bg-ch-gray-100 rounded-md">
                  <ShoppingBag size={18} />
                  <span>Orders</span>
                </Link>
                <Link to="/account/wishlist" className="flex items-center space-x-2 p-2 hover:bg-ch-gray-100 rounded-md">
                  <Heart size={18} />
                  <span>Wishlist</span>
                </Link>
                
                {user?.role === 'seller' && (
                  <Link to="/account/products" className="flex items-center space-x-2 p-2 hover:bg-ch-gray-100 rounded-md">
                    <Package size={18} />
                    <span>My Products</span>
                  </Link>
                )}
                
                <Link to="/account/payment" className="flex items-center space-x-2 p-2 hover:bg-ch-gray-100 rounded-md">
                  <CreditCard size={18} />
                  <span>Payment Methods</span>
                </Link>
                
                <Button 
                  onClick={logout} 
                  variant="ghost" 
                  className="w-full flex items-center justify-start space-x-2 p-2 text-ch-gray-600 hover:bg-ch-gray-100 rounded-md mt-12"
                >
                  <LogOut size={18} />
                  <span>Sign Out</span>
                </Button>
              </nav>
            </div>
          </div>
          
          <div className="lg:w-3/4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Account Details</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Personal Information</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="block text-sm text-ch-gray-600">Name:</span>
                      <span>{user?.firstName} {user?.lastName}</span>
                    </div>
                    <div>
                      <span className="block text-sm text-ch-gray-600">Email:</span>
                      <span>{user?.email}</span>
                    </div>
                    <div>
                      <span className="block text-sm text-ch-gray-600">Username:</span>
                      <span>{user?.username}</span>
                    </div>
                    <div>
                      <span className="block text-sm text-ch-gray-600">Account Type:</span>
                      <span className="capitalize">{user?.role}</span>
                    </div>
                  </div>
                </div>
                
                {user?.role === 'seller' && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Seller Information</h3>
                    <p className="text-ch-gray-600">
                      You are registered as a seller. You can manage your products and inventory.
                    </p>
                    <Button className="mt-4">
                      Manage Products
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccountPage;
