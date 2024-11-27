import React from 'react';

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
  const teamMembers = [
    {
      name: 'Abhiranjan Singh',
      role: 'Full-Stack Developer',
      image: 'https://delicate-frangollo-4479c4.netlify.app/Abhi.jpeg', // Replace with the correct path to the image
      description:
        'Our dedicated full-stack developer. His hard work and commitment to excellence have been instrumental in bringing BiharTechGuide to life.',
      link: '#',
      gradient: 'bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600',
    },
    {
      name: 'Shruti Singh',
      role: 'Frontend Developer',
      image: 'https://delicate-frangollo-4479c4.netlify.app/suruti.jpg',
      description:
        'Our talented frontend developer, known for his attention to detail and design expertise, helped create an engaging user experience.',
      link: '#',
      gradient: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
    },
    {
      name: 'Prince Kumar',
      role: 'Data Collector',
      image: 'https://delicate-frangollo-4479c4.netlify.app/prince.jpg',
      description:
        'Our dedicated data collector and mentor for BiharTechGuide. His expertise in data collection was invaluable to our project’s success.',
      link: '#', 
      gradient: 'bg-gradient-to-r from-green-500 via-teal-500 to-blue-500',
    },
    {
      name: 'Sumit Gupta',
      role: 'Data Collector',
      image: 'https://delicate-frangollo-4479c4.netlify.app/sumit.jpg',
      description:
        'Our talented data collector. His attention to detail and hard work contributed greatly to the success of BiharTechGuide.',
      link: '#',
      gradient: 'bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500',
    },
  ];

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
              className="w-fit block bg-blue-700 text-white px-8 mt-4 py-3 rounded-lg text-center hover:bg-blue-800 transition-all"
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

