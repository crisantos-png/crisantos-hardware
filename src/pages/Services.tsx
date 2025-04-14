
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Tool Rental",
      description: "Rent professional-grade tools for your project without the commitment of purchasing.",
      icon: "🛠️",
    },
    {
      id: 2,
      title: "Key Cutting",
      description: "Get duplicate keys made quickly and accurately while you shop.",
      icon: "🔑",
    },
    {
      id: 3,
      title: "Paint Mixing",
      description: "Custom paint color matching and mixing to meet your exact specifications.",
      icon: "🎨",
    },
    {
      id: 4,
      title: "Tool Sharpening",
      description: "Professional sharpening services for knives, blades, and garden tools.",
      icon: "✂️",
    },
    {
      id: 5,
      title: "Installation Services",
      description: "Professional installation for many of the products we sell.",
      icon: "👷",
    },
    {
      id: 6,
      title: "Free Delivery",
      description: "Free local delivery on orders over $100.",
      icon: "🚚",
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container-custom py-16">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-hw-gray-600 mb-12 max-w-3xl">
          At Crisantos Hardware, we offer more than just quality products. Our services are designed to help you complete your projects with ease and confidence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-hw-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
