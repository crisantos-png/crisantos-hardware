
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-hw-gray-100 overflow-hidden">
      <div className="container-custom">
        <div className="py-12 md:py-24 lg:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-hw-gray-900 leading-tight mb-4">
              Quality Tools for <br />
              <span className="text-hw-blue">Every Project</span>
            </h1>
            <p className="text-lg text-hw-gray-700 mb-6 max-w-md">
              From professional-grade power tools to everyday home essentials, find everything you need at HardwareHub.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="btn-primary">
                Shop Now
              </Link>
              <Link to="/deals" className="btn-accent">
                Current Deals
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
                alt="Professional tools collection"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-hw-orange text-white py-2 px-4 rounded-md shadow-lg transform rotate-3">
              <p className="text-lg font-bold">Spring Sale</p>
              <p className="text-sm">Up to 30% Off</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
