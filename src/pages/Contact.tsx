import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to submit form');

      // Reset form
      form.reset();
      setFormData({ name: '', email: '', subject: '', message: '' });

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon!',
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSubmitStatus(null);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mb-12">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:opacity-90"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4" />
              </button>
              {submitStatus && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    submitStatus.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-purple-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium mb-2">Our Location</h3>
                  <p className="text-gray-400">
                    Plot No 62, Panchsheel Nagar<br />
                    Isasani, Hingna Road<br />
                    Nagpur 440016
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-cyan-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium mb-2">Email Us</h3>
                  <p className="text-gray-400">
                    support@punktech.in
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-purple-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium mb-2">Call Us</h3>
                  <p className="text-gray-400">
                    +91 88560-49526<br />
                    Mon-Fri 9am to 6pm IST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;