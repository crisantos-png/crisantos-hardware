
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ReturnsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-8 text-hw-gray-900">Returns & Refunds</h1>
          <p className="text-lg mb-8">
            At Crisantos Hardware, we stand behind our products and want you to be completely satisfied with your purchase.
          </p>
          
          <div className="space-y-8 max-w-4xl">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-hw-gray-800">Return Policy</h2>
              <p className="mb-4">
                We offer a 30-day return policy for most items. To be eligible for a return, your item must be unused, in the same condition that you received it, and in the original packaging.
              </p>
              <p>
                Certain products have different return policies:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Power tools must be returned within 14 days</li>
                <li>Custom or special order items are non-returnable</li>
                <li>Clearance items are final sale</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-hw-gray-800">Refunds</h2>
              <p className="mb-4">
                Once we receive and inspect your return, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
              </p>
              <p className="mb-4">
                If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-10 business days.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-hw-gray-800">How to Initiate a Return</h2>
              <ol className="list-decimal ml-6 mt-3 space-y-2">
                <li>Log in to your account and go to your Order History</li>
                <li>Find the order with the item you want to return and click "Return Item"</li>
                <li>Follow the instructions to print a return shipping label</li>
                <li>Package the item securely and attach the return label</li>
                <li>Drop off the package at any authorized shipping location</li>
              </ol>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReturnsPage;
