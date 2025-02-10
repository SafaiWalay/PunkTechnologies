import React from 'react';
import { Book, Video, Users, ArrowRight } from 'lucide-react';

const Learn = () => {
  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Master Punk Technologies
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mb-12">
          From beginner tutorials to advanced techniques, learn everything you need to know about creating cutting-edge digital experiences.
        </p>
      </div>

      {/* Learning Paths */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10">
            <Book className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-4">Documentation</h3>
            <p className="text-gray-400 mb-4">
              Comprehensive guides and API references for all features.
            </p>
            <button className="inline-flex items-center text-purple-400 hover:text-purple-300">
              Read docs <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10">
            <Video className="h-12 w-12 text-cyan-500 mb-4" />
            <h3 className="text-xl font-bold mb-4">Video Tutorials</h3>
            <p className="text-gray-400 mb-4">
              Step-by-step video guides for visual learners.
            </p>
            <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
              Watch tutorials <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10">
            <Users className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-4">Community</h3>
            <p className="text-gray-400 mb-4">
              Join our community of developers and creators.
            </p>
            <button className="inline-flex items-center text-purple-400 hover:text-purple-300">
              Join community <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Tutorials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="group relative rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={`https://source.unsplash.com/random/800x600?tech&sig=${item}`}
                alt="Tutorial thumbnail"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Getting Started Tutorial {item}</h3>
                  <p className="text-gray-300">Learn the basics of Punk Technologies</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;