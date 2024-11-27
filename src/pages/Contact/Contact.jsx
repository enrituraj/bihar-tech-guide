import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa"; // Using React Icons for LinkedIn and Instagram

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-xl mt-2">Reach out through LinkedIn, Instagram, Twitter, or GitHub</p>
      </header>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {/* LinkedIn Card */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-center bg-blue-700 py-6">
            <FaLinkedin className="text-white text-5xl" />
          </div>
          <div className="p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-800">LinkedIn</h2>
            <p className="text-gray-500 text-center mt-2 mb-4">Let's connect professionally on LinkedIn.</p>
            <a
              href="https://www.linkedin.com/in/yourprofile" // Replace with your LinkedIn profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-700 text-white py-3 rounded-lg text-center hover:bg-blue-800 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Instagram Card */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-center bg-pink-500 py-6">
            <FaInstagram className="text-white text-5xl" />
          </div>
          <div className="p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-800">Instagram</h2>
            <p className="text-gray-500 text-center mt-2 mb-4">Follow me and drop a message on Instagram.</p>
            <a
              href="https://www.instagram.com/yourprofile" // Replace with your Instagram profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-pink-500 text-white py-3 rounded-lg text-center hover:bg-pink-600 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Twitter Card */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-center bg-blue-400 py-6">
            <FaTwitter className="text-white text-5xl" />
          </div>
          <div className="p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-800">Twitter</h2>
            <p className="text-gray-500 text-center mt-2 mb-4">Follow me and stay updated on Twitter.</p>
            <a
              href="https://twitter.com/yourprofile" // Replace with your Twitter profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-400 text-white py-3 rounded-lg text-center hover:bg-blue-500 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* GitHub Card */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-center bg-gray-800 py-6">
            <FaGithub className="text-white text-5xl" />
          </div>
          <div className="p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-800">GitHub</h2>
            <p className="text-gray-500 text-center mt-2 mb-4">Check out my projects and repositories on GitHub.</p>
            <a
              href="https://github.com/yourprofile" // Replace with your GitHub profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-800 text-white py-3 rounded-lg text-center hover:bg-gray-900 transition-all"
            >
              Follow us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
