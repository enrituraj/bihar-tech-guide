import React from "react";

const ExamsSection = () => {
    const exams = [
      { name: "JEE Main", logo: "https://example.com/jee-main-logo.png", link: "https://jeemain.nta.nic.in/" },
      { name: "JEE Advanced", logo: "https://example.com/jee-advanced-logo.png", link: "https://jeeadv.ac.in/" },
      { name: "GATE", logo: "https://example.com/gate-logo.png", link: "https://gate.iitkgp.ac.in/" },
      { name: "BITSAT", logo: "https://example.com/bitsat-logo.png", link: "https://bitsadmission.com/" },
      { name: "VITEEE", logo: "https://example.com/viteee-logo.png", link: "https://vit.ac.in/" },
      { name: "SRMJEEE", logo: "https://example.com/srmjeee-logo.png", link: "https://srmist.edu.in/" },
    ];
  
    return (
      <section className="bg-gray-900 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-white text-3xl font-semibold mb-6">
            Popular Engineering Exams
          </h2>
          <p className="text-gray-400 mb-8">
            Explore the most popular engineering entrance exams to kickstart your
            journey into top engineering colleges.
          </p>
          <div
            className="
              grid 
              grid-cols-1
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-6 
              gap-8
            "
          >
            {exams.map((exam, index) => (
              <ExamCard
                key={index}
                logo={exam.logo}
                name={exam.name}
                link={exam.link}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };

const ExamCard = ({ logo, name, link }) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center bg-gray-900 hover:bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all"
      >
        <div className="w-16 h-16 mb-4">
          <img
            src={logo}
            alt={name}
            className="w-full h-full object-cover rounded-full border-4 border-blue-500"
          />
        </div>
        <h3 className="text-white text-lg font-medium">{name}</h3>
      </a>
    );
  };


export default ExamsSection;
