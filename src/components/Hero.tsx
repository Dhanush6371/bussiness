import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility after a short delay to trigger animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20"
    >
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div 
            className={`md:w-1/2 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We Craft Digital <br />
              <span className="text-indigo-600">Experiences</span> That <br />
              <span className="text-teal-600">Inspire</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Pixel Perfect is a digital agency specializing in creating stunning websites, 
              powerful applications, and effective digital strategies that help businesses grow.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center">
                Get Started 
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="border border-gray-300 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
          <div 
            className={`md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-indigo-100 rounded-xl"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-teal-100 rounded-xl"></div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Digital Team Collaboration" 
                className="rounded-lg shadow-xl relative z-10 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;