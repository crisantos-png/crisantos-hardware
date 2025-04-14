
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-hw-gray-100 overflow-hidden">
      <div className="container-custom">
        <div className="py-12 md:py-24 lg:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hw-gray-900 leading-tight mb-4">
              Quality Tools for <br />
              <span className="text-hw-blue">Every Project</span>
            </h1>
            <p className="text-lg text-hw-gray-700 mb-8 max-w-lg">
              From professional-grade power tools to everyday home essentials, find everything you need at Crisantos Hardware. Serving professionals and DIY enthusiasts since 1985.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/shop" 
                className="bg-hw-blue hover:bg-hw-blue-600 text-white font-medium text-base px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all inline-block"
              >
                Shop Now
              </Link>
              <Link 
                to="/deals" 
                className="bg-hw-orange hover:bg-hw-orange-600 text-white font-medium text-base px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all inline-block"
              >
                Current Deals
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
                alt="Professional tools collection arranged neatly on wooden surface"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-hw-orange text-white py-4 px-6 rounded-lg shadow-xl transform rotate-3 z-20">
              <p className="text-xl font-bold">Spring Sale</p>
              <p className="text-lg">Up to 30% Off</p>
            </div>
            <div className="absolute -z-1 top-10 -right-10 w-40 h-40 bg-hw-blue/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-1 -bottom-10 -left-10 w-40 h-40 bg-hw-orange/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
