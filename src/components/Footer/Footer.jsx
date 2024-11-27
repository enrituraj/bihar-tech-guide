import React from "react";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      link: "https://www.instagram.com",
      icon: <FaInstagram />,
      color:'bg-pink-600'
    },
    {
      name: "Twitter",
      link: "https://www.twitter.com",
      icon: <FaTwitter />,
      color:'bg-blue-200'
    },
    {
      name: "GitHub",
      link: "https://www.github.com",
      icon: <FaGithub />,
      color:'bg-slate-600'
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com",
      icon: <FaLinkedin />,
      color:'bg-blue-600'
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
            className={`w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 flex items-center justify-center ${social.color} hover:${social.color} rounded-lg transition-all`}
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
