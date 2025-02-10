import React from 'react';
import { Shield } from 'lucide-react';

const Terms = () => {
  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-center mb-8">
          <Shield className="h-12 w-12 text-purple-500 mr-4" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Terms of Service
          </h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-300">
                By accessing or using Punk Technologies' services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p className="text-gray-300">
                Permission is granted to temporarily access our services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-300">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or other proprietary notations</li>
                <li>Transfer the materials to another person</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
              <p className="text-gray-300">
                Our services are provided "as is". Punk Technologies makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
              <p className="text-gray-300">
                In no event shall Punk Technologies or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Privacy</h2>
              <p className="text-gray-300">
                Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
              <p className="text-gray-300">
                These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;