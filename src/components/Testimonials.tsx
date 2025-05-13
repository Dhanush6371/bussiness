import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  text: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Pixel Perfect transformed our online presence completely. Their team understood our vision perfectly and delivered a website that exceeded our expectations. The increase in user engagement and conversions has been remarkable."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director",
      company: "GrowSmart",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Working with Pixel Perfect on our mobile app was a game-changer. They combined beautiful design with flawless functionality, resulting in an app our customers love to use. Their attention to detail and commitment to quality is outstanding."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "Founder",
      company: "EcoLife Shop",
      image: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "The e-commerce platform developed by Pixel Perfect has revolutionized our business. Sales have increased by 200% since launch, and the user experience is seamless. Their team was responsive, professional, and delivered exactly what we needed."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
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
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white">
      <div 
        ref={sectionRef}
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Client Testimonials</h2>
          <div className="w-24 h-1 bg-teal-400 mx-auto mt-4 mb-6"></div>
          <p className="text-indigo-100 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="md:w-1/3 h-64 md:h-auto relative">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-indigo-600 opacity-20"></div>
            </div>
            <div className="md:w-2/3 p-8 md:p-12 text-gray-800">
              <Quote size={48} className="text-indigo-200 mb-6" />
              <p className="text-lg md:text-xl italic mb-8">
                {testimonials[currentIndex].text}
              </p>
              <div>
                <h4 className="text-xl font-bold">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2">
            <button 
              onClick={prevSlide}
              className="bg-white text-indigo-600 rounded-full p-2 md:p-3 shadow-lg hover:bg-indigo-50 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2">
            <button 
              onClick={nextSlide}
              className="bg-white text-indigo-600 rounded-full p-2 md:p-3 shadow-lg hover:bg-indigo-50 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                index === currentIndex ? 'bg-teal-400' : 'bg-indigo-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;