
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ShopPage from "./pages/Shop";
import DealsPage from "./pages/Deals";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/About";
import CategoryPage from "./pages/Category";
import CartPage from "./pages/Cart";
import AccountPage from "./pages/Account";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ProductDetailPage from "./pages/ProductDetail";
import ContactPage from "./pages/Contact";
import FaqPage from "./pages/FAQ";
import ReturnsPage from "./pages/Returns";
import ShippingPage from "./pages/Shipping";
import PrivacyPage from "./pages/Privacy";
import TermsPage from "./pages/Terms";
import AccessibilityPage from "./pages/Accessibility";
import SellerDashboardPage from "./pages/SellerDashboard";
import SellerAddProductPage from "./pages/SellerAddProduct";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/products" element={<ShopPage />} />
            <Route path="/product-detail/:id" element={<ProductDetailPage />} />
            <Route path="/deals" element={<DealsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/returns" element={<ReturnsPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/brands" element={<ShopPage />} />
            <Route path="/new-arrivals" element={<ShopPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            <Route path="/seller-dashboard" element={<SellerDashboardPage />} />
            <Route path="/seller-add-product" element={<SellerAddProductPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
