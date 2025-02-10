import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Punk Technologies
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              About
            </Link>
            <Link to="/blogs" className="font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              Blogs
            </Link>
            <Link to="/projects" className="font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              Solutions
            </Link>
            <Link to="/contact" className="font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;