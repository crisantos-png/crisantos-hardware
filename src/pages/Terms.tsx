
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-8 text-hw-gray-900">Terms of Service</h1>
          <p className="text-lg mb-8">
            These terms and conditions govern your use of the Crisantos Hardware website and services.
          </p>
          
          <div className="space-y-8 max-w-4xl prose prose-headings:text-hw-gray-900">
            <div>
              <h2>Agreement to Terms</h2>
              <p>
                By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>
            
            <div>
              <h2>Use of Site</h2>
              <p>
                You may use our website for lawful purposes only. You agree not to use our website:
              </p>
              <ul>
                <li>In any way that violates any applicable law or regulation</li>
                <li>To transmit or upload any material that contains viruses or harmful code</li>
                <li>To attempt to gain unauthorized access to our systems or user accounts</li>
                <li>For any fraudulent or deceptive purpose</li>
              </ul>
            </div>
            
            <div>
              <h2>Account Registration</h2>
              <p>
                To access certain features of our website, you may need to register for an account. You agree to provide accurate, current, and complete information and to update this information to keep it accurate, current, and complete.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </div>
            
            <div>
              <h2>Product Information and Pricing</h2>
              <p>
                We strive to provide accurate product information and pricing. However, errors may occur. We reserve the right to correct any errors and to change or update information at any time without prior notice.
              </p>
            </div>
            
            <div>
              <h2>Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, images, and software, is the property of Crisantos Hardware and is protected by copyright, trademark, and other intellectual property laws.
              </p>
            </div>
            
            <div>
              <h2>Limitation of Liability</h2>
              <p>
                Crisantos Hardware shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.
              </p>
            </div>
            
            <div>
              <h2>Changes to Terms</h2>
              <p>
                We may update these Terms of Service from time to time. When we do, we will post the updated terms on this page and update the "Last Updated" date.
              </p>
            </div>
            
            <div>
              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at legal@crisantoshardware.com or by mail at 123 Hardware Street, Tool City, TC 12345.
              </p>
            </div>
            
            <p className="text-sm text-gray-600 italic">
              Last Updated: April 14, 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
