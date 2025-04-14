
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-8 text-hw-gray-900">Contact Us</h1>
          <p className="text-lg mb-8">
            Have questions or need assistance? We're here to help! Get in touch with our friendly customer service team.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-hw-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-hw-gray-800">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-hw-gray-700 mb-2 font-medium">Your Name</label>
                  <input type="text" id="name" className="w-full p-3 border border-hw-gray-300 rounded-md" placeholder="Enter your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-hw-gray-700 mb-2 font-medium">Email Address</label>
                  <input type="email" id="email" className="w-full p-3 border border-hw-gray-300 rounded-md" placeholder="Enter your email" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-hw-gray-700 mb-2 font-medium">Subject</label>
                  <input type="text" id="subject" className="w-full p-3 border border-hw-gray-300 rounded-md" placeholder="Enter subject" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-hw-gray-700 mb-2 font-medium">Message</label>
                  <textarea id="message" rows={5} className="w-full p-3 border border-hw-gray-300 rounded-md" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="bg-hw-blue hover:bg-hw-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-hw-gray-800">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Store Address</h3>
                  <p className="text-hw-gray-700">123 Hardware Street, Tool City, TC 12345</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Phone Number</h3>
                  <p className="text-hw-gray-700">(123) 456-7890</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email Address</h3>
                  <p className="text-hw-gray-700">info@crisantoshardware.com</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Hours of Operation</h3>
                  <p className="text-hw-gray-700">Monday-Friday: 8am - 8pm</p>
                  <p className="text-hw-gray-700">Saturday: 9am - 6pm</p>
                  <p className="text-hw-gray-700">Sunday: 10am - 4pm</p>
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

export default ContactPage;
