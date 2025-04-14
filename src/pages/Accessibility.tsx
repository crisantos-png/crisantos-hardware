
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AccessibilityPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-8 text-hw-gray-900">Accessibility Statement</h1>
          <p className="text-lg mb-8">
            At Crisantos Hardware, we are committed to ensuring that our website is accessible to everyone, including those with disabilities.
          </p>
          
          <div className="space-y-8 max-w-4xl prose prose-headings:text-hw-gray-900">
            <div>
              <h2>Our Commitment</h2>
              <p>
                We strive to make our website compliant with the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. These guidelines help make web content more accessible to people with disabilities including blindness and low vision, deafness and hearing loss, learning disabilities, cognitive limitations, limited movement, speech disabilities, and combinations of these.
              </p>
            </div>
            
            <div>
              <h2>Accessibility Features</h2>
              <p>
                Our website includes the following accessibility features:
              </p>
              <ul>
                <li>Alternative text for images</li>
                <li>Proper heading structure and navigation</li>
                <li>Keyboard navigation support</li>
                <li>Color contrast that meets accessibility standards</li>
                <li>Resizable text without loss of functionality</li>
                <li>Form labels and error messages that are properly associated</li>
              </ul>
            </div>
            
            <div>
              <h2>Assistance with Our Website</h2>
              <p>
                If you have trouble accessing any part of our website, please contact our customer service team:
              </p>
              <ul>
                <li>Email: accessibility@crisantoshardware.com</li>
                <li>Phone: (123) 456-7890</li>
              </ul>
              <p>
                When contacting us, it helps if you can provide information about the issue you experienced, including:
              </p>
              <ul>
                <li>The web page where you encountered the issue</li>
                <li>What you were trying to do</li>
                <li>The specific problem you encountered</li>
                <li>Any assistive technology you use</li>
              </ul>
            </div>
            
            <div>
              <h2>Continuous Improvement</h2>
              <p>
                We are continually improving the user experience and applying the relevant accessibility standards. If you have suggestions or comments about the accessibility of our website, please contact us.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccessibilityPage;
