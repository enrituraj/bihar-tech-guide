import React from "react";

const ExamInfoSection = () => {
  const examResources = [
    {
      label: "JEE Main PYQ",
      image: "https://example.com/jee-main-pyq.jpg",
      description: "Find previous years' question papers for JEE Main to boost your preparation.",
      buttonLabel: "Explore PYQs",
      link: "https://jeemain.nta.nic.in/",
    },
    {
      label: "JEE Advanced Notes",
      image: "https://example.com/jee-advanced-notes.jpg",
      description: "Get the best notes curated by top educators for JEE Advanced.",
      buttonLabel: "View Notes",
      link: "https://jeeadv.ac.in/",
    },
    {
      label: "GATE Study Material",
      image: "https://example.com/gate-study.jpg",
      description: "Explore comprehensive study material for GATE preparation.",
      buttonLabel: "Start Learning",
      link: "https://gate.iitkgp.ac.in/",
    },
    {
      label: "BITSAT Tips & Tricks",
      image: "https://example.com/bitsat-tips.jpg",
      description: "Learn expert tips to excel in the BITSAT entrance exam.",
      buttonLabel: "Learn More",
      link: "https://bitsadmission.com/",
    },
    {
      label: "VITEEE Prep Guide",
      image: "https://example.com/viteee-guide.jpg",
      description: "Your ultimate preparation guide for VITEEE success.",
      buttonLabel: "Read Guide",
      link: "https://vit.ac.in/",
    },
    {
      label: "SRMJEEE Sample Papers",
      image: "https://example.com/srmjeee-papers.jpg",
      description: "Download sample papers to ace your SRMJEEE entrance exam.",
      buttonLabel: "Download Papers",
      link: "https://srmist.edu.in/",
    },
    {
      label: "NEET PYQs",
      image: "https://example.com/neet-pyqs.jpg",
      description: "Access NEET's previous years' question papers with solutions.",
      buttonLabel: "Access PYQs",
      link: "https://neet.nta.nic.in/",
    },
    {
      label: "Engineering Scholarships",
      image: "https://example.com/engineering-scholarships.jpg",
      description: "Find scholarships for aspiring engineering students.",
      buttonLabel: "Find Scholarships",
      link: "https://scholarships.gov.in/",
    },
    {
      label: "Career Counseling",
      image: "https://example.com/career-counseling.jpg",
      description: "Get expert advice on choosing the right engineering career path.",
      buttonLabel: "Get Advice",
      link: "https://careercounseling.com/",
    },
  ];

  return (
    <section className=" py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          All About Exams
        </h2>
        <p className="text-gray-800 font-semibold mb-8">
          Discover everything you need for your engineering entrance exams.
        </p>
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-2 
            lg:grid-cols-3 
            gap-8
          "
        >
          {examResources.map((resource, index) => (
            <ExamInfoCard
              key={index}
              image={resource.image}
              label={resource.label}
              description={resource.description}
              buttonLabel={resource.buttonLabel}
              link={resource.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


const ExamInfoCard = ({ image, label, description, buttonLabel, link }) => {
  return (
    <div className="flex flex-col bg-gray-200 hover:bg-gray-100 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
      <div className="w-full h-40 mb-4">
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{label}</h3>
      <p className="text-gray-400 font-semibold mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
      >
        {buttonLabel}
      </a>
    </div>
  );
};

export default ExamInfoSection;
