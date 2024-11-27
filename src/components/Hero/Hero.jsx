import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen bg-gray-900 text-white flex items-center justify-center overflow-hidden">
      {/* Glowing Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-30 blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.3),_transparent_60%)] blur-lg"></div>

      {/* Hero Content */}
      <div className="relative text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          A Best Education is the Foundation of Success
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Unlock your true potential with the best education, designed to pave
          your way to success. Build the skills and knowledge that empower you
          for a brighter future.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-xl transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
