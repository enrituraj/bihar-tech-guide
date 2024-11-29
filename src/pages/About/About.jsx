import React from 'react';
import { teamMembers } from "./../../constants";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">   
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-xl mt-2">Meet the amazing team behind BiharTechGuide</p>
      </header>
      <TeamMemberSection/>
    </div>
  );
};

export default AboutUs;

const TeamMemberSection = () => {

  return (
    <>
    
    {/* Team Member Section */}
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`bg-white mx-auto md:flex items-center lg:w-[60%] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
          >
            <div className={`flex md:w-2/6 justify-center ${member.gradient} p-6`}>
              <img
                src={member.image}
                alt={member.name}
                className="w-full sm:w-80 sm:h-80 md:h-full object-cover border-4 border-white"
              />
            </div>

            <div className="p-6 md:w-4/6">
              <h2 className="text-2xl font-semibold text-gray-800">{member.name}</h2>
              <p className="text-xl text-gray-600">{member.role}</p>
              <p className="text-gray-500 mt-4">{member.description}</p>
              <a
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${member.gradient} inline-block bg-blue-700 text-white px-8 mt-4 py-3 rounded-lg text-center hover:bg-blue-800 transition-all`}
            >
              Contact Me
            </a>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

