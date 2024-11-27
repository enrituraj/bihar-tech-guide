import React from "react";

const ExamsSection = () => {
  const exams = [
    {
      name: "JEE Main",
      logo: "https://w7.pngwing.com/pngs/612/865/png-transparent-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo-india.png",
      link: "https://jeemain.nta.nic.in/",
    },
    {
      name: "JEE Advanced",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/JEE_Advanced.png/800px-JEE_Advanced.png",
      link: "https://jeeadv.ac.in/",
    },
    {
      name: "GATE",
      logo: "https://collegekampus.com/wp-content/uploads/2020/11/Gate-logo.png",
      link: "https://gate.iitkgp.ac.in/",
    },
    {
      name: "BITSAT",
      logo: "https://static.zollege.in/public/college_data/images/logos/BITS%20Pilani%20Logo.png",
      link: "https://bitsadmission.com/",
    },
    {
      name: "VITEEE",
      logo: "https://i.pinimg.com/736x/c6/c2/e9/c6c2e9022f25f404fe108a4cfefab222.jpg",
      link: "https://vit.ac.in/",
    },
    {
      name: "SRMJEEE",
      logo: "https://www.iaspaper.net/wp-content/uploads/2019/11/SRMJEEM.png",
      link: "https://srmist.edu.in/",
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

export default ExamsSection;
