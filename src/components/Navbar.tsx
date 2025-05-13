import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-indigo-600">Pixel<span className="text-teal-600">Perfect</span></span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          <a href="#home" className="text-gray-800 hover:text-indigo-600 transition-colors">Home</a>
          <a href="#services" className="text-gray-800 hover:text-indigo-600 transition-colors">Services</a>
          <a href="#about" className="text-gray-800 hover:text-indigo-600 transition-colors">About</a>
          <a href="#portfolio" className="text-gray-800 hover:text-indigo-600 transition-colors">Portfolio</a>
          <a href="#testimonials" className="text-gray-800 hover:text-indigo-600 transition-colors">Testimonials</a>
          <a href="#contact" className="text-gray-800 hover:text-indigo-600 transition-colors">Contact</a>
        </div>

        <div className="hidden md:block">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white ${
          isMenuOpen ? 'block' : 'hidden'
        } transition-all duration-300 ease-in-out`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a href="#home" className="text-gray-800 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100">Home</a>
          <a href="#services" className="text-gray-800 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100">Services</a>
          <a href="#about" className="text-gray-800 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100">About</a>
          <a href="#portfolio" className="text-gray-800 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100">Portfolio</a>
          <a href="#testimonials" className="text-gray-800 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100">Testimonials</a>
          <a href="#contact" className="text-gray-800 hover:text-indigo-600 transition-colors py-2">Contact</a>
          <button className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors w-full mt-4">
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;