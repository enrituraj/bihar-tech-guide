import React from "react";

const ExamInfoSection = () => {
  const examResources = [
    {
      label: "Syllabus",
      image: "https://thumbs.dreamstime.com/b/syllabus-isolated-floral-plants-pattern-green-hexagon-button-syllabus-floral-plants-pattern-green-hexagon-button-143205572.jpg",
      description: "Bihar Engineering University Syllabus for every branches to boost your preparation.",
      buttonLabel: "Explore Syllabus",
      link: "#",
    },
    {
      label: "PYQ'S",
      image: "https://t3.ftcdn.net/jpg/04/92/96/18/360_F_492961866_MIqCTiGZD0ZzjXTAfYCEJdGaeCYAZSAT.jpg",
      description: "Get the best Module-Wise PYQ'S with Solution.",
      buttonLabel: "View Notes",
      link: "#",
    },
    {
      label: "Short Notes",
      image: "https://img.freepik.com/premium-vector/notes-icon-logo-vector-design-template_827767-4987.jpg",
      description: "Get the best notes created by top educators and toppers.",
      buttonLabel: "Learn More",
      link: "#",
    },
    {
      label: "GATE Study Material",
      image: "https://collegekampus.com/wp-content/uploads/2020/11/Gate-logo.png",
      description: "Explore comprehensive study material for GATE preparation.",
      buttonLabel: "Start Learning",
      link: "#",
    },
    {
      label: "BEU Colleges",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQG9wQaJ-LjxUA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1697210258887?e=2147483647&v=beta&t=y3hnWkB1pQ6TDL3Jx93y2ARvcxIMtIjdUD3UjY4hUjM",
      description: "List of all BEU approved college gorvemental and private.",
      buttonLabel: "Visit Website",
      link: "#",
    },
    {
      label: "E-library",
      image: "https://images.squarespace-cdn.com/content/v1/61b70faf45fdc445063b5443/994670b8-3627-45d8-b17f-cac9d5e16aa1/unnamed-min.png",
      description: "National digital library for Engineers",
      buttonLabel: "Learn More",
      link: "#",
    }
  ];

  return (
    <section className=" py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
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
    <div className="flex flex-col bg-gray-300 hover:bg-gray-200 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
      <div className="w-40 h-40 mb-4 mx-auto">
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{label}</h3>
      <p className="text-gray-800 font-semibold mb-4">{description}</p>
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
