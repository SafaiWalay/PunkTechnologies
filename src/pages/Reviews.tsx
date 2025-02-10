import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah Thompson',
      company: 'Digital Solutions Inc.',
      image: 'https://source.unsplash.com/random/100x100?portrait&sig=1',
      rating: 5,
      text: 'Punk Technologies transformed our business operations with their custom software solutions. The inventory management system they built has saved us countless hours and improved accuracy significantly.',
    },
    {
      name: 'Michael Chen',
      company: 'TechStart Solutions',
      image: 'https://source.unsplash.com/random/100x100?portrait&sig=2',
      rating: 5,
      text: 'Their team went above and beyond to understand our needs. The mobile app they developed has received fantastic feedback from our customers. Highly recommended!',
    },
    {
      name: 'Emily Rodriguez',
      company: 'Global Retail Co.',
      image: 'https://source.unsplash.com/random/100x100?portrait&sig=3',
      rating: 5,
      text: 'Outstanding service and support. The cloud infrastructure they set up has been rock-solid, and their response time for any issues is impressive.',
    },
    {
      name: 'David Kumar',
      company: 'Innovative Startups Ltd.',
      image: 'https://source.unsplash.com/random/100x100?portrait&sig=4',
      rating: 5,
      text: 'Working with Punk Technologies was a game-changer for our startup. Their expertise in both hardware and software solutions helped us scale efficiently.',
    },
    {
      name: 'Lisa Patel',
      company: 'Modern Marketing Agency',
      image: 'https://source.unsplash.com/random/100x100?portrait&sig=5',
      rating: 5,
      text: 'The custom CRM they developed has streamlined our entire client management process. Their attention to detail and user experience is exceptional.',
    },
    {
      name: 'James Wilson',
      company: 'E-commerce Solutions',
      image: 'https://source.unsplash.com/random/100x100?portrait&sig=6',
      rating: 5,
      text: 'Excellent team to work with! They delivered our e-commerce platform ahead of schedule and their ongoing support has been invaluable.',
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Client Reviews
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mb-12">
          Don't just take our word for it. See what our clients have to say about working with Punk Technologies.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10"
            >
              <Quote className="h-8 w-8 text-purple-500 mb-4" />
              <p className="text-gray-300 mb-6">{review.text}</p>
              <div className="flex items-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold">{review.name}</h3>
                  <p className="text-sm text-gray-400">{review.company}</p>
                </div>
              </div>
              <div className="flex items-center mt-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-500 fill-current"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;