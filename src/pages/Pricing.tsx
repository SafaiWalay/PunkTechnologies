import React from 'react';
import { Check } from 'lucide-react';

const PricingTier = ({ name, price, features, highlighted = false }) => (
  <div
    className={`p-8 rounded-2xl ${
      highlighted
        ? 'bg-gradient-to-b from-purple-900/40 to-transparent border-2 border-purple-500'
        : 'bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10'
    }`}
  >
    <h3 className="text-2xl font-bold mb-4">{name}</h3>
    <div className="mb-8">
      <span className="text-4xl font-bold">${price}</span>
      <span className="text-gray-400">/month</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-3 px-6 rounded-lg ${
        highlighted
          ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
          : 'border border-white/20 hover:bg-white/10'
      }`}
    >
      Get Started
    </button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '0',
      features: [
        'Basic project creation',
        'Community support',
        'Essential tools',
        '1GB storage',
      ],
    },
    {
      name: 'Pro',
      price: '29',
      features: [
        'Advanced project features',
        'Priority support',
        'Pro tools and plugins',
        '10GB storage',
        'Team collaboration',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '99',
      features: [
        'Custom solutions',
        '24/7 dedicated support',
        'All tools and plugins',
        'Unlimited storage',
        'Advanced security',
        'Custom integrations',
      ],
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Choose Your Plan
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Get started for free or upgrade to unlock advanced features and capabilities.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingTier key={plan.name} {...plan} />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {[
            {
              q: 'Can I switch plans at any time?',
              a: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.',
            },
            {
              q: 'Is there a free trial for paid plans?',
              a: 'Yes, both Pro and Enterprise plans come with a 14-day free trial. No credit card required.',
            },
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-lg bg-white/5">
              <h3 className="text-xl font-bold mb-4">{item.q}</h3>
              <p className="text-gray-400">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;