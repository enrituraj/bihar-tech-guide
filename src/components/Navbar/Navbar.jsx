import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-4 px-8 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="text-xl text-white flex items-center gap-2 font-bold"
        >
          <span className="w-5 h-5 bg-blue-500 rounded-full"></span>
          BiharTech<span className="text-blue-300">Guide</span>
        </Link>

        {/* Desktop Navigation */}
        <Menu />

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-100 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-800/80 backdrop-blur-md shadow-lg rounded-lg mt-4 p-4"
        >
          <Menu menuClassList="space-y-4 text-gray-100" menuLiClass="block" />
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

// Reusable Menu Component
const Menu = ({ menuClassList = "hidden md:flex space-x-6 text-gray-100", menuLiClass = "" }) => {
  return (
    <ul className={menuClassList}>
      <li className={`list-none ${menuLiClass}`}>
        <Link
          to="/"
          className="font-medium text-white hover:text-gray-300 transition-all"
        >
          Home
        </Link>
      </li>
      <li className={`list-none ${menuLiClass}`}>
        <Link
          to="/about"
          className="font-medium text-white hover:text-gray-300 transition-all"
        >
          About
        </Link>
      </li>
      <li className={`list-none ${menuLiClass}`}>
        <Link
          to="/contact"
          className="font-medium text-white hover:text-gray-300 transition-all"
        >
          Contact
        </Link>
      </li>
      <li className={`list-none ${menuLiClass}`}>
        <Link
          to="/signin"
          className="font-medium text-white hover:text-gray-300 transition-all"
        >
          Sign In
        </Link>
      </li>
      <li className={`list-none ${menuLiClass}`}>
        <Link
          to="/signup"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-gray-100 shadow-md hover:bg-blue-700 transition-all"
        >
          Sign Up
        </Link>
      </li>
    </ul>
  );
};
