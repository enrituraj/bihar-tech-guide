import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ExamsSection = () => {
  const exams = [
    {
      name: "JEE Main",
      logo: "https://w7.pngwing.com/pngs/612/865/png-transparent-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo-india.png",
      link: "#",
    },
    {
      name: "JEE Advanced",
      logo: "https://thegurukulians.com/images/courses/inner-new/logos/engineering/Jee-advanced.jpg",
      link: "#",
    },
    {
      name: "BCECE",
      logo: "https://bihartechguide.in/images.jpg",
      link: "#",
    },
    {
      name: "BITSAT",
      logo: "https://static.zollege.in/public/college_data/images/logos/BITS%20Pilani%20Logo.png",
      link: "#",
    },
    {
      name: "Wbjee",
      logo: "https://bihartechguide.in/wbjee.jpg",
      link: "#",
    },
    {
      name: "Kiit",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRnSqRItNHdFKfNpakly0oEesulHprcdbG2A&s",
      link: "#",
    },
  ];

  return (
    <section className=" py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Popular Engineering Exams
        </h2>
        <p className="text-gray-800 font-semibold text-balance mb-8">
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
            <ExamCard1
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
      className="flex flex-col items-center p-6 rounded-xl transform hover:scale-105 transition-all"
    >
      <div className="w-16 h-16 mb-4">
        <img
          src={logo}
          alt={name}
          className="w-full h-full object-cover shadow-lg rounded-full border-2 border-indigo-500"
        />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
    </a>
  );
};

const ExamCard1 = ({ logo, name, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex justify-center flex-col h-60 items-center p-6 rounded-xl transform hover:scale-105 transition-all"
    >
      {/* <img
        src={logo}
        alt={name}
        className="absolute inset-0  w-full h-full object-cover overflow-hidden -z-10"
      /> */}
      <div className="absolute inset-0 rounded-lg w-full h-full bg-gray-300/90 backdrop-blur-sm"></div>

      <div className="w-24 h-24 mb-4 z-10">
        <img
          src={logo}
          alt={name}
          className="w-full h-full object-cover shadow-lg rounded-full border-2 border-gray-100"
        />
      </div>
      <h3 className="text-lg font-semibold z-10">{name}</h3>
      <a href="" className="flex items-center space-x-2 text-indigo-800 z-10 font-semibold text-lg my-2">
        <span> Vist Site</span>
        <FaExternalLinkAlt className="w-4 h-4" />
      </a>
    </a>
  );
};

export default ExamsSection;
