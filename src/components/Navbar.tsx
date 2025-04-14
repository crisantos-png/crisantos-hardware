
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Search, User, LogOut } from "lucide-react";
import { categories } from "../data/categories";
import Logo from "./Logo";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="bg-ch-blue text-ch-white">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-ch-gold">
                <span>Categories</span>
              </button>
              <div className="absolute top-full left-0 w-64 bg-ch-white text-ch-gray-800 shadow-lg rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.slug}`}
                      className="block px-4 py-2 hover:bg-ch-gray-100 rounded-md"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/shop" className="hover:text-ch-gold">
              Shop
            </Link>
            <Link to="/deals" className="hover:text-ch-gold">
              Deals
            </Link>
            <Link to="/services" className="hover:text-ch-gold">
              Services
            </Link>
            <Link to="/about" className="hover:text-ch-gold">
              About
            </Link>
          </div>

          {/* Search and Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="rounded-full py-1 px-4 text-ch-gray-800 focus:outline-none focus:ring-2 focus:ring-ch-gold w-64"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-ch-gray-500">
                <Search size={18} />
              </button>
            </div>

            <div className="relative">
              {isAuthenticated ? (
                <div className="relative">
                  <button 
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="hover:text-ch-gold flex items-center space-x-1"
                  >
                    <User size={20} />
                    <span className="text-sm">{user?.firstName}</span>
                  </button>
                  
                  {isUserMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-ch-white text-ch-gray-800 shadow-lg rounded-md p-2 z-10">
                      <div className="py-1">
                        <Link
                          to="/account"
                          className="block px-4 py-2 hover:bg-ch-gray-100 rounded-md"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          My Account
                        </Link>
                        
                        {user?.role === 'seller' && (
                          <Link
                            to="/account/products"
                            className="block px-4 py-2 hover:bg-ch-gray-100 rounded-md"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            My Products
                          </Link>
                        )}
                        
                        <button
                          onClick={() => {
                            logout();
                            setIsUserMenuOpen(false);
                          }}
                          className="w-full text-left block px-4 py-2 hover:bg-ch-gray-100 rounded-md"
                        >
                          <div className="flex items-center space-x-2">
                            <LogOut size={16} />
                            <span>Sign Out</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login" className="hover:text-ch-gold">
                  <User size={20} />
                </Link>
              )}
            </div>
            
            <Link to="/cart" className="hover:text-ch-gold relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-ch-gold text-ch-blue rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                0
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-ch-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-ch-blue-800 py-4">
          <div className="container-custom space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="rounded-full py-2 px-4 text-ch-gray-800 focus:outline-none focus:ring-2 focus:ring-ch-gold w-full"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-ch-gray-500">
                <Search size={18} />
              </button>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="py-2 border-b border-ch-blue-700">
                <button className="flex items-center justify-between w-full text-left">
                  <span>Categories</span>
                </button>
              </div>
              <Link to="/shop" className="py-2 block">
                Shop
              </Link>
              <Link to="/deals" className="py-2 block">
                Deals
              </Link>
              <Link to="/services" className="py-2 block">
                Services
              </Link>
              <Link to="/about" className="py-2 block">
                About
              </Link>

              <div className="flex justify-between pt-4 border-t border-ch-blue-700">
                {isAuthenticated ? (
                  <>
                    <Link to="/account" className="py-2 flex items-center space-x-2">
                      <User size={18} />
                      <span>{user?.firstName}</span>
                    </Link>
                    <button 
                      onClick={logout}
                      className="py-2 flex items-center space-x-2"
                    >
                      <LogOut size={18} />
                      <span>Sign Out</span>
                    </button>
                  </>
                ) : (
                  <Link to="/login" className="py-2 flex items-center space-x-2">
                    <User size={18} />
                    <span>Login</span>
                  </Link>
                )}
                <Link to="/cart" className="py-2 flex items-center space-x-2">
                  <ShoppingCart size={18} />
                  <span>Cart (0)</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
