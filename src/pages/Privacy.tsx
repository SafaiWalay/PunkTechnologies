import React from 'react';
import { Lock } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-center mb-8">
          <Lock className="h-12 w-12 text-purple-500 mr-4" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-gray-300">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-300">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-300">
                <li>Provide and maintain our services</li>
                <li>Process your transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
              <p className="text-gray-300">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-300">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and property</li>
                <li>During a business transfer or merger</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-gray-300">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className="text-gray-300">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-300">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="list-none mt-4 text-gray-300">
                <li>Email: privacy@punktech.in</li>
                <li>Phone: +91 88560-49526</li>
                <li>Address: Plot No 62, Panchsheel Nagar, Isasani, Hingna Road, Nagpur 440016</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;