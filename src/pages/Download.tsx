import React from 'react';
import { Download as DownloadIcon, Monitor, Phone, Terminal } from 'lucide-react';

const Download = () => {
  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Download Punk Technologies
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Get started with our powerful tools and create amazing digital experiences.
        </p>
        
        {/* Download Button */}
        <button className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:opacity-90 text-lg">
          <DownloadIcon className="mr-2 h-6 w-6" />
          Download for Windows
        </button>
        
        <div className="mt-4 text-sm text-gray-400">
          Version 1.0.0 | 64-bit | 180MB
        </div>
      </div>

      {/* Platforms */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10 text-center">
            <Monitor className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Desktop</h3>
            <div className="space-y-2">
              <button className="w-full py-2 px-4 rounded bg-white/10 hover:bg-white/20">
                Download for Windows
              </button>
              <button className="w-full py-2 px-4 rounded bg-white/10 hover:bg-white/20">
                Download for macOS
              </button>
              <button className="w-full py-2 px-4 rounded bg-white/10 hover:bg-white/20">
                Download for Linux
              </button>
            </div>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10 text-center">
            <Phone className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Mobile</h3>
            <div className="space-y-2">
              <button className="w-full py-2 px-4 rounded bg-white/10 hover:bg-white/20">
                Download for iOS
              </button>
              <button className="w-full py-2 px-4 rounded bg-white/10 hover:bg-white/20">
                Download for Android
              </button>
            </div>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10 text-center">
            <Terminal className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Command Line</h3>
            <div className="bg-black/50 p-4 rounded-lg mb-4">
              <code className="text-sm text-gray-300">
                npm install -g punk-technologies
              </code>
            </div>
            <button className="w-full py-2 px-4 rounded bg-white/10 hover:bg-white/20">
              View CLI Documentation
            </button>
          </div>
        </div>
      </div>

      {/* System Requirements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">System Requirements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg bg-white/5">
            <h3 className="text-xl font-bold mb-4">Windows</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Windows 10 64-bit or newer</li>
              <li>8GB RAM minimum</li>
              <li>DirectX 11 compatible GPU</li>
              <li>4GB available space</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-white/5">
            <h3 className="text-xl font-bold mb-4">macOS</h3>
            <ul className="space-y-2 text-gray-300">
              <li>macOS 11.0 or newer</li>
              <li>8GB RAM minimum</li>
              <li>Metal compatible GPU</li>
              <li>4GB available space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;