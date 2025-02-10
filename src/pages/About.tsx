import React from 'react';
import { Users, Shield, Cpu, PenTool as Tool } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          About Our Company
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mb-12">
          We're a dedicated team of technology experts helping small businesses thrive in the digital age through comprehensive IT solutions and custom software.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To empower small businesses with enterprise-grade technology solutions that drive growth and efficiency.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To provide accessible, scalable, and reliable technology infrastructure and software solutions that help businesses succeed in the modern digital landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-lg bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10">
            <Users className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Client Focus</h3>
            <p className="text-gray-400">
              Your success is our priority. We build solutions that grow with your business.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10">
            <Shield className="h-8 w-8 text-cyan-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Security First</h3>
            <p className="text-gray-400">
              We prioritize the security and reliability of your business systems.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10">
            <Cpu className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-400">
              We leverage cutting-edge technology to solve business challenges.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10">
            <Tool className="h-8 w-8 text-cyan-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Support</h3>
            <p className="text-gray-400">
              Comprehensive technical support and maintenance for all our solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Nahash Michael',
              role: 'CEO & Solutions Architect',
              image: 'https://source.unsplash.com/random/400x400?portrait&sig=1',
            },
            {
              name: 'Rishikesh Khatkhede',
              role: 'Head of Software Development',
              image: 'https://source.unsplash.com/random/400x400?portrait&sig=2',
            },
            {
              name: 'Shivani Michael',
              role: 'Product Design and Marketting',
              image: 'https://source.unsplash.com/random/400x400?portrait&sig=3',
            },
          ].map((member) => (
            <div key={member.name} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About