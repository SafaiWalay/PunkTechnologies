import React from 'react';
import { Search } from 'lucide-react';

const Examples = () => {
  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Explore Examples
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mb-12">
          Discover what's possible with Punk Technologies through our curated collection of examples.
        </p>
        
        {/* Search */}
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search examples..."
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Examples Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="group relative rounded-lg overflow-hidden cursor-pointer bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10"
            >
              <img
                src={`https://source.unsplash.com/random/800x600?cyberpunk&sig=${item}`}
                alt={`Example ${item}`}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Example Project {item}</h3>
                <p className="text-gray-400 mb-4">
                  A showcase of advanced features and possibilities with Punk Technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300">
                    3D
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-300">
                    Animation
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300">
                    Interactive
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Examples;