
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-hw-gray-100 py-16">
          <div className="container-custom">
            <h1 className="text-4xl font-bold mb-4">About Crisantos Hardware</h1>
            <p className="text-lg text-hw-gray-600 max-w-3xl">
              Your trusted partner for quality tools and hardware since 1985. We're dedicated to providing professionals and DIY enthusiasts with the best products and service.
            </p>
          </div>
        </div>
        
        <div className="container-custom py-16">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="mb-4">
                Crisantos Hardware was founded in 1985 by Jose Crisantos, a master carpenter with a passion for quality tools. What began as a small shop serving local contractors has grown into a comprehensive hardware destination for professionals and homeowners alike.
              </p>
              <p className="mb-4">
                For over three decades, we've maintained our commitment to quality, expertise, and customer service. Our team includes industry professionals who can provide expert advice for any project, large or small.
              </p>
              <p>
                Today, Crisantos Hardware continues to be family-owned and operated, maintaining the personal touch and dedication to community that has been our hallmark since day one.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&auto=format&fit=crop&q=80" 
                alt="Crisantos Hardware store front" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-hw-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p>We stock only the finest tools and materials, ensuring that every purchase meets our rigorous standards for durability and performance.</p>
              </div>
              <div className="bg-hw-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Expertise</h3>
                <p>Our staff includes industry professionals who can provide knowledgeable advice on tool selection, project planning, and technical questions.</p>
              </div>
              <div className="bg-hw-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p>We're proud to be a cornerstone of our local community, supporting contractors, DIYers, and homeowners with their projects and needs.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
