import React from "react";
const ImportantLinksSection = () => {
  const importantLinks = [
    {
      label: "NPTEL Courses",
      image: "https://example.com/nptel-logo.png",
      description: "Access free engineering courses from NPTEL to enhance your knowledge.",
      buttonLabel: "Explore NPTEL",
      link: "https://nptel.ac.in/",
    },
    {
      label: "Gate Overflow",
      image: "https://example.com/gate-overflow-logo.png",
      description: "Join the largest community for GATE preparation discussions and doubts.",
      buttonLabel: "Join Forum",
      link: "https://gateoverflow.in/",
    },
    {
      label: "IndiaBix",
      image: "https://example.com/indiabix-logo.png",
      description: "Find practice tests and interview questions for engineers.",
      buttonLabel: "Visit IndiaBix",
      link: "https://www.indiabix.com/",
    },
    {
      label: "IEEE Xplore",
      image: "https://example.com/ieee-xplore-logo.png",
      description: "Browse the world’s largest database for engineering journals and papers.",
      buttonLabel: "Explore IEEE",
      link: "https://ieeexplore.ieee.org/Xplore/home.jsp",
    },
    {
      label: "Engineering Scholarships",
      image: "https://example.com/scholarships-logo.png",
      description: "Find engineering scholarships for students to fund their education.",
      buttonLabel: "Find Scholarships",
      link: "https://scholarships.gov.in/",
    },
    {
      label: "MOOC Courses",
      image: "https://example.com/mooc-logo.png",
      description: "Explore massive open online courses for engineering students.",
      buttonLabel: "View Courses",
      link: "https://www.mooc.org/",
    },
    {
      label: "Engineering Times",
      image: "https://example.com/engg-times-logo.png",
      description: "Stay updated with the latest trends and news in the engineering field.",
      buttonLabel: "Read Articles",
      link: "https://www.engineeringtimes.com/",
    },
    {
      label: "LinkedIn Learning",
      image: "https://example.com/linkedin-learning-logo.png",
      description: "Take professional courses to improve your engineering skills.",
      buttonLabel: "Start Learning",
      link: "https://www.linkedin.com/learning/",
    },
    {
      label: "EdX Engineering",
      image: "https://example.com/edx-logo.png",
      description: "Enroll in free engineering courses offered by top universities.",
      buttonLabel: "Explore EdX",
      link: "https://www.edx.org/",
    },
  ];

  return (
    <section className=" py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Important Links for Engineering Students
        </h2>
        <p className="text-gray-800 font-semibold mb-8">
          Explore essential online resources, platforms, and tools to assist you in your engineering journey.
        </p>
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-3 
            gap-8
          "
        >
          {importantLinks.map((link, index) => (
            <ImportantLinkCard
              key={index}
              image={link.image}
              label={link.label}
              description={link.description}
              buttonLabel={link.buttonLabel}
              link={link.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


const ImportantLinkCard = ({ image, label, description, buttonLabel, link }) => {
  return (
    <div className="flex flex-col bg-gray-200 hover:bg-gray-100 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
      <div className="w-full h-40 mb-4">
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h3 className="text-white text-xl font-semibold mb-2">{label}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
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



export default ImportantLinksSection;
