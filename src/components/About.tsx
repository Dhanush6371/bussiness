import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    "Creative and experienced team",
    "Tailored solutions for your specific needs",
    "Results-driven approach",
    "Transparent communication",
    "Cutting-edge technologies",
    "Continuous support and maintenance"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div 
          ref={sectionRef}
          className={`flex flex-col lg:flex-row items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-64 h-64 bg-indigo-50 rounded-lg z-0"></div>
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl relative z-10 w-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Pixel Perfect</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2015, Pixel Perfect has grown from a small web design studio to a full-service 
              digital agency with a team of passionate designers, developers, and marketing experts. 
              We believe in combining creativity with technical expertise to deliver digital solutions 
              that exceed our clients' expectations.
            </p>
            <p className="text-gray-600 mb-8">
              Our mission is to help businesses of all sizes establish a strong online presence, 
              connect with their audience, and achieve their business goals through innovative 
              digital strategies and exceptional execution.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="text-indigo-600 mr-2" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <button className="mt-10 bg-transparent hover:bg-indigo-600 text-indigo-600 hover:text-white border border-indigo-600 px-8 py-3 rounded-md transition-colors font-medium">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;