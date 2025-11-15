
import React from 'react';
import AnimatedElement from './AnimatedElement';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your message!');
  };

  return (
    <footer id="contact" className="py-20 sm:py-32 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Let's Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Amazing</span>
          </h2>
        </AnimatedElement>

        <AnimatedElement as="form" onSubmit={handleSubmit} className="mt-12 max-w-2xl mx-auto bg-gray-900/50 border border-gray-800 p-8 rounded-2xl">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3 transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3 transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your Message"
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3 transition-colors"
                required
              ></textarea>
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-900 transition-all duration-300"
            >
              Send
            </button>
          </div>
        </AnimatedElement>
      </div>
    </footer>
  );
};

export default Contact;
