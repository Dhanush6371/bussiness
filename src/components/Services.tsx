import React, { useState } from 'react';
import { Code, Globe, Paintbrush, BarChart, Smartphone, Megaphone } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-white rounded-lg p-8 shadow-lg transition-all duration-300 ${
        isHovered ? 'transform -translate-y-2 shadow-xl' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`h-14 w-14 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${
        isHovered ? 'bg-indigo-600' : 'bg-indigo-100'
      }`}>
        <div className={`transition-colors duration-300 ${isHovered ? 'text-white' : 'text-indigo-600'}`}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Paintbrush size={32} />,
      title: "UI/UX Design",
      description: "We create beautiful, intuitive interfaces that enhance user experience and drive engagement."
    },
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description: "Our developers build fast, responsive, and feature-rich websites using cutting-edge technologies."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
    },
    {
      icon: <Globe size={32} />,
      title: "E-Commerce",
      description: "Custom online stores that drive sales and provide seamless shopping experiences."
    },
    {
      icon: <Megaphone size={32} />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to increase your brand visibility and drive customer acquisition."
    },
    {
      icon: <BarChart size={32} />,
      title: "Analytics & SEO",
      description: "Data-driven insights and optimization to improve your website's performance and visibility."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business grow and succeed online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;