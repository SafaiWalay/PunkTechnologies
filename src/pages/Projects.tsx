import React from 'react';
import { ExternalLink, Calendar, Box, Layers } from 'lucide-react';

const Projects = () => {
  const liveProjects = [
    {
      title: 'Safaiwalay.com',
      description: 'A comprehensive cleaning services platform revolutionizing the way people book and manage professional cleaning services.',
      image: 'public/Images/Mascot.jpg',
      tags: ['Booking System', 'Service Management', 'Payment Integration'],
      scope: [
        'Online booking system',
        'Service provider management',
        'Real-time scheduling',
        'Customer feedback system',
        'Payment gateway integration'
      ],
      link: '/contact',
    },
    {
      title: 'HD Events',
      description: 'An elegant event management platform that streamlines planning, coordination, and execution of memorable events.',
      image: 'public/Images/hdevents.jpg',
      tags: ['Event Planning', 'Vendor Management', 'Booking'],
      scope: [
        'Event planning dashboard',
        'Vendor collaboration tools',
        'Digital invitations',
        'Budget management',
        'Event timeline tracking'
      ],
      link: '/contact',
    },
    {
      title: 'MMart',
      description: 'A modern grocery shopping platform that brings convenience and efficiency to everyday shopping needs.',
      image: 'https://source.unsplash.com/random/800x600?grocery&sig=3',
      tags: ['E-commerce', 'Inventory', 'Delivery'],
      scope: [
        'Product catalog management',
        'Real-time inventory tracking',
        'Order processing system',
        'Delivery scheduling',
        'Customer loyalty program'
      ],
      link: '/contact',
    },
  ];

  const upcomingProjects = [
    {
      title: 'AI Agents Projects',
      description: 'Revolutionary AI-powered business automation solutions that transform operational efficiency and decision-making.',
      image: 'https://source.unsplash.com/random/800x600?artificial-intelligence&sig=4',
      tags: ['AI', 'Automation', 'Machine Learning'],
      features: [
        'Intelligent process automation',
        'Natural language processing',
        'Predictive analytics',
        'Custom AI solutions'
      ],
      releaseDate: 'Q3 2024',
    },
    {
      title: 'Smart Shop Inventory Management',
      description: 'Next-generation inventory management system with ChatGPT integration for intelligent insights and automation.',
      image: 'https://source.unsplash.com/random/800x600?warehouse&sig=5',
      tags: ['AI', 'Inventory', 'Analytics'],
      features: [
        'AI-powered inventory predictions',
        'Natural language queries',
        'Automated reordering',
        'Real-time analytics'
      ],
      releaseDate: 'Q4 2024',
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Our Solutions
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mb-12">
          Unlock the full potential of your business with our cutting-edge software solutions and reliable infrastructure services. Designed to streamline your operations, boost efficiency, and enhance productivity, our solutions empower you to focus on growth while we handle the technology. Experience seamless integration, top-tier security, and scalable solutions tailored to your needs.
        </p>
      </div>

      {/* Live Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center mb-12">
          <Box className="h-8 w-8 text-purple-500 mr-4" />
          <h2 className="text-3xl font-bold">Available Solutions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liveProjects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10 overflow-hidden"
            >
              <div className="relative h-48 cursor-pointer" onClick={() => {
                if (project.title === 'Safaiwalay.com') {
                  window.open('https://safaiwalay.com', '_blank');
                } else if (project.title === 'HD Events') {
                  window.open('https://hdevents.in', '_blank');
                }
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Project Scope:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    {project.scope.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white hover:opacity-90 transition-opacity"
                >
                  Contact for better solution <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center mb-12">
          <Layers className="h-8 w-8 text-cyan-500 mr-4" />
          <h2 className="text-3xl font-bold">Coming Soon</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingProjects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10 overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300">
                    {project.releaseDate}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects