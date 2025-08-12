import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-99 w-full bg-white/70 backdrop-blur-lg shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 md:py-3">
        <div className="flex items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center md:justify-start justify-center flex-1 md:flex-none">
            <Link to="/">
              <img src="/assets/logo.png" alt="VidSchool Logo" className="w-20 h-20 object-contain" />
            </Link>
          </div>

          {/* Navigation Menu - Desktop */}
          <div className="hidden md:flex items-center space-x-8 ml-8">
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-secondary font-medium")}>
              About
            </NavLink>
            <NavLink
              to={"/courses"}
              className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-secondary font-medium")}>
              Course
            </NavLink>
            <NavLink
              to={"/reviews"}
              className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-secondary font-medium")}>
              Reviews
            </NavLink>
            <NavLink
              to={"/programmes"}
              className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-secondary font-medium")}>
              Programmes
            </NavLink>
            <NavLink
              to={"/pricing-plans"}
              className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-secondary font-medium")}>
              Plans
            </NavLink>
          </div>

          {/* Login Button - Desktop */}
          <div className="hidden md:flex items-center ml-auto">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 shadow-sm">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <NavLink to={"#"} className="block px-3 py-2 hover:text-secondary font-medium">
              About
            </NavLink>
            <NavLink to={"#"} className="block px-3 py-2 hover:text-secondary font-medium">
              Course
            </NavLink>
            <NavLink to={"#"} className="block px-3 py-2 hover:text-secondary font-medium">
              Reviews
            </NavLink>
            <NavLink to={"#"} className="block px-3 py-2 hover:text-secondary font-medium">
              Programmes
            </NavLink>
            <NavLink to={"#"} className="block px-3 py-2 hover:text-secondary font-medium">
              Plans
            </NavLink>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 shadow-sm mt-2">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
