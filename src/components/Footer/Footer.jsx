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
      color:'bg-blue-400'
    },
    {
      name: "GitHub",
      link: "https://www.github.com",
      icon: <FaGithub />,
      color:'bg-slate-800'
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com",
      icon: <FaLinkedin />,
      color:'bg-blue-600'
    },
  ];

  return (
    <footer className="bg-slate-900 py-6">
      <div className="flex justify-center flex-col space-y-4">
        <h2 className="text-xl font-semibold text-center text-white">Follow us for more</h2>
        <div className="flex justify-center space-x-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 flex items-center justify-center ${social.color} hover:${social.color} rounded-lg transition-all transform hover:scale-105`}
            aria-label={social.name}
          >
            <div className="text-white text-xl">{social.icon}</div>
          </a>
        ))}

      </div>
      </div>
    </footer>
  );
};

export default Footer;
