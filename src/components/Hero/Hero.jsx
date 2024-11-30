import React from "react";
import { SlRocket } from "react-icons/sl";
import wave from './../../assets/pattern.png';
import { motion } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="relative h-screen bg-gray-900 text-white flex items-center justify-center overflow-hidden">
      {/* Glowing Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-30 blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.3),_transparent_60%)] blur-lg"></div>

      <div
  className="absolute inset-x-0 top-[calc(100%-13rem)] z-10 transform-gpu overflow-hidden blur-xl sm:top-[calc(100%-40rem)]"
  aria-hidden="true"
>
  <div
    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
    style={{
      clipPath:
        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    }}
  ></div>
</div>

<div
  className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-xl sm:-top-80"
  aria-hidden="true"
>
  <div
    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
    style={{
      clipPath:
        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    }}
  ></div>
</div>

<img
    className="w-full h-full object-cover absolute inset-0 transform rotate-[-10deg] opacity-40 overflow-hidden scale-105 filter invert brightness-110 contrast-120"
    src={wave}
    alt="Wave"
  />

      {/* Hero Content */}
      <div className="relative text-center z-10 max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        <span>Transforming Dreams Into Reality Through Education</span>
          <span> <SlRocket className="inline" /></span>
        </h1>
        <p className="mt-4 font-semibold text-lg md:text-xl text-gray-100">
          Unlock your true potential with the best education, designed to pave
          your way to success. Build the skills and knowledge that empower you
          for a brighter future.
        </p>
        <a
      href="#examSection"
      className="inline-block mt-8 px-12 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white text-xl font-semibold rounded-full shadow-md hover:shadow-xl transition"
    >
      Get Started

      <motion.div
        className="inline-block ml-3" 
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Infinity, 
          repeatType: "loop",
          duration: 1,
        }}
      >
        <BsArrowDown size={24} />
      </motion.div>
    </a>
      </div>
    </div>
  );
};

export default Hero;
