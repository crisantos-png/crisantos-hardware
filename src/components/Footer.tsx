
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-hw-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">HardwareHub</h2>
            <p className="text-hw-gray-400 mb-6">
              Your one-stop destination for quality hardware, tools, and building
              supplies.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-hw-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-hw-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-hw-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products"
                  className="text-hw-gray-400 hover:text-white transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/deals"
                  className="text-hw-gray-400 hover:text-white transition-colors"
                >
                  Deals & Offers
                </Link>
              </li>
              <li>
                <Link
                  to="/brands"
                  className="text-hw-gray-400 hover:text-white transition-colors"
                >
                  Popular Brands
                </Link>
              </li>
              <li>
                <Link
                  to="/new-arrivals"
                  className="text-hw-gray-400 hover:text-white transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-hw-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-hw-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-hw-gray-400 hover:text-white transition-colors"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-hw-gray-400 hover:text-white transition-colors"
                >
                  Shipping Information
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 flex-shrink-0 text-hw-orange" />
                <span className="text-hw-gray-400">
                  123 Hardware Street, Tool City, TC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0 text-hw-orange" />
                <span className="text-hw-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0 text-hw-orange" />
                <span className="text-hw-gray-400">info@hardwarehub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-hw-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-hw-gray-400 text-sm mb-4 md:mb-0">
            © 2025 HardwareHub. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/privacy"
              className="text-sm text-hw-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-hw-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/accessibility"
              className="text-sm text-hw-gray-400 hover:text-white transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
