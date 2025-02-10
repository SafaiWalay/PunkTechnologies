import React from 'react';
import { ArrowRight, Server, Smartphone, Database, TrendingUp, Users, Clock, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';
import CyberGrid from '../components/CyberGrid';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7928CA]/40 via-[#FF0080]/20 to-black"></div>
        <CyberGrid />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="https://cdn.jsdelivr.net/gh/stackblitz/stackblitz-demos@main/cyberpunk-bg.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-[#FF10F0] via-[#7928CA] to-[#00DFD8] bg-clip-text text-transparent animate-pulse">
            Empowering MSMEs in India
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 animate-fade-in">
            Transforming small businesses with cutting-edge technology solutions. Join 500+ MSMEs already growing with our digital platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-[#FF10F0] via-[#7928CA] to-[#00DFD8] text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#7928CA]/30"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 rounded-lg border border-white/20 hover:border-[#7928CA]/50 hover:bg-white/5 transition-all duration-300"
            >
              Our Solutions
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-24 bg-gradient-to-b from-black to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#FF10F0] to-[#00DFD8] bg-clip-text text-transparent">
            Driving MSME Growth in India
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10 text-center">
              <TrendingUp className="h-12 w-12 text-[#FF10F0] mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">45%</div>
              <p className="text-gray-400">Average Increase in Business Efficiency</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10 text-center">
              <Users className="h-12 w-12 text-[#7928CA] mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">100+</div>
              <p className="text-gray-400">MSMEs Digitally Transformed</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10 text-center">
              <Clock className="h-12 w-12 text-[#0070F3] mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">30hrs</div>
              <p className="text-gray-400">Monthly Time Saved per Business</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10 text-center">
              <IndianRupee className="h-12 w-12 text-[#00DFD8] mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">25%</div>
              <p className="text-gray-400">Average Cost Reduction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#FF10F0] to-[#00DFD8] bg-clip-text text-transparent">
            Comprehensive MSME Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10">
              <Server className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Infrastructure Solutions</h3>
              <p className="text-gray-400">
                Affordable cloud infrastructure and IT management tailored for MSMEs, reducing operational costs by up to 40%.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10">
              <Smartphone className="h-12 w-12 text-cyan-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">App Development</h3>
              <p className="text-gray-400">
                Custom mobile and web applications that help MSMEs reach wider markets and automate operations.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10">
              <Database className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Business Software</h3>
              <p className="text-gray-400">
                Digital transformation tools including inventory management, accounting, and CRM systems built for Indian MSMEs.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Impact Section */}
      <div className="py-24 bg-gradient-to-b from-purple-900/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#FF10F0] to-[#00DFD8] bg-clip-text text-transparent">
            Our Impact on Indian MSMEs
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Supporting the backbone of India's economy with technology solutions that make a real difference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Digital Transformation</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-[#FF10F0] mr-2 flex-shrink-0 mt-1" />
                  <span>Helped 200+ traditional businesses transition to digital operations</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-[#7928CA] mr-2 flex-shrink-0 mt-1" />
                  <span>Implemented paperless solutions saving 1000+ trees annually</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-[#0070F3] mr-2 flex-shrink-0 mt-1" />
                  <span>Reduced manual data entry time by 75% through automation</span>
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Business Growth</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-[#FF10F0] mr-2 flex-shrink-0 mt-1" />
                  <span>Average 60% increase in online customer reach</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-[#7928CA] mr-2 flex-shrink-0 mt-1" />
                  <span>Enabled 150+ MSMEs to expand operations nationally</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-[#0070F3] mr-2 flex-shrink-0 mt-1" />
                  <span>35% average increase in revenue through digital channels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home