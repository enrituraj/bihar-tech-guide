import React from "react";

const BEULinks = () => {
  const biharUniLinks = [
    {
      label: "Bihar University Exam Forms",
      image: "https://example.com/exam-form-image.jpg", // Replace with the actual image URL
      description: "Fill out your Bihar University exam forms online here.",
      buttonLabel: "Apply Now",
      link: "https://www.biharuniversity.ac.in/exam-forms",
      bgColor: "bg-blue-600", // Unique background color
    },
    {
      label: "Bihar University Results",
      image: "https://example.com/results-image.jpg", // Replace with the actual image URL
      description: "Check your Bihar University exam results on the official portal.",
      buttonLabel: "View Results",
      link: "https://www.biharuniversity.ac.in/results",
      bgColor: "bg-green-600", // Unique background color
    },
    {
      label: "Bihar University Scholarships",
      image: "https://example.com/scholarships-image.jpg", // Replace with the actual image URL
      description: "Find scholarship opportunities for students of Bihar University.",
      buttonLabel: "Apply for Scholarships",
      link: "https://www.biharuniversity.ac.in/scholarships",
      bgColor: "bg-orange-600", // Unique background color
    },
    {
      label: "Bihar Engineering Colleges List",
      image: "https://example.com/colleges-list-image.jpg", // Replace with the actual image URL
      description: "Explore the list of engineering colleges in Bihar.",
      buttonLabel: "Explore Colleges",
      link: "https://www.biharuniversity.ac.in/engineering-colleges-list",
      bgColor: "bg-purple-600", // Unique background color
    },
  ];

  return (
    <section className="bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-white text-3xl font-semibold mb-6">
          Important Bihar University Links
        </h2>
        <p className="text-gray-400 mb-8">
          Access essential resources for Bihar University students, including exam forms, results, scholarships, and college information.
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
          {biharUniLinks.map((link, index) => (
            <BiharUniLinkCard
              key={index}
              image={link.image}
              label={link.label}
              description={link.description}
              buttonLabel={link.buttonLabel}
              link={link.link}
              bgColor={link.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


const BiharUniLinkCard = ({ image, label, description, buttonLabel, link, bgColor }) => {
  return (
    <div
      className={`flex flex-col ${bgColor} hover:bg-opacity-80 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all`}
    >
      <div className="w-full h-40 mb-4">
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h3 className="text-white text-xl font-semibold mb-2">{label}</h3>
      <p className="text-gray-200 mb-4">{description}</p>
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



export default BEULinks;
