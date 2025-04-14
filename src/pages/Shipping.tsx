
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ShippingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-8 text-hw-gray-900">Shipping Information</h1>
          <p className="text-lg mb-8">
            Learn about our shipping options, delivery times, and policies.
          </p>
          
          <div className="space-y-8 max-w-4xl">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-hw-gray-800">Shipping Options</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead>
                    <tr>
                      <th className="border-b px-6 py-4 text-left">Method</th>
                      <th className="border-b px-6 py-4 text-left">Estimated Delivery</th>
                      <th className="border-b px-6 py-4 text-left">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b px-6 py-4">Standard Shipping</td>
                      <td className="border-b px-6 py-4">3-5 business days</td>
                      <td className="border-b px-6 py-4">Free for orders over $50<br />$7.99 for orders under $50</td>
                    </tr>
                    <tr>
                      <td className="border-b px-6 py-4">Express Shipping</td>
                      <td className="border-b px-6 py-4">1-2 business days</td>
                      <td className="border-b px-6 py-4">$14.99</td>
                    </tr>
                    <tr>
                      <td className="border-b px-6 py-4">Same-Day Delivery</td>
                      <td className="border-b px-6 py-4">Same day (orders placed before 12 PM)</td>
                      <td className="border-b px-6 py-4">$24.99 (limited to select areas)</td>
                    </tr>
                    <tr>
                      <td className="border-b px-6 py-4">Store Pickup</td>
                      <td className="border-b px-6 py-4">Ready in 2 hours</td>
                      <td className="border-b px-6 py-4">Free</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-hw-gray-800">Shipping Policies</h2>
              <ul className="space-y-4">
                <li>
                  <strong className="text-hw-gray-800">Order Processing:</strong> Most orders are processed within 24 hours of being placed.
                </li>
                <li>
                  <strong className="text-hw-gray-800">Shipping Destinations:</strong> We currently ship to all 50 US states. International shipping is not available at this time.
                </li>
                <li>
                  <strong className="text-hw-gray-800">Oversized Items:</strong> Additional shipping fees may apply for large or heavy items. This will be clearly indicated during checkout.
                </li>
                <li>
                  <strong className="text-hw-gray-800">Tracking Information:</strong> Once your order ships, you will receive an email with tracking information.
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-hw-gray-800">FAQ</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg">Can I change my shipping address after placing an order?</h3>
                  <p>
                    If your order hasn't shipped yet, please contact our customer service immediately and we'll try to update your shipping address.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg">What if my package is damaged or lost?</h3>
                  <p>
                    Please contact our customer service within 48 hours of receiving a damaged package. For lost packages, please wait until after the estimated delivery date before contacting us.
                  </p>
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

export default ShippingPage;
