import React from 'react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const Blogs = () => {
  const blogs = [
    {
      title: 'The Future of AI in Business Automation',
      excerpt: 'Explore how artificial intelligence is revolutionizing business processes and what it means for small businesses.',
      author: 'Nahash Michael',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: 'https://source.unsplash.com/random/800x600?ai&sig=1',
      category: 'Technology',
    },
    {
      title: 'Securing Your Digital Infrastructure',
      excerpt: 'Essential cybersecurity practices every business should implement to protect their digital assets.',
      author: 'Rishikesh Khatkhede',
      date: 'March 12, 2024',
      readTime: '4 min read',
      image: 'https://source.unsplash.com/random/800x600?security&sig=2',
      category: 'Security',
    },
    {
      title: 'Cloud Migration Strategies',
      excerpt: 'A comprehensive guide to moving your business operations to the cloud safely and efficiently.',
      author: 'Shivani Michael',
      date: 'March 10, 2024',
      readTime: '6 min read',
      image: 'https://source.unsplash.com/random/800x600?cloud&sig=3',
      category: 'Infrastructure',
    },
    {
      title: 'Mobile App Development Trends 2024',
      excerpt: 'Latest trends and technologies shaping the future of mobile application development.',
      author: 'Nahash Michael',
      date: 'March 8, 2024',
      readTime: '4 min read',
      image: 'https://source.unsplash.com/random/800x600?mobile&sig=4',
      category: 'Development',
    },
    {
      title: 'Digital Marketing for Tech Companies',
      excerpt: 'Effective strategies for marketing your technology products and services in the digital age.',
      author: 'Shivani Michael',
      date: 'March 5, 2024',
      readTime: '5 min read',
      image: 'https://source.unsplash.com/random/800x600?marketing&sig=5',
      category: 'Marketing',
    },
    {
      title: 'The Rise of Edge Computing',
      excerpt: 'Understanding edge computing and its impact on modern business applications.',
      author: 'Rishikesh Khatkhede',
      date: 'March 3, 2024',
      readTime: '7 min read',
      image: 'https://source.unsplash.com/random/800x600?network&sig=6',
      category: 'Technology',
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Tech Insights & Updates
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mb-12">
          Stay informed about the latest in technology, business solutions, and industry trends with our expert insights and analysis.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="group rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10 overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300 backdrop-blur-sm">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-400 mb-4">{blog.excerpt}</p>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{blog.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{blog.date}</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{blog.readTime}</span>
                </div>
                <button className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;