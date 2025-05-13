import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Mountain Peak E-Commerce",
      category: "web",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "A modern e-commerce platform for outdoor gear and apparel."
    },
    {
      id: 2,
      title: "FitLife Mobile App",
      category: "mobile",
      image: "https://images.pexels.com/photos/3912328/pexels-photo-3912328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Fitness tracking app with personalized workout plans."
    },
    {
      id: 3,
      title: "Urban Taste Branding",
      category: "branding",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Complete brand identity for a modern restaurant chain."
    },
    {
      id: 4,
      title: "EcoSolar Website",
      category: "web",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Responsive website for a renewable energy company."
    },
    {
      id: 5,
      title: "TravelBuddy App",
      category: "mobile",
      image: "https://images.pexels.com/photos/4588026/pexels-photo-4588026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Travel planning and booking application with AI recommendations."
    },
    {
      id: 6,
      title: "Harmony Music Brand",
      category: "branding",
      image: "https://images.pexels.com/photos/5966513/pexels-photo-5966513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Visual identity for a music streaming service."
    }
  ]);
  
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [activeFilter, setActiveFilter] = useState<string>("all");
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

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter, projects]);

  const filters = [
    { name: "All Projects", value: "all" },
    { name: "Web", value: "web" },
    { name: "Mobile", value: "mobile" },
    { name: "Branding", value: "branding" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div ref={sectionRef} className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Portfolio</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our latest projects and see how we've helped businesses achieve their goals.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 mx-2 mb-3 rounded-full transition-colors ${
                activeFilter === filter.value
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0
              }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-600 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-indigo-600 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-xs uppercase tracking-wider bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-transparent hover:bg-indigo-600 text-indigo-600 hover:text-white border border-indigo-600 px-8 py-3 rounded-md transition-colors font-medium">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;