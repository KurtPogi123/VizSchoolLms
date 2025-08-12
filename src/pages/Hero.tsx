import React from 'react';
import NavBar from '../components/Navbar';

const Hero: React.FC = () => {
  return (
    <div className="hero-container relative min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 overflow-hidden">
      {/* Decorative geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Triangles */}
        <div className="absolute top-20 left-16 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-white opacity-80"></div>
        <div className="absolute top-32 right-20 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-white opacity-60"></div>
        <div className="absolute bottom-40 left-32 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-white opacity-70"></div>
        <div className="absolute top-1/3 right-1/4 w-0 h-0 border-l-10 border-r-10 border-b-15 border-l-transparent border-r-transparent border-b-white opacity-50"></div>
        
        {/* Circles */}
        <div className="absolute top-40 left-20 w-12 h-12 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-1/2 right-16 w-16 h-16 bg-white rounded-full opacity-40"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white rounded-full opacity-70"></div>
        
        {/* Dot grids */}
        <div className="absolute top-24 left-1/4 grid grid-cols-5 gap-1">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
          ))}
        </div>
        <div className="absolute bottom-1/4 left-16 grid grid-cols-4 gap-1">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full opacity-50"></div>
          ))}
        </div>
        <div className="absolute top-1/3 right-32 grid grid-cols-5 gap-1">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
          ))}
        </div>
        <div className="absolute bottom-40 right-20 grid grid-cols-4 gap-1">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full opacity-60"></div>
          ))}
        </div>
        
        {/* Plus signs */}
        <div className="absolute top-1/2 right-1/3 text-white text-2xl opacity-60 font-light">+</div>
        <div className="absolute bottom-1/3 left-1/3 text-white text-xl opacity-50 font-light">+</div>
      </div>

      <NavBar/>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center text-white pt-20 md:pt-0">
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight mt-8 md:mt-0">
          Empowering You to Learn<br />
          Online, Anytime, Anywhere
        </h1>
        
        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 flex items-center justify-center gap-2">
            Get Started 
            <span>→</span>
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2">
            Enroll Now
            <span>→</span>
          </button>
        </div>
        
        {/* Three people with capsule shapes */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-8 md:gap-12 mt-8">
          {/* Person 1 - Child with book (Purple capsule) */}
          <div className="relative">
            {/* Purple capsule background */}
            <div className="w-56 h-72 bg-purple-300 rounded-full"></div>
            {/* Person image overlaid */}
            <div className="absolute inset-0 flex items-end justify-center">
              <img 
                src="/public/assets/child1.png" 
                alt="Child learning with book" 
                className="h-64 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))' }}
              />
            </div>
          </div>
          
          {/* Person 2 - Teen with laptop (Yellow capsule) - Taller */}
          <div className="relative">
            {/* Yellow capsule background */}
            <div className="w-64 h-80 bg-yellow-300 rounded-full"></div>
            {/* Person image overlaid */}
            <div className="absolute inset-0 flex items-end justify-center">
              <img 
                src="/public/assets/child3.png" 
                alt="Teen learning with laptop" 
                className="h-72 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))' }}
              />
            </div>
          </div>
          
          {/* Person 3 - Child with tablet (Green capsule) */}
          <div className="relative">
            {/* Green capsule background */}
            <div className="w-56 h-72 bg-green-300 rounded-full"></div>
            {/* Person image overlaid */}
            <div className="absolute inset-0 flex items-end justify-center">
              <img 
                src="/public/assets/child2.png" 
                alt="Child learning with tablet" 
                className="h-64 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;