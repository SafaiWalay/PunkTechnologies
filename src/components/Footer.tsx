import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Punk Technologies
            </Link>
            <p className="text-gray-400">
              Empowering businesses with cutting-edge technology solutions.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Plot No 62, Panchsheel Nagar</li>
              <li>Isasani, Hingna Road</li>
              <li>Nagpur 440016</li>
              <li>support@punktech.in</li>
              <li>+91 88560-49526</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Punk Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;