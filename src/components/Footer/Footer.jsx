import React from "react";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      link: "https://www.instagram.com",
      icon: <FaInstagram />,
    },
    {
      name: "Twitter",
      link: "https://www.twitter.com",
      icon: <FaTwitter />,
    },
    {
      name: "GitHub",
      link: "https://www.github.com",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <footer className="bg-gray-900 py-6">
      <div className="flex justify-center space-x-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
            aria-label={social.name}
          >
            <div className="text-white text-xl">{social.icon}</div>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
