
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-8 text-hw-gray-900">Privacy Policy</h1>
          <p className="text-lg mb-8">
            This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from Crisantos Hardware.
          </p>
          
          <div className="space-y-8 max-w-4xl prose prose-headings:text-hw-gray-900">
            <div>
              <h2>Information We Collect</h2>
              <p>
                When you visit the site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
              </p>
              <p>
                When you make a purchase, we collect personal information such as your name, billing address, shipping address, payment information, email address, and phone number.
              </p>
            </div>
            
            <div>
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Process orders and provide customer support</li>
                <li>Communicate with you about products, services, and promotions</li>
                <li>Improve our website and customer experience</li>
                <li>Prevent fraud and unauthorized access</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
            
            <div>
              <h2>Sharing Your Information</h2>
              <p>
                We share your information with third parties that help us process orders, deliver products, and operate our business (such as payment processors and shipping companies).
              </p>
              <p>
                We may also share your information to comply with applicable laws and regulations, respond to legal process, or protect our rights.
              </p>
            </div>
            
            <div>
              <h2>Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You can also object to our processing of your data or request that we restrict processing.
              </p>
              <p>
                To exercise these rights, please contact us at privacy@crisantoshardware.com.
              </p>
            </div>
            
            <div>
              <h2>Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons.
              </p>
            </div>
            
            <div>
              <h2>Contact Us</h2>
              <p>
                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at privacy@crisantoshardware.com or by mail at 123 Hardware Street, Tool City, TC 12345.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
